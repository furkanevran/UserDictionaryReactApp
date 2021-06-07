import React, { useRef, useState } from "react";

export default function PhotoSelector({ defaultPhoto }) {
    const [preview, setPreview] = useState(null);
    const fileRef = useRef();

    const previewFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <img
                onClick={() => fileRef.current.click()}
                style={{
                    width: 200,
                    height: 200,
                    objectFit: "cover",
                    cursor: "pointer",
                }}
                src={
                    preview
                        ? preview
                        : defaultPhoto
                        ? process.env.REACT_APP_URL + "/Uploads/" + defaultPhoto
                        : "https://via.placeholder.com/400x400"
                }
                alt="Preview"
            />
            <input
                ref={fileRef}
                style={{ display: "none" }}
                type="file"
                name="photo"
                accept="image/*"
                onChange={previewFile}
            />
            <button
                type="button"
                onClick={() => {
                    setPreview(null);
                    fileRef.current.value = "";
                }}
            >
                Reset
            </button>
        </>
    );
}
