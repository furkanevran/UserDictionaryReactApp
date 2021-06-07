import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router";
import UserForm from "./UserForm";
import cogoToast from "cogo-toast";
import { useHistory } from "react-router-dom";

export default function Edit() {
    let { id } = useParams();
    const routerHistory = useHistory();
    const queryClient = useQueryClient();

    const deleteUser = () => {
        fetch(`${process.env.REACT_APP_API_URL}/user/delete/${id}`, {
            method: "DELETE",
        }).then(
            function (res) {
                if (res.ok) {
                    queryClient.invalidateQueries(["users"]);
                    cogoToast.success("Successfully deleted user!");
                    routerHistory.push(`/`);
                } else {
                    cogoToast.error("An error occured.");
                }
            },
            function (e) {
                cogoToast.error("Error while submitting form.");
            }
        );
    };

    const submitForm = (data) => {
        console.log(data);
        console.log(JSON.stringify(data, null, 2));
        fetch(
            `${process.env.REACT_APP_API_URL}/user/update/${id}?deleteNotExistingContacts=true`,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        ).then(
            function (res) {
                if (res.ok) {
                    cogoToast.success("Updated!");
                    queryClient.invalidateQueries([`user/${id}`]);
                } else if (res.status !== 204) {
                    cogoToast.error("An error occured.");
                }
            },
            function (e) {
                cogoToast.error("Error while submitting form.");
            }
        );
    };

    const { isLoading, error, data } = useQuery(`user/${id}`, () =>
        fetch(`${process.env.REACT_APP_API_URL}/user/GetUser/${id}`).then(
            (res) => res.json()
        )
    );

    if (isLoading)
        return (
            <div className="wrapper">
                <h1 className="title">Loading...</h1>
            </div>
        );

    if (error) {
        routerHistory.push("/");
        cogoToast.error("Error while loading user!");
        return (
            <div className="wrapper">
                <h1 className="title">Redirecting...</h1>
                <pre>
                    <code>{error.message}</code>
                </pre>
            </div>
        );
    }

    return (
        <div className="wrapper">
            <h1 className="title">Edit User</h1>
            <UserForm
                {...data}
                submitForm={submitForm}
                deleteUser={deleteUser}
            />
        </div>
    );
}
