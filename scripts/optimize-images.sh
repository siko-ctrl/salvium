#!/bin/bash

# Create WebP versions of all blog images
find /home/siko/salvium/images/blog -type f \( -iname "*.jpg" -o -iname "*.png" \) -exec sh -c '
    input="$1"
    output="${input%.*}.webp"
    
    # Convert to WebP with high quality
    cwebp -q 85 -m 6 "$input" -o "$output"
    
    # Optimize original
    if [[ "$input" == *.jpg ]] || [[ "$input" == *.jpeg ]]; then
        jpegoptim --max=85 --strip-all "$input"
    elif [[ "$input" == *.png ]]; then
        optipng -o5 "$input"
    fi
    
    # Create responsive sizes
    convert "$input" -resize "800x450^" -gravity center -extent 800x450 "${input%.*}_800x450.${input##*.}"
    cwebp -q 85 -m 6 "${input%.*}_800x450.${input##*.}" -o "${input%.*}_800x450.webp"
' sh {} \;
