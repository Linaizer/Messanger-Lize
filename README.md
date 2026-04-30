# Lize 💬

A fullstack real-time messenger pet project built to practice modern fullstack development — from REST API and WebSockets on the backend to Feature-Sliced Design on the frontend.

---

## Tech Stack

### Backend
- **Node.js + Fastify** — fast and lightweight HTTP server
- **TypeScript** — static typing
- **PostgreSQL** — relational database
- **Prisma** — ORM for database access
- **JWT** — authentication via Bearer tokens
- **WebSockets** (`@fastify/websocket`) — real-time messaging

### Frontend
- **React + TypeScript** — UI library
- **Vite** — fast dev server and bundler
- **Tailwind CSS v4** — utility-first styling
- **React Router** — client-side routing
- **Axios** — HTTP client
- **Lucide React** — icons

### Tools
- **Postman** — API testing
- **Prisma Studio** — database GUI
- **dotenv** — environment variables

---

## Architecture

### Backend
Follows a layered architecture:
```
Route → Controller → Service → Prisma
```

### Frontend
Follows **Feature-Sliced Design (FSD)**:
```
src/
  app/        — providers, router, styles
  pages/      — login, main, settings
  widgets/    — chat-list, chat-window, slidebar
  features/   — auth-by-login, auth-by-registration, search-user
  entities/   — chat, message, user
  shared/     — api, config, lib, ui
```

---

## Features

- Register and log in with JWT authentication
- Protected routes — redirects to login if not authenticated
- Create private chats by searching users
- Real-time messaging via WebSockets
- Messages saved to PostgreSQL
- Delete chats with full database cleanup
- User profile display in settings
- Dark / Light theme toggle
- Lazy loading for all pages
- Responsive design — desktop grid + mobile bottom bar

---

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL

### Backend

```bash
cd Lize-Back-end
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Start dev server
npm run dev
```

### Frontend

```bash
cd Lize-Front-end
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file in the backend root:

```
DATABASE_URL=postgresql://user:password@localhost:5432/lize
JWT_SECRET=your_secret_key
```

`.env` is listed in `.gitignore` — do not commit it.

---

## API Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login, returns JWT |
| GET | `/api/users/me` | Get current user profile |
| GET | `/api/users?search=` | Search users by name |
| GET | `/api/chats` | Get all user chats |
| POST | `/api/chats` | Create a new chat |
| DELETE | `/api/chats/:id` | Delete a chat |
| GET | `/api/chats/:chatId/messages` | Get chat messages |
| WS | `/chat/ws/chat/:chatId?token=` | WebSocket connection |

---

## Contact

- 📧 [ponomar.kolya10@gmail.com](mailto:ponomar.kolya10@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/mykola-ponomar-81717a32b/)
