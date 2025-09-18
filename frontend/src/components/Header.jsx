import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Waves, Globe } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Title Section */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-3 rounded-full shadow-lg">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Tanjungpinang & Bintan
              </h1>
              <p className="text-sm text-gray-600 flex items-center mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                Riau Islands, Indonesia
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="flex flex-wrap gap-3">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="px-3 py-2">
                <div className="flex items-center space-x-2">
                  <Waves className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Interactive</p>
                    <p className="text-sm font-semibold text-gray-800">GIS Map</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="px-3 py-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Locations</p>
                    <p className="text-sm font-semibold text-gray-800">14 Places</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors">
              Live Data
            </Badge>
          </div>
        </div>
        
        {/* Description */}
        <div className="mt-4 max-w-3xl">
          <p className="text-gray-600 text-sm leading-relaxed">
            Explore the beautiful islands of Tanjungpinang and Bintan through our interactive map. 
            Discover tourist attractions, traditional fishermen areas, and authentic local markets 
            and culinary experiences across the Riau Islands.
          </p>
        </div>
      </div>
    </div>
  );
}