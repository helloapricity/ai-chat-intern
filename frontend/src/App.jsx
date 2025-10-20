// frontend/src/App.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [pong, setPong] = useState(null);

  useEffect(() => {
    axios.get('/api/ping').then(r => setPong(r.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Chat Intern — Frontend</h1>
      <pre>{JSON.stringify(pong, null, 2)}</pre>
    </div>
  );
}