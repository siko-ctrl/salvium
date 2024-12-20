#!/bin/bash

# Function to convert a single image to WebP
convert_to_webp() {
    local input_file="$1"
    local output_file="${input_file%.*}.webp"
    local resize_output_file="${input_file%.*}_800x450.webp"
    local jpg_resize_output_file="${input_file%.*}_800x450.jpg"

    # Skip if WebP already exists and is newer than source
    if [ -f "$output_file" ] && [ "$output_file" -nt "$input_file" ]; then
        echo "Skipping $input_file (WebP exists and is up to date)"
        return
    fi

    echo "Converting $input_file to WebP..."
    
    # Convert to WebP with quality 80
    cwebp -q 80 "$input_file" -o "$output_file"
    
    # Create resized WebP version (800x450)
    cwebp -q 80 -resize 800 450 "$input_file" -o "$resize_output_file"
    
    # Create resized JPG version (800x450)
    convert "$input_file" -resize 800x450 -quality 85 "$jpg_resize_output_file"
    
    # Optimize original JPG
    if [[ "$input_file" == *.jpg ]] || [[ "$input_file" == *.jpeg ]]; then
        jpegoptim --max=85 "$input_file"
    fi
    
    # Optimize original PNG
    if [[ "$input_file" == *.png ]]; then
        optipng -o2 "$input_file"
    fi
}

# Process all images in a directory
process_directory() {
    local dir="$1"
    
    # Find all JPG, JPEG, and PNG files
    find "$dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
        convert_to_webp "$file"
    done
}

# Main directories to process
main_dirs=(
    "/home/siko/salvium/images"
    "/home/siko/salvium/images/blog"
    "/home/siko/salvium/images/newimages"
    "/home/siko/salvium/images/newimages/Blog Page"
    "/home/siko/salvium/images/newimages/Page Headers"
)

# Process each directory
for dir in "${main_dirs[@]}"; do
    if [ -d "$dir" ]; then
        echo "Processing directory: $dir"
        process_directory "$dir"
    else
        echo "Directory not found: $dir"
    fi
done

echo "Conversion complete!"
