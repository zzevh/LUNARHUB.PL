'use client';

import Hero from "./components/Hero";
import Modes from "./components/Modes";
import Trailer from "./components/Trailer";
import Administration from "./components/Administration";
import ServerVideos from "./components/ServerVideos";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <main className="bg-[#0B090C] min-h-screen">
      <Loader />
      <Hero />
      <Modes />
      <Trailer />
      <Administration />
      <ServerVideos />
      <Footer />
    </main>
  );
}
