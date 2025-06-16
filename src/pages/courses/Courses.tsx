import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-alma-light-grey py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-alma-red">Courses</span></h1>
            <p className="text-xl text-alma-grey max-w-3xl mx-auto mb-8">
              Choose from our industry-leading programs designed to launch your tech career
            </p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Certification Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-2">Certification Courses</h3>
                    <p className="text-alma-grey mb-4">Industry-recognized programs to fast-track your career</p>
                    <Link to="/courses/certification">
                      <Button className="bg-alma-red hover:bg-alma-dark-red">
                        Explore Certifications
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Master's Degree Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-green-50 to-blue-50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-2">Master's Degree</h3>
                    <p className="text-alma-grey mb-4">UGC-recognized degrees from top universities</p>
                    <Link to="/courses/masters-degree">
                      <Button className="bg-alma-red hover:bg-alma-dark-red">
                        Explore Degrees
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-alma-light-grey py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Not sure which course is right for you?</h2>
            <p className="text-xl text-alma-grey max-w-3xl mx-auto mb-8">
              Our career counselors are here to help you choose the best program based on your goals and background.
            </p>
            <Link to="/apply-now">
              <Button className="bg-alma-red hover:bg-alma-dark-red text-lg px-8 py-6">
                Talk to a Counselor
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
