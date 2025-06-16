import React from 'react';
import { Clock, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePractice } from '@/contexts/PracticeContext';
import { PracticeCard } from '@/components/practice/PracticeCard';
import { PracticeCardSkeleton, PracticeListSkeleton } from '@/components/practice/PracticeCardSkeleton';

// Mock data for demonstration
const mockContent = {
  'tut-1': {
    id: 'tut-1',
    title: 'Advanced React Patterns',
    description: 'Learn advanced React patterns like render props, compound components, and hooks',
    image: 'https://via.placeholder.com/400x300?text=React+Patterns',
    level: 'advanced',
    duration: '45-60 min',
    author: 'Sarah Johnson',
    rating: 4.8,
    reviewCount: 92,
    viewCount: 3200,
    commentCount: 45,
    type: 'tutorial',
  },
  'problem-1': {
    id: 'problem-1',
    title: 'Binary Tree Traversal',
    description: 'Solve problems related to binary tree traversal algorithms',
    image: 'https://via.placeholder.com/400x300?text=Binary+Tree',
    level: 'intermediate',
    duration: '30-45 min',
    author: 'Alma Better Team',
    rating: 4.5,
    reviewCount: 67,
    viewCount: 2800,
    commentCount: 32,
    type: 'problem',
  },
};

const InProgressPage: React.FC = () => {
  const { progress } = usePractice();
  
  // Filter in-progress items (progress > 0% and < 100%)
  const inProgressItems = Object.values(progress).filter(
    item => item.progress > 0 && item.progress < 100
  );

  // In a real app, you would fetch the actual content based on progress IDs
  const isLoading = false; // Simulate loading state
  
  const inProgressContent = inProgressItems.map(item => ({
    ...mockContent[`${item.contentType.split('-')[0]}-${item.contentId}` as keyof typeof mockContent],
    progress: item.progress,
  })).filter(Boolean);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">In Progress</h1>
        <PracticeListSkeleton count={4} />
      </div>
    );
  }


  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">In Progress</h1>
        <p className="text-muted-foreground mt-1">
          Continue where you left off
        </p>
      </div>

      {inProgressContent.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inProgressContent.map((item) => (
            <div key={`${item.type}-${item.id}`} className="relative">
              <PracticeCard
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                level={item.level}
                duration={item.duration}
                author={item.author}
                rating={item.rating}
                reviewCount={item.reviewCount}
                viewCount={item.viewCount}
                commentCount={item.commentCount}
                type={item.type}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 pt-6 bg-gradient-to-t from-background to-transparent">
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{item.progress}% complete</span>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <PlayCircle className="h-4 w-4" />
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border rounded-lg">
          <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">Nothing in progress</h3>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            Start a tutorial, article, or coding problem to track your progress here
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button asChild>
              <a href="/practice/tutorials">Browse Tutorials</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/practice/coding-problems">Try Coding Problems</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InProgressPage;
