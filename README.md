🪨📃✂️ Rock Paper Scissors
A sleek, interactive Rock Paper Scissors game built with React 18, featuring a best-of-5 round system, real-time score tracking, and a polished dark glassmorphism UI.

🚀 Live Demo

https://rock-paper-scissors-zeta-murex.vercel.app/


✨ Features

🎮 Best-of-5 Round System — Game auto-ends after 5 rounds with a final result alert
📊 Live Score Tracking — Real-time win/loss/tie counters for both player and computer
🤖 Randomised Computer AI — Computer picks moves using a weighted random generator
🔄 Reset Anytime — Full game reset with a single click
💅 Glassmorphism UI — Dark-themed design with blur effects, smooth hover animations, and gradient typography
📱 Responsive Design — Works seamlessly on all screen sizes


🛠️ Tech Stack
TechnologyUsageReact 18UI & Component ArchitectureJavaScript (ES6+)Game LogicReact Hooks (useState, useEffect)State ManagementCSS3Glassmorphism styling, Flexbox, AnimationsViteBuild Tool & Dev Server

Installation
bash# Clone the repository
git clone https://github.com/your-username/rock-paper-scissors.git

# Navigate into the project
cd rock-paper-scissors

# Install dependencies
npm install

# Start the development server
npm run dev
Then open http://localhost:5173 in your browser.

🧠 How It Works

Player selects 🪨 Rock, 📃 Paper, or ✂️ Scissors
Computer generates a random move
Winner is determined by classic RPS rules
Scores update in real-time after each round
After 5 rounds, a popup declares the overall winner
Game resets automatically for a new match


📁 Project Structure
src/
├── App.jsx        # Main game logic & UI
├── App.css        # Styling & animations
└── main.jsx       # React DOM entry point
