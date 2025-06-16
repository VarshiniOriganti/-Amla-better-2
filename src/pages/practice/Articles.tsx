
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock articles data
const articles = [
  {
    id: 1,
    title: "Understanding React Hooks: A Comprehensive Guide",
    excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
    author: "Ankit Sharma",
    date: "May 15, 2024",
    readTime: "8 min read",
    category: "Frontend Development"
  },
  {
    id: 2,
    title: "Python for Data Science: Essential Libraries You Should Know",
    excerpt: "Explore the most popular Python libraries for data manipulation, visualization, and machine learning.",
    author: "Priya Mehta",
    date: "May 12, 2024",
    readTime: "10 min read",
    category: "Data Science"
  },
  {
    id: 3,
    title: "Introduction to System Design: Key Concepts and Patterns",
    excerpt: "Master the fundamentals of system design and learn how to approach design interviews with confidence.",
    author: "Rahul Kumar",
    date: "May 10, 2024",
    readTime: "12 min read",
    category: "System Design"
  },
  {
    id: 4,
    title: "Mastering JavaScript Promises and Async/Await",
    excerpt: "Learn how to write clean, efficient asynchronous code using JavaScript promises and async/await syntax.",
    author: "Neha Singh",
    date: "May 8, 2024",
    readTime: "9 min read",
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Building RESTful APIs with Node.js and Express",
    excerpt: "A step-by-step guide to creating robust and scalable REST APIs using Node.js and Express framework.",
    author: "Vikram Patel",
    date: "May 5, 2024",
    readTime: "11 min read",
    category: "Backend Development"
  },
  {
    id: 6,
    title: "Git Workflows: Best Practices for Team Collaboration",
    excerpt: "Discover efficient Git workflows that will streamline your team's development process and improve collaboration.",
    author: "Sneha Gupta",
    date: "May 2, 2024",
    readTime: "7 min read",
    category: "DevOps"
  }
];

const Articles = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Articles</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Expand your knowledge with in-depth articles on various tech topics.
            </p>
          </div>
        </div>
      </section>
      
      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">{article.category}</span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  <CardTitle className="text-xl font-bold hover:text-alma-red transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm text-gray-600">{article.author}</span>
                    </div>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Articles;
