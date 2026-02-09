# Prime Flix

A modern movie discovery and favorites management application built with React. Browse currently playing movies, view detailed information, and save your favorites to a personal list.

## 🎬 Features

- **Movie Discovery**: Browse currently playing movies from The Movie Database (TMDB) API
- **Movie Details**: View comprehensive information about each movie including:
  - Title and overview
  - Movie poster and backdrop images
  - User ratings
  - Synopsis
- **Favorites Management**: 
  - Save movies to your personal favorites list
  - View all saved movies in one place
  - Remove movies from your favorites
- **Trailer Links**: Quick access to movie trailers on YouTube
- **Responsive Design**: Mobile-first design that works on all devices
- **Toast Notifications**: User-friendly notifications for actions (save, error, warnings)

## 🚀 Technologies

- **React 19.2** - Modern React with latest features
- **React Router DOM 7.13** - Client-side routing
- **Vite 7.3** - Fast build tool and dev server
- **Axios 1.13** - HTTP client for API requests
- **React Toastify 11.0** - Toast notification system
- **The Movie Database (TMDB) API** - Movie data source

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **pnpm** (or npm/yarn)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd prime-flix
```

2. Install dependencies:
```bash
pnpm install
```

If you're using npm:
```bash
npm install
```

## ⚙️ Configuration

The application uses The Movie Database (TMDB) API. The API key is currently hardcoded in the components. For production use, consider:

1. Creating a `.env` file:
```env
VITE_TMDB_API_KEY=your_api_key_here
```

2. Getting your API key from [TMDB](https://www.themoviedb.org/settings/api)

3. Update the API calls to use the environment variable:
```javascript
api_key: import.meta.env.VITE_TMDB_API_KEY
```

## 🎯 Usage

### Development

Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build

Create a production build:
```bash
pnpm build
```

### Preview

Preview the production build:
```bash
pnpm preview
```

### Lint

Run ESLint to check code quality:
```bash
pnpm lint
```

## 📁 Project Structure

```
prime-flix/
├── src/
│   ├── components/
│   │   └── Header/          # Navigation header component
│   ├── pages/
│   │   ├── Home/            # Movie listing page
│   │   ├── Movie/           # Movie details page
│   │   ├── Favorites/       # Saved movies page
│   │   └── Erro/            # 404 error page
│   ├── services/
│   │   └── api.js           # Axios API configuration
│   ├── App.jsx              # Main app component
│   ├── routes.jsx           # Route configuration
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Features in Detail

### Home Page (`/`)
- Displays the top 10 currently playing movies
- Shows movie posters and titles
- Click "Detalhes" (Details) to view more information

### Movie Details Page (`/movie/:id`)
- Full movie information including:
  - Title and synopsis
  - Backdrop image
  - User rating (out of 10)
- **Save** button: Adds movie to favorites (stored in localStorage)
- **Assistir Trailer** (Watch Trailer) button: Opens YouTube search for the movie trailer
- Toast notifications for save actions

### Favorites Page (`/favorites`)
- Lists all saved movies
- View details or remove movies from favorites
- Empty state message when no favorites exist

## 💾 Data Storage

The application uses **localStorage** to persist favorite movies. Data is stored under the key `@primeflix` in JSON format.

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🌐 API

This application uses [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api):

- **Base URL**: `https://api.themoviedb.org/3/`
- **Endpoints Used**:
  - `GET /movie/now_playing` - Get currently playing movies
  - `GET /movie/{id}` - Get movie details by ID

## 🐛 Known Issues

- API key is hardcoded (should be moved to environment variables)
- Language is hardcoded to Portuguese (`pt-BR`)

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie API
- React and Vite communities for excellent tooling

---

Made with ❤️ using React and Vite
