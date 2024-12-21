const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Use imagemagick for image optimization
function optimizeImage(inputPath) {
    const ext = path.extname(inputPath);
    const dir = path.dirname(inputPath);
    const name = path.basename(inputPath, ext);
    const sizes = [640, 1024, 1920];

    // Generate WebP versions in different sizes
    sizes.forEach(width => {
        const outputPath = path.join(dir, `${name}-${width}.webp`);
        execSync(`convert "${inputPath}" -resize ${width}x -quality 80 "${outputPath}"`);
    });

    // Also optimize the original format
    const outputPath = path.join(dir, `${name}-optimized${ext}`);
    execSync(`convert "${inputPath}" -quality 80 "${outputPath}"`);
}

function processImages() {
    try {
        // Find all image files recursively
        const findCmd = `find . -type f -name "*.jpg" -o -name "*.jpeg" -o -name "*.png"`;
        const images = execSync(findCmd, { encoding: 'utf8' })
            .split('\n')
            .filter(Boolean);
        
        console.log(`Found ${images.length} images to process...`);
        
        images.forEach(image => {
            console.log(`Optimizing: ${image}`);
            optimizeImage(image);
        });
        
        console.log('Image optimization complete!');
    } catch (error) {
        console.error('Error processing images:', error);
    }
}

processImages();
