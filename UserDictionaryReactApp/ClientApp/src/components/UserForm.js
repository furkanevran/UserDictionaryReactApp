import React, { useState, useEffect } from "react";
import PhotoSelector from "./PhotoSelector";

const generateKey = () => {
    return `${new Date().getTime()}`;
};

export default function UserForm({
    id,
    firstName = "",
    surname = "",
    birthDate = "",
    location = "",
    photoFileName = "",
    contactInformations = [],
    submitForm,
}) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        setContacts(
            contactInformations.map((x) => ({
                ...x,
                _key: x.id + "_" + generateKey(),
            }))
        );
    }, [contactInformations]);

    const addNewContact = () => {
        setContacts([
            ...contacts,
            {
                _key: generateKey(),
                type: 0,
                name: "",
                value: "",
            },
        ]);
    };

    const deleteContact = (key) => {
        setContacts(contacts.filter((x) => x._key !== key));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        if (formData.get("photo").name === "") {
            formData.delete("photo");
        }

        if (submitForm) {
            submitForm(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input defaultValue={firstName} name="firstName" required />
            <input defaultValue={surname} name="surname" required />
            <input
                defaultValue={birthDate}
                name="birthDate"
                type="datetime-local"
            />
            <input defaultValue={location} name="location" />
            <PhotoSelector defaultPhoto={photoFileName} />
            <input type="submit" />
            <hr />
            <button type="button" onClick={addNewContact}>
                + Contact
            </button>
            <hr />
            {contacts.map((x, i) => (
                <div key={x._key}>
                    {x.id && (
                        <input
                            type="hidden"
                            value={x.id}
                            key={`id_${x._key}`}
                            name={`ContactInformations[${i}].Id`}
                        />
                    )}
                    <select
                        placeholder="Type"
                        defaultValue={x.type}
                        key={`type_${x._key}`}
                        name={`ContactInformations[${i}].Type`}
                    >
                        <option value={0}>Email</option>
                        <option value={1}>Phone</option>
                        <option value={2}>Social</option>
                    </select>

                    <input
                        placeholder="Name"
                        defaultValue={x.name}
                        key={`name_${x._key}`}
                        name={`ContactInformations[${i}].Name`}
                    />

                    <input
                        placeholder="Value"
                        defaultValue={x.value}
                        key={`value${x._key}`}
                        name={`ContactInformations[${i}].Value`}
                    />

                    <button type="button" onClick={() => deleteContact(x._key)}>
                        -
                    </button>
                </div>
            ))}
        </form>
    );
}
