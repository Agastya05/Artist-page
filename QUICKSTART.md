# Quick Start Guide

## Installation & Running

### Step 1: Install Dependencies

```bash
npm install
```

This will install React Router and all required dependencies.

### Step 2: Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port)

### Step 3: Open in Browser

Navigate to the URL shown in the terminal. You should see:

- **Landing page** with all 6 featured artists in a grid
- Click any artist card to view their individual page
- Click "Back to Artists" to return to the landing page

## What's New

### Landing Page (`/`)

- **Hero Section:** Welcome message and tagline
- **Artist Grid:** Responsive grid of artist cards
- **Card Content:** Profile image, name, specialty, location, stats

### Artist Page (`/artist/:slug`)

- **Hero Header:** Large background image with artist profile
- **Artist Info:** Biography, education, studio name, price range
- **Artwork Gallery:** Complete collection of artworks by that artist
- **Call-to-Action:** Buttons to visit shop or return to artists

## Key Sections

### Artists List Page

```
Homepage (/)
├── Hero Section with title "Featured Artists"
└── Responsive Grid of Artist Cards
    ├── Nandini Saha Ghosh
    ├── Priya Desai
    ├── Rajesh Sharma
    ├── Anjali Kapoor
    ├── Vikram Patel
    └── Meera Singh
```

### Individual Artist Page

```
Artist Page (/artist/:slug)
├── Back to Artists Link
├── Hero Header Section
│   ├── Background Image
│   ├── Artist Profile Image
│   ├── Name & Tagline
│   └── Basic Stats
├── Artist Biography Section
│   ├── About
│   ├── Education
│   ├── Studio
│   └── Price Range
├── Artwork Gallery
│   └── Grid of Artworks
└── Call-to-Action Section
    ├── Visit Shop Button
    └── Back to Artists Button
```

## Navigation

### From Landing Page

1. Browse the grid of artist cards
2. Hover over a card to see the "View Profile" button
3. Click any artist card to navigate to their page

### From Artist Page

1. Click "Back to Artists" link at the top
2. Or scroll down and click "Back to Artists" button at the bottom
3. Direct URL access: `http://localhost:5173/artist/{slug}`

## URL Examples

```
http://localhost:5173/                          # All artists
http://localhost:5173/artist/nandini-saha-ghosh # Nandini's page
http://localhost:5173/artist/priya-desai        # Priya's page
http://localhost:5173/artist/rajesh-sharma      # Rajesh's page
http://localhost:5173/artist/anjali-kapoor      # Anjali's page
http://localhost:5173/artist/vikram-patel       # Vikram's page
http://localhost:5173/artist/meera-singh        # Meera's page
```

## Customization

### Adding More Artists

Edit `Artist-Dashboard/data/artists.js` and add a new artist object:

```javascript
{
  id: 7,
  slug: "your-artist-slug",        // Must be unique and URL-friendly
  name: "Artist Name",
  tagline: "Your tagline here",
  location: "City, Country",
  avatar: "https://...",             // Profile image URL
  coverArt: "https://...",           // Background image URL
  studioImage: "https://...",        // Studio image URL
  education: "Education details",
  specialty: "Art Style",
  shopName: "Shop Name",
  bio: "Artist biography...",
  stats: {
    listings: 20,
    sold: 100,
    reviews: 90,
    rating: 4.9
  },
  featuredWork: "Title of featured work",
  priceRange: "₹X,XXX - ₹XX,XXX",
  badge: "Badge text",
  artworks: [
    {
      id: 701,
      title: "Artwork Title",
      image: "https://...",
      medium: "Medium (e.g., Acrylic on Canvas)",
      year: "2024",
      price: "₹XX,XXX",
    },
    // ... more artworks
  ],
},
```

Then save the file - the new artist will automatically appear in the grid!

## Styling

All styling is defined using CSS custom variables in `index.css`:

```css
:root {
  --bg-ivory: #fdfbf7;
  --bg-cream: #faf6f0;
  --gold: #c9a227;
  --text-rich: #2d2926;
  /* ... more variables */
}
```

To customize colors globally, edit these variables in `index.css`.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

Preview the build locally:

```bash
npm run preview
```

## Troubleshooting

### Issue: Page goes blank when navigating

**Solution:** Make sure you have run `npm install` to install React Router

### Issue: Artist page returns 404

**Solution:** Check the artist slug in the URL matches exactly (case-sensitive)

### Issue: Images not loading

**Solution:** Check that image URLs are valid and accessible

### Issue: Styles look different on mobile

**Solution:** This is expected - styles are responsive and change at breakpoints (768px, 480px)

## Browser DevTools

Open Browser DevTools (F12) to:

- Inspect responsive layouts at different breakpoints
- Check console for any errors
- Use Network tab to see file loading
- Use React DevTools extension to debug components

## Need Help?

Refer to:

1. **REFACTORING_GUIDE.md** - Detailed technical documentation
2. **Component code** - Each component has comments explaining functionality
3. **CSS files** - Well-organized with mobile-first approach

---

**Happy browsing! 🎨**
