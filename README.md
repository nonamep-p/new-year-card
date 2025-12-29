# Dear Cupcake - 2025 New Year Card 💝

A mobile-first, scrollytelling experience designed to celebrate memories, share wishes, and look forward to the future. This project transforms a standard greeting card into an interactive vertical narrative, optimized for viewing on a smartphone.

## ✨ Features

* **Phone-First UI:** Optimized for vertical scrolling with touch-friendly elements and no small navigation buttons.
* **Scrollytelling:** Content reveals itself gracefully as the user scrolls down (Scroll-triggered animations).
* **Vertical Timeline:** A connected step-by-step journey through your best memories of the year.
* **Interactive Wish Jar:** A visual "jar" with floating wish animations.
* **Sticky Progress Heart:** A subtle circular indicator in the corner that tracks how far they have read.
* **Dynamic Hero:** A full-screen entrance with typewriter effects and particle backgrounds.

## 🛠️ Tech Stack

* **Core:** HTML5, CSS3, Vanilla JavaScript.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN).
* **Animations:**
    * [Anime.js](https://animejs.com/) (Smooth reveals and tilts).
    * [Typed.js](https://github.com/mattboldt/typed.js/) (Typewriter effect).
    * [P5.js](https://p5js.org/) (Particle background effects).

## 📂 Project Structure

```text
.
├── index.html          # The main single-page entry point
├── main.js             # Logic for scroll observers, typing, and particles
├── resources/          # All your images and assets
│   ├── hero-bg.jpg     # Main cover background
│   ├── couple-1.jpg    # Memory photo 1
│   ├── couple-2.jpg    # Memory photo 2
│   ├── couple-3.jpg    # Memory photo 3
│   ├── wish-jar.png    # Image of a jar for the wishes section
│   └── signature.png   # Image of your handwritten signature
└── README.md

```

## 🚀 How to Run

1. **Download** the files.
2. **Open** the folder in a code editor (like VS Code).
3. **Run** using a local server (Recommended):
* If using VS Code, right-click `index.html` and select **"Open with Live Server"**.
* *Note:* Just double-clicking the HTML file might block some images or scripts due to browser security policies (CORS).



## 🎨 How to Customize

This project is built to be a template. Here is how to make it personal:

### 1. Change the Text

Open `index.html` and look for the commented sections:

* **Hero Text:** Search for `initTypewriter` in `main.js` to change the opening greeting ("Dear Cupcake", "Happy New Year").
* **The Letter:** Edit the `<p>` tags in ``.
* **Future Plans:** Edit the dates and titles in ``.

### 2. Update Photos

Replace the files in the `resources/` folder with your own photos.

* **Tip:** Keep the filenames the same (`couple-1.jpg`, etc.) to avoid breaking the code, or update the `src=""` links in the HTML to match your new filenames.

### 3. Change Colors

The color palette is defined in the `<style>` block at the top of `index.html` under `:root`. You can change these hex codes to match your partner's favorite colors:

```css
:root {
    --cream: #F8F6F0;      /* Background */
    --rose-gold: #D4A574;  /* Accents */
    --burgundy: #6B3E3E;   /* Main Text */
}

```

## 📱 Mobile Optimization

This template uses `100dvh` (Dynamic Viewport Height) for the hero section. This ensures the background fits perfectly on mobile browsers (Safari iOS / Chrome Android) without the address bar causing layout jumps.

## 📄 License

Feel free to use this to impress your significant other! ❤️

```
