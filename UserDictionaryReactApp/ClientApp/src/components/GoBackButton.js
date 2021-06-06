import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function GoBackButton() {
    const routerHistory = useHistory();

    if (routerHistory.length > 1) {
        return <button onClick={routerHistory.goBack}>Go back</button>;
    }

    return (
        <Link to={`/`}>
            <button>Go to list</button>
        </Link>
    );
}
