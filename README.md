# Paradox - 3D Design Tool Landing Page

A responsive landing page for a 3D design tool built with React and Material-UI. Includes component architecture, theme management, and accessibility features.

## Features

- Responsive Design - Works on mobile, tablet, and desktop
- Material-UI Theme - Custom color palette and centralized theme config
- Accessibility - ARIA labels, semantic HTML, keyboard navigation
- Performance - Lazy loading and optimized components
- Code Structure - Organized components with documentation

## Tech Stack

- React 19.2.0 - React with hooks
- Material-UI (MUI) 7.3.7 - UI components and theming
- Vite 7.2.4 - Build tool and dev server
- ESLint - Linting setup

## Project Structure

```
src/
├── components/          # React components
│   ├── Header/        # Navigation header
│   ├── Home/          # Home section
│   ├── Features/      # Features showcase
│   └── ...
├── utils/             # Utility functions
│   └── constants.js   # App constants
├── theme.js           # MUI theme config
├── App.jsx            # Root component
└── main.jsx           # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repo
```bash
git clone <repository-url>
cd Elegant-Media-FInal
```

2. Install dependencies
```bash
npm install
```

3. Run dev server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```



## Theme Customization

Theme config is in `src/theme.js`. To change colors, edit the palette:

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6',  // Change this
      dark: '#2563eb',
      light: '#60a5fa',
    },
    // ... other colors
  },
});
```

## Code Quality

- ESLint - React linting rules
- JSDoc - Component docs
- PropTypes - Can be added if needed

## Accessibility

- ARIA labels where needed
- Semantic HTML
- Keyboard navigation
- Focus management
- Image alt text

## Key Components

### Header
Navigation with logo, sign-in button, and mobile menu.

### Home
Home section with headline, CTAs, and 3D illustration.

### Theme System
Centralized theme for consistent styling.


## Development Notes

- Components are in their own folders
- Constants are in `utils/constants.js`
- ARIA labels and semantic HTML for accessibility
- Lazy loading for images


## Assumptions Made

During development, the following assumptions were made:

1. **Design Assets**: Assumed that all required images and assets would be available in the `src/assets` directory
2. **Browser Support**: Assumed modern browser support (Chrome, Firefox, Safari, Edge - latest versions)
3. **Node.js Version**: Assumed Node.js 18+ would be available on the development machine
4. **Theme Colors**: Assumed custom color palette would be defined in the theme configuration
5. **Responsive Breakpoints**: Used Material-UI's default breakpoints (xs, sm, md, lg, xl) for responsive design
6. **API Endpoints**: Used placeholder/dummy data for testimonials and user avatars (DiceBear API for avatars)
7. **Animation Library**: Added framer-motion for animations assuming it would enhance user experience

## Improvements Made


**Component Organization**: Organized components into separate folders for better maintainability
**Theme System**: Implemented centralized theme management using Material-UI's theme system
**Responsive Design**: Ensured all components work seamlessly across mobile, tablet, and desktop devices
**Accessibility**: Added ARIA labels, semantic HTML, and keyboard navigation support
**Performance**: Implemented lazy loading for images and optimized component rendering
**Animation Enhancements**: Added framer-motion animations to the DesignTool component for better visual appeal
**Code Structure**: Extracted constants and data to separate utility files for better code organization

## Testing on a New Machine

To test this project on a new machine, follow these steps:

### Prerequisites Check
1. Ensure Node.js 18+ is installed:
   ```bash
   node --version
   ```
   If not installed, download from [nodejs.org](https://nodejs.org/)

2. Ensure npm or yarn is available:
   ```bash
   npm --version
   # or
   yarn --version
   ```

### Setup Steps

1. **Clone the repository** (if using git):
   ```bash
   git clone <repository-url>
   cd Elegant-Media-FInal
   ```

   Or extract the project files to a directory.

2. **Install dependencies**:
   ```bash
   npm install
   ```
   This will install all required packages listed in `package.json`.

3. **Verify assets**: Check that all image assets exist in `src/assets/` directory. If any are missing, you may need to add placeholder images.

4. **Start development server**:
   ```bash
   npm run dev
   ```
   The app should start on `http://localhost:5173` (or the port shown in terminal).

5. **Test the application**:
   - Open the URL shown in terminal (usually `http://localhost:5173`)
   - Test responsive design by resizing the browser window
   - Check all sections load correctly:
     - Header with navigation
     - Home section
     - Features section
     - Render section
     - Integrations
     - How it works
     - Models section
     - Testimonials
     - Design tool section
     - Get started section
     - Footer
   - Test mobile view using browser dev tools (F12 → Toggle device toolbar)
   - Verify all images load correctly
   - Check that animations work (if framer-motion is properly installed)

6. **Build for production** (optional):
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist` folder.



### Troubleshooting

- **Port already in use**: Change the port by editing `vite.config.js` or using `npm run dev -- --port 3000`
- **Missing dependencies**: Delete `node_modules` and `package-lock.json`, then run `npm install` again
- **Image not loading**: Check that image paths in components match the actual file locations in `src/assets/`
- **Build errors**: Run `npm run lint` to check for code issues

