
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock masterclass data
const upcomingMasterclasses = [
  {
    id: 1,
    title: "Building Modern Web Applications with React",
    instructor: "Ankit Sharma",
    instructorRole: "Senior Engineer @ Amazon",
    date: "June 5, 2024",
    time: "6:00 PM - 8:00 PM IST",
    participants: 250,
    image: "https://www.katasis.com/wp-content/uploads/2022/03/5c6b41f002d7d-scaled.jpg",
    isFree: true,
    tag: "Web Development"
  },
  {
    id: 2,
    title: "Introduction to Machine Learning with Python",
    instructor: "Priya Mehta",
    instructorRole: "Data Scientist @ Microsoft",
    date: "June 10, 2024",
    time: "7:00 PM - 9:00 PM IST",
    participants: 200,
    image: "https://tse2.mm.bing.net/th?id=OIP.bMN_nnsMOXyzHn8oFlVSiQHaEK&pid=Api&P=0&h=180",
    isFree: true,
    tag: "Data Science"
  },
  {
    id: 3,
    title: "System Design for Interviews",
    instructor: "Rahul Kumar",
    instructorRole: "Tech Lead @ Google",
    date: "June 15, 2024",
    time: "6:30 PM - 8:30 PM IST",
    participants: 180,
    image: "https://www.briansnotes.io/wp-content/uploads/2021/07/system-design-interview-og.jpg",
    isFree: true,
    tag: "System Design"
  }
];

const Masterclass = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Tech Masterclasses</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Learn from industry experts through our live masterclasses on various tech topics.
            </p>
            <Button className="mt-6 bg-alma-red hover:bg-alma-dark-red" onClick={() => navigate('/apply-now')}>
              Register Now
            </Button>
          </div>
        </div>
      </section>
      
      {/* Upcoming Masterclasses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Upcoming Masterclasses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingMasterclasses.map(masterclass => (
              <Card key={masterclass.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={masterclass.image} 
                    alt={masterclass.title}
                    className="w-full h-full object-cover"
                  />
                  {masterclass.isFree && (
                    <div className="absolute top-2 right-2 bg-alma-red text-white text-xs font-bold px-2 py-1 rounded">
                      FREE
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    {masterclass.tag}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{masterclass.title}</CardTitle>
                  <div className="flex items-center mt-1">
                    <div className="mr-2 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                      {masterclass.instructor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{masterclass.instructor}</p>
                      <p className="text-xs text-gray-500">{masterclass.instructorRole}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-alma-red" />
                      <span>{masterclass.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-alma-red" />
                      <span>{masterclass.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-alma-red" />
                      <span>{masterclass.participants} participants registered</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-alma-red hover:bg-alma-dark-red">
                    Register Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-alma-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our masterclasses are just the beginning. Explore our comprehensive courses to launch your tech career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" className="bg-white text-alma-red hover:bg-gray-100" onClick={() => navigate('/courses/certification')}>
              Explore Courses
            </Button>
            <Button className="bg-alma-black hover:bg-gray-900" onClick={() => navigate('/apply-now')}>
              Apply Now
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Masterclass;
