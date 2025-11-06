import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container-fluid p-0">
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
