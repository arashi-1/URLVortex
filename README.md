# ytAutoWatch

A web application to automatically open a given URL multiple times at a specified interval. Built with React (frontend) and Flask (backend).

## Features

- Enter a URL, interval (in seconds), and number of times to open the URL.
- Starts opening the URL in your default browser using the backend.
- Simple, responsive UI with Tailwind CSS.

## Project Structure

```
ytAutoWatch/
├── backend/
│   └── app.py           # Flask backend server
├── public/
│   ├── icon.png
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main React component
│   ├── main.jsx         # React entry point
│   ├── App.css
│   ├── index.css
│   └── assets/
│       └── react.svg
├── index.html           # Main HTML file
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Python 3.x

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd ytAutoWatch
   ```

2. **Install frontend dependencies:**
   ```sh
   npm install
   ```

3. **Install backend dependencies:**
   ```sh
   cd backend
   pip install flask flask-cors
   cd ..
   ```

### Running the Application

1. **Start the backend server:**
   ```sh
   cd backend
   python app.py
   ```

2. **Start the frontend (in another terminal):**
   ```sh
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- Enter the URL you want to open.
- Set the interval (seconds) between each open.
- Set how many times to open the URL.
- Click **Start Opening**.

The backend will open the URL in your default browser the specified number of times at the given interval.

## Notes

- The backend must be running locally on port 5000.
- The frontend expects the backend at `http://localhost:5000`.
- For security, use this tool responsibly.

## License

MIT
