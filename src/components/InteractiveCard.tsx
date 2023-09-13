"use client";

import React from "react";

export default function InteractiveCard(props: { children: React.ReactNode }) {
  function onMouseAction(event: React.SyntheticEvent) {
    if (event.type == "mouseover") {
      event.currentTarget.classList.remove("shadow-lg", "bg-white");
      event.currentTarget.classList.add(
        "shadow-2xl",
        "bg-neutral-200",
        "text-neutral-800"
      );
    } else {
      event.currentTarget.classList.remove("shadow-2xl", "bg-neutral-200");
      event.currentTarget.classList.add("shadow-lg", "bg-white");
    }
  }

  return (
    <div
      onMouseOver={onMouseAction}
      onMouseOut={onMouseAction}
      className="shadow-indigo-400 transition-all duration-100"
    >
      {props.children}
    </div>
  );
}
