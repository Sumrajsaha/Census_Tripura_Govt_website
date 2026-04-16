"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  return (
    <select 
      value={language}
      onChange={(e) => setLanguage(e.target.value as 'en' | 'hi')}
      style={{ 
        backgroundColor: '#ffffff', 
        color: '#000000', 
        border: '1px solid #cbd5e1', 
        borderRadius: '4px', 
        outline: 'none', 
        padding: '2px 8px', 
        fontSize: '0.8rem', 
        fontWeight: 600,
        cursor: 'pointer'
      }}
    >
      <option value="en">English</option>
      <option value="hi">Hindi (हिन्दी)</option>
    </select>
  );
}
