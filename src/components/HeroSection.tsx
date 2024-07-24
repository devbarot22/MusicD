import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="min-h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="h-screen p-4 relative z-10 w-full text-center flex flex-col justify-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 h-screen"
          fill="white"
        />
        <h1 className="md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master The Art Of Music With Muzic
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-400 max-w-xl mx-auto">
          Discover and enroll in a variety of music courses, from beginner
          guitar lessons to advanced music theory. Learn from experienced
          instructors and enhance your musical skills with our online music
          education platform. Join now and start your musical journey today!
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
