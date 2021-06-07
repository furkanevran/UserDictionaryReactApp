import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router";
import GoBackButton from "./GoBackButton";
import UserForm from "./UserForm";

export default function Edit() {
    let { id } = useParams();
    const queryClient = useQueryClient();

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
                    queryClient.invalidateQueries([`user/${id}`]);
                } else if (res.status === 401) {
                    alert("Oops! ");
                }
            },
            function (e) {
                alert("Error submitting form!");
            }
        );
    };

    const { isLoading, error, data } = useQuery(`user/${id}`, () =>
        fetch(`${process.env.REACT_APP_API_URL}/user/GetUser/${id}`).then(
            (res) => res.json()
        )
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <>
            <GoBackButton />
            <UserForm {...data} submitForm={submitForm} />
        </>
    );
}
