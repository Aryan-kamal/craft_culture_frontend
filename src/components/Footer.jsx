import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start shadow-sm footer">
      <div className="container p-4">
        <p className="mb-4 text-center">
          © {new Date().getFullYear()} <span className="fw-bold">Craft Culture</span>. All Rights
          Reserved.
        </p>
        <div className="d-flex justify-content-center gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aryan-kamal-934370234/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/aryan_kamal07/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/Aryan-kamal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          {/* Email */}
          <a
            href="mailto:kamalaryann1234567@gmail.com"
            className="text-white"
          >
            <i className="fas fa-envelope fa-lg"></i>
          </a>
          {/* GFG */}
          <a
            href="https://www.geeksforgeeks.org/user/aryan_kamal07/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="fas fa-terminal fa-lg"></i>
          </a>
          {/* Codolio */}
          <a
            href="https://codolio.com/profile/sDwTAR05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="fas fa-user-circle fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
