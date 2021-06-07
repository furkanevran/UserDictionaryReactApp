import React from "react";
import UserForm from "./UserForm";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import cogoToast from "cogo-toast";

export default function Add() {
    const queryClient = useQueryClient();
    const routerHistory = useHistory();

    const submitForm = (data) => {
        fetch(`${process.env.REACT_APP_API_URL}/user/add`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(
            function (res) {
                if (res.ok) {
                    queryClient.invalidateQueries(["users"]);
                    res.json().then((data) => {
                        cogoToast.success("Saved new user!");
                        routerHistory.push(`/edit/${data.id}`);
                    });
                } else {
                    cogoToast.error("An error occured.");
                }
            },
            function (e) {
                cogoToast.error("Error while submitting form.");
            }
        );
    };

    return (
        <div className="wrapper">
            <h1 className="title">Add New User</h1>
            <UserForm submitForm={submitForm} />
        </div>
    );
}
