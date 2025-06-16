
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Tutorial Card Component
const TutorialCard = ({ tutorial }: { tutorial: any }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
    <div className="h-48 bg-gray-100 overflow-hidden flex items-center justify-center">
      <img 
        src={tutorial.image} 
        alt={tutorial.title} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          console.error(`Failed to load image: ${tutorial.image}`);
          target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
          target.onerror = null; // Prevent infinite loop
          target.className = 'w-full h-full object-contain p-4';
        }}
        onLoad={(e) => {
          const img = e.target as HTMLImageElement;
          if (img.naturalWidth <= 1 || img.naturalHeight <= 1) {
            // Image loaded but too small
            img.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
            img.className = 'w-full h-full object-contain p-4';
          }
        }}
      />
    </div>
    <CardHeader className="flex-1">
      <div className="flex items-center justify-between mb-2">
        <span className="bg-alma-red/10 text-alma-red text-xs px-2 py-1 rounded-full">
          {tutorial.level}
        </span>
        <span className="text-gray-500 text-xs">{tutorial.duration}</span>
      </div>
      <CardTitle className="text-lg">{tutorial.title}</CardTitle>
      <CardDescription className="line-clamp-2">{tutorial.description}</CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      <p className="text-sm text-gray-500">By {tutorial.author}</p>
    </CardContent>
    <CardFooter>
      <Link to={`/tutorials/${tutorial.id}`} className="w-full">
        <Button className="w-full bg-alma-red hover:bg-alma-dark-red">
          Start Tutorial
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

// Mock tutorial data
const tutorials = {
  webDevelopment: [
    {
      id: 6,
      title: "Advanced Web Development",
      description: "Take your web development skills to the next level with advanced concepts and techniques.",
      level: "Advanced",
      duration: "10 hours",
      author: "AlmaBetter Team",
      image: "https://tse1.mm.bing.net/th?id=OIP.ChJpFT713RPfeOcMOwxJLAHaEK&pid=Api&P=0&h=180"
    },
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master both frontend and backend development to build complete web applications.",
      level: "Advanced",
      duration: "8 hours",
      author: "AlmaBetter Team",
      image: "https://tse4.mm.bing.net/th?id=OIP.czUdRYqlNppGhruLBUsTmwHaEK&pid=Api&P=0&h=180"
    },
    {
      id: 2,
      title: "HTML & CSS Fundamentals",
      description: "Learn the basics of HTML and CSS to build modern web pages.",
      level: "Beginner",
      duration: "2 hours",
      author: "AlmaBetter Team",
      image: "https://tse3.mm.bing.net/th?id=OIP.xGT1LVE_esmX_1i_bDirjAHaEK&pid=Api&P=0&h=180"
    },
    {
      id: 3,
      title: "JavaScript Essentials",
      description: "Master the core concepts of JavaScript programming language.",
      level: "Beginner",
      duration: "3 hours",
      author: "AlmaBetter Team",
      image: "https://i.ytimg.com/vi/U70eNmgkisE/maxresdefault.jpg"
    },
    {
      id: 4,
      title: "React.js for Beginners",
      description: "Get started with React.js and build interactive UIs.",
      level: "Intermediate",
      duration: "4 hours",
      author: "AlmaBetter Team",
      image: "https://tse3.mm.bing.net/th?id=OIP.0HvSu5ua_aiSkqbIfLU8lwHaE8&pid=Api&P=0&h=180"
    },
    {
      id: 5,
      title: "Node.js Backend Development",
      description: "Learn server-side JavaScript with Node.js and Express.",
      level: "Intermediate",
      duration: "5 hours",
      author: "AlmaBetter Team",
      image: "https://dewanict.com/wp-content/uploads/2024/03/nodejs_cover_photo_smaller_size.png"
    }
  ],
  dataScience: [
    {
      id: 5,
      title: "Python for Data Science",
      description: "Learn Python programming for data analysis and visualization.",
      level: "Beginner",
      duration: "3 hours",
      author: "AlmaBetter Team",
      image: "https://www.aiche.org/sites/default/files/images/courses/lead_custom_image_ela271.jpg"
    },
    {
      id: 6,
      title: "Data Analysis with Pandas",
      description: "Master data manipulation and analysis with the pandas library.",
      level: "Intermediate",
      duration: "4 hours",
      author: "AlmaBetter Team",
      image: "https://i.ytimg.com/vi/GPVsHOlRBBI/maxresdefault.jpg"
    },
    {
      id: 7,
      title: "Data Visualization with Matplotlib",
      description: "Create insightful visualizations using Python's Matplotlib.",
      level: "Intermediate",
      duration: "3 hours",
      author: "AlmaBetter Team",
      image: "https://tse1.mm.bing.net/th?id=OIP.U84ux3eiLYEh8Y64HRG5PAHaEK&pid=Api&P=0&h=180"
    },
    {
      id: 8,
      title: "Machine Learning Basics",
      description: "Introduction to machine learning algorithms and techniques.",
      level: "Advanced",
      duration: "6 hours",
      author: "AlmaBetter Team",
      image: "https://tse3.mm.bing.net/th?id=OIP.c1cbYXhiYpxMLzRGguHm0QHaFQ&pid=Api&P=0&h=180"
    }
  ]
};

