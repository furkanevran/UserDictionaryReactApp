import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import PhotoSelector from "./PhotoSelector";

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
        return 1;
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
}) {
    const [newPhotoFileName, setNewPhotoFileName] = useState(null);
    const { control, register, handleSubmit } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "contactInformations",
        keyName: "_key",
    });

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                defaultValue={firstName}
                {...register("firstName")}
                required
            />

            <input defaultValue={surname} {...register("surname")} required />

            <input
                defaultValue={birthDate}
                {...register("birthDate")}
                type="datetime-local"
            />

            <input defaultValue={location} {...register("location")} />

            <PhotoSelector
                defaultPhoto={photoFileName}
                fileNameChanged={setNewPhotoFileName}
            />

            <input type="submit" />

            <hr />

            <button type="button" onClick={addNewContact}>
                + Contact
            </button>

            <hr />

            {fields.map((x, i) => (
                <div key={x._key}>
                    {x.id && (
                        <input
                            type="hidden"
                            defaultValue={x.id}
                            {...register(`contactInformations.${i}.id`)}
                        />
                    )}

                    <select
                        placeholder="Type"
                        {...register(`contactInformations.${i}.type`, {
                            valueAsNumber: true,
                            value: x.type,
                        })}
                    >
                        <option value={0}>Phone</option>
                        <option value={1}>Email</option>
                        <option value={2}>Social</option>
                    </select>

                    <input
                        placeholder="Name"
                        defaultValue={x.name}
                        {...register(`contactInformations.${i}.name`)}
                    />

                    <input
                        placeholder="Value"
                        defaultValue={x.value}
                        {...register(`contactInformations.${i}.value`)}
                    />

                    <button type="button" onClick={() => remove(i)}>
                        -
                    </button>
                </div>
            ))}
        </form>
    );
}
