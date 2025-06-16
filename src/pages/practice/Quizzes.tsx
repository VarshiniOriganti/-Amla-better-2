
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Award, Users } from 'lucide-react';

// Mock quizzes data
const quizzes = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Test your knowledge of JavaScript basics, including variables, functions, and control flow.",
    questions: 20,
    timeLimit: "30 minutes",
    difficulty: "Beginner",
    participants: 1245,
    category: "Frontend Development"
  },
  {
    id: 2,
    title: "React Components and Props",
    description: "Challenge yourself with questions about React components, props, and state management.",
    questions: 15,
    timeLimit: "25 minutes",
    difficulty: "Intermediate",
    participants: 982,
    category: "Frontend Development"
  },
  {
    id: 3,
    title: "Data Structures Quiz",
    description: "Test your understanding of arrays, linked lists, stacks, queues, trees, and graphs.",
    questions: 25,
    timeLimit: "40 minutes",
    difficulty: "Advanced",
    participants: 756,
    category: "Computer Science"
  },
  {
    id: 4,
    title: "Python Programming Basics",
    description: "Assess your Python skills including syntax, data types, functions, and control structures.",
    questions: 20,
    timeLimit: "30 minutes",
    difficulty: "Beginner",
    participants: 1567,
    category: "Programming Languages"
  },
  {
    id: 5,
    title: "SQL Fundamentals",
    description: "Test your knowledge of SQL queries, joins, and database operations.",
    questions: 15,
    timeLimit: "25 minutes",
    difficulty: "Intermediate",
    participants: 876,
    category: "Database Management"
  },
  {
    id: 6,
    title: "System Design Concepts",
    description: "Challenge yourself with questions about distributed systems, caching, load balancing, and more.",
    questions: 20,
    timeLimit: "35 minutes",
    difficulty: "Advanced",
    participants: 543,
    category: "System Design"
  }
];

const Quizzes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Quizzes</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Test your knowledge with our interactive quizzes on various tech topics.
            </p>
          </div>
        </div>
      </section>
      
      {/* Quizzes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizzes.map(quiz => (
              <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={`
                      ${quiz.difficulty === "Beginner" ? "bg-green-100 text-green-800" : ""}
                      ${quiz.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-800" : ""}
                      ${quiz.difficulty === "Advanced" ? "bg-red-100 text-red-800" : ""}
                    `}>
                      {quiz.difficulty}
                    </Badge>
                    <Badge variant="outline">{quiz.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{quiz.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{quiz.description}</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center text-gray-600">
                      <Award className="w-4 h-4 mr-2" />
                      <span>{quiz.questions} Questions</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{quiz.timeLimit}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{quiz.participants.toLocaleString()} Participants</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-alma-red hover:bg-alma-dark-red">
                    Start Quiz
                  </Button>
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

export default Quizzes;
