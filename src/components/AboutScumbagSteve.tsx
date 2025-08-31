import React from 'react';

const AboutScumbagSteve = () => {
  return (
    <div className="about-container" style={{
      backgroundColor: '#1a1a1a',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      margin: '2rem auto',
      color: '#fff',
      maxWidth: '800px', // Set a maximum width for better readability
      width: '90%', // Ensure responsiveness on smaller screens
    }}>
      <h2 style={{ fontSize: '2rem', color: '#00ff00', marginBottom: '1rem' }}>Who is Scumbag Steve?</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        Scumbag Steve is one of the most iconic internet memes, originating from a photograph of Blake Boston, also known as "Weezy B." The image features him wearing a sideways baseball cap and a fur-lined jacket, giving off a stereotypical "scumbag" vibe. The meme became popular in 2011 and has been used to humorously depict selfish or unethical behavior.
      </p>
      
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Stats:</h3>
      <ul style={{
        listStyleType: 'none',
        padding: 0,
        textAlign: 'left', // Align stats to the left for better readability
        maxWidth: '600px' // Limit the width of the stats section
      }}>
        <li style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>First appearance: 2011</li>
        <li style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Over 1 million meme variations created</li>
        <li style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Featured in countless articles and internet culture discussions</li>
        <li style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Blake Boston has over 100,000 followers on social media</li>
      </ul>
    </div>
  );
};

export default AboutScumbagSteve;
