import React, { useCallback, useRef, useState } from "react";

export default function PhotoSelector({ defaultPhoto, fileNameChanged }) {
    const [preview, setPreview] = useState(null);
    const fileRef = useRef();

    const previewFile = useCallback(
        (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result);
                };
                reader.readAsDataURL(file);

                const formData = new FormData();
                formData.append("file", file, file.name);

                fetch(`${process.env.REACT_APP_API_URL}/file/uploadimage/`, {
                    method: "POST",
                    body: formData,
                }).then(
                    function (res) {
                        if (res.ok) {
                            res.json().then((data) => {
                                if (fileNameChanged) {
                                    fileNameChanged(data.fileName);
                                }
                            });
                        } else if (res.status === 400) {
                            alert("Oops! ");
                        }
                    },
                    function (e) {
                        alert("Error submitting form!");
                    }
                );
            }
        },
        [fileNameChanged]
    );

    const clear = () => {
        setPreview(null);
        fileRef.current.value = "";
        fileNameChanged(null);
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
            <button type="button" onClick={clear}>
                Reset
            </button>
        </>
    );
}
