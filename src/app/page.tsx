import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import Image from "../../node_modules/next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="">
      <div
        style={{
          backgroundImage: "url(/cover/vaccine-6017110_120.png)",
        }}
        className="fixed right-0 left-0 top-0 bottom-0 w-full h-full bg-repeat bg-fixed -z-10 brightness-50 opacity-25 contrast-75"
      ></div>

      <Banner />
      <div className="flex flex-wrap justify-center md:mx-16 py-16 gap-8">
        <ProductCard
          name="Chulalongkorn Hospital"
          imgSrc="/hospital/chula.jpg"
        />
        <ProductCard
          name="Rajavithi Hospital"
          imgSrc="/hospital/rajavithi.jpg"
        />
        <ProductCard
          name="Thammasat University Hospital"
          imgSrc="/hospital/thammasat.jpg"
        />
      </div>
      <div className="fixed right-0 bottom-0 w-60 h-60">
        <Image src="/cover/medical-5459630_1280.png" alt="support" fill />
      </div>
    </main>
  );
}
