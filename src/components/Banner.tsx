"use client";

import { useEffect, useState } from "react";
import Image from "../../node_modules/next/image";
import styles from "./Banner.module.css";

const bannerImages = [
  "/banner/benjamin-lehman-gkZ-k3xf25w-unsplash.jpg",
  "/banner/cdc-voVYCm6xoQo-unsplash.jpg",
  "/banner/ed-us-K0DMl4NmOPo-unsplash.jpg",
  "/banner/cdc-d3fe9qJDqaI-unsplash.jpg",
];

function randBannerImg(exclude: string = ""): string {
  const newImg = bannerImages[Math.floor(Math.random() * bannerImages.length)];
  if (newImg === exclude) {
    return randBannerImg(exclude);
  }
  return newImg;
}

export default function Banner() {
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

          <a className="pointer-events-auto" href="http://r.mtdv.me/QLG3LRwDD9">
            <BlinkButton />
          </a>
        </div>
      </div>
    </div>
  );
}

const BlinkButton = () => {
  const [sw, setSw] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setSw(!sw), 250);
    return () => clearInterval(interval);
  });

  return <button className={sw ? styles.blink : ""}>CLICK NOW!!!!</button>;
};
