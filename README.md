# Mind2Care 🧠 💚

A modern mental health and wellness companion web application built with React, TanStack Router, and TailwindCSS — helping users track moods, build healthy habits, and connect with a supportive community.

## Features

- **Dashboard:** Personalized overview of your mental wellness journey with mood trends, streak tracking, and daily insights.
- **Mood Tracker:** Log your daily emotional state with intuitive mood selectors and add journal-style notes.
- **AI Chatbot:** Conversational mental health support powered by AI — a safe space to express and reflect.
- **Challenges:** Daily and weekly wellness challenges to build positive habits and encourage growth.
- **Growth Hub:** Track personal development goals and celebrate milestones.
- **Community:** Connect with others on their wellness journey in a safe, moderated space.
- **Quotes:** Curated daily affirmations and motivational quotes for mental resilience.
- **Tasks:** Manage self-care tasks and therapy homework in a clean, focused interface.
- **Settings:** Fully customizable profile, notification preferences, and privacy controls.

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Landing / Onboarding page |
| `/signin` | Sign in to your account |
| `/signup` | Create a new account |
| `/forgot-password` | Password reset flow |
| `/dashboard` | Personal wellness dashboard |
| `/moods` | Mood logging and history |
| `/tracker` | Habit and wellness tracker |
| `/chatbot` | AI mental health companion |
| `/challenges` | Daily wellness challenges |
| `/growth` | Personal growth hub |
| `/community` | Community support space |
| `/quotes` | Daily affirmations & quotes |
| `/tasks` | Self-care task manager |
| `/settings` | Profile and app settings |

## Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TanStack Start](https://tanstack.com/start/latest)
- **Routing:** [TanStack Router](https://tanstack.com/router/latest)
- **Styling:** [TailwindCSS v4](https://tailwindcss.com/) + [tw-animate-css](https://github.com/jamiebuilds/tailwindcss-animate)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Charts:** [Recharts](https://recharts.org/)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Language:** TypeScript

## Requirements

- Node.js 18+
- npm 9+

## Environment Setup

To get started with this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/AryanBatra16/mind2care
   cd mind2care
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   The app will be available at **http://localhost:8080**

## Usage

**Start the dev server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Preview the production build:**
```bash
npm run preview
```

**Lint the codebase:**
```bash
npm run lint
```

**Format code with Prettier:**
```bash
npm run format
```

## File Structure

```
mind2care/
├── src/
│   ├── components/
│   │   ├── AppLayout.tsx          # Main app shell with sidebar navigation
│   │   ├── AuthShell.tsx          # Authentication page wrapper
│   │   ├── BackgroundBlobs.tsx    # Animated background decoration
│   │   ├── PageHeader.tsx         # Reusable page header component
│   │   └── ui/                    # shadcn/ui component library
│   ├── hooks/                     # Custom React hooks
│   ├── lib/                       # Utility functions and helpers
│   ├── routes/
│   │   ├── __root.tsx             # Root layout with head/meta configuration
│   │   ├── index.tsx              # Landing / onboarding page
│   │   ├── signin.tsx             # Sign in page
│   │   ├── signup.tsx             # Sign up page
│   │   ├── forgot-password.tsx    # Password reset page
│   │   ├── _app.tsx               # Authenticated app shell
│   │   ├── _app.dashboard.tsx     # Dashboard route
│   │   ├── _app.moods.tsx         # Mood tracker route
│   │   ├── _app.tracker.tsx       # Habit tracker route
│   │   ├── _app.chatbot.tsx       # AI chatbot route
│   │   ├── _app.challenges.tsx    # Challenges route
│   │   ├── _app.growth.tsx        # Growth hub route
│   │   ├── _app.community.tsx     # Community route
│   │   ├── _app.quotes.tsx        # Quotes route
│   │   ├── _app.tasks.tsx         # Tasks route
│   │   └── _app.settings.tsx      # Settings route
│   ├── router.tsx                 # TanStack Router configuration
│   ├── routeTree.gen.ts           # Auto-generated route tree
│   └── styles.css                 # Global styles and Tailwind directives
├── vite.config.ts                 # Vite build configuration
├── tsconfig.json                  # TypeScript configuration
├── components.json                # shadcn/ui configuration
├── package.json                   # Project dependencies and scripts
└── README.md                      # Project documentation
```

## Contributing

Feel free to:

- Open pull requests for UI improvements or new features.
- Report issues on GitHub.
- Suggest new wellness features or integrations.

## Known Issues

- The AI chatbot responses are currently mocked and not connected to a live LLM endpoint. Full AI integration is planned for an upcoming release.
- Community features are in early development — real-time interactions and moderation tools are being added progressively.

---

Built by Aryan Batra
