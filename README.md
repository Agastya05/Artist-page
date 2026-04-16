# 🏆 Contest Winners Section

A beautiful, aesthetic React component for displaying contest winners on an art e-commerce website. Features a warm pastel color palette, elegant typography, and smooth interactive animations.

![Contest Winners](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.0.8-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎨 **Warm Pastel Color Palette** - Beautiful peaches, roses, creams, and corals
- ✨ **Elegant Typography** - Artistic fonts (Playfair Display, Cormorant Garamond, Dancing Script)
- 🖼️ **Interactive Winner Cards** - Click to expand and view detailed information
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎭 **Smooth Animations** - Elegant transitions and hover effects
- 🏆 **Award Badges** - Animated badges for first, second, third place, and honorable mentions
- 🎯 **Expandable Content** - Detailed descriptions and statistics on card click
- 🌈 **Gradient Backgrounds** - Soft, warm gradient overlays
- ⚡ **Performance Optimized** - Fast loading with lazy image loading

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd contest-winners
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## 📦 Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

## 👀 Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Color Palette

The component uses a carefully curated warm pastel color palette:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Pastel Peach | `#FFE5D9` | Primary background |
| Pastel Rose | `#FFD6CC` | Secondary background, accents |
| Pastel Cream | `#FFF8F3` | Card backgrounds |
| Pastel Coral | `#FFB5A7` | Borders, highlights |
| Pastel Lavender | `#E8D5E3` | Gradient accents |
| Pastel Apricot | `#FFD4B3` | Badge backgrounds |
| Pastel Pink | `#FFE0E6` | Soft highlights |
| Pastel Beige | `#F5E6D3` | Image placeholders |
| Warm Gold | `#E8B89B` | Primary accent, text |
| Soft Brown | `#D4A574` | Secondary accent |
| Text Dark | `#5C4A3A` | Primary text |
| Text Light | `#8B7355` | Secondary text |

### Typography

- **Playfair Display** - Used for main headings and winner names (elegant serif)
- **Cormorant Garamond** - Used for body text, descriptions, and subtitles (artistic serif)
- **Dancing Script** - Used for decorative elements like year display (decorative script)

## 📁 Project Structure

```
contest-winners/
├── ContestWinners.jsx      # Main React component
├── ContestWinners.css      # Component styles with warm pastel theme
├── main.jsx                # React entry point
├── index.html              # HTML template
├── index.css               # Global styles
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🔧 Customization

### Adding/Modifying Contest Winners

Edit the `winners` array in `ContestWinners.jsx`:

```jsx
const winners = [
  {
    id: 1,
    name: "Artist Name",
    artwork: "image-url.jpg",
    title: "Artwork Title",
    category: "Category Name",
    year: 2024,
    prize: "First Place",
    description: "Artwork description...",
    award: "🥇"
  },
  // Add more winners...
];
```

### Customizing Colors

Modify the CSS variables in `ContestWinners.css`:

```css
:root {
  --pastel-peach: #FFE5D9;
  --pastel-rose: #FFD6CC;
  /* ... modify other colors */
}
```

### Customizing Typography

Update the Google Fonts import in `ContestWinners.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600&display=swap');
```

Then update the font-family properties in the CSS.

### Adjusting Grid Layout

Modify the grid columns in `ContestWinners.css`:

```css
.winners-grid {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  /* Change minmax values or use fixed columns */
}
```

## 🎯 Component Features

### Interactive Cards

- **Hover Effect**: Cards lift up with enhanced shadow on hover
- **Click to Expand**: Click any card to expand and see detailed information
- **Smooth Transitions**: All animations use cubic-bezier easing for smoothness

### Award Badges

- First Place: 🥇
- Second Place: 🥈
- Third Place: 🥉
- Honorable Mention: ✨
- People's Choice: 👑

### Responsive Breakpoints

- **Desktop**: 4 columns (1024px+)
- **Tablet**: 2 columns (768px - 1023px)
- **Mobile**: 1 column (< 768px)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚡ Performance

- Lazy loading for images
- CSS animations (GPU accelerated)
- Optimized bundle size with Vite
- Minimal dependencies

## 📝 Usage Example

```jsx
import ContestWinners from './ContestWinners';

function App() {
  return (
    <div className="App">
      <ContestWinners />
    </div>
  );
}
```

## 🛠️ Technologies Used

- **React 18.2.0** - UI library
- **Vite 5.0.8** - Build tool and dev server
- **CSS3** - Styling with modern features (Grid, Flexbox, Animations)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Style

- Use functional components with hooks
- Follow React best practices
- Maintain consistent naming conventions
- Comment complex logic

## 📞 Support

For support, email support@example.com or create an issue in the repository.

## 🎉 Acknowledgments

- Google Fonts for beautiful typography
- Unsplash for sample images
- React team for the amazing framework

---

Made with ❤️ for art e-commerce websites
