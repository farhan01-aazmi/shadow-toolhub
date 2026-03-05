"use client";

import { useState, useRef, useCallback } from 'react';
import { Upload, Download, Image as ImageIcon, X, Sliders, CheckCircle, FileWarning } from 'lucide-react';

export default function OptimizerComponent() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [optimizedUrl, setOptimizedUrl] = useState<string | null>(null);
    const [quality, setQuality] = useState(0.8);
    const [format, setFormat] = useState('image/webp');
    const [isProcessing, setIsProcessing] = useState(false);
    const [stats, setStats] = useState<{ originalSize: number; optimizedSize: number } | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFile = (file: File) => {
        if (!file.type.startsWith('image/')) return;
        setSelectedImage(file);
        setPreviewUrl(URL.createObjectURL(file));
        setOptimizedUrl(null);
        setStats(null);
    };

    const optimizeImage = useCallback(async () => {
        if (!selectedImage) return;
        setIsProcessing(true);

        const img = new Image();
        img.src = URL.createObjectURL(selectedImage);

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            canvas.toBlob((blob) => {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    setOptimizedUrl(url);
                    setStats({
                        originalSize: selectedImage.size,
                        optimizedSize: blob.size,
                    });
                    setIsProcessing(false);
                }
            }, format, quality);
        };
    }, [selectedImage, quality, format]);

    const reset = () => {
        setSelectedImage(null);
        setPreviewUrl(null);
        setOptimizedUrl(null);
        setStats(null);
    };

    const formatSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className="optimizer-wrapper">
            {!selectedImage ? (
                <div
                    className="upload-zone card glass"
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        e.preventDefault();
                        if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
                    }}
                >
                    <Upload size={48} className="text-secondary mb-4" />
                    <h3>Click or Drag Image Here</h3>
                    <p className="text-muted">Supports JPEG, PNG, WebP (Max 10MB)</p>
                    <input
                        type="file"
                        ref={fileInputRef}
                        hidden
                        accept="image/*"
                        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                    />
                </div>
            ) : (
                <div className="editor-container">
                    <div className="preview-layout">
                        <div className="preview-card card glass">
                            <div className="preview-header">
                                <ImageIcon size={18} />
                                <span>Original Preview</span>
                                <button className="reset-btn" onClick={reset}><X size={16} /></button>
                            </div>
                            <div className="image-box">
                                <img src={previewUrl!} alt="Original" />
                            </div>
                            <div className="image-meta">
                                <span>{formatSize(selectedImage.size)}</span>
                            </div>
                        </div>

                        <div className="controls-card card glass">
                            <h3>Optimization Settings</h3>

                            <div className="control-group">
                                <label>Target Quality ({Math.round(quality * 100)}%)</label>
                                <input
                                    type="range"
                                    min="0.1"
                                    max="1.0"
                                    step="0.05"
                                    value={quality}
                                    onChange={(e) => setQuality(parseFloat(e.target.value))}
                                />
                            </div>

                            <div className="control-group">
                                <label>Output Format</label>
                                <select value={format} onChange={(e) => setFormat(e.target.value)} className="styled-select">
                                    <option value="image/webp">Next-Gen WebP (Recommended)</option>
                                    <option value="image/jpeg">High-Comp JPEG</option>
                                    <option value="image/png">Lossless PNG</option>
                                </select>
                            </div>

                            <button
                                className="btn btn-primary w-full"
                                onClick={optimizeImage}
                                disabled={isProcessing}
                            >
                                {isProcessing ? 'Optimizing...' : 'Optimize Image'}
                            </button>

                            {stats && (
                                <div className="stats-box">
                                    <div className="stat-line">
                                        <span>New Size:</span>
                                        <span className="text-primary font-bold">{formatSize(stats.optimizedSize)}</span>
                                    </div>
                                    <div className="stat-line">
                                        <span>Saved:</span>
                                        <span className="text-secondary font-bold">
                                            {Math.round((1 - stats.optimizedSize / stats.originalSize) * 100)}%
                                        </span>
                                    </div>
                                    <a href={optimizedUrl!} download={`optimized-${selectedImage.name}`} className="btn btn-secondary w-full mt-4">
                                        <Download size={18} /> Download Optimized
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
