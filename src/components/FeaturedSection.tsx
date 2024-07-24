'use client'

import React from 'react'
import courseData from "@/data/music_courses.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image'


interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string,
}


const FeaturedSection = () => {

  const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div
    className='py-12 bg-gray-900'
    >
      <div className="">
        <div className="text-center">
          <h2 className='text-base text-teal-600 font-semibold tracking-wide'>Featured Courses</h2>
          <p className='m-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn from the best</p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course:Course) => (
            <div className='flex justify-center' key={course.id}>
              <BackgroundGradient
              className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm' 
              >
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <Image src={`/${course.image}`} width={240} height={300} alt={'Image'}/>
                  <p>{course.title}</p>
                  <p>{course.description}</p>
                  <Link href={`/courses/${course.slug}`}>
                  Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"} className='px-3 py-4 rounded-xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
        View All Courses
        </Link>
      </div>
    </div>
  )
}

export default FeaturedSection