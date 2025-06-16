
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Placements = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Placements</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Our track record of placing students in top tech companies speaks for itself.
            </p>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Placement Statistics</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-4xl font-bold text-alma-red mb-2">1200+</h3>
                <p className="text-gray-600">Hiring Partners</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-4xl font-bold text-alma-red mb-2">94%</h3>
                <p className="text-gray-600">Placement Rate</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-4xl font-bold text-alma-red mb-2">₹12 LPA</h3>
                <p className="text-gray-600">Highest CTC</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-4xl font-bold text-alma-red mb-2">15 Days</h3>
                <p className="text-gray-600">Average Placement Time</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Hiring Partners */}
          <h2 className="text-3xl font-bold mb-8 text-center">Our Hiring Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">LOGO {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Placement Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Placement Process</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 left-5 md:left-1/2 w-0.5 bg-gray-300 -ml-0.5"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex md:flex-row flex-col md:justify-between items-start">
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Resume Building</h3>
                    <p className="text-gray-600">Our career experts help you craft a professional resume that stands out to recruiters.</p>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-alma-red rounded-full text-white font-bold md:mx-auto">1</div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
                
                <div className="relative flex md:flex-row flex-col md:justify-between items-start">
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-alma-red rounded-full text-white font-bold md:mx-auto">2</div>
                  <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Mock Interviews</h3>
                    <p className="text-gray-600">Practice with industry professionals to prepare for technical and HR interviews.</p>
                  </div>
                </div>
                
                <div className="relative flex md:flex-row flex-col md:justify-between items-start">
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Company Matching</h3>
                    <p className="text-gray-600">We match your profile with suitable companies from our extensive network.</p>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-alma-red rounded-full text-white font-bold md:mx-auto">3</div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
                
                <div className="relative flex md:flex-row flex-col md:justify-between items-start">
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-alma-red rounded-full text-white font-bold md:mx-auto">4</div>
                  <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Interview Coordination</h3>
                    <p className="text-gray-600">We schedule interviews and provide continuous support throughout the process.</p>
                  </div>
                </div>
                
                <div className="relative flex md:flex-row flex-col md:justify-between items-start">
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Offer Negotiation</h3>
                    <p className="text-gray-600">Our placement team helps you negotiate the best possible offer package.</p>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-alma-red rounded-full text-white font-bold md:mx-auto">5</div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Placements;
