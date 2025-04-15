# Note-Taking Backend

This is the backend API for the Note-Taking Application, built with **Node.js**, **Express**, **TypeScript**, and **TypeORM**. It provides RESTful endpoints for managing notes and categories, with a PostgreSQL database integration.

---

## Engineering Decisions

### 1. **Node.js + Express + TypeScript**

- Chosen for rapid development, scalability, and type safety.
- Ensures robust API structure with proper type checking and editor support.

### 2. **TypeORM + PostgreSQL**

- TypeORM was selected for its rich feature set, decorators, and active support for PostgreSQL.
- Simplifies database migrations and entity relationships.

### 3. **Validation**

- `class-validator` + `class-transformer` ensure input validation and transformation using decorators directly on DTOs.

---

## Setup Instructions

### 1. **Clone the repository**

```bash
git clone https://github.com/Nis13/Note-taking-backend.git
cd backend
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Configure environement variables**

Create a .env file in the root directory and set variables as in .env.example

### 4. **Start the development server**

```bash
npm start
```
