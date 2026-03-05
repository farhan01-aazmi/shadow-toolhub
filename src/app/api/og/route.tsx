import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const title = searchParams.get('title') || 'Shadow ToolHub';
        const description = searchParams.get('desc') || 'Premium Automated Tools';
        const type = searchParams.get('type') || 'tool';

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
                        padding: '80px',
                        color: 'white',
                        fontFamily: 'sans-serif',
                    }}
                >
                    {/* Logo/Badge */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '40px',
                            left: '40px',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#00f5d4',
                            display: 'flex',
                        }}
                    >
                        SHADOW TOOLHUB
                    </div>

                    {/* Type Badge */}
                    <div
                        style={{
                            background: type === 'blog' ? 'rgba(114, 9, 183, 0.2)' : 'rgba(0, 245, 212, 0.2)',
                            border: `1px solid ${type === 'blog' ? '#7209b7' : '#00f5d4'}`,
                            borderRadius: '99px',
                            padding: '8px 24px',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: type === 'blog' ? '#7209b7' : '#00f5d4',
                            marginBottom: '32px',
                        }}
                    >
                        {type.toUpperCase()}
                    </div>

                    <h1
                        style={{
                            fontSize: '64px',
                            fontWeight: 900,
                            textAlign: 'center',
                            lineHeight: 1.1,
                            marginBottom: '24px',
                            background: 'linear-gradient(to right, #00f5d4, #7209b7)',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        {title}
                    </h1>

                    <p
                        style={{
                            fontSize: '28px',
                            textAlign: 'center',
                            color: '#94a3b8',
                            maxWidth: '800px',
                            lineHeight: 1.4,
                        }}
                    >
                        {description}
                    </p>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '40px',
                            right: '40px',
                            fontSize: '20px',
                            color: '#475569',
                        }}
                    >
                        nevy.in
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
