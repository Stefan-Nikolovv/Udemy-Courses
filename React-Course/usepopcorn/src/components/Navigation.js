import { useState } from "react";
import SearchComponent from "./Search";
import Logo from "./Logo";
import NumResults from "./NumResults";

export default function Navigation({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchComponent />
      <NumResults movies={movies} />
    </nav>
  );
}
