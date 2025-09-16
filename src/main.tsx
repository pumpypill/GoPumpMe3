import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import './menuAnimations.css'; // Import menu animations
import Header from './components/Header';
import Footer from './components/Footer';

// Error boundary for the root
class RootErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    console.error("Root error:", error); // Log error for debugging
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 32, color: "#ff4d4f", textAlign: "center" }}>
          <h2>Something went wrong.</h2>
          <p>Try refreshing the page or restarting the app.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootErrorBoundary>
      <Header />
      <div className="layout">
        <App />
      </div>
      <Footer />
    </RootErrorBoundary>
  </React.StrictMode>
);