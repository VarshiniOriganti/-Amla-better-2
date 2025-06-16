import React, { useState } from 'react';
import { Award, Trophy, Star, Clock, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePractice } from '@/contexts/PracticeContext';
import { PracticeCard } from '@/components/practice/PracticeCard';
import { PracticeCardSkeleton, PracticeListSkeleton } from '@/components/practice/PracticeCardSkeleton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Mock data for demonstration
const mockContent = {
  'tut-1': {
    id: 'tut-1',
    title: 'React Hooks Masterclass',
    description: 'Master React Hooks with practical examples and exercises',
    image: 'https://via.placeholder.com/400x300?text=React+Hooks',
    level: 'intermediate',
    duration: '60-90 min',
    author: 'Alex Johnson',
    rating: 4.9,
    reviewCount: 145,
    viewCount: 4200,
    commentCount: 87,
    type: 'tutorial',
    completedAt: new Date('2023-10-15').getTime(),
  },
  'quiz-1': {
    id: 'quiz-1',
    title: 'JavaScript Fundamentals Quiz',
    description: 'Test your knowledge of JavaScript basics',
    image: 'https://via.placeholder.com/400x300?text=JavaScript',
    level: 'beginner',
    duration: '10-15 min',
    author: 'Alma Better Team',
    rating: 4.2,
    reviewCount: 56,
    viewCount: 3200,
    commentCount: 12,
    type: 'quiz',
    completedAt: new Date('2023-10-10').getTime(),
    score: 90,
  },
  'article-1': {
    id: 'article-1',
    title: 'Understanding TypeScript Generics',
    description: 'A deep dive into TypeScript generics and how to use them effectively',
    image: 'https://via.placeholder.com/400x300?text=TypeScript',
    level: 'intermediate',
    duration: '15-20 min',
    author: 'John Doe',
    rating: 4.7,
    reviewCount: 89,
    viewCount: 3800,
    commentCount: 32,
    type: 'article',
    completedAt: new Date('2023-10-05').getTime(),
  },
};

type SortOption = 'recent' | 'oldest' | 'rating' | 'duration';

const CompletedPage: React.FC = () => {
  const { progress } = usePractice();
  const [sortBy, setSortBy] = useState<SortOption>('recent');
  
  // Filter completed items (progress = 100%)
  const completedItems = Object.values(progress).filter(
    item => item.progress === 100
  );

  // In a real app, you would fetch the actual content based on progress IDs
  const isLoading = false; // Simulate loading state
  
  // Map progress to content and add completion details
  const completedContent = completedItems
    .map(item => {
      const content = mockContent[`${item.contentType.split('-')[0]}-${item.contentId}` as keyof typeof mockContent];
      if (!content) return null;
      
      return {
        ...content,
        completedAt: item.lastAccessed,
        score: item.rating || 0,
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return b.completedAt - a.completedAt;
        case 'oldest':
          return a.completedAt - b.completedAt;
        case 'rating':
          return b.rating - a.rating;
        case 'duration':
          return a.duration.localeCompare(b.duration);
        default:
          return 0;
      }
    });

  const handleSort = (value: SortOption) => {
    setSortBy(value);
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Completed</h1>
          <Button variant="outline" disabled>
            <Filter className="h-4 w-4 mr-2" />
            Sort
          </Button>
        </div>
        <PracticeListSkeleton count={4} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Completed</h1>
          <p className="text-muted-foreground mt-1">
            {completedContent.length} {completedContent.length === 1 ? 'item' : 'items'} completed
          </p>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              {sortBy === 'recent' && 'Most Recent'}
              {sortBy === 'oldest' && 'Oldest First'}
              {sortBy === 'rating' && 'Highest Rated'}
              {sortBy === 'duration' && 'Duration'}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => handleSort('recent')}>
                <Clock className="h-4 w-4 mr-2" />
                Most Recent
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSort('oldest')}>
                <Clock className="h-4 w-4 mr-2" />
                Oldest First
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSort('rating')}>
                <Star className="h-4 w-4 mr-2 fill-yellow-500 text-yellow-500" />
                Highest Rated
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSort('duration')}>
                <Clock className="h-4 w-4 mr-2" />
                Duration
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {completedContent.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedContent.map((item) => (
            <div key={`${item.type}-${item.id}`} className="relative group">
              <div className="absolute -top-2 -right-2 z-10">
                <div className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                  <Trophy className="h-3 w-3 mr-1" />
                  Completed
                </div>
              </div>
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
              {item.type === 'quiz' && (
                <div className="absolute bottom-16 left-0 right-0 p-4 pt-6 bg-gradient-to-t from-background to-transparent">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {item.score}%
                    </div>
                    <div className="text-xs text-muted-foreground">Quiz Score</div>
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 pt-6 bg-gradient-to-t from-background to-transparent">
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>
                    Completed on {new Date(item.completedAt).toLocaleDateString()}
                  </span>
                  <Button variant="ghost" size="sm" className="h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    Review
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border rounded-lg">
          <Award className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No completed items yet</h3>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            Complete tutorials, articles, or coding problems to see them here
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button asChild>
              <a href="/practice/tutorials">Start Learning</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/practice/coding-problems">Solve Problems</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompletedPage;
