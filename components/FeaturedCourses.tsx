
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Mock course data
const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "Certification",
    description: "Master frontend & backend development with MERN stack and become a job-ready full stack developer.",
    duration: "30 Weeks",
    mode: "Online",
    fee: "₹0 Upfront",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    category: "Certification",
    description: "Learn data analysis, visualization, machine learning and become a professional data scientist.",
    duration: "30 Weeks",
    mode: "Online",
    fee: "₹0 Upfront",
  },
  {
    id: 3,
    title: "Master of Computer Applications",
    category: "Master's Degree",
    description: "Earn a Master's degree in Computer Applications with specialization in AI & ML or Full Stack Development.",
    duration: "2 Years",
    mode: "Online",
    fee: "₹1,25,000",
  },
];

const FeaturedCourses = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Animate the heading
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        }
      }
    );

    // Animate each card with stagger
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  // Add cards to the refs array
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-alma-red">Courses</span>
          </h2>
          <p className="text-alma-grey max-w-2xl mx-auto">
            Choose from our career-focused courses designed to help you upskill and get placed in top companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {courses.map((course, index) => (
            <div key={course.id} ref={addToRefs}>
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-2">
                    <span className="text-xs font-medium uppercase text-alma-red bg-red-50 px-2 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-alma-grey">Duration</p>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                    <div>
                      <p className="text-alma-grey">Mode</p>
                      <p className="font-semibold">{course.mode}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-alma-grey">Fee Structure</p>
                      <p className="font-semibold">{course.fee}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/apply-now" className="w-full">
                    <Button className="w-full bg-alma-red hover:bg-alma-dark-red">Apply Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/courses">
            <Button variant="outline" className="border-alma-red text-alma-red hover:bg-alma-red hover:text-white">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
