import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bookmark, Clock, Star, Eye, MessageSquare, ThumbsUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PracticeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  author: string;
  rating?: number;
  reviewCount?: number;
  viewCount?: number;
  commentCount?: number;
  isBookmarked?: boolean;
  onBookmarkToggle?: (id: string, bookmarked: boolean) => void;
  type?: 'tutorial' | 'article' | 'problem' | 'quiz' | 'cheatsheet' | 'video';
  className?: string;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({
  id,
  title,
  description,
  image,
  level,
  duration,
  author,
  rating = 0,
  reviewCount = 0,
  viewCount = 0,
  commentCount = 0,
  isBookmarked = false,
  onBookmarkToggle,
  type = 'tutorial',
  className = '',
}) => {
  const levelColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-blue-100 text-blue-800',
    advanced: 'bg-purple-100 text-purple-800',
  };

  const typeIcons = {
    tutorial: '🎓',
    article: '📄',
    problem: '💻',
    quiz: '❓',
    cheatsheet: '📋',
    video: '🎬',
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onBookmarkToggle) {
      onBookmarkToggle(id, !isBookmarked);
    }
  };

  return (
    <Link to={`/${type}s/${id}`} className="block h-full">
      <Card className={cn("overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col group", className)}>
        <div className="relative h-48 bg-gray-100 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
              target.onerror = null;
              target.className = 'w-full h-full object-contain p-4';
            }}
          />
          <div className="absolute top-0 right-0 p-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/100"
              onClick={handleBookmarkClick}
            >
              <Bookmark 
                className={cn("h-5 w-5", isBookmarked ? 'fill-current' : '')} 
                fill={isBookmarked ? 'currentColor' : 'none'}
              />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className={cn("text-xs", levelColors[level])}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </Badge>
              <div className="flex items-center text-white/80 text-xs">
                <Clock className="h-3 w-3 mr-1" />
                {duration}
              </div>
            </div>
          </div>
          <div className="absolute top-2 left-2 bg-background/90 rounded-full w-10 h-10 flex items-center justify-center text-lg">
            {typeIcons[type]}
          </div>
        </div>
        
        <CardHeader className="flex-1">
          <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>By {author}</span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>{rating.toFixed(1)}</span>
              <span className="text-muted-foreground/60">({reviewCount})</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="pt-0 border-t
         flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{viewCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{commentCount}</span>
            </div>
          </div>
          <Button size="sm" className="ml-auto">
            {type === 'tutorial' ? 'Start' : type === 'quiz' ? 'Take Quiz' : 'Read More'}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PracticeCard;
