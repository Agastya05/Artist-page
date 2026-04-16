import React, { useState, useEffect } from "react";
import "./ArtistDashboard.css";
import ArtistHeader from "./components/ArtistHeader";
import ArtworkGallery from "./components/ArtworkGallery";
import ArtistBillboard from "./components/ArtistBillboard";

const ArtistDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const featuredArtists = [
    {
      id: 1,
      name: "Nandini Saha Ghosh",
      tagline: "Capturing Life Through Fine Art",
      location: "India",
      avatar: "https://zigguratss.com/assets/upload/artist/artist-844.jpg",
      coverArt:
        "https://zigguratss.com/assets/upload/art/zigguratss_d128b7ad9e50799ddd79830332c47029.webp",
      studioImage:
        "https://images.unsplash.com/photo-1578314675288-ffafd4ae4fe6?w=800",
      education: "Bachelor of Fine Arts, Delhi University",
      specialty: "Landscape Painting",
      shopName: "Fine Art Studio",
      bio: "Nandini Saha Ghosh is a passionate landscape painter known for her vibrant acrylic works. Her artwork celebrates the beauty of nature and brings warmth to any living space.",
      stats: { listings: 24, sold: 156, reviews: 142, rating: 4.9 },
      featuredWork: "Guardian at the Window",
      priceRange: "₹12,500 - ₹45,000",
      badge: "Featured Artist",
      artworks: [
        {
          id: 101,
          title: "Guardian at the Window",
          image:
            "https://zigguratss.com/assets/upload/art/zigguratss_d128b7ad9e50799ddd79830332c47029.webp",
          medium: "Acrylic on Canvas",
          year: "2024",
          price: "₹12,500",
        },
        {
          id: 102,
          title: "Serene Landscape",
          image:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500",
          medium: "Acrylic",
          year: "2024",
          price: "₹15,000",
        },
        {
          id: 103,
          title: "Mountain View",
          image:
            "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=500",
          medium: "Fine Art",
          year: "2023",
          price: "₹18,500",
        },
        {
          id: 104,
          title: "Sunset Over Hills",
          image:
            "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500",
          medium: "Acrylic on Canvas",
          year: "2023",
          price: "₹14,000",
        },
        {
          id: 105,
          title: "Forest Path",
          image:
            "https://images.unsplash.com/photo-1549887534-1541e9326642?w=500",
          medium: "Acrylic",
          year: "2024",
          price: "₹13,500",
        },
        {
          id: 106,
          title: "Valley Dreams",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
          medium: "Fine Art Painting",
          year: "2023",
          price: "₹20,000",
        },
        {
          id: 107,
          title: "Garden Vibes",
          image:
            "https://images.unsplash.com/photo-1578314675288-ffafd4ae4fe6?w=500",
          medium: "Acrylic",
          year: "2024",
          price: "₹11,500",
        },
        {
          id: 108,
          title: "Natural Beauty",
          image:
            "https://images.unsplash.com/photo-1578926318433-c6110be7f5cf?w=500",
          medium: "Acrylic on Canvas",
          year: "2024",
          price: "₹16,000",
        },
      ],
    },
    {
      id: 2,
      name: "Pradip Sarkar",
      tagline: "Exploring Cubism & Abstraction",
      location: "India",
      avatar: "https://zigguratss.com/assets/upload/artist-192.jpg",
      coverArt:
        "https://zigguratss.com/assets/upload/art/zigguratss_67b4c91480ae7a826c1e85be87e7c032.jpg",
      studioImage:
        "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800",
      education: "Master of Fine Arts, Rabindra Sarovar Art College",
      specialty: "Cubism & Abstraction",
      shopName: "Contemporary Art House",
      bio: "Pradip Sarkar creates stunning cubist and abstract paintings using acrylic on canvas. His bold compositions and dynamic use of color make each piece a unique conversation starter.",
      stats: { listings: 18, sold: 98, reviews: 87, rating: 4.8 },
      featuredWork: "Celebration Series Collection",
      priceRange: "₹15,000 - ₹50,000",
      badge: "Top Artist",
      artworks: [
        {
          id: 201,
          title: "Celebration-7",
          image:
            "https://zigguratss.com/assets/upload/art/zigguratss_67b4c91480ae7a826c1e85be87e7c032.jpg",
          medium: "Acrylic on Canvas",
          year: "2024",
          price: "₹22,000",
        },
        {
          id: 202,
          title: "Celebration-6",
          image:
            "https://images.unsplash.com/photo-1578926078831-d60a4a2f83a6?w=500",
          medium: "Cubism",
          year: "2024",
          price: "₹20,000",
        },
        {
          id: 203,
          title: "Abstract Energy",
          image:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500",
          medium: "Acrylic on Canvas",
          year: "2023",
          price: "₹25,000",
        },
        {
          id: 204,
          title: "Geometric Harmony",
          image:
            "https://images.unsplash.com/photo-1549887534-1541e9326642?w=500",
          medium: "Mixed Media",
          year: "2023",
          price: "₹28,000",
        },
        {
          id: 205,
          title: "Prism Dance",
          image:
            "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500",
          medium: "Acrylic",
          year: "2024",
          price: "₹19,500",
        },
        {
          id: 206,
          title: "Colorful Chaos",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
          medium: "Cubism Painting",
          year: "2024",
          price: "₹26,000",
        },
        {
          id: 207,
          title: "Urban Abstraction",
          image:
            "https://images.unsplash.com/photo-1578314675288-ffafd4ae4fe6?w=500",
          medium: "Acrylic on Canvas",
          year: "2023",
          price: "₹24,000",
        },
        {
          id: 208,
          title: "Contemporary Forms",
          image:
            "https://images.unsplash.com/photo-1578926318433-c6110be7f5cf?w=500",
          medium: "Mixed Media Art",
          year: "2024",
          price: "₹23,000",
        },
      ],
    },
    {
      id: 3,
      name: "Sonaly Gandhi",
      tagline: "Digital Artistry & Spiritualism",
      location: "India",
      avatar: "https://zigguratss.com/assets/upload/artist-531.jpg",
      coverArt: "https://zigguratss.com/assets/upload/art-1259.jpg",
      studioImage:
        "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=800",
      education: "Certificate in Digital Design, Institute of Modern Arts",
      specialty: "Digital Art",
      shopName: "Spiritual Art Works",
      bio: "Sonaly Gandhi specializes in creating digital portrait artworks that blend spiritualism with modern aesthetics. Her works inspire reflection and introspection.",
      stats: { listings: 32, sold: 187, reviews: 168, rating: 5.0 },
      featuredWork: "Tranquil Awakening Collection",
      priceRange: "₹8,000 - ₹35,000",
      badge: "Editor's Pick",
      artworks: [
        {
          id: 301,
          title: "Tranquil Awakening",
          image: "https://zigguratss.com/assets/upload/art-1259.jpg",
          medium: "Digital Art Print",
          year: "2024",
          price: "₹12,000",
        },
        {
          id: 302,
          title: "Dreamscape Reflections",
          image:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500",
          medium: "Digital Portrait",
          year: "2024",
          price: "₹14,500",
        },
        {
          id: 303,
          title: "Spiritual Journey",
          image:
            "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=500",
          medium: "Digital Art",
          year: "2023",
          price: "₹13,000",
        },
        {
          id: 304,
          title: "Inner Peace",
          image:
            "https://images.unsplash.com/photo-1549887534-1541e9326642?w=500",
          medium: "Digital Print",
          year: "2023",
          price: "₹11,500",
        },
        {
          id: 305,
          title: "Enlightenment",
          image:
            "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500",
          medium: "Digital Portrait",
          year: "2024",
          price: "₹15,000",
        },
        {
          id: 306,
          title: "Mindful Moments",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
          medium: "Digital Art",
          year: "2024",
          price: "₹10,500",
        },
        {
          id: 307,
          title: "Cosmic Connection",
          image:
            "https://images.unsplash.com/photo-1578314675288-ffafd4ae4fe6?w=500",
          medium: "Portrait Art",
          year: "2023",
          price: "₹13,500",
        },
        {
          id: 308,
          title: "Soul Essence",
          image:
            "https://images.unsplash.com/photo-1578926318433-c6110be7f5cf?w=500",
          medium: "Digital Print",
          year: "2024",
          price: "₹12,500",
        },
      ],
    },
    {
      id: 4,
      name: "Shubharanjan Paul",
      tagline: "Figurative Drawing & Conceptual Art",
      location: "India",
      avatar: "https://zigguratss.com/assets/upload/artist-180.jpg",
      coverArt: "https://zigguratss.com/assets/upload/art-1229.jpg",
      studioImage:
        "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800",
      education: "BFA in Fine Arts, University of Calcutta",
      specialty: "Figurative Drawing",
      shopName: "Conceptual Art Studio",
      bio: "Shubharanjan Paul is a master of figurative drawing and conceptual art. His mixed media works on acid-free paper showcase contemporary subjects with profound social commentary.",
      stats: { listings: 21, sold: 112, reviews: 98, rating: 4.9 },
      featuredWork: "Middle Class Series",
      priceRange: "₹10,000 - ₹40,000",
      badge: "Rising Star",
      artworks: [
        {
          id: 401,
          title: "Middle Class 10",
          image: "https://zigguratss.com/assets/upload/art-1229.jpg",
          medium: "Mixed Medium on Acid-Free Paper",
          year: "2024",
          price: "₹16,000",
        },
        {
          id: 402,
          title: "Festival of Colours",
          image:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500",
          medium: "Figurative Drawing",
          year: "2024",
          price: "₹18,500",
        },
        {
          id: 403,
          title: "Social Commentary",
          image:
            "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=500",
          medium: "Mixed Media",
          year: "2023",
          price: "₹20,000",
        },
        {
          id: 404,
          title: "Urban Life",
          image:
            "https://images.unsplash.com/photo-1549887534-1541e9326642?w=500",
          medium: "Drawing on Paper",
          year: "2023",
          price: "₹14,500",
        },
        {
          id: 405,
          title: "Daily Stories",
          image:
            "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500",
          medium: "Figurative Art",
          year: "2024",
          price: "₹17,000",
        },
        {
          id: 406,
          title: "Human Essence",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
          medium: "Mixed Medium",
          year: "2024",
          price: "₹19,000",
        },
        {
          id: 407,
          title: "Modern Identity",
          image:
            "https://images.unsplash.com/photo-1578314675288-ffafd4ae4fe6?w=500",
          medium: "Conceptual Drawing",
          year: "2023",
          price: "₹15,500",
        },
        {
          id: 408,
          title: "Cultural Canvas",
          image:
            "https://images.unsplash.com/photo-1578926318433-c6110be7f5cf?w=500",
          medium: "Mixed Media on Paper",
          year: "2024",
          price: "₹21,000",
        },
      ],
    },
    {
      id: 5,
      name: "Sanjay Tomar",
      tagline: "Fine Art Photography & Nature",
      location: "India",
      avatar: "https://zigguratss.com/assets/upload/artist-439.JPG",
      coverArt: "https://zigguratss.com/assets/upload/art-1087.jpg",
      studioImage:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      education:
        "Professional Photography Diploma, Institute of Photography Arts",
      specialty: "Fine Art Photography",
      shopName: "Nature's Lens Gallery",
      bio: "Sanjay Tomar captures stunning moments through his camera lens. His fine art photography blends aesthetics with emotion, creating memorable visual narratives.",
      stats: { listings: 28, sold: 134, reviews: 121, rating: 4.8 },
      featuredWork: "Shepherd Series",
      priceRange: "₹6,000 - ₹25,000",
      badge: "Collector Favorite",
      artworks: [
        {
          id: 501,
          title: "Shepherd",
          image: "https://zigguratss.com/assets/upload/art-1087.jpg",
          medium: "Fine Art Photography",
          year: "2024",
          price: "₹9,500",
        },
        {
          id: 502,
          title: "Mountain Serenity",
          image:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500",
          medium: "Digital Photography",
          year: "2024",
          price: "₹11,000",
        },
        {
          id: 503,
          title: "Landscape Beauty",
          image:
            "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=500",
          medium: "Fine Art Photo",
          year: "2023",
          price: "₹12,500",
        },
        {
          id: 504,
          title: "Nature's Canvas",
          image:
            "https://images.unsplash.com/photo-1549887534-1541e9326642?w=500",
          medium: "Photography Print",
          year: "2023",
          price: "₹10,000",
        },
        {
          id: 505,
          title: "Golden Hour",
          image:
            "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500",
          medium: "Fine Art Photography",
          year: "2024",
          price: "₹8,500",
        },
        {
          id: 506,
          title: "Wilderness",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
          medium: "Color Photography",
          year: "2024",
          price: "₹13,000",
        },
        {
          id: 507,
          title: "Pastoral Moments",
          image:
            "https://images.unsplash.com/photo-1578314675288-ffafd4ae4fe6?w=500",
          medium: "Fine Art Photo",
          year: "2023",
          price: "₹9,000",
        },
        {
          id: 508,
          title: "Rural Stories",
          image:
            "https://images.unsplash.com/photo-1578926318433-c6110be7f5cf?w=500",
          medium: "Photography",
          year: "2024",
          price: "₹10,500",
        },
      ],
    },
  ];

  const StatIcons = {
    palette: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    artist: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
    globe: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    star: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  };

  const marketplaceStats = [
    { icon: StatIcons.palette, value: "1,225+", label: "Original Artworks" },
    { icon: StatIcons.artist, value: "192+", label: "Artists Worldwide" },
    { icon: StatIcons.globe, value: "50+", label: "Countries Shipping" },
    { icon: StatIcons.star, value: "4.9", label: "Average Rating" },
  ];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % featuredArtists.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(
      (prev) => (prev - 1 + featuredArtists.length) % featuredArtists.length,
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const artist = featuredArtists[activeIndex];

  return (
    <div className="artist-dashboard">
      <div className="bg-decorations">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>
      </div>

      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-mark">Z</span>
            <span className="logo-text">Zigguratts</span>
          </div>
          <nav className="nav">
            <a href="#" className="nav-link">
              Discover Art
            </a>
            <a href="#" className="nav-link active">
              Featured Artists
            </a>
            <a href="#" className="nav-link">
              Collections
            </a>
            <a href="#" className="nav-link">
              How It Works
            </a>
          </nav>
          <div className="header-actions">
            <button
              className="btn-dark-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Sell Your Art</button>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <span className="hero-eyebrow">✨ Meet Our Featured Artists</span>
          <h1 className="hero-title">
            Discover Art From{" "}
            <span className="highlight">Creators Worldwide</span>
          </h1>
          <p className="hero-subtitle">
            Shop directly from independent artists. Original art, prints & more
            — delivered to your door.
          </p>
        </section>

        <ArtistBillboard artist={artist} />

        <ArtworkGallery artworks={artist.artworks} />

        <section className="marketplace-stats">
          <div className="stats-grid">
            {marketplaceStats.map((stat, i) => (
              <div key={i} className="stat-card">
                <span className="stat-icon">{stat.icon}</span>
                <div className="stat-content">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-desc">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta">
          <div className="cta-card">
            <div className="cta-text">
              <h3>Are You an Artist?</h3>
              <p>
                Join our global marketplace and reach collectors worldwide. Set
                up your shop in minutes.
              </p>
            </div>
            <button className="cta-btn">
              <span>Start Selling Today</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-brand">Zigguratts</span>
          <span className="footer-tagline">Your Global Art Marketplace</span>
          <span className="footer-copy">© 2025 All rights reserved</span>
        </div>
      </footer>
    </div>
  );
};

export default ArtistDashboard;
