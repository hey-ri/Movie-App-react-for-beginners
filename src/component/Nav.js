import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.css";

function Navigation() {
    const [url, setUrl] = useState("/");
    let location = useLocation().pathname;

    useEffect(() => {
        if (location !== "/") {
            setUrl(url);
        } else {
            setUrl(url);
        }
    }, [location]);

    return (
        <div>
            <Link to="/" className="home">
                Home
            </Link>
        </div>
    );
}

export default Navigation;
