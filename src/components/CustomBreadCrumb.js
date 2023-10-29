import React from "react";

export default function CustomBreadCrumb({title}) {
    return (
        <div className="px-5 pb-4 pt-3">
            <span className="title-sm">{title}</span>
            <div className="pb-3 pb-4 mt-3 border-top" />
        </div>);
}