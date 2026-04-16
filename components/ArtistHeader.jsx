import React from "react";
import "../styles/ArtistHeader.css";

const ArtistHeader = ({ artist }) => {
  return (
    <section className="artist-header">
      <div
        className="artist-header-bg"
        style={{ backgroundImage: `url(${artist.coverArt})` }}
      ></div>
      <div className="artist-header-overlay"></div>

      <div className="artist-header-container">
        <div className="artist-header-visual">
          <div className="avatar-section">
            <div className="avatar-glow"></div>
            <img
              src={artist.avatar}
              alt={artist.name}
              className="artist-profile-image"
            />
            <div className="avatar-ring"></div>
          </div>
          <div className="seller-badge">
            <span>★</span> {artist.badge}
          </div>
        </div>

        <div className="artist-header-info">
          <div className="header-top">
            <span className="specialty-tag">{artist.specialty}</span>
            <span className="location">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {artist.location}
            </span>
          </div>

          <h1 className="artist-name">{artist.name}</h1>
          <p className="artist-tagline">"{artist.tagline}"</p>
          <p className="artist-bio">{artist.bio}</p>

          <div className="artist-details-grid">
            {artist.studioImage && (
              <div className="artist-detail-card">
                <h3>Studio</h3>
                <img
                  src={artist.studioImage}
                  alt="Studio"
                  className="studio-image"
                />
              </div>
            )}
            {artist.education && (
              <div className="artist-detail-card">
                <h3>Education</h3>
                <p className="education-text">{artist.education}</p>
              </div>
            )}
          </div>

          <div className="artist-stats">
            <div className="stat">
              <span className="stat-value">{artist.stats.listings}</span>
              <span className="stat-label">Items</span>
            </div>
            <div className="stat">
              <span className="stat-value">{artist.stats.sold}</span>
              <span className="stat-label">Sales</span>
            </div>
            <div className="stat">
              <span className="stat-value">⭐ {artist.stats.rating}</span>
              <span className="stat-label">{artist.stats.reviews} Reviews</span>
            </div>
          </div>

          <div className="artist-actions">
            <button className="btn btn-primary">
              <span>Visit Shop</span>
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
            </button>
            <button className="btn btn-secondary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span>Follow</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistHeader;
