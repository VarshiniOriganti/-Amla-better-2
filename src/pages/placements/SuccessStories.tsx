
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SuccessStories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-alma-black text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Read inspiring stories from our alumni who transformed their careers with AlmaBetter.
            </p>
          </div>
        </div>
      </section>
      
      {/* Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Success Story 1 - Ananya Sharma */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-60 bg-gray-200 overflow-hidden">
                <img 
                  src="https://assets.kpmg.com/is/image/kpmg/ie-sharma-ananya:cq5dam.web.1200.600" 
                  alt="Ananya Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-alma-red rounded-full flex items-center justify-center text-white font-bold">
                    AS
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-lg">Ananya Sharma</h3>
                    <p className="text-gray-500 text-sm">Software Engineer @ Google</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "The Data Science program at AlmaBetter was a game-changer for me. The curriculum was perfectly aligned with industry needs, and the hands-on projects helped me build a strong portfolio. The mock interviews and resume reviews were instrumental in landing my dream role at Google."
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">Batch: Jan 2023</span>
                  <span>Placement: Jun 2023</span>
                </div>
              </div>
            </div>
            
           
            
            {/* Success Story 2 - Rahul Kumar */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-60 bg-gray-200 overflow-hidden">
                <img 
                  src="https://www.stjude.org/directory/k/rahul-kumar/_jcr_content/image.img.800.high.jpg/1564499252792.jpg" 
                  alt="Rahul Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-alma-red rounded-full flex items-center justify-center text-white font-bold">
                    RK
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-lg">Rahul Kumar</h3>
                    <p className="text-gray-500 text-sm">Data Scientist @ Microsoft</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "AlmaBetter's Data Science bootcamp transformed my career. The project-based learning approach helped me build a strong portfolio. The placement team guided me through every step of the interview process at Microsoft."
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">Batch: Mar 2023</span>
                  <span>Placement: Jul 2023</span>
                </div>
              </div>
            </div>
            
            {/* Success Story 3 - Priya Mishra */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-60 bg-gray-200 overflow-hidden">
                <img 
                  src="https://tse3.mm.bing.net/th?id=OIP.SbvHZiy7lsTWgRF3KgsdRgAAAA&pid=Api&P=0&h=180" 
                  alt="Priya Mishra"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-alma-red rounded-full flex items-center justify-center text-white font-bold">
                    PM
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-lg">Priya Mishra</h3>
                    <p className="text-gray-500 text-sm">Backend Developer @ Amazon</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "The pay-after-placement model was a game-changer for me. I could focus entirely on learning without worrying about finances. The skills I gained at AlmaBetter gave me the confidence to ace my interviews at Amazon."
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">Batch: Feb 2023</span>
                  <span>Placement: May 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SuccessStories;
