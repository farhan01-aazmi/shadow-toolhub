import Link from 'next/link';

export default function Logo({ size = 34 }: { size?: number }) {
    return (
        <div className="flex items-center gap-2.5 group cursor-pointer no-underline">
            <div className="relative w-[34px] h-[34px] flex items-center justify-center">
                <svg viewBox="0 0 34 34" fill="none" className="w-full h-full">
                    <rect width="34" height="34" fill="#141414" />
                    <path d="M8 8 L17 8 L26 17 L17 26 L8 26 Z" fill="none" stroke="#f0a500" strokeWidth="1.5" className="group-hover:stroke-white transition-colors duration-500" />
                    <circle cx="17" cy="17" r="3" fill="#f0a500" className="group-hover:fill-white transition-colors duration-500" />
                    <line x1="8" y1="8" x2="26" y2="8" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    <line x1="8" y1="26" x2="26" y2="26" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                </svg>
            </div>
            <span className="text-[1.2rem] font-bold tracking-[-0.04em] text-text-p leading-none">
                nevy<em className="text-amber not-italic">.in</em>
            </span>
        </div>
    );
}
