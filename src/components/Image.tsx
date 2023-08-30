import { prependBasePath } from "@/utils/util";
import { forwardRef } from "react";
import NextImage, { ImageProps } from "../../node_modules/next/image";

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  return <NextImage ref={ref} {...props} src={prependBasePath(props.src)} />;
});

export default Image;
