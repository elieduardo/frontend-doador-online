import React, { useRef, useState } from "react";
import defaultImage from "../assets/images/foto-1.avif";

export default function UserProfileImage() {
    const inputFile = useRef(null);
    return (
        <div className="user-profile-content">
            <div className="img-user-profile-content"
            >
                <img
                    className="img-user-profile"
                    alt="profile-image"
                    src={defaultImage}
                />
                <div
                    className="user-strip-alter"
                    onClick={() => {
                        inputFile.current.click();
                    }}
                >
                    Alterar
                </div>

            </div>
            <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
            />
        </div>
    )
}