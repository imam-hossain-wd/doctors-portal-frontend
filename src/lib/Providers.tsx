"use client";

import { Provider } from "react-redux";
import NextUiProviders from "./NextUiProviders";
import { store } from "@/redux/store";


const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <NextUiProviders>{children}</NextUiProviders>
    </Provider>
  );
};

export default Providers;