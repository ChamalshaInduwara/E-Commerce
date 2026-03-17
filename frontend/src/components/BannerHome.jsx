import React, { useEffect, useRef } from "react";
import { bannerHomeStyles } from "../assets/dummyStyles";
import video from "../assets/bannervideo.mp4";
import Navbar from "./Navbar";

const BannerHome = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute("autoplay");
    }
  }, []);
  return (
    <div className={bannerHomeStyles.container}>
      <div className={bannerHomeStyles.navbarWrapper}>
        <Navbar />
      </div>

      {/* Bg video */}
      <div className={bannerHomeStyles.videoContainer}>
        <video
          ref={videoRef}
          src={video}
          className={bannerHomeStyles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/fallback.jpg"
          role="presentation">
            <source src={video} type="video/mp4" />
          </video>
      </div>

      {/* Content */}
      <div className={bannerHomeStyles.contentContainer}>
        <div className={bannerHomeStyles.h1Container}>
          <h1 style={bannerHomeStyles.playfairFont} className={bannerHomeStyles.h1Text}>
            <span className={bannerHomeStyles.h1SpanGray}>Love you more</span>

            <span className={bannerHomeStyles.h1SpanYellow}>with each tick-tock</span>
          </h1>
          <p className={bannerHomeStyles.subtext}>
            Discover our exclusive collection of watches, where timeless elegance meets modern design. Find the perfect timepiece that reflects your unique style and makes every moment unforgettable.
          </p>

        </div>

      </div>
    </div>
  );
};

export default BannerHome;
