"use client";
import "./globals.css";
import { ToastContainer } from "react-toastify";

import { Slider, Cards, UseFul } from "@/components";

export default function Home() {
  return (
    <div className="mt-6">
      <Slider />
      <Cards />
      <UseFul />
      <ToastContainer />
    </div>
  );
}
