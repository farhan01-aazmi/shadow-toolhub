"use client";

import React, { useState, useEffect } from 'react';
import { Copy, RefreshCw, ShieldCheck } from 'lucide-react';

export default function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(16);
    const [options, setOptions] = useState({
        upper: true,
        lower: true,
        numbers: true,
        symbols: true
    });
    const [copied, setCopied] = useState(false);

    const generate = () => {
        let charset = "";
        if (options.upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (options.lower) charset += "abcdefghijklmnopqrstuvwxyz";
        if (options.numbers) charset += "0123456789";
        if (options.symbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        if (charset === "") { setPassword(""); return; }

        let res = "";
        for (let i = 0; i < length; i++) {
            res += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        setPassword(res);
    };

    useEffect(() => { generate(); }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="card glass p-8">
            <div className="mb-6 flex gap-4">
                <input 
                    type="text" 
                    value={password} 
                    readOnly 
                    className="flex-1 p-4 bg-bg2 border border-line rounded text-xl font-mono text-amber"
                />
                <button onClick={generate} className="p-4 bg-line hover:bg-line2 rounded transition-all">
                    <RefreshCw size={24} />
                </button>
                <button onClick={copyToClipboard} className="p-4 bg-amber text-bg rounded font-bold transition-all hover:bg-amber2">
                    {copied ? 'Copied!' : <Copy size={24} />}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <label className="block mb-2 text-sub uppercase tracking-wider text-xs font-mono">Length: {length}</label>
                    <input 
                        type="range" 
                        min="8" max="64" 
                        value={length} 
                        onChange={(e) => setLength(parseInt(e.target.value))}
                        className="w-full accent-amber"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {Object.entries(options).map(([key, val]) => (
                        <label key={key} className="flex items-center gap-3 cursor-pointer p-3 border border-line hover:border-amber transition-all rounded">
                            <input 
                                type="checkbox" 
                                checked={val} 
                                onChange={() => setOptions({...options, [key]: !val})}
                                className="accent-amber w-4 h-4"
                            />
                            <span className="capitalize text-sm font-medium">{key}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="mt-8 pt-8 border-t border-line flex items-center gap-4 text-sub2 italic text-sm">
                <ShieldCheck size={18} className="text-amber" />
                Passwords are generated locally in your browser. They are never sent to any server.
            </div>
        </div>
    );
}
