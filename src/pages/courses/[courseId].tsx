import React from 'react';
import { useParams } from 'react-router-dom';

export default function CourseDetailPage() {
  const { courseId } = useParams();
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Course Details: {courseId}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700">Detailed information about this course will appear here.</p>
        <p className="mt-4">This page is under development.</p>
      </div>
    </div>
  );
}
