import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function List(params) {
    const { isLoading, error, data } = useQuery("allUsers", () =>
        fetch(`${process.env.REACT_APP_API_URL}/User/GetAllUsers`).then((res) =>
            res.json()
        )
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <>
            <Link to={`add`}>
                <button>New</button>
            </Link>
            {data.map((x) => (
                <p key={x.id}>
                    <Link to={`/edit/${x.id}`}>{x.firstName}</Link>
                </p>
            ))}
        </>
    );
}
