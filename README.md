# AppRabbit QA Assignment

This repository contains two TypeScript-based tests for the AppRabbit QA Intern application.

## 📁 Folder Structure

```
Apprabbit-assignment/
├── tests/
│   ├── api/               # Contains API login test (mock)
│   └── ui/                # Contains UI login test using Playwright
├── .env                   # Stores test credentials (not committed)
├── .gitignore             # Ignores node_modules, test-results, .env, etc.
├── package.json           # NPM dependencies and scripts
├── playwright.config.ts   # Fullscreen Playwright test config
```

---

## ✅ What’s Included

### 1. API Test – `login.test.ts`

- Simulates an API login flow using Axios
- Uses `.env` file for credentials
- Handles success and failure scenarios
- Located in `tests/api/login.test.ts`

### 2. UI Test – `login.spec.ts`

- Fully automated Playwright test that:
  - Opens the login page
  - Clicks "Continue with Email"
  - Enters email and password
  - Waits for "Build App" and "Pricing" to confirm dashboard loaded
  - Runs at 100% zoom, full-screen mode
- Located in `tests/ui/login.spec.ts`

---

## 🛡️ Security

- `.env` is used to store credentials and is excluded from version control via `.gitignore`

---

## 💻 How to Run

1. Install dependencies:

```bash
npm install
```

2. Add a `.env` file with:

```
EMAIL=your-test-email@example.com
PASSWORD=your-password
```

3. Run the UI test:

```bash
npx playwright test tests/ui/login.spec.ts --headed
```

---

✉️ Author

Mrunali Katta

✨ Passionate about tech, usability, and quality
🛠️ Skilled in Full-Stack Development, Software QA Automation, and Data Engineering
🤖 Hands-on with Machine Learning, Generative AI, and real-world NLP projects
🔍 Detail-oriented tester who loves breaking things to make them better 💥