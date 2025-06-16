
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock timeline data
const timelineEvents = [
  {
    id: 1,
    date: "January 2020",
    title: "AlmaBetter Founded",
    description: "AlmaBetter was founded with a mission to revolutionize tech education in India.",
    category: "Milestone"
  },
  {
    id: 2,
    date: "March 2020",
    title: "First Batch of Students",
    description: "The first batch of 50 students enrolled in our Full Stack Web Development program.",
    category: "Growth"
  },
  {
    id: 3,
    date: "August 2020",
    title: "First Placement",
    description: "Our first student got placed at a leading tech company with a package of 8 LPA.",
    category: "Achievement"
  },
  {
    id: 4,
    date: "December 2020",
    title: "100 Students Milestone",
    description: "AlmaBetter reached 100 enrolled students across different programs.",
    category: "Milestone"
  },
  {
    id: 5,
    date: "April 2021",
    title: "Data Science Program Launch",
    description: "Launched our comprehensive Data Science program with industry-aligned curriculum.",
    category: "Launch"
  },
  {
    id: 6,
    date: "July 2021",
    title: "Seed Funding",
    description: "Raised seed funding to expand our operations and improve our technology platform.",
    category: "Funding"
  },
  {
    id: 7,
    date: "September 2021",
    title: "100+ Hiring Partners",
    description: "Crossed 100 hiring partners, including top tech companies and startups.",
    category: "Growth"
  },
  {
    id: 8,
    date: "January 2022",
    title: "1000 Students Milestone",
    description: "AlmaBetter reached 1000 enrolled students, marking a significant growth.",
    category: "Milestone"
  },
  {
    id: 9,
    date: "March 2022",
    title: "Masters Program Launch",
    description: "Launched our Masters Degree program in collaboration with leading universities.",
    category: "Launch"
  },
  {
    id: 10,
    date: "June 2022",
    title: "Series A Funding",
    description: "Raised Series A funding to further scale our operations and expand to new cities.",
    category: "Funding"
  },
  {
    id: 11,
    date: "October 2022",
    title: "NIRF Recognition",
    description: "Recognized as one of the top emerging ed-tech platforms by NIRF.",
    category: "Achievement"
  },
  {
    id: 12,
    date: "January 2023",
    title: "5000 Students Milestone",
    description: "Reached 5000 enrolled students, with a placement rate of 92%.",
    category: "Milestone"
  },
  {
    id: 13,
    date: "April 2023",
    title: "International Expansion",
    description: "Expanded our operations to international markets, starting with UAE and Singapore.",
    category: "Growth"
  },
  {
    id: 14,
    date: "September 2023",
    title: "AI & ML Specialization",
    description: "Launched specialized programs in Artificial Intelligence and Machine Learning.",
    category: "Launch"
  },
  {
    id: 15,
    date: "January 2024",
    title: "10,000 Students Milestone",
    description: "AlmaBetter reached 10,000 enrolled students across all programs.",
    category: "Milestone"
  }
];

const Log = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h1>
            <p className="text-lg md:text-xl text-gray-300">
              The growth story of AlmaBetter from its inception to becoming a leading tech education platform.
            </p>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">AlmaBetter Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-0 bottom-0 left-4 md:left-0 md:left-1/2 w-0.5 bg-gray-300 -ml-0.5"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {timelineEvents.map((event, index) => (
                    <div key={event.id} className={`relative flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      <div className="md:w-1/2 pl-12 md:pl-0 md:pr-8 md:text-right">
                        <Badge className={`mb-2 ${getCategoryColor(event.category)}`}>
                          {event.category}
                        </Badge>
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <p className="text-sm text-gray-500">{event.date}</p>
                        <p className="text-gray-600 mt-2">{event.description}</p>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute md:static left-0 top-0 ml-1 md:mx-auto z-10 md:w-8 w-6 h-6 md:h-8 rounded-full bg-alma-red flex items-center justify-center text-white text-sm">
                        {index + 1}
                      </div>
                      
                      <div className="hidden md:block md:w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <Card className="text-center bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-4xl font-bold text-alma-red mb-2">10,000+</h3>
                <p className="text-gray-600">Students Enrolled</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-4xl font-bold text-alma-red mb-2">92%</h3>
                <p className="text-gray-600">Placement Rate</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-4xl font-bold text-alma-red mb-2">1200+</h3>
                <p className="text-gray-600">Hiring Partners</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-4xl font-bold text-alma-red mb-2">₹12 LPA</h3>
                <p className="text-gray-600">Avg. Salary</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Helper function to get badge color based on category
const getCategoryColor = (category: string) => {
  switch (category) {
    case "Milestone":
      return "bg-blue-100 text-blue-800";
    case "Growth":
      return "bg-green-100 text-green-800";
    case "Achievement":
      return "bg-purple-100 text-purple-800";
    case "Funding":
      return "bg-yellow-100 text-yellow-800";
    case "Launch":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default Log;
