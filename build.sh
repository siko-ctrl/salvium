#!/bin/bash

# Clean previous build
echo "Cleaning previous build..."
rm -rf _site
rm -rf .jekyll-cache

# Set production environment
export JEKYLL_ENV=production

# Build with both config files
echo "Building site for production..."
bundle exec jekyll build --config _config.yml,_config.production.yml

# Optimize images (if you have imagemagick installed)
if command -v convert &> /dev/null; then
    echo "Optimizing images..."
    find _site/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) -exec convert {} -strip -quality 85 {} \;
fi

# Generate gzipped versions for static assets
echo "Generating gzipped assets..."
find _site \( -name '*.html' -o -name '*.css' -o -name '*.js' -o -name '*.xml' -o -name '*.json' \) -type f -exec gzip -9 -k {} \;

echo "Build completed successfully!"
