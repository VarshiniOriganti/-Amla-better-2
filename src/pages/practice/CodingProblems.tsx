
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock coding problems data
const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    acceptance: "45%",
    companies: ["Amazon", "Google", "Microsoft"]
  },
  {
    id: 2,
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stacks",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    acceptance: "40%",
    companies: ["Facebook", "Amazon", "Microsoft"]
  },
  {
    id: 3,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked Lists",
    description: "Merge two sorted linked lists and return it as a sorted list.",
    acceptance: "55%",
    companies: ["Google", "Apple", "Microsoft"]
  },
  {
    id: 4,
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: "Find the contiguous subarray which has the largest sum and return its sum.",
    acceptance: "48%",
    companies: ["Amazon", "Microsoft", "Apple"]
  },
  {
    id: 5,
    title: "LRU Cache",
    difficulty: "Medium",
    category: "Design",
    description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    acceptance: "35%",
    companies: ["Google", "Facebook", "Amazon"]
  },
  {
    id: 6,
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Arrays",
    description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.",
    acceptance: "42%",
    companies: ["Google", "Facebook", "Amazon"]
  },
  {
    id: 7,
    title: "Word Search",
    difficulty: "Medium",
    category: "Backtracking",
    description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
    acceptance: "38%",
    companies: ["Amazon", "Microsoft", "Facebook"]
  },
  {
    id: 8,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Two Pointers",
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    acceptance: "29%",
    companies: ["Amazon", "Google", "Facebook"]
  },
  {
    id: 9,
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    category: "Heap",
    description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.",
    acceptance: "45%",
    companies: ["Amazon", "Google", "Microsoft"]
  },
];

const CodingProblems = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredProblems = filter === "all" 
    ? problems 
    : problems.filter(problem => problem.difficulty.toLowerCase() === filter);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Coding Problems</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Practice with curated coding challenges to prepare for technical interviews.
            </p>
          </div>
        </div>
      </section>
      
      {/* Problems Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid grid-cols-4 md:w-[400px] mb-6">
              <TabsTrigger value="all" onClick={() => setFilter("all")}>All</TabsTrigger>
              <TabsTrigger value="easy" onClick={() => setFilter("easy")}>Easy</TabsTrigger>
              <TabsTrigger value="medium" onClick={() => setFilter("medium")}>Medium</TabsTrigger>
              <TabsTrigger value="hard" onClick={() => setFilter("hard")}>Hard</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6">
              {filteredProblems.map(problem => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </TabsContent>
            
            <TabsContent value="easy" className="space-y-6">
              {filteredProblems.map(problem => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </TabsContent>
            
            <TabsContent value="medium" className="space-y-6">
              {filteredProblems.map(problem => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </TabsContent>
            
            <TabsContent value="hard" className="space-y-6">
              {filteredProblems.map(problem => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Problem Card Component
const ProblemCard = ({ problem }) => {
  const difficultyColor = {
    "Easy": "bg-green-100 text-green-800",
    "Medium": "bg-yellow-100 text-yellow-800",
    "Hard": "bg-red-100 text-red-800"
  };
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold hover:text-alma-red transition-colors cursor-pointer">
              {problem.title}
            </h3>
            <div className="flex items-center space-x-3 mt-2">
              <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor[problem.difficulty]}`}>
                {problem.difficulty}
              </span>
              <span className="text-xs text-gray-500">{problem.category}</span>
              <span className="text-xs text-gray-500">Acceptance: {problem.acceptance}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{problem.description}</p>
        <div className="flex flex-wrap gap-2">
          {problem.companies.map((company, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100">{company}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CodingProblems;
