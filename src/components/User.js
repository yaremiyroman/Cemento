import React, { useState } from "react";
import { initDB } from '../dbService';


export default function User() {
  const [isDBReady, setIsDBReady] = useState(false);

  const handleInitDB = async () => {
    const status = await initDB();
    setIsDBReady(status);
  };

  return (
    <main style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>IndexedDB</h1>
      {!isDBReady ? (
        <button onClick={handleInitDB}>Init DB</button>
      ) : (
        <h2>DB is ready</h2>
      )}
    </main>
  );
}