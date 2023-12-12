import React from "react";
import defaultImage from "../assets/images/user.jpg";

export default function UserProfileImage() {
    return (
        <div className="user-profile-content">
            <div className="img-user-profile-content"
            >
                <img
                    className="img-user-profile rounded-shadow"
                    alt="profile"
                    src={defaultImage}
                />
            </div>
        </div>
    )
}