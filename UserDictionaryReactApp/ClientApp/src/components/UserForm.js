import React, { useState, useEffect, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import PhotoSelector from "./PhotoSelector";
import GoBackButton from "./GoBackButton";
import "./UserForm.css";

const generateKey = () => {
    return `${new Date().getTime()}`;
};

const getTypeIndex = (type) => {
    if (type === "Phone") {
        return 0;
    }

    if (type === "Email") {
        return 1;
    }

    if (type === "Social") {
        return 2;
    }

    return type;
};

export default function UserForm({
    firstName = "",
    surname = "",
    birthDate = "",
    location = "",
    photoFileName = "",
    contactInformations,
    submitForm,
    deleteUser,
}) {
    const [newPhotoFileName, setNewPhotoFileName] = useState(null);
    const { control, register, handleSubmit } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "contactInformations",
        keyName: "_key",
    });

    const formRef = useRef();

    useEffect(() => {
        if (
            contactInformations === undefined ||
            append === null ||
            remove === null
        ) {
            return;
        }

        remove();

        append(
            contactInformations.map((x) => ({
                ...x,
                type: Number(getTypeIndex(x.type)),
                _key: x.id + "",
            }))
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [append, remove]);

    const addNewContact = () => {
        append({
            _key: generateKey(),
            type: 0,
            name: "",
            value: "",
        });
    };

    const onSubmit = (data) => {
        if (newPhotoFileName !== null) {
            data["photoFileName"] = newPhotoFileName;
        }
        for (let i = 0; i < data.contactInformations.length; i++) {
            delete data.contactInformations[i]._key;
        }

        if (submitForm) {
            submitForm(data);
        }
    };

    return (
        <div>
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <div className="wrapper grid-form">
                    <div>
                        <div className="two-col">
                            <div>
                                <label>First Name</label>
                                <input
                                    defaultValue={firstName}
                                    {...register("firstName")}
                                    required
                                />
                            </div>
                            <div>
                                <label>Surname</label>
                                <input
                                    defaultValue={surname}
                                    {...register("surname")}
                                    required
                                />
                            </div>

                            <div>
                                <label>Birth Date</label>
                                <input
                                    defaultValue={birthDate}
                                    {...register("birthDate")}
                                    type="datetime-local"
                                />
                            </div>

                            <div>
                                <label>Location</label>
                                <input
                                    defaultValue={location}
                                    {...register("location")}
                                />
                            </div>

                            <div>
                                <PhotoSelector
                                    defaultPhoto={photoFileName}
                                    fileNameChanged={setNewPhotoFileName}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="contactInfo-header">
                            <label>Contact Informations</label>
                            <button type="button" onClick={addNewContact}>
                                + Add
                            </button>
                        </div>
                        <div className="contactInfos">
                            {fields.map((x, i) => (
                                <div key={x._key} className="contactInfo-item">
                                    {x.id && (
                                        <input
                                            type="hidden"
                                            defaultValue={x.id}
                                            {...register(
                                                `contactInformations.${i}.id`
                                            )}
                                        />
                                    )}

                                    <div>
                                        <label>Type</label>
                                        <select
                                            placeholder="Type"
                                            defaultValue={x.type}
                                            {...register(
                                                `contactInformations.${i}.type`,
                                                {
                                                    valueAsNumber: true,
                                                }
                                            )}
                                        >
                                            <option value={0}>Phone</option>
                                            <option value={1}>Email</option>
                                            <option value={2}>Social</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label>Name</label>
                                        <input
                                            placeholder="Name"
                                            defaultValue={x.name}
                                            {...register(
                                                `contactInformations.${i}.name`
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <label>Value</label>
                                        <input
                                            placeholder="Value"
                                            defaultValue={x.value}
                                            {...register(
                                                `contactInformations.${i}.value`
                                            )}
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => remove(i)}
                                    >
                                        -
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </form>

            <div className="toolbar">
                <div className="wrapper">
                    {deleteUser && (
                        <button
                            style={{
                                backgroundColor: "#cc4040",
                                border: "1px solid #cc4040",
                                color: "#fff",
                            }}
                            onClick={() => deleteUser()}
                        >
                            Delete
                        </button>
                    )}
                    <GoBackButton />
                    <button
                        onClick={() =>
                            formRef.current.dispatchEvent(new Event("submit"))
                        }
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
