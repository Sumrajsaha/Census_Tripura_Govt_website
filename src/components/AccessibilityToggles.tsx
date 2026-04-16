"use client";

import { useState, useEffect } from "react";

export default function AccessibilityToggles() {
  const [fontSize, setFontSize] = useState(1);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize * 100}%`;
  }, [fontSize]);

  const changeSize = (amount: number) => {
    setFontSize((prev) => Math.min(Math.max(prev + amount, 0.8), 1.2));
  };

  return (
    <span style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <span style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <button 
          onClick={() => changeSize(-0.1)} 
          style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '12px' }}
          title="Decrease Font Size"
        >A-</button>
      <button 
        onClick={() => setFontSize(1)} 
        style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}
        title="Normal Font Size"
      >A</button>
      <button 
        onClick={() => changeSize(0.1)} 
        style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }}
        title="Increase Font Size"
      >A+</button>
      </span>
    </span>
  );
}
