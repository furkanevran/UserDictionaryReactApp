import React from "react";
import GoBackButton from "./GoBackButton";
import UserForm from "./UserForm";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";

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
                        routerHistory.push(`/edit/${data.id}`);
                    });
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
            <GoBackButton />
            <h1>Add new User</h1>
            <UserForm submitForm={submitForm} />
        </>
    );
}
