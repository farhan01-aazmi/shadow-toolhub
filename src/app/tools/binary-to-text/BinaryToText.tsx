"use client";

import React, { useState } from 'react';
import { Copy, RefreshCw, Layers } from 'lucide-react';

export default function BinaryToText() {
    const [binary, setBinary] = useState('');
    const [text, setText] = useState('');
    const [copied, setCopied] = useState(false);

    const convert = () => {
        try {
            const cleanBinary = binary.replace(/\s/g, '');
            let result = "";
            for (let i = 0; i < cleanBinary.length; i += 8) {
                const byte = cleanBinary.substr(i, 8);
                result += String.fromCharCode(parseInt(byte, 2));
            }
            setText(result);
        } catch (e) {
            setText("Error: Invalid binary format. Please ensure your binary consists of 0s and 1s.");
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="card glass p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <label className="block mb-2 text-sub text-xs font-mono uppercase">Binary Input</label>
                    <textarea 
                        value={binary} 
                        onChange={(e) => setBinary(e.target.value)}
                        placeholder="01010100 01100101 01100011 01101000..."
                        className="w-full h-48 p-4 bg-bg2 border border-line rounded font-mono text-sm focus:border-amber transition-all"
                    />
                </div>
                <div>
                  <label className="block mb-2 text-sub text-xs font-mono uppercase">Text Output</label>
                  <div className="relative">
                    <textarea 
                        value={text} 
                        readOnly
                        placeholder="Converted text will appear here..."
                        className="w-full h-48 p-4 bg-bg3 border border-line rounded text-amber font-mono text-sm"
                    />
                  </div>
                </div>
            </div>

            <div className="flex gap-4">
                <button onClick={convert} className="flex-1 py-4 bg-amber text-bg font-bold rounded flex items-center justify-center gap-2 hover:bg-amber2 transition-all">
                    <RefreshCw size={18} /> Convert to Text
                </button>
                <button onClick={copyToClipboard} className="px-6 py-4 bg-line hover:bg-line2 rounded flex items-center justify-center gap-2 transition-all">
                    {copied ? 'Copied!' : <><Copy size={18} /> Copy Result</>}
                </button>
            </div>

            <div className="mt-8 pt-8 border-t border-line flex items-center gap-4 text-sub2 italic text-sm">
                <Layers size={18} className="text-amber" />
                Data is processed instantly in your browser's memory using standard character mapping.
            </div>
        </div>
    );
}
