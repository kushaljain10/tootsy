import React, { useState } from "react";
import "./App.css";
import heroBanner from "./assets/hero banner.png";

function App() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const contractAddress = "6d8ecGFQMjUazE1x8vdViFYjhm8eCHWiZ35qbF5xY6Xw";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  // Tootsy artwork images from the assets/artwork directory
  const galleryImages = [
    require("./assets/artwork/1.jpeg"),
    require("./assets/artwork/2.jpeg"),
    require("./assets/artwork/3.jpeg"),
    require("./assets/artwork/4.jpeg"),
    require("./assets/artwork/5.jpeg"),
    require("./assets/artwork/6.jpeg"),
    require("./assets/artwork/7.jpeg"),
    require("./assets/artwork/8.jpeg"),
    require("./assets/artwork/9.jpeg"),
    require("./assets/artwork/10.jpeg"),
    require("./assets/artwork/11.jpeg"),
    require("./assets/artwork/12.jpeg"),
  ];

  return (
    <div className="App">
      {/* Banner Section */}
      <header className="banner">
        <div className="banner-content">
          <img
            src={heroBanner}
            alt="Tootsy Hero Banner"
            className="hero-banner-image"
          />
        </div>
        <div className="banner-doodles">
          <div className="doodle star">★</div>
          <div className="doodle heart">♥</div>
          <div className="doodle circle"></div>
        </div>
      </header>

      {/* Description Section */}
      <section className="description">
        <div className="container">
          <h2 className="section-title">Meet Tootsy!</h2>
          <p className="description-text">
            Tootsy is a beloved turtle character born live on pump.fun during an
            exciting livestream! Created by a talented artist who takes
            real-time ideas and feedback from the vibrant community, Tootsy
            represents the magic of collaborative art and the power of
            community-driven creativity. Watch as new Tootsy artworks come to
            life during live streaming sessions, where every viewer can
            contribute to this adorable turtle's ever-growing story. Join the
            Tootsy family and be part of this unique artistic journey that's
            shaping the future of digital art and meme culture!
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <h2 className="section-title">Tootsy's Artwork Gallery</h2>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Tootsy artwork ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="social">
        <div className="container">
          <h2 className="section-title">Follow Tootsy</h2>
          <a
            href="https://x.com/tootsyturt"
            className="twitter-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="twitter-icon">🐦</span>
            Follow @tootsyturt on X
          </a>
        </div>
      </section>

      {/* Token Section */}
      <section className="token">
        <div className="container">
          <h2 className="section-title">$TOOTSY Token</h2>
          <div className="token-info">
            <h3 className="token-name">$TOOTSY</h3>
            <p className="token-description">
              The official token representing our beloved Tootsy character on
              the Solana blockchain. Join the Tootsy community and be part of
              this adorable journey!
            </p>

            <div className="contract-section">
              <label className="contract-label">Contract Address:</label>
              <div className="contract-address-container">
                <code className="contract-address">{contractAddress}</code>
                <button
                  className="copy-button"
                  onClick={copyToClipboard}
                  title="Copy to clipboard"
                >
                  {copiedAddress ? "✓" : "📋"}
                </button>
              </div>
              {copiedAddress && <span className="copy-feedback">Copied!</span>}
            </div>

            <div className="token-links">
              <a
                href="https://pump.fun/coin/6d8ecGFQMjUazE1x8vdViFYjhm8eCHWiZ35qbF5xY6Xw"
                className="token-link pumpfun"
                target="_blank"
                rel="noopener noreferrer"
              >
                🚀 PumpFun
              </a>
              <a
                href="https://dexscreener.com/solana/fvwqte9dnad28mgxl4ro4bwq2k2gnjjctuau3dwnxafv"
                className="token-link dexscreener"
                target="_blank"
                rel="noopener noreferrer"
              >
                📊 DexScreener
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Tootsy. Made with ♥ and lots of imagination!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
