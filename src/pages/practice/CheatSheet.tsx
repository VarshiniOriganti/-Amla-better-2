
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy } from 'lucide-react';

const CheatSheet = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tech Cheat Sheets</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Quick reference guides for programming languages, frameworks, and tools.
            </p>
          </div>
        </div>
      </section>
      
      {/* Cheat Sheets Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="javascript">
            <TabsList className="flex overflow-x-auto mb-6 pb-2">
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="git">Git</TabsTrigger>
              <TabsTrigger value="sql">SQL</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
            </TabsList>
            
            {/* JavaScript Cheat Sheet */}
            <TabsContent value="javascript">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>JavaScript Cheat Sheet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CheatSheetSection 
                    title="Variables and Data Types" 
                    items={[
                      { label: "Declaring variables", code: "let x = 5;\nconst y = 'hello';\nvar z = true;" },
                      { label: "Data types", code: "// Number\nlet num = 42;\n\n// String\nlet str = 'Text';\n\n// Boolean\nlet bool = true;\n\n// Null\nlet empty = null;\n\n// Undefined\nlet notDefined;\n\n// Object\nlet obj = {name: 'John', age: 30};\n\n// Array\nlet arr = [1, 2, 3];" },
                      { label: "Type conversion", code: "// To string\nString(42);  // '42'\n\n// To number\nNumber('42');  // 42\n\n// To boolean\nBoolean(1);  // true" }
                    ]} 
                  />
                  
                  <CheatSheetSection 
                    title="Functions" 
                    items={[
                      { label: "Function declaration", code: "function add(a, b) {\n  return a + b;\n}" },
                      { label: "Function expression", code: "const add = function(a, b) {\n  return a + b;\n};" },
                      { label: "Arrow function", code: "const add = (a, b) => {\n  return a + b;\n};\n\n// Short syntax\nconst add = (a, b) => a + b;" },
                      { label: "Default parameters", code: "function greet(name = 'User') {\n  return `Hello, ${name}!`;\n}" }
                    ]} 
                  />
                  
                  <CheatSheetSection 
                    title="Arrays" 
                    items={[
                      { label: "Creating arrays", code: "const fruits = ['apple', 'banana', 'orange'];" },
                      { label: "Array methods", code: "// Add to end\nfruits.push('grape');  // ['apple', 'banana', 'orange', 'grape']\n\n// Remove from end\nfruits.pop();  // ['apple', 'banana', 'orange']\n\n// Add to beginning\nfruits.unshift('mango');  // ['mango', 'apple', 'banana', 'orange']\n\n// Remove from beginning\nfruits.shift();  // ['apple', 'banana', 'orange']\n\n// Find index\nfruits.indexOf('banana');  // 1\n\n// Slice array\nfruits.slice(1, 2);  // ['banana']\n\n// Join array\nfruits.join(', ');  // 'apple, banana, orange'" },
                      { label: "Array iteration", code: "// forEach\nfruits.forEach(fruit => console.log(fruit));\n\n// map\nconst upperFruits = fruits.map(fruit => fruit.toUpperCase());\n\n// filter\nconst longFruits = fruits.filter(fruit => fruit.length > 5);\n\n// reduce\nconst letters = fruits.reduce((total, fruit) => total + fruit.length, 0);" }
                    ]} 
                  />
                  
                  <CheatSheetSection 
                    title="Objects" 
                    items={[
                      { label: "Creating objects", code: "const person = {\n  name: 'John',\n  age: 30,\n  greet() {\n    return `Hello, my name is ${this.name}`;\n  }\n};" },
                      { label: "Accessing properties", code: "person.name;  // 'John'\nperson['age'];  // 30" },
                      { label: "Object methods", code: "Object.keys(person);  // ['name', 'age', 'greet']\nObject.values(person);  // ['John', 30, [Function: greet]]\nObject.entries(person);  // [['name', 'John'], ['age', 30], ['greet', [Function: greet]]]" },
                      { label: "Destructuring", code: "const { name, age } = person;\nconsole.log(name);  // 'John'\nconsole.log(age);  // 30" }
                    ]} 
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* React Cheat Sheet */}
            <TabsContent value="react">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>React Cheat Sheet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CheatSheetSection 
                    title="Components" 
                    items={[
                      { label: "Functional Component", code: "import React from 'react';\n\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\nexport default Welcome;" },
                      { label: "Arrow Function Component", code: "import React from 'react';\n\nconst Welcome = (props) => {\n  return <h1>Hello, {props.name}</h1>;\n};\n\nexport default Welcome;" },
                      { label: "Class Component", code: "import React, { Component } from 'react';\n\nclass Welcome extends Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}\n\nexport default Welcome;" }
                    ]} 
                  />
                  
                  <CheatSheetSection 
                    title="Hooks" 
                    items={[
                      { label: "useState", code: "import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}" },
                      { label: "useEffect", code: "import React, { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [data, setData] = useState(null);\n  \n  useEffect(() => {\n    // Runs after every render\n    fetchData().then(result => setData(result));\n    \n    return () => {\n      // Cleanup function (runs before component unmounts)\n      cleanupFunction();\n    };\n  }, []);  // Empty dependency array means run once on mount\n  \n  return <div>{data ? data : 'Loading...'}</div>;\n}" },
                      { label: "useContext", code: "import React, { useContext } from 'react';\n\n// Create context\nconst ThemeContext = React.createContext('light');\n\nfunction ThemedButton() {\n  const theme = useContext(ThemeContext);\n  return <button className={theme}>Themed Button</button>;\n}\n\n// Provider\nfunction App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <ThemedButton />\n    </ThemeContext.Provider>\n  );\n}" }
                    ]} 
                  />
                  
                  <CheatSheetSection 
                    title="Props & State" 
                    items={[
                      { label: "Passing Props", code: "// Parent Component\nfunction Parent() {\n  return <Child name=\"John\" age={30} />;\n}\n\n// Child Component\nfunction Child(props) {\n  return (\n    <div>\n      <p>Name: {props.name}</p>\n      <p>Age: {props.age}</p>\n    </div>\n  );\n}" },
                      { label: "Props Destructuring", code: "function Child({ name, age }) {\n  return (\n    <div>\n      <p>Name: {name}</p>\n      <p>Age: {age}</p>\n    </div>\n  );\n}" },
                      { label: "Default Props", code: "function Child({ name = 'Guest', age = 0 }) {\n  return (\n    <div>\n      <p>Name: {name}</p>\n      <p>Age: {age}</p>\n    </div>\n  );\n}" }
                    ]} 
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Python Cheat Sheet */}
            <TabsContent value="python">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Python Cheat Sheet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CheatSheetSection 
                    title="Basics" 
                    items={[
                      { label: "Variables", code: "# Variable assignment\nx = 5\nname = \"John\"\nis_valid = True\n\n# Multiple assignment\na, b, c = 1, 2, 3" },
                      { label: "Data Types", code: "# Integer\nx = 5\n\n# Float\ny = 3.14\n\n# String\nname = \"John\"\n\n# Boolean\nis_valid = True\n\n# List (mutable)\nfruits = [\"apple\", \"banana\", \"orange\"]\n\n# Tuple (immutable)\ncoordinates = (10, 20)\n\n# Dictionary\nperson = {\"name\": \"John\", \"age\": 30}\n\n# Set\nunique_numbers = {1, 2, 3, 4, 5}" },
                      { label: "Type Conversion", code: "# To integer\nint(\"42\")    # 42\nint(3.14)    # 3\n\n# To float\nfloat(\"3.14\")  # 3.14\nfloat(42)      # 42.0\n\n# To string\nstr(42)       # \"42\"\nstr(3.14)     # \"3.14\"" }
                    ]} 
                  />
                  
                  <CheatSheetSection 
                    title="Control Flow" 
                    items={[
                      { label: "If Statement", code: "x = 10\n\nif x > 5:\n    print(\"x is greater than 5\")\nelif x == 5:\n    print(\"x is equal to 5\")\nelse:\n    print(\"x is less than 5\")" },
                      { label: "Loops", code: "# For loop\nfor i in range(5):\n    print(i)  # Prints 0, 1, 2, 3, 4\n\n# While loop\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1" },
                      { label: "List Comprehension", code: "# Create a list of squares\nsquares = [x**2 for x in range(10)]\n\n# Filter even numbers\neven_numbers = [x for x in range(10) if x % 2 == 0]" }
                    ]} 
                  />
                  
                  <CheatSheetSection 
                    title="Functions" 
                    items={[
                      { label: "Function Definition", code: "def greet(name):\n    return f\"Hello, {name}!\"\n\n# Call the function\ngreet(\"John\")  # Returns \"Hello, John!\"" },
                      { label: "Default Parameters", code: "def greet(name=\"Guest\"):\n    return f\"Hello, {name}!\"\n\ngreet()      # Returns \"Hello, Guest!\"\ngreet(\"John\")  # Returns \"Hello, John!\"" },
                      { label: "Args and Kwargs", code: "def func(*args, **kwargs):\n    # args is a tuple of positional arguments\n    # kwargs is a dictionary of keyword arguments\n    print(args)    # Prints: (1, 2, 3)\n    print(kwargs)  # Prints: {'a': 4, 'b': 5}\n\nfunc(1, 2, 3, a=4, b=5)" },
                      { label: "Lambda Functions", code: "# Regular function\ndef add(a, b):\n    return a + b\n\n# Equivalent lambda function\nadd = lambda a, b: a + b" }
                    ]} 
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Git Cheat Sheet */}
            <TabsContent value="git">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Git Cheat Sheet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CheatSheetSection 
                    title="Setup & Configuration" 
                    items={[
                      { label: "Configuration", code: "# Set global name and email\ngit config --global user.name \"Your Name\"\ngit config --global user.email \"your.email@example.com\"\n\n# View configuration\ngit config --list" },
                      { label: "Initialize Repository", code: "# Create a new git repository\ngit init" }
                    ]} 
                  />
                  
                  <CheatSheetSection 
                    title="Basic Commands" 
                    items={[
                      { label: "Status", code: "# Check status of working directory\ngit status" },
                      { label: "Add Files", code: "# Add files to staging area\ngit add filename.txt    # Add specific file\ngit add .              # Add all files" },
                      { label: "Commit", code: "# Commit changes\ngit commit -m \"Commit message\"\n\n# Commit and add in one command\ngit commit -am \"Commit message\"" },
                      { label: "Log", code: "# View commit history\ngit log\n\n# View compact history\ngit log --oneline\n\n# View graphical history\ngit log --graph --oneline" }
                    ]} 
                  />
                  
                  <CheatSheetSection 
                    title="Branches" 
                    items={[
                      { label: "List Branches", code: "# List all branches\ngit branch\n\n# List remote branches\ngit branch -r" },
                      { label: "Create Branch", code: "# Create new branch\ngit branch branch-name\n\n# Create and switch to new branch\ngit checkout -b branch-name" },
                      { label: "Switch Branch", code: "# Switch to another branch\ngit checkout branch-name\n\n# Using git switch (newer Git versions)\ngit switch branch-name" },
                      { label: "Delete Branch", code: "# Delete a branch\ngit branch -d branch-name\n\n# Force delete a branch\ngit branch -D branch-name" }
                    ]} 
                  />
                  
                  <CheatSheetSection 
                    title="Remote Repositories" 
                    items={[
                      { label: "Add Remote", code: "# Add remote repository\ngit remote add origin https://github.com/username/repo.git" },
                      { label: "Push", code: "# Push to remote repository\ngit push origin branch-name\n\n# Push and set upstream branch\ngit push -u origin branch-name" },
                      { label: "Pull", code: "# Pull from remote repository\ngit pull origin branch-name" },
                      { label: "Clone", code: "# Clone a repository\ngit clone https://github.com/username/repo.git" }
                    ]} 
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* SQL Cheat Sheet */}
            <TabsContent value="sql">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>SQL Cheat Sheet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CheatSheetSection 
                    title="Basic Queries" 
                    items={[
                      { label: "SELECT", code: "-- Select all columns\nSELECT * FROM users;\n\n-- Select specific columns\nSELECT first_name, last_name, email FROM users;" },
                      { label: "WHERE", code: "-- Basic filtering\nSELECT * FROM users WHERE age > 30;\n\n-- Multiple conditions\nSELECT * FROM users WHERE age > 30 AND country = 'USA';" },
                      { label: "ORDER BY", code: "-- Sort in ascending order (default)\nSELECT * FROM users ORDER BY last_name;\n\n-- Sort in descending order\nSELECT * FROM users ORDER BY age DESC;" },
                      { label: "LIMIT", code: "-- Limit results to 10 records\nSELECT * FROM users LIMIT 10;\n\n-- Pagination: skip 10, take next 10\nSELECT * FROM users LIMIT 10 OFFSET 10;" }
                    ]} 
                  />
                  
                  <CheatSheetSection 
                    title="Data Manipulation" 
                    items={[
                      { label: "INSERT", code: "-- Insert a single row\nINSERT INTO users (first_name, last_name, email)\nVALUES ('John', 'Doe', 'john.doe@example.com');\n\n-- Insert multiple rows\nINSERT INTO users (first_name, last_name, email)\nVALUES \n  ('John', 'Doe', 'john.doe@example.com'),\n  ('Jane', 'Smith', 'jane.smith@example.com');" },
                      { label: "UPDATE", code: "-- Update all matching rows\nUPDATE users\nSET status = 'active'\nWHERE last_login > '2023-01-01';\n\n-- Update multiple columns\nUPDATE users\nSET \n  status = 'inactive',\n  last_updated = CURRENT_TIMESTAMP\nWHERE last_login < '2023-01-01';" },
                      { label: "DELETE", code: "-- Delete matching rows\nDELETE FROM users WHERE status = 'inactive';\n\n-- Delete all rows\nDELETE FROM users;" }
                    ]} 
                  />
                  
                  <CheatSheetSection 
                    title="Joins" 
                    items={[
                      { label: "INNER JOIN", code: "-- Inner join (only matching records)\nSELECT users.name, orders.order_id\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;" },
                      { label: "LEFT JOIN", code: "-- Left join (all records from left table)\nSELECT users.name, orders.order_id\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id;" },
                      { label: "RIGHT JOIN", code: "-- Right join (all records from right table)\nSELECT users.name, orders.order_id\nFROM users\nRIGHT JOIN orders ON users.id = orders.user_id;" },
                      { label: "FULL JOIN", code: "-- Full join (all records from both tables)\nSELECT users.name, orders.order_id\nFROM users\nFULL JOIN orders ON users.id = orders.user_id;" }
                    ]} 
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* CSS Cheat Sheet */}
            <TabsContent value="css">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>CSS Cheat Sheet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CheatSheetSection 
                    title="Selectors" 
                    items={[
                      { label: "Basic Selectors", code: "/* Element Selector */\np { color: red; }\n\n/* Class Selector */\n.container { width: 960px; }\n\n/* ID Selector */\n#header { height: 80px; }\n\n/* Universal Selector */\n* { margin: 0; padding: 0; }" },
                      { label: "Combinators", code: "/* Descendant Selector */\ndiv p { color: blue; }\n\n/* Child Selector */\ndiv > p { font-weight: bold; }\n\n/* Adjacent Sibling Selector */\nh2 + p { margin-top: 0; }\n\n/* General Sibling Selector */\nh2 ~ p { color: gray; }" },
                      { label: "Attribute Selectors", code: "/* Elements with attribute */\n[type] { border: 1px solid; }\n\n/* Elements with specific attribute value */\n[type=\"text\"] { padding: 5px; }\n\n/* Elements with attribute containing value */\n[class*=\"col\"] { float: left; }\n\n/* Elements with attribute starting with value */\n[href^=\"https\"] { color: green; }\n\n/* Elements with attribute ending with value */\n[href$=\".pdf\"] { color: red; }" }
                    ]} 
                  />
                  
                  <CheatSheetSection 
                    title="Box Model" 
                    items={[
                      { label: "Box Model Properties", code: "/* Content */\nwidth: 300px;\nheight: 200px;\n\n/* Padding */\npadding: 10px; /* All sides */\npadding: 10px 20px; /* Vertical, Horizontal */\npadding: 10px 20px 15px 25px; /* Top, Right, Bottom, Left */\npadding-top: 10px;\npadding-right: 20px;\npadding-bottom: 15px;\npadding-left: 25px;\n\n/* Border */\nborder: 1px solid #000; /* Width, Style, Color */\nborder-width: 1px 2px 3px 4px; /* Top, Right, Bottom, Left */\nborder-style: solid;\nborder-color: #000;\n\n/* Margin */\nmargin: 10px; /* All sides */\nmargin: 0 auto; /* Center horizontally */\nmargin-top: 10px;\nmargin-right: 20px;\nmargin-bottom: 15px;\nmargin-left: 25px;" },
                      { label: "Box Sizing", code: "/* Default */\nbox-sizing: content-box; /* Width/height applies to content only */\n\n/* Include padding and border in element's width/height */\nbox-sizing: border-box;" },
                      { label: "Display Types", code: "display: block; /* Takes full width, creates line break */\ndisplay: inline; /* Takes only needed width, no line break */\ndisplay: inline-block; /* Inline with block properties */\ndisplay: flex; /* Flexbox */\ndisplay: grid; /* CSS Grid */\ndisplay: none; /* Hide element */\nvisibility: hidden; /* Hide but preserve space */" }
                    ]} 
                  />
                  
                  <CheatSheetSection 
                    title="Flexbox" 
                    items={[
                      { label: "Container Properties", code: "/* Init flexbox */\ndisplay: flex;\n\n/* Direction */\nflex-direction: row; /* Default: left to right */\nflex-direction: row-reverse; /* Right to left */\nflex-direction: column; /* Top to bottom */\nflex-direction: column-reverse; /* Bottom to top */\n\n/* Wrap */\nflex-wrap: nowrap; /* Default: single line */\nflex-wrap: wrap; /* Multiple lines */\n\n/* Justify Content (main axis) */\njustify-content: flex-start; /* Default */\njustify-content: flex-end;\njustify-content: center;\njustify-content: space-between;\njustify-content: space-around;\njustify-content: space-evenly;\n\n/* Align Items (cross axis) */\nalign-items: stretch; /* Default */\nalign-items: flex-start;\nalign-items: flex-end;\nalign-items: center;\nalign-items: baseline;" },
                      { label: "Item Properties", code: "/* Order */\norder: 0; /* Default */\norder: 1; /* Higher numbers appear later */\n\n/* Flex Grow (proportion of available space) */\nflex-grow: 0; /* Default: don't grow */\nflex-grow: 1; /* Grow */\n\n/* Flex Shrink (how much item can shrink) */\nflex-shrink: 1; /* Default: can shrink */\nflex-shrink: 0; /* Don't shrink */\n\n/* Flex Basis (initial size) */\nflex-basis: auto; /* Default */\nflex-basis: 100px; /* Set initial width/height */\n\n/* Shorthand */\nflex: 0 1 auto; /* grow shrink basis */" }
                    ]} 
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Cheat Sheet Section Component
const CheatSheetSection = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-1">
              <p className="font-medium text-sm">{item.label}</p>
              <button 
                className="text-alma-red hover:text-alma-dark-red transition-colors p-1"
                title="Copy to clipboard"
                onClick={() => navigator.clipboard.writeText(item.code)}
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
              <code>{item.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheatSheet;
