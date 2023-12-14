import React, { useState, useEffect } from 'react';

import './style.css';

export default function App() {
  const [qrIndex, setQrIndex] = useState(0);
  const [isloading, setIsLoading] = useState(true);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setQrIndex(qrIndex + 1);
    }, 0);
  });

  const revalidateUser = () => {
    setIsLoading(true);
    setHidden(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setHidden(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1 className="text-orange-500"> loading? </h1>
      {isloading ? (
        <div className="custom-loader"></div>
      ) : (
        <h2 className={`${hidden === false ? 'none' : 'block'}`}>QR</h2>
      )}

      <button
        onClick={revalidateUser}
        className={`${hidden === true ? 'none' : 'block'}`}
      >
        Recargar QR!
      </button>
    </div>
  );
}
