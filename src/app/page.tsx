import Banner from "@/components/Banner";
import PromoteCard from "@/components/PromoteCard";
import VideoPlayer from "@/components/VideoPlayer";
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

      <PromoteCard />
    </main>
  );
}
