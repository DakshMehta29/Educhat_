
# EduChat_ – AI-Powered Learning Assistant for Students

EduChat is an AI-driven academic support platform designed to help school students (Standard 1–10) get instant answers to their questions, revise with flashcards, and receive personalized academic help. Built with a focus on accessibility, simplicity, and relevance, EduChat empowers students to learn better and smarter.

🌐 Live Project: Coming Soon  
🔗 Repository: https://github.com/DakshMehta29/Educhat_/tree/main

---

## ✨ Features

- 🤖 AI Chat Support: Ask questions and get AI-generated academic answers instantly.
- 📚 Doubt Solving: Choose your Standard & Subject, then ask subject-specific questions.
- 🧠 Flashcards: Interactive flashcards to revise by chapter, subject, and grade.
- 📄 Study Guides: Download textbooks, answer keys, and notes for all standards.
- 📞 One-on-One Sessions: Book video calls with real mentors for personalized help.
- 📩 Save Notes: Export previous questions and answers for later revision.
- 💡 Smart Prompt Design: Role-specific prompts for accurate, focused responses.
- 🎤 Voice Input (Coming Soon): Speak your doubt instead of typing.

---

## 🛠️ Tech Stack

- Frontend: React.js, CSS
- Backend: Node.js, Express.js
- AI Integration: Cohere API (OpenAI/Gemini optional)
- Styling: Custom CSS, Responsive Design
- Deployment: Vercel (Frontend), Render (Backend)

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/DakshMehta29/Educhat_.git
cd Educhat_
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm start
```

Start the backend (from /server folder):

```bash
cd server
npm install
npm run dev
```

Create a .env file in the /server directory:

```
PORT=5001
COHERE_API_KEY=your_api_key_here
```

Update config.js or API utility files if needed.

---

## 🔧 Folder Structure

- /public – Static files
- /src – All React components
  - /components – Navbar, Footer, Dropdown
  - /pages – FlashcardsPage.js, AIChatSupport.js, DoubtSolving.js
  - /utils – API logic (api.js), config.js for prompt roles
- /server – Node.js backend (index.js)

---

## 📦 API Integration

Cohere Chat API (current):

- Endpoint: /api/cohere-chat
- Model: command-r or command-r-plus
- Role Prompt: Controlled based on use case (general chat, subject tutor)

OpenAI/Gemini compatible with minor config changes.

---

## 🧠 Usage Tips

- Use AI Chat Support for general academic queries (textbook-like help).
- Use Doubt Solving Page to select subject & standard and ask subject-focused questions.
- Use Flashcards for quick chapter-based revision.
- Book sessions if you want help from a real teacher.

---

## 📸 Screenshots

Screenshot1(https://github.com/user-attachments/assets/1a67d792-9361-432d-871c-0ab32cfc66f0)

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📃 License

This project is licensed under the MIT License – see the LICENSE file for details.
