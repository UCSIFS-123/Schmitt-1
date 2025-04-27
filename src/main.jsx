import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Willkommen zur B2B App 🚀</h1>
      <p>Deine Plattform für Kunden- und Produktdaten!</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
