import React from "react";
import GoBackButton from "./GoBackButton";
import UserForm from "./UserForm";

export default function Add() {
    return (
        <>
            <GoBackButton />
            <h1>Add new User</h1>
            <UserForm />
        </>
    );
}
