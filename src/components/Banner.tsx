"use client";

import { useEffect, useState } from "react";
import Image from "../../node_modules/next/image";
import styles from "./Banner.module.css";

const bannerImages = [
  "/banner/benjamin-lehman-gkZ-k3xf25w-unsplash.jpg",
  "/banner/cdc-voVYCm6xoQo-unsplash.jpg",
  "/banner/ed-us-K0DMl4NmOPo-unsplash.jpg",
];

function randBannerImg(exclude: string = ""): string {
  const newImg = bannerImages[Math.floor(Math.random() * bannerImages.length)];
  if (newImg === exclude) {
    return randBannerImg(exclude);
  }
  return newImg;
}

export default function Banner() {
  const [bannerImg, setBannerImg] = useState(randBannerImg());
  useEffect(() => {
    const interval = setInterval(() => setBannerImg(randBannerImg()), 3000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className={styles.banner}>
        <Image
          className={styles.bannerImg}
          src={bannerImg}
          alt="vaccine banner image"
          fill={true}
          objectFit="cover"
        />

        <div className={styles.bannerText}>
          <h1>Vaccine</h1>
          <p>Boost your immuno stat with this simple trick</p>

          <a href="http://r.mtdv.me/QLG3LRwDD9">
            <button>CLICK HERE!!!!</button>
          </a>
        </div>
      </div>
    </div>
  );
}
