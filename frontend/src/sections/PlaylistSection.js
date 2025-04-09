import React from "react";
import "../css/PlaylistSection.css";

const PlaylistSection = () => {
  return (
    <section id="playlists">
      <div className="container">
        <div className="playlists-headline">
          <h1>Playlists</h1>
          <p>
            Dive into a curated collection of the best CHH tracks—from the
            underground hits to timeless classics, and everything in between.
            Whether you’re vibing to the raw beats of rising artists or
            celebrating the power of women in CHH, these playlists are your
            soundtrack for every moment. Discover the rhythm of faith with every
            track!
          </p>
        </div>
        <div className="playlist-container">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/5D18MjkqHzTc9RfWPoWErb?utm_source=generator"
            width="90%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
        </div>
        <div className="playlist-container">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/1R0wL8igH2nHTBPH17DTkP?utm_source=generator"
            width="90%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
        </div>
        <div className="playlist-container">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/1xDBTKYNPXDS8eG73eW2j6?utm_source=generator"
            width="90%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
        </div>
        <div className="playlist-container">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/7tWJJ6boEMpag0ZBQCSFS8?utm_source=generator"
            width="90%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
};

export default PlaylistSection;


