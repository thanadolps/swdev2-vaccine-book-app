import { StaticImport } from "../../node_modules/next/dist/shared/lib/get-img-props";

export function prependBasePath(src: string | StaticImport): string {
  if (process.env.BASE_PATH === undefined) {
    throw new Error("BASE_PATH envar is undefined");
  }

  return process.env.BASE_PATH + src;
}
