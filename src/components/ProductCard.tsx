"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "./ProductCard.module.css";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

export type CardProps = {
  name: string;
  imgSrc: string;
  rating?: number;
  onRatingChange?: (rating: number) => void;
};

export default function Card(props: CardProps) {
  const text = props.name;
  const typeDelay = 15;
  const typeSpeed = 1;

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [typing, setTyping] = useState("");
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      if (typing.length < text.length) {
        setTyping((typing) => text.slice(0, typing.length + typeSpeed));
      } else {
        clearInterval(interval);
      }
    }, typeDelay);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <InteractiveCard>
      <div className={styles.card}>
        <Rating
          className="z-50"
          value={props.rating ?? 0}
          onChange={(_, val) => {
            if (val === null) return;
            props.onRatingChange?.(val);
          }}
        />
        <div className="bg-gray-400 bg-opacity-20 w-fit mx-auto px-4 py-2">
          <Image
            src={props.imgSrc}
            alt={props.name}
            width={256}
            height={256}
            className="my-2 hover:sepia hover:rounded-xl transition-all duration-300"
          />
        </div>

        <h3
          className="flex text-lg md:text-xl align-middle justify-center cursor-pointer"
          ref={ref}
        >
          <span className="animate-lr">{">>"}</span>
          <span className="hover:animate-shake">{typing}</span>
          <span className="animate-rl">{"<<"}</span>
        </h3>
      </div>
    </InteractiveCard>
  );
}
