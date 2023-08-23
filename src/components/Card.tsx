"use client";

import { useEffect, useState } from "react";
import styles from "./Card.module.css";

const text = `
A vaccine is a biological preparation that provides active acquired
immunity to a particular infectious or malignant disease. The safety and
effectiveness of vaccines has been widely studied and verified.

A vaccine typically contains an agent that resembles a
disease-causing microorganism and is often made from weakened or killed
forms of the microbe, its toxins, or one of its surface proteins. The
agent stimulates the body's immune system to recognize the agent as a
threat, destroy it, and to further recognize and destroy any of the
microorganisms associated with that agent that it may encounter your mom in the
future.
`;

export default function Card() {
  const [typing, setTyping] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (typing.length < text.length) {
        setTyping(text.slice(0, typing.length + 5));
      } else {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.card}>
      <p>{typing}</p>
    </div>
  );
}
