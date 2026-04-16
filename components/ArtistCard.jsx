import React from "react";
import { Link } from "react-router-dom";
import "../styles/ArtistCard.css";

const ArtistCard = ({ artist }) => {
  return (
    <Link to={`/artist/${artist.slug}`} className="artist-card-link">
      <div className="artist-card">
        <div className="artist-card-image-container">
          <div
            className="artist-card-bg"
            style={{ backgroundImage: `url(${artist.coverArt})` }}
          ></div>
          <div className="artist-card-overlay"></div>

          <div className="artist-card-avatar-wrapper">
            <img
              src={artist.avatar}
              alt={artist.name}
              className="artist-card-avatar"
            />
          </div>
        </div>

        <div className="artist-card-content">
          <span className="artist-card-badge">{artist.badge}</span>
          <h3 className="artist-card-name">{artist.name}</h3>
          <p className="artist-card-specialty">{artist.specialty}</p>
          <p className="artist-card-location">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {artist.location}
          </p>

          <div className="artist-card-stats">
            <div className="card-stat">
              <span className="stat-num">{artist.stats.listings}</span>
              <span className="stat-label">Works</span>
            </div>
            <div className="card-stat">
              <span className="stat-num">{artist.stats.sold}</span>
              <span className="stat-label">Sold</span>
            </div>
            <div className="card-stat">
              <span className="stat-num">⭐ {artist.stats.rating}</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>

          <div className="artist-card-hover">
            <span>View Profile</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
