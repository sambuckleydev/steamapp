"use client";
// In this application I've opted not to use server-side rendering for simplicity of development
// in a production environment it would be better to SSR the home/landing page and then hydrate any dynamic data if required.
// There is a node module available for interacting with the Steam API https://www.npmjs.com/package/steamapi
// However for this example I'll be writing my own API implementation.

import styles from "./page.module.scss";
import React from "react";
import Search from "@/components/Search/Search";
import { LoadingProvider } from "@/context/loadingContext";

export default function Home() {
  return (
    <LoadingProvider>
      <main className={styles.main}>
        <Search />
      </main>
    </LoadingProvider>
  );
}
