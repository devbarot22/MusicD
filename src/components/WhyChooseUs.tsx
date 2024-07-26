"use client";

import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    "title": "Expert Instructors",
    "description": "Learn from top musicians and experienced educators. Learn from top musicians and experienced educators. Learn from top musicians and experienced educators. Learn from top musicians and experienced educators."
  },
  {
    "title": "Comprehensive Curriculum",
    "description": "Wide range of courses covering all skill levels and music genres. Wide range of courses covering all skill levels and music genres. Wide range of courses covering all skill levels and music genres. Wide range of courses covering all skill levels and music genres."
  },
  {
    "title": "Interactive Learning",
    "description": "Engage with interactive lessons, quizzes, and assignments. Engage with interactive lessons, quizzes, and assignments. Engage with interactive lessons, quizzes, and assignments. Engage with interactive lessons, quizzes, and assignments."
  },
  {
    "title": "Flexible Schedule",
    "description": "Learn at your own pace with our flexible online courses. Learn at your own pace with our flexible online courses. Learn at your own pace with our flexible online courses."
  },
  {
    "title": "Community Support",
    "description": "Join a vibrant community of fellow learners and musicians. Join a vibrant community of fellow learners and musicians. Join a vibrant community of fellow learners and musicians."
  }
]

const WhyChooseUs = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col p-10 justify-center bg-slate-900">
      <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs