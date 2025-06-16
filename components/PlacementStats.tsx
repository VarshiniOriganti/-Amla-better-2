
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stats = [
  { id: 1, number: "1200+", label: "Hiring Partners" },
  { id: 2, number: "₹12 LPA", label: "Highest CTC" },
  { id: 3, number: "94%", label: "Placement Rate" },
  { id: 4, number: "15 Days", label: "Average Placement Time" },
];

const PlacementStats = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef<HTMLDivElement[]>([]);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Counter animation
    statsRef.current.forEach((stat, index) => {
      const numberElement = stat.querySelector('.counter-value');
      
      gsap.fromTo(stat,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-alma-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-alma-red">Placement</span> Success
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We've helped thousands of learners transition into high-paying tech jobs through our placement-focused programs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.id} ref={addToRefs}>
              <Card className="bg-gray-900 border-gray-800 text-center h-full">
                <CardContent className="pt-6">
                  <h3 className="counter-value text-4xl font-bold text-alma-red mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-300">{stat.label}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementStats;
