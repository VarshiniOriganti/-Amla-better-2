
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock news data
const newsArticles = [
  {
    id: 1,
    title: "AlmaBetter raises $10 million in Series A funding",
    source: "Economic Times",
    date: "February 15, 2024",
    excerpt: "EdTech platform AlmaBetter has raised $10 million in Series A funding led by Sequoia Capital India, with participation from existing investors. The company plans to use the funds to expand its course offerings and enter new markets.",
    image: "https://img.etimg.com/thumb/msid-97727984,width-1070,height-580,imgsize-940506,overlay-ettech/photo.jpg",
    url: "#",
    category: "Funding"
  },
  {
    id: 2,
    title: "AlmaBetter achieves 92% placement rate for its tech courses",
    source: "YourStory",
    date: "January 10, 2024",
    excerpt: "AlmaBetter, a leading edu-tech platform focused on tech education, has announced a 92% placement rate for its latest batch of graduates. The average salary package offered to students was 8 LPA, with the highest being 15 LPA.",
    image: "https://design-india.com/wp-content/uploads/2024/07/02.jpg",
    url: "#",
    category: "Achievement"
  },
  {
    id: 3,
    title: "AlmaBetter launches AI and ML specialization programs",
    source: "TechCrunch",
    date: "October 5, 2023",
    excerpt: "EdTech platform AlmaBetter has launched specialized programs in Artificial Intelligence and Machine Learning to address the growing demand for professionals in these fields. The programs offer a pay-after-placement model to make quality education accessible.",
    image: "https://tse4.mm.bing.net/th?id=OIP.ppAjyQlw3fzP_dMIAEqJHAHaFB&pid=Api&P=0&h=180",
    url: "#",
    category: "Product Launch"
  },
  {
    id: 4,
    title: "AlmaBetter partners with leading tech companies for placements",
    source: "Business Standard",
    date: "August 22, 2023",
    excerpt: "AlmaBetter has announced partnerships with over 100 new tech companies, including Amazon, Google, and Microsoft, for campus placements. This expansion increases their hiring partner network to over 1200 companies.",
    image: "https://tse1.mm.bing.net/th?id=OIP.50UVgkI-JgL6VekTS9m4DAHaEK&pid=Api&P=0&h=180",
    url: "#",
    category: "Partnership"
  },
  {
    id: 5,
    title: "AlmaBetter CEO named in Forbes 30 Under 30 list",
    source: "Forbes India",
    date: "June 15, 2023",
    excerpt: "The founder and CEO of AlmaBetter has been named in the prestigious Forbes 30 Under 30 list for revolutionizing tech education in India with innovative pay-after-placement models and industry-aligned curriculum.",
    image: "https://tse2.mm.bing.net/th?id=OIP.gVnXiRSxikDAkSgq5-MjtAHaEK&pid=Api&P=0&h=180",
    url: "#",
    category: "Recognition"
  },
  {
    id: 6,
    title: "AlmaBetter expands to Middle East, plans global footprint",
    source: "Mint",
    date: "April 3, 2023",
    excerpt: "After successful operations in India, EdTech platform AlmaBetter is expanding to the Middle East, starting with UAE and Saudi Arabia. The company aims to establish a global footprint by the end of 2025.",
    image: "https://tse3.mm.bing.net/th?id=OIP.1120xgCxjKVJyf7bfJDS2QE-DE&pid=Api&P=0&h=180",
    url: "#",
    category: "Expansion"
  },
  {
    id: 7,
    title: "How AlmaBetter is disrupting tech education with its unique model",
    source: "Inc42",
    date: "February 18, 2023",
    excerpt: "A deep dive into AlmaBetter's innovative education model that combines rigorous curriculum, industry partnerships, and an income-sharing agreement to make quality tech education accessible to all.",
    image: "https://static.tnn.in/thumb/msid-106186000,thumbsize-60968,width-1280,height-720,resizemode-75/106186000.jpg?quality=100",
    url: "#",
    category: "Feature"
  },
  {
    id: 8,
    title: "AlmaBetter launches Masters Degree Program with university partnership",
    source: "Education Times",
    date: "December 5, 2022",
    excerpt: "AlmaBetter has partnered with leading universities to offer accredited Masters Degree Programs in Computer Science and Data Science. The programs combine online learning with periodic classroom sessions.",
    image: "https://tse3.mm.bing.net/th?id=OIP.0FV1AOj4WFp-cTyGH624rgHaDB&pid=Api&P=0&h=180",
    url: "#",
    category: "Product Launch"
  }
];

const InTheNews = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AlmaBetter In The News</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Latest media coverage and press mentions about AlmaBetter.
            </p>
          </div>
        </div>
      </section>
      
      {/* News Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map(article => (
              <Card key={article.id} className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/800x400';
                    }}
                  />
                </div>
                <CardHeader className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={`${getCategoryColor(article.category)}`}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-xs">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-alma-red transition-colors">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  </CardTitle>
                  <div className="text-sm text-gray-500 mt-1">
                    Source: {article.source}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button variant="outline" className="text-alma-red border-alma-red hover:bg-alma-red hover:text-white flex items-center gap-2">
                    Read Full Article
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Press Contacts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Press Contact</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              For press inquiries, please contact our media relations team. We're always happy to provide information about AlmaBetter's mission, achievements, and future plans.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Media Relations</h3>
              <p className="text-gray-600 mb-1">Email: press@almabetter.com</p>
              <p className="text-gray-600">Phone: +91 1234567890</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Helper function to get badge color based on category
const getCategoryColor = (category: string) => {
  switch (category) {
    case "Funding":
      return "bg-green-100 text-green-800";
    case "Achievement":
      return "bg-purple-100 text-purple-800";
    case "Product Launch":
      return "bg-blue-100 text-blue-800";
    case "Partnership":
      return "bg-yellow-100 text-yellow-800";
    case "Recognition":
      return "bg-red-100 text-red-800";
    case "Expansion":
      return "bg-indigo-100 text-indigo-800";
    case "Feature":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default InTheNews;
