"use client";

import { useWindowListener } from "@/hooks/window";
import { Button, Paper } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const vidSrc = "/getvaccine.mp4";

export default function PromoteCard() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Prevent right-clicking on the video
  useWindowListener("contextmenu", (e) => {
    if (e.target instanceof HTMLVideoElement) {
      e.preventDefault();
    }
  });

  return (
    <Paper className="m-16">
      <VideoPlayer src={vidSrc} isPlaying={isPlaying} />

      <div className="flex flex-row justify-center items-center gap-8 py-2">
        <span className="h-min">
          Now {isPlaying ? "playing" : "pausing on"}:{" "}
          <Link href={vidSrc} className="text-violet-900">
            "<u>Get Vaccinated</u>"
          </Link>
        </span>
        <Button onClick={() => setIsPlaying((x) => !x)} variant="outlined">
          {isPlaying ? "Pause" : "Play"}
        </Button>
      </div>
    </Paper>
  );
}
