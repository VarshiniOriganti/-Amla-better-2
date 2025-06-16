
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play } from 'lucide-react';

// Mock videos data
const videos = [
  {
    id: 1,
    title: "React Hooks Explained",
    description: "A comprehensive guide to React Hooks and how to use them effectively in your applications.",
    duration: "15:24",
    instructor: "Ankit Sharma",
    views: 15000,
    category: "Frontend Development",
    thumbnail: "https://placeholder.com/800x450"
  },
  {
    id: 2,
    title: "Building RESTful APIs with Node.js",
    description: "Learn how to build scalable RESTful APIs using Node.js and Express.js framework.",
    duration: "22:10",
    instructor: "Rahul Kumar",
    views: 12500,
    category: "Backend Development",
    thumbnail: "https://placeholder.com/800x450"
  },
  {
    id: 3,
    title: "Python Data Analysis with Pandas",
    description: "Master the Pandas library for data manipulation and analysis in Python.",
    duration: "18:45",
    instructor: "Neha Singh",
    views: 9800,
    category: "Data Science",
    thumbnail: "https://placeholder.com/800x450"
  },
  {
    id: 4,
    title: "CSS Grid Layout Tutorial",
    description: "A step-by-step tutorial on CSS Grid layout and how to create responsive designs.",
    duration: "12:30",
    instructor: "Priya Mehta",
    views: 11200,
    category: "Frontend Development",
    thumbnail: "https://placeholder.com/800x450"
  },
  {
    id: 5,
    title: "Introduction to Docker",
    description: "Learn the basics of Docker and how to containerize your applications.",
    duration: "20:15",
    instructor: "Vikram Patel",
    views: 8500,
    category: "DevOps",
    thumbnail: "https://placeholder.com/800x450"
  },
  {
    id: 6,
    title: "JavaScript Promises and Async/Await",
    description: "Master asynchronous JavaScript with Promises and Async/Await syntax.",
    duration: "16:40",
    instructor: "Sneha Gupta",
    views: 14300,
    category: "Frontend Development",
    thumbnail: "https://placeholder.com/800x450"
  }
];

const LearningVideos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Learning Videos</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Watch educational videos on various tech topics to enhance your learning.
            </p>
          </div>
        </div>
      </section>
      
      {/* Videos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map(video => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {/* Video Thumbnail */}
                <div className="relative h-48 bg-gray-200 cursor-pointer group">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-alma-red flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-2 py-1 rounded text-white text-xs">
                    {video.duration}
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline">{video.category}</Badge>
                    <span className="text-xs text-gray-500">{video.views.toLocaleString()} views</span>
                  </div>
                  <h3 className="text-lg font-semibold cursor-pointer hover:text-alma-red transition-colors">
                    {video.title}
                  </h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-3 line-clamp-2">{video.description}</p>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">
                      {video.instructor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span>{video.instructor}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LearningVideos;
