import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import UserForm from "./UserForm";

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

    const submitForm = (formData) => {
        fetch(
            `${process.env.REACT_APP_API_URL}/user/update/${data.id}?deleteNotExistingContacts=true`,
            {
                method: "PUT",
                body: formData,
            }
        ).then(
            function (res) {
                if (res.ok) {
                    alert("Perfect! ");
                } else if (res.status === 401) {
                    alert("Oops! ");
                }
            },
            function (e) {
                alert("Error submitting form!");
            }
        );
    };

    return (
        <>
            <UserForm {...data} submitForm={submitForm} />
        </>
    );
}
