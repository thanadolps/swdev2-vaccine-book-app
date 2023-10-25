"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

export type ReduxProviderProps = {
  children: React.ReactNode;
};

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
