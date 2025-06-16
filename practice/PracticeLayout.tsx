import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Home, BookOpen, FileText, Code, HelpCircle, FileCode, Bookmark, Clock, Award } from 'lucide-react';

const sidebarNav = [
  {
    title: 'Tutorials',
    href: '/practice/tutorials',
    icon: BookOpen,
  },
  {
    title: 'Articles',
    href: '/practice/articles',
    icon: FileText,
  },
  {
    title: 'Coding Problems',
    href: '/practice/coding-problems',
    icon: Code,
  },
  {
    title: 'Quizzes',
    href: '/practice/quizzes',
    icon: HelpCircle,
  },
  {
    title: 'Cheat Sheets',
    href: '/practice/cheat-sheet',
    icon: FileCode,
  },
  {
    title: 'Bookmarks',
    href: '/practice/bookmarks',
    icon: Bookmark,
  },
  {
    title: 'In Progress',
    href: '/practice/in-progress',
    icon: Clock,
  },
  {
    title: 'Completed',
    href: '/practice/completed',
    icon: Award,
  },
];

interface PracticeLayoutProps {
  children?: React.ReactNode;
}

const PracticeLayout: React.FC<PracticeLayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/5">
            <div className="sticky top-20 space-y-1">
              <h2 className="text-2xl font-bold tracking-tight mb-6">Practice</h2>
              <nav className="space-y-1">
                {sidebarNav.map((item) => (
                  <Button
                    key={item.href}
                    asChild
                    variant={location.pathname === item.href ? 'secondary' : 'ghost'}
                    className={cn(
                      'w-full justify-start',
                      location.pathname === item.href
                        ? 'bg-muted hover:bg-muted'
                        : 'hover:bg-transparent hover:underline'
                    )}
                  >
                    <Link to={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  </Button>
                ))}
              </nav>
              
              <div className="pt-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2 px-3">Quick Links</h3>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/">
                      <Home className="mr-2 h-4 w-4" />
                      Back to Home
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Main Content */}
          <div className="flex-1
           lg:max-w-4xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeLayout;
