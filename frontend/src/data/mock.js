// Mock data for Tanjungpinang and Bintan GIS Map
export const mapLocations = {
  // Tourist Attractions
  tourism: [
    {
      id: 1,
      name: "Penyengat Island",
      category: "tourism",
      coordinates: [0.9139, 104.4447],
      description: "Historic island with royal tombs, mosque, and Malay heritage buildings. Known as the heart of Malay culture in Riau Islands.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      features: ["Historical Site", "Royal Tombs", "Mosque", "Cultural Heritage"],
      openHours: "08:00 - 17:00",
      website: "#"
    },
    {
      id: 2,
      name: "Trikora Beach",
      category: "tourism",
      coordinates: [1.0833, 104.5500],
      description: "Beautiful white sand beach with crystal clear waters, perfect for swimming and water sports activities.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
      features: ["White Sand Beach", "Swimming", "Water Sports", "Sunset View"],
      openHours: "24 Hours",
      website: "#"
    },
    {
      id: 3,
      name: "Vihara Ksitigarbha Bodhisattva",
      category: "tourism",
      coordinates: [0.9180, 104.4556],
      description: "Beautiful Buddhist temple with traditional architecture and peaceful gardens.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      features: ["Buddhist Temple", "Traditional Architecture", "Gardens", "Cultural Site"],
      openHours: "06:00 - 18:00",
      website: "#"
    },
    {
      id: 4,
      name: "Bintan Mangrove Discovery Tour",
      category: "tourism",
      coordinates: [1.1333, 104.3833],
      description: "Explore the rich biodiversity of mangrove forests with guided boat tours and wildlife watching.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      features: ["Mangrove Forest", "Boat Tours", "Wildlife Watching", "Eco-tourism"],
      openHours: "08:00 - 16:00",
      website: "#"
    },
    {
      id: 5,
      name: "Masjid Raya Sultan Riau",
      category: "tourism",
      coordinates: [0.9142, 104.4453],
      description: "Grand mosque with stunning Islamic architecture and important religious significance to the region.",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&h=300&fit=crop",
      features: ["Grand Mosque", "Islamic Architecture", "Religious Site", "Cultural Heritage"],
      openHours: "05:00 - 21:00",
      website: "#"
    }
  ],

  // Fishermen Areas
  fishermen: [
    {
      id: 6,
      name: "Tanjungpinang Fishing Port",
      category: "fishermen",
      coordinates: [0.9186, 104.4469],
      description: "Main fishing port serving local fishermen community with fresh seafood markets and traditional boats.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      features: ["Main Port", "Fresh Seafood", "Traditional Boats", "Local Fishermen"],
      openHours: "04:00 - 20:00",
      website: "#"
    },
    {
      id: 7,
      name: "Senggarang Fishing Village",
      category: "fishermen",
      coordinates: [0.9250, 104.4400],
      description: "Traditional floating village with unique stilt houses and authentic fishing community lifestyle.",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c35a?w=400&h=300&fit=crop",
      features: ["Floating Village", "Stilt Houses", "Traditional Lifestyle", "Cultural Experience"],
      openHours: "24 Hours",
      website: "#"
    },
    {
      id: 8,
      name: "Bintan Fishing Dock",
      category: "fishermen",
      coordinates: [1.1200, 104.4100],
      description: "Bustling fishing dock where local fishermen bring their daily catch and maintain their traditional boats.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      features: ["Daily Catch", "Boat Maintenance", "Local Community", "Morning Markets"],
      openHours: "03:00 - 19:00",
      website: "#"
    },
    {
      id: 9,
      name: "Kampung Nelayan Tanjung Uma",
      category: "fishermen",  
      coordinates: [1.0500, 104.5200],
      description: "Traditional fishermen village known for sustainable fishing practices and community-based tourism.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      features: ["Sustainable Fishing", "Community Tourism", "Traditional Methods", "Village Life"],
      openHours: "24 Hours",
      website: "#"
    }
  ],

  // Markets and Culinary
  markets: [
    {
      id: 10,
      name: "Pasar Oleh-oleh Tanjungpinang",
      category: "markets",
      coordinates: [0.9156, 104.4489],
      description: "Traditional souvenir market offering local handicrafts, batik, and regional specialties.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=300&fit=crop",
      features: ["Local Handicrafts", "Batik", "Souvenirs", "Regional Specialties"],
      openHours: "08:00 - 20:00",
      website: "#"
    },
    {
      id: 11,
      name: "Pekan Bintan Traditional Market",
      category: "markets",
      coordinates: [1.1000, 104.3500],
      description: "Authentic local market with fresh produce, spices, and traditional Indonesian ingredients.",
      image: "https://images.unsplash.com/photo-1601544313419-b9db9da35707?w=400&h=300&fit=crop",
      features: ["Fresh Produce", "Local Spices", "Traditional Ingredients", "Morning Market"],
      openHours: "05:00 - 12:00",
      website: "#"
    },
    {
      id: 12,
      name: "Warung Mak Esah",
      category: "markets",
      coordinates: [0.9170, 104.4500],
      description: "Famous local eatery serving authentic Malay cuisine including otak-otak, lontong, and fresh seafood.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      features: ["Authentic Malay Cuisine", "Otak-otak", "Lontong", "Fresh Seafood"],
      openHours: "07:00 - 22:00",
      website: "#"
    },
    {
      id: 13,
      name: "Gonggong Noodle Center",
      category: "markets",
      coordinates: [0.9200, 104.4600],
      description: "Local favorite serving gonggong (sea snail) noodles and other traditional Tanjungpinang delicacies.",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",
      features: ["Gonggong Noodles", "Sea Snail Dishes", "Local Delicacies", "Street Food"],
      openHours: "10:00 - 23:00",
      website: "#"
    },
    {
      id: 14,
      name: "Bintan Seafood Market",
      category: "markets",
      coordinates: [1.1100, 104.4000],
      description: "Fresh seafood market and food court with grilled fish, crab, and traditional sambals.",
      image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=400&h=300&fit=crop",
      features: ["Fresh Seafood", "Grilled Fish", "Crab Dishes", "Traditional Sambals"],
      openHours: "16:00 - 24:00",
      website: "#"
    }
  ]
};

// Category configurations
export const categories = {
  tourism: {
    name: "Tourist Attractions",
    color: "#3B82F6", // Blue
    icon: "MapPin"
  },
  fishermen: {
    name: "Fishermen Areas", 
    color: "#0EA5E9", // Sky Blue
    icon: "Anchor"
  },
  markets: {
    name: "Markets & Culinary",
    color: "#1E40AF", // Dark Blue
    icon: "ShoppingBag"
  }
};

// Map center coordinates (Tanjungpinang)
export const mapCenter = [0.9186, 104.4469];
export const mapZoom = 11;