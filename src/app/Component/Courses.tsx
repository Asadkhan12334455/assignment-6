import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const categories = [
  {
    image: "/course1.png",
    title: "UX/UI Design 201",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    category: "Design",
    rating: 4.8,
    price: "$400",
  },
  {
    image: "/course2.png",
    title: "Introduction to Python",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    category: "Programming",
    rating: 4.7,
    price: "$400",
  },
  {
    image: "/course3.png",
    title: "Data Analysis for Beginners",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    category: "Business",
    rating: 4.5,
    price: "$400",
  },
  {
    image: "/course4.png",
    title: "Art Specialization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    category: "Art",
    rating: 4.9,
    price: "$400",
    className: "hidden sm:block",
  },
  {
    image: "/course5.png",
    title: "Law",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    category: "Law",
    rating: 4.6,
    price: "$400",
    className: "hidden sm:block",
  },
  {
    image: "/course6.png",
    title: "Introduction to Webflow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    category: "Teach",
    rating: 4.8,
    price: "$400",
    className: "hidden sm:block",
  },
];

const Courses: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[48px] sm:text-[56px] font-bold text-[#000000]">
          Courses
        </h2>
        <p className="text-[16px] sm:text-[20px] text-[#000000] mt-4">
          Your Ultimate Guide to Learning
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex justify-center mb-16 gap-8">
          <span className="text-[14px] sm:text-[16px] text-[#000000] border-b-[1px] border-[#676767]">
            Popular
          </span>
          <span className="text-[14px] sm:text-[16px] text-[#000000]">
            Recommended
          </span>
          <span className="text-[14px] sm:text-[16px] text-[#000000]">
            Best Price
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {categories.map((course, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-black  ${course.className}`}
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={course.image}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="flex justify-between items-center mb-2 px-5 gap-8">
                <span className="text-sm font-medium text-[#000000]">
                  {course.category}
                </span>
                <span className="text-sm font-bold text-[#000000]">
                  ⭐ {course.rating.toFixed(1)}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#000000] mb-2">
                {course.title}
              </h3>
              <p className="text-[#000000] text-[14px] sm:text-[17px] mb-4">
                {course.description}
              </p>
              <div className="flex justify-between items-center">
                <Button className="text-black border-2 border-black bg-white transition-colors hover:bg-black hover:text-white">
                  Enroll Now
                </Button>
                <span className="text-[14px] font-bold text-[#000000]">
                  {course.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="text-black border-2 border-black bg-white transition-colors hover:bg-black hover:text-white">
            View All Courses
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Courses;
