import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="py-12 md:py-16 lg:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
              Learn new skills online with ease
            </h1>
            <p className="text-lg sm:text-xl text-[18px] leading-[27px] text-gray-700 max-w-lg">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
            <div className="flex flex-row sm:flex-row sm:flex-wrap gap-4">
              <Button className="text-sm sm:text-base h-[48px] w-full sm:w-[178px] px-[24px] py-[12px] rounded-[5px] bg-black text-white hover:bg-gray-800">
                Start learning now
              </Button>
              <Button className="text-sm sm:text-base h-[48px] w-full sm:w-[178px] px-2 py-3 border border-gray-300 text-black bg-white rounded-md">
                Explore Courses
              </Button>
            </div>
          </div>

          <div className="relative w-full">
            <div className="bg-gray-100 overflow-hidden">
              <Image
                src={"/heroSection_image.png"}
                alt="Hero Section Image"
                className="object-cover"
                layout="responsive"
                width={720}
                height={900}
                priority
              />
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <p className="text-2xl sm:text-3xl font-bold text-black text-center sm:text-left">
            Trusted by 2000+ companies worldwide.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center justify-center">
            <Image src={"/logo1.png"} alt="Logo 1" width={123} height={38} />
            <Image src={"/logo2.png"} alt="Logo 2" width={123} height={38} />
            <Image src={"/logo3.png"} alt="Logo 3" width={123} height={38} />
            <Image
              src={"/logo4.png"}
              alt="Logo 4"
              width={123}
              height={38}
              className="hidden sm:block"
            />
            <Image
              src={"/logo5.png"}
              alt="Logo 5"
              width={123}
              height={38}
              className="hidden sm:block"
            />
            <Image
              src={"/logo6.png"}
              alt="Logo 6"
              width={123}
              height={38}
              className="hidden sm:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
