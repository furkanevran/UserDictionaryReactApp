import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function GoBackButton() {
    const routerHistory = useHistory();

    if (routerHistory.length > 1) {
        return <button onClick={routerHistory.goBack}>Back</button>;
    }

    return (
        <Link to={`/`}>
            <button>Go to List</button>
        </Link>
    );
}
