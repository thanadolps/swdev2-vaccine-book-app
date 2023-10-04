import { forwardRef, useEffect, useRef } from "react";

export type VideoPlayerProps = {
  src: string;
  isPlaying: boolean;
};

export default function VideoPlayer(props: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (props.isPlaying) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }, [props.isPlaying]);

  return <video src={props.src} ref={ref} loop />;
}
