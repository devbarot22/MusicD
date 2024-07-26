"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { title } from "process";

interface webiFeatured {
  title: string;
  description: string;
  slug: string;
  isFeatured: boolean;
}

const featuredWebinar = [
  {
    title: "Innovative Music Teaching Methods",
    description:
      "Explore modern techniques and strategies for effective music teaching.",
    slug: "innovative-music-teaching-methods",
    isFeatured: true,
  },
  {
    title: "Using Technology in Music Education",
    description:
      "Learn how to integrate technology into your music teaching practices.",
    slug: "using-technology-in-music-education",
    isFeatured: true,
  },
  {
    title: "Mastering Online Music Lessons",
    description:
      "Tips and best practices for conducting successful online music lessons.",
    slug: "mastering-online-music-lessons",
    isFeatured: true,
  },
  {
    title: "Creating Engaging Music Curriculum",
    description:
      "Develop engaging and effective music curriculum for various age groups.",
    slug: "creating-engaging-music-curriculum",
    isFeatured: false,
  },
  {
    title: "Music Production for Educators",
    description:
      "A guide to music production techniques tailored for music educators.",
    slug: "music-production-for-educators",
    isFeatured: true,
  },
  {
    title: "Incorporating Music History in Lessons",
    description: "Strategies for integrating music history into your teaching.",
    slug: "incorporating-music-history-in-lessons",
    isFeatured: false,
  },
  {
    title: "Assessment Strategies in Music Education",
    description:
      "Effective assessment methods for evaluating student progress in music.",
    slug: "assessment-strategies-in-music-education",
    isFeatured: true,
  },
  {
    title: "Jazz Improvisation for Students",
    description: "Teach your students the art of jazz improvisation.",
    slug: "jazz-improvisation-for-students",
    isFeatured: false,
  },
  {
    title: "Choral Conducting Techniques",
    description: "Advanced techniques for conducting choirs of all sizes.",
    slug: "choral-conducting-techniques",
    isFeatured: true,
  },
];

const UpcomingWebinars = () => {
  const featuredWebinars = featuredWebinar.filter(
    (featuredWebinar: webiFeatured) => featuredWebinar.isFeatured
  );

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-6 py-4 rounded-lg border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
