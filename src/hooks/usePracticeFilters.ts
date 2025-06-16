import { useState, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

interface FilterOptions {
  level: string;
  duration: string;
  sortBy: string;
  searchQuery: string;
  type?: string;
  tag?: string;
}

export const usePracticeFilters = (initialFilters: Partial<FilterOptions> = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get filter values from URL or use defaults
  const getFilterFromUrl = useCallback((key: string, defaultValue: string = '') => {
    return searchParams.get(key) || defaultValue;
  }, [searchParams]);

  const [filters, setFilters] = useState<FilterOptions>(() => ({
    level: getFilterFromUrl('level', initialFilters.level || ''),
    duration: getFilterFromUrl('duration', initialFilters.duration || ''),
    sortBy: getFilterFromUrl('sort', initialFilters.sortBy || 'recent'),
    searchQuery: getFilterFromUrl('q', initialFilters.searchQuery || ''),
    type: getFilterFromUrl('type', initialFilters.type || ''),
    tag: getFilterFromUrl('tag', initialFilters.tag || ''),
  }));

  // Update URL when filters change
  const updateUrl = useCallback((newFilters: Partial<FilterOptions>) => {
    const params = new URLSearchParams(searchParams);
    
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    // Don't update if only the search query changed (handled separately)
    if (Object.keys(newFilters).some(k => k !== 'searchQuery')) {
      setSearchParams(params, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  // Update filter state and URL
  const updateFilter = useCallback((key: keyof FilterOptions, value: string) => {
    setFilters(prev => {
      const newFilters = { ...prev, [key]: value };
      updateUrl({ [key]: value });
      return newFilters;
    });
  }, [updateUrl]);

  // Handle search query changes with debounce
  const [searchValue, setSearchValue] = useState(filters.searchQuery);
  
  const handleSearch = useCallback((query: string) => {
    setSearchValue(query);
    updateFilter('searchQuery', query);
  }, [updateFilter]);

  // Apply filters to items
  const applyFilters = useCallback(<T extends { 
    level?: string; 
    duration?: string; 
    type?: string; 
    tags?: string[];
    title?: string;
    description?: string;
    [key: string]: any;
  }>(
    items: T[],
    searchFields: string[] = ['title', 'description']
  ): T[] => {
    return items.filter(item => {
      // Filter by level
      if (filters.level && item.level && item.level.toLowerCase() !== filters.level.toLowerCase()) {
        return false;
      }
      
      // Filter by duration
      if (filters.duration && item.duration) {
        const duration = item.duration.toLowerCase();
        const filterDuration = filters.duration.toLowerCase();
        
        if (filterDuration.includes('<') && !duration.includes('min')) return false;
        if (filterDuration.includes('+') && !duration.includes('hour')) return false;
        if (filterDuration.includes('-') && !duration.includes('-')) return false;
      }
      
      // Filter by type
      if (filters.type && item.type && item.type.toLowerCase() !== filters.type.toLowerCase()) {
        return false;
      }
      
      // Filter by tag
      if (filters.tag && (!item.tags || !item.tags.some(tag => 
        tag.toLowerCase().includes(filters.tag!.toLowerCase())
      ))) {
        return false;
      }
      
      // Search in specified fields
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        return searchFields.some(field => {
          const value = item[field as keyof T];
          return value?.toString().toLowerCase().includes(query);
        });
      }
      
      return true;
    }).sort((a, b) => {
      // Sorting
      switch (filters.sortBy) {
        case 'recent':
          return (b as any).createdAt - (a as any).createdAt;
        case 'popular':
          return ((b as any).views || 0) - ((a as any).views || 0);
        case 'rating':
          return ((b as any).rating || 0) - ((a as any).rating || 0);
        case 'duration':
          return (a.duration || '').localeCompare(b.duration || '');
        default:
          return 0;
      }
    });
  }, [filters]);

  // Clear all filters
  const clearFilters = useCallback(() => {
    const clearedFilters = {
      level: '',
      duration: '',
      sortBy: 'recent',
      searchQuery: '',
      type: '',
      tag: '',
    };
    
    setFilters(clearedFilters);
    setSearchValue('');
    setSearchParams({}, { replace: true });
  }, [setSearchParams]);

  // Check if any filters are active
  const hasActiveFilters = useMemo(() => {
    return Object.entries(filters).some(([key, value]) => 
      value && key !== 'sortBy' && value !== 'recent'
    );
  }, [filters]);

  return {
    filters,
    searchValue,
    hasActiveFilters,
    updateFilter,
    handleSearch,
    applyFilters,
    clearFilters,
  };
};
