import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "../components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aravindhan Ananthavel",
    feedback:
      "They are really doing a great job. My heartfelt wishes for Mohana Air Conditioner to grow even more.",
    rating: 5,
  },
  {
    name: "Nisha Suresh",
    feedback:
      "Recently,I had an Ac service done.He was professional and skilled in his work.I'm very satisfied with his service and would definitely prefer to continue with him for future maintenance",
    rating: 5,
  },
  {
    name: "Bharathi M",
    feedback:
      "I recently had the pleasure of getting my AC installed, and I must say the experience was exceptional. From the initial consultation to the smooth installation, Mr. Mani was incredibly helpful throughout the entire process. He took the time to explain the different types of ACs available and helped me choose the best one based on my needs and preferences. His expertise and guidance made the decision much easier. The installation was seamless, and the team ensured everything was set up perfectly. I truly appreciate Mr. Mani's professionalism and excellent customer service. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sakthi Vel",
    feedback:
      "Had a great experience with my AC installation. Mr Mani clearly explained the options and helped me pick the right one. Installation was smooth and everything works perfectly. Really happy with the service!",
    rating: 4,
  },
  {
    name: "Aravind Kumar",
    feedback: "Good work👌🏻 bro I am impress your working skills 🫡♥️",
    rating: 4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="pt-32 pb-32 px-4 relative overflow-visible"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by hundreds of happy customers across Chennai. Your
            satisfaction is our goal.
          </p>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          dotListClass="custom-dot-list"
          itemClass="px-4"
          showDots={true}
          pauseOnHover={true}
        >
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              className="p-6 flex flex-col justify-between rounded-3xl min-h-[180px] w-full bg-card shadow-md transition-none"
            >
              <div className="mb-4 space-y-3 overflow-y-auto max-h-40 pr-2 custom-scroll">
                <p className="text-muted-foreground text-base leading-relaxed">
                  “{t.feedback}”
                </p>
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <div className="flex gap-1 mt-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
