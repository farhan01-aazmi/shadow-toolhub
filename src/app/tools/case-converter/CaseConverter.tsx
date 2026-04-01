"use client";

import React, { useState } from 'react';
import { Copy, Type, RefreshCw } from 'lucide-react';

export default function CaseConverter() {
    const [input, setInput] = useState('');
    const [copied, setCopied] = useState(false);

    const convert = (type: 'upper' | 'lower' | 'sentence' | 'title') => {
        let result = input;
        if (type === 'upper') {
            result = input.toUpperCase();
        } else if (type === 'lower') {
            result = input.toLowerCase();
        } else if (type === 'sentence') {
            result = input.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
        } else if (type === 'title') {
            result = input.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        }
        setInput(result);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(input);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="card glass p-8">
            <div className="mb-6">
                <label className="block mb-2 text-sub text-xs font-mono uppercase">Enter your text</label>
                <textarea 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Paste your content here..."
                    className="w-full h-64 p-4 bg-bg2 border border-line rounded font-sans text-base focus:border-amber transition-all"
                />
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
                <button onClick={() => convert('upper')} className="flex-1 min-w-[120px] py-3 bg-bg3 hover:bg-line border border-line rounded font-medium transition-all">UPPERCASE</button>
                <button onClick={() => convert('lower')} className="flex-1 min-w-[120px] py-3 bg-bg3 hover:bg-line border border-line rounded font-medium transition-all">lowercase</button>
                <button onClick={() => convert('sentence')} className="flex-1 min-w-[120px] py-3 bg-bg3 hover:bg-line border border-line rounded font-medium transition-all">Sentence case</button>
                <button onClick={() => convert('title')} className="flex-1 min-w-[120px] py-3 bg-bg3 hover:bg-line border border-line rounded font-medium transition-all">Title Case</button>
            </div>

            <div className="flex gap-4">
                <button onClick={copyToClipboard} className="flex-1 py-4 bg-amber text-bg font-bold rounded flex items-center justify-center gap-2 hover:bg-amber2 transition-all">
                    {copied ? 'Copied!' : <><Copy size={18} /> Copy to Clipboard</>}
                </button>
                <button onClick={() => setInput('')} className="px-6 py-4 bg-line hover:bg-line2 rounded flex items-center justify-center gap-2 transition-all">
                    <RefreshCw size={18} /> Clear
                </button>
            </div>

            <div className="mt-8 pt-8 border-t border-line flex items-center gap-4 text-sub2 italic text-sm">
                <Type size={18} className="text-amber" />
                Case conversion is performed instantly on your device via client-side regex.
            </div>
        </div>
    );
}
