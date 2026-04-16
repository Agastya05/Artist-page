import React from "react";
import { useParams, Link } from "react-router-dom";
import { getArtistBySlug } from "../data/artists";
import ArtistHeader from "../components/ArtistHeader";
import ArtworkGallery from "../components/ArtworkGallery";
import Layout from "../components/Layout";
import "../styles/ArtistPage.css";

const ArtistPage = () => {
  const { slug } = useParams();
  const artist = getArtistBySlug(slug);

  if (!artist) {
    return (
      <Layout>
        <div className="artist-page-error">
          <div className="error-content">
            <h1>Artist Not Found</h1>
            <p>The artist you're looking for doesn't exist.</p>
            <Link to="/" className="back-to-artists-btn">
              Back to Artists
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="artist-page">
        <Link to="/" className="back-link">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Artists
        </Link>

        <ArtistHeader artist={artist} />

        <section className="artist-bio-section">
          <div className="artist-bio-container">
            {artist.studioImage && (
              <div className="artist-studio-image-container">
                <img
                  src={artist.studioImage}
                  alt={`${artist.name}'s Studio`}
                  className="artist-studio-image"
                />
              </div>
            )}
            <div className="artist-bio-content">
              <h2>About {artist.name.split(" ")[0]}</h2>
              <p>{artist.bio}</p>

              <div className="artist-extra-info">
                {artist.education && (
                  <div className="info-block education-block">
                    <h3>Education</h3>
                    <p>{artist.education}</p>
                  </div>
                )}
                {artist.shopName && (
                  <div className="info-block">
                    <h3>Studio</h3>
                    <p>{artist.shopName}</p>
                  </div>
                )}
                {artist.priceRange && (
                  <div className="info-block">
                    <h3>Price Range</h3>
                    <p>{artist.priceRange}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <ArtworkGallery artworks={artist.artworks} />

        <section className="artist-cta-section">
          <div className="artist-cta-container">
            <h2>Ready to Explore More?</h2>
            <p>Browse our full collection and find your next favorite piece</p>
            <div className="cta-buttons">
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
              <Link to="/" className="btn btn-secondary">
                <span>Back to Artists</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ArtistPage;
