import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ContentType = 'tutorial' | 'article' | 'problem' | 'quiz' | 'cheatsheet' | 'video';

interface Bookmark {
  id: string;
  type: ContentType;
  timestamp: number;
}

interface Progress {
  contentId: string;
  contentType: ContentType;
  progress: number; // 0-100
  completed: boolean;
  lastAccessed: number;
  notes?: string;
  rating?: number;
}

interface PracticeContextType {
  bookmarks: Bookmark[];
  progress: Record<string, Progress>;
  toggleBookmark: (id: string, type: ContentType) => void;
  isBookmarked: (id: string) => boolean;
  updateProgress: (contentId: string, contentType: ContentType, progress: number, notes?: string) => void;
  getProgress: (contentId: string) => Progress | null;
  addRating: (contentId: string, rating: number) => void;
}

const PracticeContext = createContext<PracticeContextType | undefined>(undefined);

const STORAGE_KEYS = {
  BOOKMARKS: 'alma_practice_bookmarks',
  PROGRESS: 'alma_practice_progress',
};

export const PracticeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return saved ? JSON.parse(saved) : [];
  });

  const [progress, setProgress] = useState<Record<string, Progress>>(() => {
    if (typeof window === 'undefined') return {};
    const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return saved ? JSON.parse(saved) : {};
  });

  // Persist to localStorage when bookmarks or progress change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  }, [progress]);

  const toggleBookmark = (id: string, type: ContentType) => {
    setBookmarks(prev => {
      const existingIndex = prev.findIndex(b => b.id === id && b.type === type);
      
      if (existingIndex >= 0) {
        // Remove bookmark
        return [...prev.slice(0, existingIndex), ...prev.slice(existingIndex + 1)];
      } else {
        // Add bookmark
        return [...prev, { id, type, timestamp: Date.now() }];
      }
    });
  };

  const isBookmarked = (id: string) => {
    return bookmarks.some(b => b.id === id);
  };

  const updateProgress = (contentId: string, contentType: ContentType, progressValue: number, notes?: string) => {
    setProgress(prev => ({
      ...prev,
      [contentId]: {
        contentId,
        contentType,
        progress: Math.min(100, Math.max(0, progressValue)),
        completed: progressValue >= 100,
        lastAccessed: Date.now(),
        notes: notes || prev[contentId]?.notes,
        rating: prev[contentId]?.rating,
      },
    }));
  };

  const getProgress = (contentId: string) => {
    return progress[contentId] || null;
  };

  const addRating = (contentId: string, rating: number) => {
    if (progress[contentId]) {
      updateProgress(
        contentId,
        progress[contentId].contentType,
        progress[contentId].progress,
        progress[contentId].notes
      );
    }
  };

  return (
    <PracticeContext.Provider 
      value={{
        bookmarks,
        progress: progress as Record<string, Progress>,
        toggleBookmark,
        isBookmarked,
        updateProgress,
        getProgress,
        addRating,
      }}
    >
      {children}
    </PracticeContext.Provider>
  );
};

export const usePractice = (): PracticeContextType => {
  const context = useContext(PracticeContext);
  if (context === undefined) {
    throw new Error('usePractice must be used within a PracticeProvider');
  }
  return context;
};

export default PracticeContext;
