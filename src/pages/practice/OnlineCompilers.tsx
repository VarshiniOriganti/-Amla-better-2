
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Play, Save, Download, Copy } from 'lucide-react';

const OnlineCompilers = () => {
  const [activeLanguage, setActiveLanguage] = useState("javascript");
  const [code, setCode] = useState(`// Write your JavaScript code here
function greet() {
  console.log("Hello, AlmaBetter!");
}

greet();`);
  const [output, setOutput] = useState("");
  
  const handleRunCode = () => {
    setOutput("Output:\nHello, AlmaBetter!");
  };
  
  const handleLanguageChange = (language: string) => {
    setActiveLanguage(language);
    
    // Set default code snippet based on language
    switch(language) {
      case "javascript":
        setCode(`// Write your JavaScript code here
function greet() {
  console.log("Hello, AlmaBetter!");
}

greet();`);
        break;
      case "python":
        setCode(`# Write your Python code here
def greet():
    print("Hello, AlmaBetter!")

greet()`);
        break;
      case "java":
        setCode(`// Write your Java code here
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, AlmaBetter!");
    }
}`);
        break;
      case "cpp":
        setCode(`// Write your C++ code here
#include <iostream>

int main() {
    std::cout << "Hello, AlmaBetter!" << std::endl;
    return 0;
}`);
        break;
    }
    
    setOutput("");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Online Compilers</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Write and execute code in multiple programming languages directly in your browser.
            </p>
          </div>
        </div>
      </section>
      
      {/* Compiler Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Code Editor</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript" onValueChange={handleLanguageChange}>
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="java">Java</TabsTrigger>
                  <TabsTrigger value="cpp">C++</TabsTrigger>
                </TabsList>
                
                <TabsContent value="javascript" className="space-y-4">
                  <div className="relative">
                    <Textarea
                      className="min-h-[400px] font-mono p-4 bg-gray-900 text-gray-100"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" title="Copy">
                        <Copy className="h-4 w-4 text-gray-300" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" title="Save">
                        <Save className="h-4 w-4 text-gray-300" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" title="Download">
                        <Download className="h-4 w-4 text-gray-300" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="python" className="space-y-4">
                  <div className="relative">
                    <Textarea
                      className="min-h-[400px] font-mono p-4 bg-gray-900 text-gray-100"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" title="Copy">
                        <Copy className="h-4 w-4 text-gray-300" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" title="Save">
                        <Save className="h-4 w-4 text-gray-300" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" title="Download">
                        <Download className="h-4 w-4 text-gray-300" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="java" className="space-y-4">
                  <div className="relative">
                    <Textarea
                      className="min-h-[400px] font-mono p-4 bg-gray-900 text-gray-100"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" title="Copy">
                        <Copy className="h-4 w-4 text-gray-300" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" title="Save">
                        <Save className="h-4 w-4 text-gray-300" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" title="Download">
                        <Download className="h-4 w-4 text-gray-300" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="cpp" className="space-y-4">
                  <div className="relative">
                    <Textarea
                      className="min-h-[400px] font-mono p-4 bg-gray-900 text-gray-100"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" title="Copy">
                        <Copy className="h-4 w-4 text-gray-300" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" title="Save">
                        <Save className="h-4 w-4 text-gray-300" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" title="Download">
                        <Download className="h-4 w-4 text-gray-300" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="flex justify-end mt-4">
                <Button 
                  className="bg-alma-red hover:bg-alma-dark-red flex items-center"
                  onClick={handleRunCode}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Run Code
                </Button>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Output</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-md min-h-[100px] font-mono">
                  {output || "Click 'Run Code' to see the output"}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-gray-500">
                Currently editing: <span className="font-semibold">{activeLanguage.charAt(0).toUpperCase() + activeLanguage.slice(1)}</span>
              </p>
              <p className="text-sm text-gray-500">
                AlmaBetter Online Compiler
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OnlineCompilers;
