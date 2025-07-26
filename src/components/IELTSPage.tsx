import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const IELTSPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h1 className="text-3xl lg:text-5xl font-bold mb-2">
            IELTS Course by Munzereen Shahid
          </h1>
          <p className="text-sm text-gray-300 mb-4">
            (৮২.৬% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
          </p>
          <p className="text-gray-400">
            Get complete preparation of Academic IELTS and General Training IELTS in one course! Join our IELTS Course today to achieve your desired band score under the guidance of the best IELTS Instructor in the country.
          </p>

          {/* Instructor Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Course Instructor</h2>
            <Card className="bg-white text-black p-4 w-full">
              <CardContent>
                <img
                  src="https://cdn.10minuteschool.com/images/team/munzereen-shahid.png"
                  alt="Munzereen Shahid"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">Munzereen Shahid</h3>
                  <p className="text-sm text-gray-600">
                    MSc (English), University of Oxford (UK);<br />
                    BA, MA (English), University of Dhaka;<br />
                    IELTS: 8.5
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Floating Card Section */}
        <div className="relative">
          <Card className="bg-white text-black p-4 sticky top-10 shadow-lg">
            <div className="relative w-full h-40 rounded overflow-hidden mb-4">
              <img
                src="https://i.ibb.co/Y3BQrd6/ielts-thumbnail.png"
                alt="IELTS Trailer"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Play className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="text-xl font-bold text-green-600 mb-1">৳3850 <span className="line-through text-gray-500 ml-2">৳5000</span></div>
            <div className="text-red-500 font-semibold mb-4">1150 ৳ ছাড়</div>
            <Button className="w-full">Enroll</Button>
            <ul className="text-sm text-gray-700 mt-4 space-y-2">
              <li>👥 Total Enrolled: 32995</li>
              <li>🕒 Time Required: 50 hours</li>
              <li>🎥 54 Videos</li>
              <li>📚 10 Reading & 10 Listening Mocktests</li>
              <li>📄 38 Lecture Sheets</li>
              <li>🎞 56 Video Lectures</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IELTSPage;


