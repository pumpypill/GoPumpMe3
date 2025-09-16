import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import './menuAnimations.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Error boundary for the root
class RootErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    console.error("Root error:", error);
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

// Create root element and render app
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
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