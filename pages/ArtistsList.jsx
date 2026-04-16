import React from "react";
import { getAllArtists } from "../data/artists";
import ArtistCard from "../components/ArtistCard";
import Layout from "../components/Layout";
import "../styles/ArtistsList.css";

const ArtistsList = () => {
  const artists = getAllArtists();

  return (
    <Layout>
      <section className="artists-hero">
        <div className="hero-content">
          <h1 className="hero-title">Featured Artists</h1>
          <p className="hero-subtitle">
            Discover talented artists and their extraordinary artworks
          </p>
        </div>
      </section>

      <section className="artists-container">
        <div className="artists-grid-wrapper">
          <div className="artists-grid">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArtistsList;
