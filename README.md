# Glide & Write

Glide & Write is a fast, intuitive, and accessible communication app designed for non-verbal individuals. By utilizing simple directional swipes (Up, Down, Left, Right), users can rapidly construct sentences and use the built-in text-to-speech functionality to communicate their thoughts instantly.

## 🌟 Features

* **Gesture-Based Communication:** Map words or phrases to swipe sequences (e.g., UP = "hello", UP, RIGHT = "thanks").
* **Talk Mode:** The main interface where users perform gestures to quickly build sentences on the screen.
* **Entry Mode:** Easily teach the app new words by mapping custom swipe sequences to text.
* **Configurations & Customization:** Create, duplicate, and switch between multiple configurations (vocabularies) tailored to different situations.
* **Text-to-Speech:** One-tap "Speak" functionality to read the assembled text out loud using the device's native speech synthesis (`window.speechSynthesis`).
* **Responsive & Accessible UI:** Clean, minimalist design with dynamic font scaling, ensuring readability on all devices.
* **Theming:** Multiple aesthetically pleasing themes (Bone, Oatmeal, Slate, Sage, Charcoal, Midnight) for personalized viewing comfort.
* **Punctuation Support:** Quick access to essential punctuation marks and symbols directly from the main screen.

## 🛠 Tech Stack

* **Frontend Framework:** [React 19](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Cross-Platform:** [Capacitor](https://capacitorjs.com/) (configured for Android builds)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/eedali/GlideAndWrite
   cd GlideAndWrite
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the URL provided in your terminal (e.g., `http://localhost:3000`).

## 📱 Mobile Build (Android)

This project is configured with Capacitor for mobile deployment. To sync and open the Android project in Android Studio:

```bash
npx cap sync android
npx cap open android
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open-source.
