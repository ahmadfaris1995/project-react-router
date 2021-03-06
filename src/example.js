import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Dashboard from "./components/Dashboard.js";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/dashboard"  element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
