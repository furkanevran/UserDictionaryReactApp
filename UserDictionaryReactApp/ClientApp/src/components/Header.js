import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <header className="wrapper">
            <Link to={`/`} className="logo">
                <img
                    src="/app_overview_icon.svg"
                    alt="App overview icon, it contains a book with two open pages"
                />
                <span>User Dictionary</span>
            </Link>

            <div>
                <Link to={`/`}>List</Link>
                <Link to={`/new`}>Add New</Link>
            </div>
        </header>
    );
}
