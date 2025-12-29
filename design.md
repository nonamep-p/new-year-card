# Design Philosophy: New Year Wish for Cupcake

## Design Philosophy

### Color Palette
- **Primary**: Warm cream (#F8F6F0) and soft blush (#F4E6E1) - creating an intimate, paper-like background
- **Accent**: Deep rose gold (#D4A574) and warm terracotta (#C8956D) - for elegant highlights and interactive elements
- **Text**: Charcoal (#2C2C2C) and soft burgundy (#6B3E3E) - ensuring readability while maintaining warmth
- **Supporting**: Muted sage (#A8B5A0) for subtle secondary elements

### Typography
- **Display Font**: "Playfair Display" - elegant serif for headings and romantic quotes
- **Body Font**: "Inter" - clean, readable sans-serif for longer text
- **Accent Font**: "Dancing Script" - handwritten style for personal messages and signatures
- **Monospace**: "JetBrains Mono" - for interactive elements and counters

### Visual Language
- **Aesthetic**: Editorial romance meets modern minimalism
- **Mood**: Intimate, warm, sophisticated, deeply personal
- **Inspiration**: Luxury love letters, high-end wedding stationery, editorial design
- **Texture**: Subtle paper grain, soft shadows, gentle gradients

## Visual Effects

### Used Libraries
- **Anime.js**: Smooth scroll-triggered animations and text reveals
- **p5.js**: Interactive wish jar with particle physics for floating papers
- **ECharts.js**: Elegant data visualization for relationship timeline
- **Splide.js**: Smooth carousel for memory gallery
- **Shader-park**: Subtle background effects and ambient lighting
- **PIXI.js**: Advanced visual effects for hero section
- **Matter.js**: Realistic physics for wish jar animation

### Effect Implementation

#### Hero Section Effects
- **Aurora Gradient Flow**: Soft, warm gradient background that shifts between cream, blush, and rose gold
- **Particle System**: Gentle floating particles using p5.js, resembling golden dust or flower petals
- **Typewriter Animation**: Main greeting appears letter by letter with subtle glow effect

#### Scroll Motion Design
- **Reveal Animations**: Content fades in with gentle upward motion (24px translation)
- **Parallax Layers**: Background elements move at different speeds (max 8% translation)
- **Stagger Effects**: Timeline items and wishes appear with 100ms delays
- **Easing**: Custom cubic-bezier for smooth, natural motion

#### Interactive Elements
- **Memory Timeline**: Horizontal scrolling with polaroid-style cards that flip on interaction
- **Wish Jar**: Physics-based animation where papers flutter and settle realistically
- **Calendar**: Hover effects reveal messages with soft shadow expansion
- **Image Gallery**: Ken Burns effect on photos with subtle zoom and pan

#### Text Effects
- **Gradient Text**: Headings use rose gold to terracotta gradient
- **Highlight Animation**: Key phrases get subtle background color pulse
- **Handwriting Reveal**: Personal messages appear as if being written in real-time

#### Background & Atmosphere
- **Ambient Lighting**: Soft directional lighting using shader effects
- **Depth Layers**: Multiple parallax layers create immersive depth
- **Texture Overlay**: Subtle paper grain for tactile feel
- **Color Temperature**: Warm tones throughout (3000K-3500K color temperature)

### Header & Navigation Effect
- **Floating Navigation**: Semi-transparent bar with backdrop blur
- **Smooth Transitions**: Page sections fade in/out with 300ms duration
- **Progress Indicator**: Elegant progress bar showing scroll position
- **Responsive Design**: Mobile-first approach with touch-friendly interactions

### Animation Principles
- **Performance**: 60fps animations using transform and opacity
- **Accessibility**: Respects prefers-reduced-motion settings
- **Timing**: 150-300ms for UI interactions, 800-1200ms for content reveals
- **Consistency**: Unified easing curves and timing across all interactions

This design creates an intimate, luxurious experience that feels like unwrapping a series of beautifully crafted love letters, perfectly suited for expressing deep affection to someone special.