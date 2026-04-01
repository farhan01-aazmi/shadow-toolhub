"use client";

import React, { useState } from 'react';
import { Copy } from 'lucide-react';

export default function ColorPicker() {
    const [color, setColor] = useState('#f0a500');
    const [copied, setCopied] = useState('');

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(''), 2000);
    };

    const hexToRgb = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const rgb = hexToRgb(color);

    return (
        <div className="card glass p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div style={{ position: 'relative' }}>
                   <input 
                      type="color" 
                      value={color} 
                      onChange={(e) => setColor(e.target.value)}
                      className="w-48 h-48 cursor-pointer rounded-full border-none p-0 outline-none overflow-hidden"
                      style={{ appearance: 'none', background: 'transparent' }}
                   />
                </div>

                <div className="flex-1 w-full space-y-6">
                    <div className="flex items-center justify-between p-4 bg-bg2 border border-line rounded">
                        <div className="font-mono text-xl tracking-tight uppercase text-amber">{color}</div>
                        <button onClick={() => copyToClipboard(color)} className="flex items-center gap-2 text-sub hover:text-amber transition-all">
                           {copied === color ? 'Copied!' : <><Copy size={18} /> HEX</>}
                        </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-bg2 border border-line rounded">
                        <div className="font-mono text-lg tracking-tight text-text-secondary">{rgb}</div>
                        <button onClick={() => copyToClipboard(rgb)} className="flex items-center gap-2 text-sub hover:text-amber transition-all">
                           {copied === rgb ? 'Copied!' : <><Copy size={18} /> RGB</>}
                        </button>
                    </div>

                    <div className="p-4 bg-bg1 border border-line rounded flex gap-4">
                        <div className="w-8 h-8 rounded" style={{ backgroundColor: color }}></div>
                        <div className="text-sm text-sub2 leading-tight">Current Selection:<br/><b>{color}</b> active in the picker.</div>
                    </div>
                </div>
            </div>

            <div className="mt-12 grid grid-cols-5 gap-4">
               {['#f0a500', '#ff4500', '#4285f4', '#34a853', '#ea4335', '#202124', '#ffffff', '#70757a', '#bdc1c6', '#e8eaed'].map(c => (
                   <button 
                      key={c} 
                      onClick={() => setColor(c)}
                      className="h-10 rounded border border-line hover:scale-105 transition-all"
                      style={{ backgroundColor: c }}
                      aria-label={`Select ${c}`}
                   />
               ))}
            </div>
        </div>
    );
}
