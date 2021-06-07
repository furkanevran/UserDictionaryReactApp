import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "./List.css";

export default function List(params) {
    const { isLoading, error, data } = useQuery("allUsers", () =>
        fetch(
            `${process.env.REACT_APP_API_URL}/User/GetAllUsers?loadContactInfo=true`
        ).then((res) => res.json())
    );

    if (isLoading)
        return (
            <div className="wrapper">
                <h1 className="title">Loading...</h1>
            </div>
        );

    if (error)
        return (
            <div className="wrapper">
                <h1 className="title">{error.message}</h1>
            </div>
        );

    return (
        <div className="wrapper">
            <h1 className="title">List Users</h1>
            <div className="grid">
                {data.map((x) => (
                    <div className="card">
                        <div>
                            <img
                                src={
                                    x.photoFileName !== null
                                        ? `/Uploads/${x.photoFileName}`
                                        : "/no_photo.jpg"
                                }
                                alt="pl"
                            />
                        </div>
                        <div className="two-col">
                            <div>
                                <p>First Name</p>
                                <p>{x.firstName}</p>
                            </div>
                            <div>
                                <p>Surname</p>
                                <p>{x.surname}</p>
                            </div>
                            <div>
                                <p>Birth Date</p>
                                <p>
                                    {x.birthDate === "0001-01-01T00:00:00"
                                        ? "No Data"
                                        : new Date(
                                              x.birthDate
                                          ).toLocaleDateString()}
                                </p>
                            </div>
                            <div>
                                <p>Location</p>
                                <p>
                                    {x.location === null
                                        ? "No Data"
                                        : x.location}
                                </p>
                            </div>
                            <div>{x.contactInformations.length} contacts</div>
                            <div>
                                <Link to={`/edit/${x.id}`}>Edit {"->"}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
