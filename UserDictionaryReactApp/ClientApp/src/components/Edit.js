import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";

export default function Edit() {
    let { id } = useParams();
    const { isLoading, error, data } = useQuery(
        "user",
        () =>
            fetch(`${process.env.REACT_APP_API_URL}/user/GetUser/${id}`).then(
                (res) => res.json()
            ),
        [{ id: id }]
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
    );
}
