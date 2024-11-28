import React from "react";
import Image from "next/image";

const CustomerTestimonial = () => {
  const testimonials = [
    {
      image: "/team3.png",
      name: "Joseph Ngumbau",
      role: "Software Developer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      image: "/team6.png",
      name: "Erick Kipkemboi",
      role: "Scrum Master",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      image: "/team1.png",
      name: "Stephen Kerubo",
      role: "UI/UX Designer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
  ];

  return (
    <section className="mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="text-[36px] sm:text-[48px] font-bold text-[#000000] text-center">
          Customer Testimonials
        </h2>
        <p className="text-[16px] sm:text-[20px] text-[#000000] mt-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((customer, index) => (
          <div
            key={index}
            className="border hover:shadow-lg hover:shadow-black border-black p-6 bg-white shadow-md flex flex-col justify-between"
          >
            <div className="flex mb-4 text-[20px] sm:text-[24px] text-black py-2">
              ★★★★★
            </div>
            <p className="text-[14px] sm:text-[16px] text-[#000000] mb-4">
              {customer.testimonial}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Image
                src={customer.image}
                alt={customer.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h3 className="text-[16px] sm:text-[18px] font-bold text-[#000000]">
                  {customer.name}
                </h3>
                <p className="text-[14px] sm:text-[16px] text-[#000000]">
                  {customer.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}{/* Pagination Controls */}
<div className="flex justify-between items-center mt-8 px-4 sm:px-8">
  {/* Dots on the left */}
  <div className="flex gap-2">
    <span className="w-2 h-2 bg-[#000000] rounded-full"></span>
    <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
    <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
    <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
    <span className="w-2 h-2 bg-[#8D8D8D] rounded-full"></span>
  </div>
  
  {/* Arrow image on the right */}
  <Image
    src="/Slider Buttons.png"
    alt="slider arrow"
    width={111}
    height={48}
    className="cursor-pointer"
  />
</div>

    </section>
  );
};

export default CustomerTestimonial;
