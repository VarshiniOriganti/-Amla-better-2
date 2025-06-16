
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from 'sonner';

const HireFromUs = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    role: '',
    location: '',
    hiringCount: '',
    skillsRequired: '',
    additionalInfo: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple validation
    if (!formData.companyName || !formData.email || !formData.role) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }
    
    // Mock form submission - in a real app, this would be an API call
    setTimeout(() => {
      toast.success('Your hiring request has been submitted successfully!');
      setIsSubmitting(false);
      // Reset form
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        role: '',
        location: '',
        hiringCount: '',
        skillsRequired: '',
        additionalInfo: '',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hire from AlmaBetter</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Connect with our pool of talented graduates who are ready to make an impact at your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Why Hire Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Hire AlmaBetter Graduates?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-alma-red rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Job-Ready Skills</h3>
              <p className="text-gray-600">
                Our graduates are equipped with the latest industry-relevant skills and technologies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-alma-red rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Rigorous Training</h3>
              <p className="text-gray-600">
                Candidates undergo intensive training and practical projects to ensure they're ready for real-world challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-alma-red rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Zero Hiring Fee</h3>
              <p className="text-gray-600">
                We don't charge any recruitment fee. Hire the best talent without any additional costs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hiring Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Submit Your Hiring Request</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name*</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      placeholder="Your company name"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {/* Contact Person */}
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person*</Label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      placeholder="Your name"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email*</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number*</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {/* Role */}
                  <div className="space-y-2">
                    <Label htmlFor="role">Job Role*</Label>
                    <Select onValueChange={(value) => handleSelectChange('role', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select job role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-stack-developer">Full Stack Developer</SelectItem>
                        <SelectItem value="frontend-developer">Frontend Developer</SelectItem>
                        <SelectItem value="backend-developer">Backend Developer</SelectItem>
                        <SelectItem value="data-scientist">Data Scientist</SelectItem>
                        <SelectItem value="data-analyst">Data Analyst</SelectItem>
                        <SelectItem value="ml-engineer">Machine Learning Engineer</SelectItem>
                        <SelectItem value="devops-engineer">DevOps Engineer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">Job Location*</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="City, Country"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {/* Hiring Count */}
                  <div className="space-y-2">
                    <Label htmlFor="hiringCount">Number of Positions*</Label>
                    <Select onValueChange={(value) => handleSelectChange('hiringCount', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5</SelectItem>
                        <SelectItem value="6-10">6-10</SelectItem>
                        <SelectItem value="11-20">11-20</SelectItem>
                        <SelectItem value="21+">21+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {/* Skills Required */}
                <div className="space-y-2">
                  <Label htmlFor="skillsRequired">Skills Required*</Label>
                  <Textarea
                    id="skillsRequired"
                    name="skillsRequired"
                    placeholder="List the required skills for this role"
                    value={formData.skillsRequired}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                {/* Additional Info */}
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="Any additional details about the role or requirements"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
                
                {/* Submit Button */}
                <div className="text-center pt-4">
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto px-8 py-2 bg-alma-red hover:bg-alma-dark-red"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Hiring Request"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Past Hiring Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Hiring Partners</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-gray-100 h-20 rounded-md flex items-center justify-center">
                <span className="text-gray-500 font-medium">Partner {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HireFromUs;
