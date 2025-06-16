
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedCourses from '../components/FeaturedCourses';
import PlacementStats from '../components/PlacementStats';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Testimonials section
const Testimonials = () => {
  return (
    <section className="py-20 bg-alma-light-grey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success <span className="text-alma-red">Stories</span>
          </h2>
          <p className="text-alma-grey max-w-2xl mx-auto">
            Hear from our alumni who transformed their careers with our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-alma-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                RS
              </div>
              <div className="ml-4">
                <h4 className="font-bold">Rahul Singh</h4>
                <p className="text-sm text-alma-grey">Software Developer @ Amazon</p>
              </div>
            </div>
            <p className="text-alma-grey">
              "The Full Stack Web Development program at AlmaBetter was transformative. The pay-after-placement model allowed me to focus on learning, and I landed a job at Amazon within 2 weeks of completing the program."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-alma-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                NP
              </div>
              <div className="ml-4">
                <h4 className="font-bold">Neha Patel</h4>
                <p className="text-sm text-alma-grey">Data Scientist @ Microsoft</p>
              </div>
            </div>
            <p className="text-alma-grey">
              "I joined AlmaBetter's Data Science program with no prior coding experience. The curriculum was well-structured, and the mentorship was exceptional. Now I'm working at Microsoft with a package I couldn't have imagined."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-alma-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                AK
              </div>
              <div className="ml-4">
                <h4 className="font-bold">Amit Kumar</h4>
                <p className="text-sm text-alma-grey">Frontend Developer @ Google</p>
              </div>
            </div>
            <p className="text-alma-grey">
              "AlmaBetter's career services team was instrumental in my job search. From resume building to interview preparation, they guided me at every step. I'm now working at Google as a Frontend Developer."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Partners section
const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-alma-red">Hiring Partners</span>
          </h2>
          <p className="text-alma-grey max-w-2xl mx-auto">
            Join our network of 1200+ hiring partners who trust AlmaBetter graduates.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Partner logos would go here */}
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-alma-grey font-medium">LOGO {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize animations for elements with the animate-gsap class
    const animateElements = document.querySelectorAll('.animate-gsap');
    
    animateElements.forEach((element) => {
      gsap.fromTo(element,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          }
        }
      );
    });

    return () => {
      // Clean up ScrollTrigger instances when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCourses />
        <PlacementStats />
        <Testimonials />
        <Partners />
        
        {/* Call to Action Section */}
        <section className="py-20 bg-alma-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to <span className="text-alma-red">Launch Your Career</span> in Tech?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of successful AlmaBetter alumni in the tech industry. Apply now and start your journey to success.
            </p>
            <a href="/apply-now" className="bg-alma-red hover:bg-alma-dark-red text-white font-bold py-3 px-8 rounded-md text-lg inline-block">
              Apply Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
