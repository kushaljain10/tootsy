# Artwork Directory

This directory is for storing all Tootsy artwork images.

## How to use:

1. **Add your artwork images** to this directory
2. **Supported formats**: .jpg, .jpeg, .png, .gif, .webp
3. **Recommended naming**: Use descriptive names like:
   - `tootsy-happy.png`
   - `tootsy-adventure.jpg`
   - `tootsy-portrait-01.png`

## Updating the gallery:

To display your artwork on the website, you'll need to update the `galleryImages` array in `src/App.js`. Replace the placeholder URLs with imports to your actual images:

```javascript
// Example:
import tootsyHappy from "./assets/artwork/tootsy-happy.png";
import tootsyAdventure from "./assets/artwork/tootsy-adventure.jpg";

const galleryImages = [
  tootsyHappy,
  tootsyAdventure,
  // ... add more images
];
```

## File organization tips:

- Keep file sizes reasonable for web use (under 2MB each)
- Consider creating subdirectories for different categories:
  - `portraits/`
  - `scenes/`
  - `animations/`
  - `sketches/`
