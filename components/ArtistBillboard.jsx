import React from "react";
import "../styles/ArtistBillboard.css";

const ArtistBillboard = ({ artist }) => {
  return (
    <section className="artist-billboard-section">
      <div className="artist-billboard">
        <div className="billboard-container">
          <div
            className="billboard-bg"
            style={{ backgroundImage: `url(${artist.coverArt})` }}
          ></div>
          <div className="billboard-overlay"></div>

          <div className="billboard-content">
            <div className="billboard-left">
              <div className="avatar-wrapper">
                <div className="avatar-glow"></div>
                <img
                  src={artist.avatar}
                  alt={artist.name}
                  className="billboard-avatar"
                />
                <div className="avatar-ring"></div>
              </div>
              <div className="seller-badge">
                <span>★</span> {artist.badge}
              </div>
            </div>

            <div className="billboard-right">
              <span className="specialty-badge">{artist.specialty}</span>
              <h2 className="billboard-name">{artist.name}</h2>
              <p className="billboard-tagline">"{artist.tagline}"</p>
              <p className="billboard-bio">{artist.bio}</p>

              <div className="billboard-stats">
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
                  <span className="stat-label">
                    {artist.stats.reviews} Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistBillboard;
