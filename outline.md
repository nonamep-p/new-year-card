# Project Outline: New Year Wish for Cupcake

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Main scrollytelling page
├── memories.html           # Interactive memory timeline
├── wishes.html             # Wish jar and messages
├── calendar.html           # Future plans calendar
├── main.js                 # Core JavaScript functionality
├── resources/              # Media assets folder
│   ├── hero-bg.jpg        # Generated hero background
│   ├── couple-1.jpg       # Romantic couple images
│   ├── couple-2.jpg       # Memory photos
│   ├── couple-3.jpg       # Timeline images
│   ├── wish-jar.png       # Wish jar illustration
│   ├── calendar-bg.jpg    # Calendar background
│   └── signature.png      # Handwritten signature
├── interaction.md          # Interaction design documentation
├── design.md              # Visual design documentation
└── outline.md             # This project outline
```

## Page Breakdown

### index.html - Main Scrollytelling Experience
**Purpose**: Primary landing page with hero section and main story flow
**Sections**:
1. **Hero Section**
   - Generated romantic background image
   - Typewriter animation: "Dear Cupcake..."
   - Floating particles effect
   - Scroll invitation

2. **Opening Letter**
   - Handwriting-style text reveal
   - Personal New Year message
   - Animated signature

3. **Memory Highlights**
   - Infinite image scroller with relationship moments
   - Polaroid-style photo frames
   - Hover effects revealing captions

4. **Wish Preview**
   - Teaser for the wish jar page
   - Animated preview of wishes floating

5. **Future Promise**
   - Calendar preview with upcoming adventures
   - Call-to-action to explore more

### memories.html - Interactive Memory Timeline
**Purpose**: Horizontal scrolling timeline of relationship milestones
**Features**:
- Interactive timeline with 8-10 key moments
- Flip-card animations for each memory
- Photos, dates, and personal notes
- Smooth horizontal scroll navigation
- Background music integration option

### wishes.html - Interactive Wish Jar
**Purpose**: Physics-based wish jar with floating messages
**Features**:
- 3D wish jar with realistic physics
- 15+ personalized wishes
- Click/hover to read full messages
- Papers flutter and settle naturally
- Ambient lighting effects

### calendar.html - Future Plans Calendar
**Purpose**: Interactive calendar showing upcoming year plans
**Features**:
- Monthly calendar grid
- Special dates highlighted
- Hover reveals surprise messages
- Integration with personal plans
- Elegant date picker interface

## Technical Implementation

### Core Libraries Integration
- **Anime.js**: Page transitions and scroll animations
- **p5.js**: Particle systems and wish jar physics
- **ECharts.js**: Timeline data visualization
- **Splide.js**: Image carousels and sliders
- **Shader-park**: Background ambient effects
- **PIXI.js**: Advanced visual effects
- **Matter.js**: Realistic physics simulation

### Responsive Design
- Mobile-first approach
- Touch-friendly interactions
- Optimized for various screen sizes
- Performance considerations for mobile devices

### Performance Optimization
- Lazy loading for images
- Efficient animation loops
- Compressed assets
- Progressive enhancement

## Content Strategy

### Personalization Elements
- Custom messages for "Cupcake"
- Inside jokes and shared memories
- Future plans and dreams
- Romantic quotes and poetry

### Interactive Components
1. **Scroll-triggered reveals** throughout all pages
2. **Hover effects** on all interactive elements
3. **Click interactions** for detailed content
4. **Physics-based animations** for wish jar
5. **Timeline navigation** with smooth scrolling

### Visual Hierarchy
- Large, impactful headings with gradient text
- Elegant typography pairing
- Strategic use of white space
- Consistent color application
- Layered depth with shadows and overlays

This structure creates a comprehensive, emotionally engaging experience that tells a complete story of love, memories, and future hopes through multiple interactive touchpoints.