import { useParams, useNavigate } from 'react-router-dom';

const Tutorials = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the selected tutorial if an ID is provided
  const selectedTutorial = id ? 
    [...tutorials.webDevelopment, ...tutorials.dataScience].find(t => t.id === parseInt(id)) : 
    null;

  if (selectedTutorial) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-16">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Tutorials
          </Button>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 md:h-96 bg-gray-100 overflow-hidden">
              <img 
                src={selectedTutorial.image} 
                alt={selectedTutorial.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/800x400?text=Tutorial+Image';
                }}
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-alma-red/10 text-alma-red text-xs px-3 py-1 rounded-full">
                  {selectedTutorial.level}
                </span>
                <span className="text-gray-500">{selectedTutorial.duration}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedTutorial.title}</h1>
              <p className="text-gray-600 mb-6">{selectedTutorial.description}</p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-medium mb-2">What you'll learn:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Comprehensive understanding of {selectedTutorial.title.split(' ')[0]}</li>
                  <li>Hands-on practice with real-world examples</li>
                  <li>Best practices and industry standards</li>
                  <li>Tips and tricks from industry experts</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-alma-red hover:bg-alma-dark-red py-6">
                  Start Learning Now
                </Button>
                <Button variant="outline" className="py-6">
                  Add to Favorites
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tutorials</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Learn new skills with our comprehensive tutorials created by industry experts.
            </p>
          </div>
        </div>
      </section>
      
      {/* Tutorials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="webDevelopment" className="space-y-8">
            <TabsList className="w-full max-w-md mx-auto">
              <TabsTrigger value="webDevelopment" className="flex-1">Web Development</TabsTrigger>
              <TabsTrigger value="dataScience" className="flex-1">Data Science</TabsTrigger>
            </TabsList>
            
            {/* Web Development Tab */}
            <TabsContent value="webDevelopment">
              <h2 className="text-2xl font-bold mb-8">Web Development Tutorials</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tutorials.webDevelopment.map(tutorial => (
                  <TutorialCard key={tutorial.id} tutorial={tutorial} />
                ))}
              </div>
            </TabsContent>
            
            {/* Data Science Tab */}
            <TabsContent value="dataScience">
              <h2 className="text-2xl font-bold mb-8">Data Science Tutorials</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tutorials.dataScience.map(tutorial => (
                  <TutorialCard key={tutorial.id} tutorial={tutorial} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Learning Path Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Learning Paths</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Follow our curated learning paths to master specific skills in a structured manner.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-alma-red h-2"></div>
              <CardHeader>
                <CardTitle>Frontend Developer Path</CardTitle>
                <CardDescription>Master modern frontend development with HTML, CSS, JavaScript, and React.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-alma-red rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                    <p>HTML & CSS Fundamentals</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-alma-red rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                    <p>JavaScript Essentials</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-alma-red rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                    <p>React.js for Beginners</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-alma-red rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
                    <p>Advanced React Patterns</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-alma-red hover:bg-alma-dark-red">
                  Start Learning Path
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-alma-red h-2"></div>
              <CardHeader>
                <CardTitle>Backend Developer Path</CardTitle>
                <CardDescription>Learn server-side development with Node.js, Express, and MongoDB.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-alma-red rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                    <p>JavaScript Essentials</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-alma-red rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                    <p>Node.js Fundamentals</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-alma-red rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                    <p>Express.js & RESTful APIs</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-alma-red rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
                    <p>MongoDB & Mongoose</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-alma-red hover:bg-alma-dark-red">
                  Start Learning Path
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-alma-red h-2"></div>
              <CardHeader>
                <CardTitle>Data Scientist Path</CardTitle>
                <CardDescription>Master data science and machine learning with Python and its libraries.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-alma-red rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                    <p>Python for Data Science</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-alma-red rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                    <p>Data Analysis with Pandas</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-alma-red rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                    <p>Data Visualization</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-alma-red rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
                    <p>Machine Learning Basics</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-alma-red hover:bg-alma-dark-red">
                  Start Learning Path
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-alma-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to learn more?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join our comprehensive courses to get structured learning and hands-on practice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/courses/certification">
              <Button variant="outline" className="bg-white text-alma-red hover:bg-gray-100">
                View Certification Courses
              </Button>
            </Link>
            <Link to="/courses/masters-degree">
              <Button variant="outline" className="bg-white text-alma-red hover:bg-gray-100">
                Explore Master's Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Tutorials;
