# ♛ ChronoQuest

> *Test your knowledge across the ages.*

A full-screen, cinematic history quiz built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies. Every round pulls 10 fresh, randomized questions from a vault of 65+ spanning 12 civilizations and eras.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

- 🎲 **Randomized every round** — 10 questions drawn from 65+, never the same set twice
- 🌍 **12 categories** — Ancient World, India, China, Japan, Egypt, Europe, Africa, Americas, Middle East, Russia, Latin America, Science & Culture
- 🎨 **Full-screen cinematic UI** — dark theme, animated star-field, glowing typography
- 📊 **Live progress bar & score tracker** — updates in real time as you play
- 💡 **Instant fact feedback** — every answer reveals a historical fact
- 🏆 **Animated results ring** — SVG score ring draws itself to your result
- 📱 **Fully responsive** — works on desktop, tablet, and mobile
- ⚡ **Zero dependencies** — pure HTML, CSS, and JS, nothing to install

---

## 📁 Project Structure

```
ChronoQuest/
├── index.html      ← Structure & layout
├── style.css       ← Full-screen dark theme & animations
└── script.js       ← Quiz logic, question bank & randomization
```

---

## 🚀 Getting Started

### Option 1 — Open directly
Just double-click `index.html` in your file explorer. It runs in any modern browser with no setup.

### Option 2 — VS Code + Live Server (recommended)
1. Clone or download this repository
2. Open the `ChronoQuest` folder in VS Code
3. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
4. Right-click `index.html` → **Open with Live Server**
5. The quiz opens at `http://127.0.0.1:5500`

```bash
# Or clone via terminal
git clone https://github.com/your-username/ChronoQuest.git
cd ChronoQuest
```

---

## 🗺️ Question Categories

| Category | Example Topics |
|---|---|
| 🏛 Ancient World | Rome, Persia, Inca, Nabataean Kingdom |
| ⚔️ World Wars | D-Day, Stalingrad, Pearl Harbor |
| 🇮🇳 India | Mughal Empire, Salt March, Independence |
| 🇨🇳 China | Qin Dynasty, Long March, Tiananmen |
| 🇯🇵 Japan | Samurai, Meiji Restoration, Atomic bombs |
| 🏺 Egypt | Pharaohs, Cleopatra, Rosetta Stone |
| 🏰 Europe | Renaissance, Napoleon, Berlin Wall |
| 🌍 Africa | Apartheid, Mali Empire, Colonization |
| 🌎 Americas | Columbus, Civil War, Revolution |
| 🕌 Middle East | Babylon, Suez Canal, Ottoman Empire |
| 🇷🇺 Russia | Revolution 1917, Siege of Leningrad |
| 🔬 Science & Culture | Industrial Revolution, Moon landing |

---

## 🎮 How to Play

1. Hit **Begin the Quest** on the start screen
2. Read each question and pick one of four answers (A, B, C, D)
3. A fact is revealed after every answer — correct or not
4. Your score updates live in the top-right corner
5. After 10 questions, your results screen shows an animated score ring
6. Hit **Try Again — New Questions** for a completely fresh set

---

## 🛠️ Customization

Want to add your own questions? Open `script.js` and add entries to the `questionBank` array:

```js
{
  q: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 0,           // Index of the correct option (0 = A, 1 = B, 2 = C, 3 = D)
  fact: "A cool fact shown after the answer.",
  category: "Your Category"
}
```

The quiz will automatically include your new questions in the random rotation.

---

## 📸 Preview

| Screen | Description |
|---|---|
| **Start** | Full-screen hero with floating crown, glowing title, animated button |
| **Question** | Dark UI with progress bar, category badge, large answer tiles |
| **Results** | Animated SVG score ring with personalized verdict |

---

## 🧠 Score Ratings

| Score | Title |
|---|---|
| 10 / 10 | 👑 Legendary Historian |
| 8 – 9 | 🏅 Master of History |
| 6 – 7 | 📚 History Scholar |
| 4 – 5 | 🔍 Apprentice Historian |
| 0 – 3 | 🌱 The Journey Begins |

---

## 👤 Author

Built with ♛ by **Shadab**

---

## 📄 License

This project is open source and free to use, modify, and share.
