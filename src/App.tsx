import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PracticeProvider } from "@/contexts/PracticeContext";
import PracticeLayout from "@/components/practice/PracticeLayout";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Pages
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import ApplyNow from "./pages/ApplyNow";
import NotFound from "./pages/NotFound";

// Course pages
import Courses from "./pages/courses/Courses";
import Certification from "./pages/courses/Certification";
import MastersDegree from "./pages/courses/MastersDegree";

// Placement pages
import SuccessStories from "./pages/placements/SuccessStories";
import Placements from "./pages/placements/Placements";

// Practice pages
import Tutorials from "./pages/practice/Tutorials";
import Articles from "./pages/practice/Articles";
import CodingProblems from "./pages/practice/CodingProblems";
import Quizzes from "./pages/practice/Quizzes";
import OnlineCompilers from "./pages/practice/OnlineCompilers";
import CheatSheet from "./pages/practice/CheatSheet";
import Bookmarks from "./pages/practice/Bookmarks";
import InProgress from "./pages/practice/InProgress";
import Completed from "./pages/practice/Completed";

// About pages
import Log from "./pages/about-us/Log";
import InTheNews from "./pages/about-us/InTheNews";

// Other pages
import Masterclass from "./pages/Masterclass";
import HireFromUs from "./pages/HireFromUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Auth routes */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          
          {/* Course routes */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/certification" element={<Certification />} />
          <Route path="/courses/masters-degree" element={<MastersDegree />} />
          
          {/* Placement routes */}
          <Route path="/placements/success-stories" element={<SuccessStories />} />
          <Route path="/placements/placements" element={<Placements />} />
          
          {/* Practice routes */}
          <Route path="/practice" element={
            <PracticeProvider>
              <PracticeLayout>
                <Outlet />
              </PracticeLayout>
            </PracticeProvider>
          }>
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="tutorials/:id" element={<Tutorials />} />
            <Route path="articles" element={<Articles />} />
            <Route path="coding-problems" element={<CodingProblems />} />
            <Route path="quizzes" element={<Quizzes />} />
            <Route path="online-compilers" element={<OnlineCompilers />} />
            <Route path="cheat-sheet" element={<CheatSheet />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="in-progress" element={<InProgress />} />
            <Route path="completed" element={<Completed />} />
          </Route>
          
          {/* About routes */}
          <Route path="/about-us/log" element={<Log />} />
          <Route path="/about-us/in-the-news" element={<InTheNews />} />
          
          {/* Other routes */}
          <Route path="/masterclass" element={<Masterclass />} />
          <Route path="/hire-from-us" element={<HireFromUs />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
