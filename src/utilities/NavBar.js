import React from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css';

export default function NavBar(props) {
  let links = Object.keys(props.approximations).map(x => {
    return (
      <li key={x}>
        <NavLink to={"/" + x} activeClassName="active">{x}</NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul>
        <li key="GitHub">
          <a href="https://github.com/jnovick/piday2020" className="github-btn" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li key="all">
          <NavLink exact to="/" activeClassName="active">All</NavLink>
        </li>
        {links}
      </ul>
    </nav>
  )
}
