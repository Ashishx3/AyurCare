"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store"; // adjust path

export function Providers({ children }) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
