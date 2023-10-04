"use client";

import { useRouter } from "next/navigation";
import { MouseEventHandler, useEffect, useState } from "react";
import Image from "../../node_modules/next/image";
import styles from "./Banner.module.css";

const bannerImages = [
  "/banner/benjamin-lehman-gkZ-k3xf25w-unsplash.jpg",
  "/banner/cdc-voVYCm6xoQo-unsplash.jpg",
  "/banner/ed-us-K0DMl4NmOPo-unsplash.jpg",
  "/banner/cdc-d3fe9qJDqaI-unsplash.jpg",
];

export default function Banner() {
  const router = useRouter();

  const [bannerIdx, setBannerIdx] = useState(0);
  const bannerImg = bannerImages[bannerIdx];

  function nextBanner() {
    const newIdx = (bannerIdx + 1) % bannerImages.length;
    setBannerIdx(newIdx);
  }

  useEffect(() => {
    const interval = setInterval(nextBanner, 4000);
    return () => clearInterval(interval);
  }, [nextBanner]);

  return (
    <div>
      <div className={styles.banner}>
        <Image
          className={styles.bannerImg}
          src={bannerImg}
          alt="vaccine banner image"
          fill={true}
          objectFit="cover"
          onClick={nextBanner}
        />

        <div className={styles.bannerText + " pointer-events-none"}>
          <h1 className="pointer-events-auto w-fit m-auto">Vaccine</h1>
          <p className="pointer-events-auto w-fit m-auto">
            BOOST your immuno stat with this simple trick?!🍆💦👌
          </p>

          <div className="pointer-events-auto">
            <BlinkButton
              onClick={() => {
                if (Math.random() < 0.7) {
                  router.push("/hospital");
                } else {
                  window.open("http://r.mtdv.me/QLG3LRwDD9", "_blank");
                }
              }}
            >
              CLICK NOW!!!!
            </BlinkButton>
          </div>
        </div>

        {/* Button to statify the requirement */}
        <div className="pointer-events-auto absolute right-0 bottom-0">
          <BlinkButton
            onClick={() => {
              router.push("/hospital");
            }}
            className="text-sm"
          >
            🏥
          </BlinkButton>
        </div>
      </div>
    </div>
  );
}

const BlinkButton = (props: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [sw, setSw] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setSw(!sw), 250);
    return () => clearInterval(interval);
  });

  return (
    <button
      className={(sw ? styles.blink : "") + " " + props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
