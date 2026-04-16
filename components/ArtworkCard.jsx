import React, { useState } from "react";
import "../styles/ArtworkCard.css";

const ArtworkCard = ({ artwork }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="artwork-card">
      <div className="artwork-image-container">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="artwork-image"
        />
        <div className="artwork-overlay">
          <button
            className="favorite-btn"
            onClick={() => setIsFavorited(!isFavorited)}
            aria-label="Add to favorites"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isFavorited ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <button className="view-btn" aria-label="View details">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>
      </div>

      <div className="artwork-info">
        <h3 className="artwork-title">{artwork.title}</h3>
        <p className="artwork-medium">{artwork.medium}</p>
        <div className="artwork-footer">
          <span className="artwork-year">{artwork.year}</span>
          <span className="artwork-price">{artwork.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
