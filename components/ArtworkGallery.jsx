import React from "react";
import ArtworkCard from "./ArtworkCard";
import "../styles/ArtworkGallery.css";

const ArtworkGallery = ({ artworks }) => {
  return (
    <section className="artwork-gallery">
      <div className="gallery-header">
        <h2>Artworks by This Artist</h2>
        <p>{artworks.length} pieces available</p>
      </div>

      <div className="gallery-grid">
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </section>
  );
};

export default ArtworkGallery;
