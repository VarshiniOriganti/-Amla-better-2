import React, { useMemo } from 'react';
import { usePractice } from '@/contexts/PracticeContext';
import { useQuery } from '@tanstack/react-query';
import { PracticeCard } from '@/components/practice/PracticeCard';
import { PracticeFilters } from '@/components/practice/PracticeFilters';
import { PracticeCardSkeleton, PracticeListSkeleton } from '@/components/practice/PracticeCardSkeleton';
import { usePracticeFilters } from '@/hooks/usePracticeFilters';
import { Bookmark, BookX } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock data for demonstration
const mockContent = {
  'tut-1': {
    id: 'tut-1',
    title: 'React Hooks Explained',
    description: 'Learn how to use React Hooks in your applications',
    image: 'https://via.placeholder.com/400x300?text=React+Hooks',
    level: 'beginner',
    duration: '15-30 min',
    author: 'Jane Smith',
    rating: 4.7,
    reviewCount: 128,
    viewCount: 2500,
    commentCount: 45,
    type: 'tutorial',
  },
  'article-1': {
    id: 'article-1',
    title: 'Understanding TypeScript Generics',
    description: 'A deep dive into TypeScript generics and how to use them effectively',
    image: 'https://via.placeholder.com/400x300?text=TypeScript',
    level: 'intermediate',
    duration: '10-15 min',
    author: 'John Doe',
    rating: 4.5,
    reviewCount: 89,
    viewCount: 1800,
    commentCount: 32,
    type: 'article',
  },
  'quiz-1': {
    id: 'quiz-1',
    title: 'JavaScript Fundamentals Quiz',
    description: 'Test your knowledge of JavaScript fundamentals',
    image: 'https://via.placeholder.com/400x300?text=JavaScript',
    level: 'beginner',
    duration: '5-10 min',
    author: 'Alma Better Team',
    rating: 4.2,
    reviewCount: 56,
    viewCount: 3200,
    commentCount: 12,
    type: 'quiz',
  },
};

const BookmarksPage: React.FC = () => {
  const { bookmarks, isBookmarked } = usePractice();
  
  // Wrapper for toggleBookmark to handle type safety
  const handleBookmarkToggle = (id: string, bookmarked: boolean) => {
    // In a real app, we would have the content type available
    // For now, we'll use a default type
    const type = 'tutorial';
    if (!bookmarked) {
      // @ts-ignore - We know the type is valid
      usePractice.getState().toggleBookmark(id, type);
    } else {
      // @ts-ignore - We know the type is valid
      usePractice.getState().toggleBookmark(id, type);
    }
  };
  
  // Wrapper for updateFilter to match expected signature
  const handleFilterChange = (filters: any) => {
    // This is a simplified version - in a real app, you would handle each filter
    console.log('Filters updated:', filters);
  };
  
  // Fetch bookmarked content (in a real app, this would be an API call)
  const { data: bookmarkedContent, isLoading } = useQuery({
    queryKey: ['bookmarks'],
    queryFn: async () => {
      // In a real app, you would fetch the actual content here
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
      return bookmarks.map(bookmark => ({
        ...mockContent[`${bookmark.type.split('-')[0]}-${bookmark.id}` as keyof typeof mockContent],
        ...bookmark
      })).filter(Boolean);
    },
  });

  const {
    filters,
    searchValue,
    hasActiveFilters,
    updateFilter: updateFilterInternal,
    handleSearch,
    applyFilters,
    clearFilters,
  } = usePracticeFilters();
  
  // Wrapper for updateFilter to match expected signature
  const updateFilter = (key: string, value: string) => {
    updateFilterInternal(key as any, value);
  };

  const filteredContent = useMemo(() => {
    if (!bookmarkedContent) return [];
    return applyFilters(bookmarkedContent);
  }, [bookmarkedContent, applyFilters]);

  const handleClearAllBookmarks = () => {
    if (window.confirm('Are you sure you want to clear all bookmarks?')) {
      bookmarks.forEach(bookmark => {
        toggleBookmark(bookmark.id, bookmark.type);
      });
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Bookmarks</h1>
          <Button variant="outline" disabled>
            <BookX className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        </div>
        <PracticeListSkeleton count={6} />
      </div>
    );
  }


  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Bookmarks</h1>
          <p className="text-muted-foreground mt-1">
            {bookmarkedContent?.length || 0} {bookmarkedContent?.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>
        
        {bookmarkedContent && bookmarkedContent.length > 0 && (
          <Button 
            variant="outline" 
            onClick={handleClearAllBookmarks}
            className="whitespace-nowrap"
          >
            <BookX className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>

      {bookmarkedContent && bookmarkedContent.length > 0 ? (
        <>
          <PracticeFilters
            onSearch={handleSearch}
            onFilterChange={updateFilter}
            className="mt-4"
          />
          
          {filteredContent.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((item) => (
                <PracticeCard
                  key={`${item.type}-${item.id}`}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  level={item.level as 'beginner' | 'intermediate' | 'advanced'}
                  duration={item.duration}
                  author={item.author}
                  rating={item.rating}
                  reviewCount={item.reviewCount}
                  viewCount={item.viewCount}
                  commentCount={item.commentCount}
                  isBookmarked={isBookmarked(item.id)}
                  onBookmarkToggle={handleBookmarkToggle}
                  type={item.type as 'tutorial' | 'article' | 'problem' | 'quiz' | 'cheatsheet' | 'video'}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <Bookmark className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No bookmarks match your filters</h3>
              <p className="text-muted-foreground mt-2">
                Try adjusting your search or filter criteria
              </p>
              {hasActiveFilters && (
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={clearFilters}
                >
                  Clear all filters
                </Button>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16 border rounded-lg">
          <Bookmark className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No bookmarks yet</h3>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            Save tutorials, articles, and other content to access them later
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button asChild>
              <a href="/practice/tutorials">Explore Tutorials</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/practice/articles">Browse Articles</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookmarksPage;
