"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function TranslatedText({ 
  text, 
  elementType = 'span', 
  className, 
  style 
}: { 
  text: string; 
  elementType?: React.ElementType; 
  className?: string; 
  style?: React.CSSProperties;
}) {
  const { t } = useLanguage();
  const Element = elementType;
  return <Element className={className} style={style}>{t(text)}</Element>;
}
