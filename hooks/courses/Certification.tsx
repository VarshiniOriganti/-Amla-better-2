
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Mock certification courses
const certificationCourses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Master frontend & backend development with MERN stack and become a job-ready full stack developer.",
    duration: "30 Weeks",
    mode: "Online",
    fee: "₹0 Upfront",
    image: "https://images.credly.com/images/08171751-ba81-4c83-9865-d78eb85e21ca/image.png",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description: "Learn data analysis, visualization, machine learning and become a professional data scientist.",
    duration: "30 Weeks",
    mode: "Online",
    fee: "₹0 Upfront",
    image: "https://images.credly.com/images/99be8876-001a-430c-b73d-76835c7eee37/PP_Machine-Learning.png",
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow"]
  },
  {
    id: 3,
    title: "DevOps Engineering",
    description: "Learn to automate development pipelines and manage cloud infrastructure with DevOps practices.",
    duration: "24 Weeks",
    mode: "Online",
    fee: "₹0 Upfront",
    image: "https://tse3.mm.bing.net/th?id=OIP.ZMTPqF_oZkjSXiTxQOFBlgHaHa&pid=Api&P=0&h=180",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"]
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Master user interface and user experience design principles to create engaging digital products.",
    duration: "24 Weeks",
    mode: "Online",
    fee: "₹0 Upfront",
    image: "https://images.credly.com/images/1c044152-aa16-4b59-b923-512e805a5c0d/image.png",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Wireframing"]
  }
];

const Certification = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Certification Programs</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Industry-aligned certification programs with guaranteed job placements. Pay only when you get placed.
            </p>
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Certification Courses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificationCourses.map(course => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden flex items-center justify-center bg-white p-4">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-gray-500">Duration</p>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Mode</p>
                      <p className="font-semibold">{course.mode}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-500">Fee Structure</p>
                      <p className="font-semibold">{course.fee}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 mb-2">Skills you will learn:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/apply-now" className="w-full">
                    <Button className="w-full bg-alma-red hover:bg-alma-dark-red">Apply Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Certification Programs?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-alma-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Pay After Placement</h3>
              <p className="text-gray-600">
                No upfront fee. Pay only when you get placed with a minimum salary of 5 LPA.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-alma-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Industry-Ready Curriculum</h3>
              <p className="text-gray-600">
                Curriculum designed by industry experts to make you job-ready from day one.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-alma-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Career Support</h3>
              <p className="text-gray-600">
                Dedicated placement team to help you prepare for interviews and land your dream job.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-alma-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Tech Career?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Apply now for our certification programs and start your journey towards a successful career in tech.
          </p>
          <Link to="/apply-now">
            <Button variant="outline" size="lg" className="bg-white text-alma-red hover:bg-gray-100">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Certification;
