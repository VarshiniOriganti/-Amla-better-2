
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock master's degree programs
const mastersDegrees = [
  {
    id: 1,
    title: "Master of Computer Applications (MCA)",
    description: "A comprehensive Master's program in Computer Applications with specialization in modern technologies.",
    duration: "2 Years",
    mode: "Online",
    fee: "₹1,25,000",
    specializations: ["AI & ML", "Full Stack Development", "Data Science"],
    universities: ["Jain University", "Chandigarh University"],
    image: "https://www.giet.ac.in/public/assets/images/giet00332.jpeg"
  },
  {
    id: 2,
    title: "Master of Science in Data Science",
    description: "Master the art and science of data with our comprehensive Data Science program.",
    duration: "2 Years",
    mode: "Online",
    fee: "₹1,50,000",
    specializations: ["Business Analytics", "Big Data", "AI Applications"],
    universities: ["Jain University", "Chandigarh University"],
    image: "https://collegevidya.com/blog/wp-content/uploads/2022/09/Top-10-college-for-mba-in-data-science-course.jpg"
  }
];

const MastersDegree = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Master's Degree Programs</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Earn a recognized Master's degree in tech fields through our university partnerships.
            </p>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Master's Programs</h2>
          
          <div className="grid grid-cols-3 gap-8">
            {mastersDegrees.map(program => (
              <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-gray-500">Duration</p>
                      <p className="font-semibold">{program.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Mode</p>
                      <p className="font-semibold">{program.mode}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Fee Structure</p>
                      <p className="font-semibold">{program.fee}</p>
                    </div>
                  </div>
                  
                  <Tabs defaultValue="specializations">
                    <TabsList className="mb-2">
                      <TabsTrigger value="specializations">Specializations</TabsTrigger>
                      <TabsTrigger value="universities">Partner Universities</TabsTrigger>
                    </TabsList>
                    <TabsContent value="specializations">
                      <div className="flex flex-wrap gap-2">
                        {program.specializations.map((spec, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="universities">
                      <div className="flex flex-wrap gap-2">
                        {program.universities.map((univ, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {univ}
                          </span>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
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
      
      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Our Master's Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-alma-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Recognized Degree</h3>
              <p className="text-gray-600">
                Earn a nationally recognized Master's degree from our partner universities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-alma-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Industry-Aligned</h3>
              <p className="text-gray-600">
                Curriculum designed with industry partners to ensure relevance and employability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-alma-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
              <p className="text-gray-600">
                Online learning with live classes and recorded sessions for flexibility.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-alma-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Career Advancement</h3>
              <p className="text-gray-600">
                Take your career to the next level with advanced knowledge and skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Is the degree recognized?</h3>
              <p className="text-gray-600">
                Yes, all our Master's degrees are recognized by the UGC and awarded by our partner universities.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Can I study while working?</h3>
              <p className="text-gray-600">
                Yes, our programs are designed to be flexible, with weekend classes and recorded sessions to accommodate working professionals.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">What are the eligibility criteria?</h3>
              <p className="text-gray-600">
                For most programs, a bachelor's degree with minimum 50% marks is required. Specific programs may have additional requirements.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Is placement assistance provided?</h3>
              <p className="text-gray-600">
                Yes, we provide placement assistance to all our Master's degree students through our network of 1200+ hiring partners.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-alma-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Apply now for our Master's programs and take the next step in your educational journey.
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

export default MastersDegree;
