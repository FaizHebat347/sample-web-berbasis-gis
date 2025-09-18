import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Clock, MapPin, Anchor, ShoppingBag } from 'lucide-react';
import { mapLocations, categories, mapCenter, mapZoom } from '../data/mock';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icons
const createCustomIcon = (color) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="
      background-color: ${color}; 
      width: 20px; 
      height: 20px; 
      border-radius: 50%; 
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
  });
};

// Map update component
function MapUpdater({ center, zoom }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);
  
  return null;
}

// Location popup component
function LocationPopup({ location }) {
  const getIcon = (category) => {
    switch (category) {
      case 'tourism':
        return <MapPin className="w-4 h-4" />;
      case 'fishermen':
        return <Anchor className="w-4 h-4" />;
      case 'markets':
        return <ShoppingBag className="w-4 h-4" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-sm">
      <div className="relative">
        <img 
          src={location.image} 
          alt={location.name}
          className="w-full h-32 object-cover rounded-lg mb-3"
        />
        <Badge 
          className="absolute top-2 right-2 bg-white text-blue-600 hover:bg-blue-50"
        >
          {getIcon(location.category)}
          <span className="ml-1">{categories[location.category].name}</span>
        </Badge>
      </div>
      
      <h3 className="font-semibold text-lg mb-2">{location.name}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-3">
        {location.description}
      </p>
      
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Clock className="w-4 h-4 mr-1" />
        {location.openHours}
      </div>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {location.features.slice(0, 3).map((feature, index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {feature}
          </Badge>
        ))}
      </div>
      
      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
        <ExternalLink className="w-4 h-4 mr-1" />
        Learn More
      </Button>
    </div>
  );
}

// Main Interactive Map Component
export default function InteractiveMap() {
  const [activeCategories, setActiveCategories] = useState(['tourism', 'fishermen', 'markets']);
  const [filteredLocations, setFilteredLocations] = useState([]);

  useEffect(() => {
    // Filter locations based on active categories
    const filtered = [];
    activeCategories.forEach(category => {
      filtered.push(...mapLocations[category]);
    });
    setFilteredLocations(filtered);
  }, [activeCategories]);

  const toggleCategory = (category) => {
    setActiveCategories(prev => 
      prev.includes(category) 
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-4 h-4" />;
      case 'Anchor':
        return <Anchor className="w-4 h-4" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-4 h-4" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Category Filter Controls */}
      <Card className="absolute top-4 left-4 z-[1000] bg-white/95 backdrop-blur-sm border-blue-200 shadow-lg">
        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Filter Categories</h3>
          <div className="space-y-2">
            {Object.entries(categories).map(([key, category]) => (
              <Button
                key={key}
                variant={activeCategories.includes(key) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleCategory(key)}
                className={`w-full justify-start transition-all duration-200 ${
                  activeCategories.includes(key) 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' 
                    : 'bg-white hover:bg-blue-50 text-gray-700 border-blue-200'
                }`}
              >
                {getIcon(category.icon)}
                <span className="ml-2">{category.name}</span>
                <Badge 
                  variant="secondary" 
                  className="ml-auto bg-blue-100 text-blue-700 text-xs"
                >
                  {mapLocations[key].length}
                </Badge>
              </Button>
            ))}
          </div>
          
          <div className="mt-4 pt-3 border-t border-blue-100">
            <p className="text-xs text-gray-500">
              Showing {filteredLocations.length} locations
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Map */}
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <MapUpdater center={mapCenter} zoom={mapZoom} />
        
        {filteredLocations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates}
            icon={createCustomIcon(categories[location.category].color)}
          >
            <Popup maxWidth={320} className="custom-popup">
              <LocationPopup location={location} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}