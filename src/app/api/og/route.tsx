import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get('title') || 'Aura Architects | Luxury Next.js Platform';
    const author = searchParams.get('author') || 'Aura Editorial';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: '#000000',
            padding: '60px 80px',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Header Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#C5A880',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000000',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              ❖
            </div>
            <span
              style={{
                color: '#F8F8F8',
                fontSize: '24px',
                fontWeight: 'bold',
                letterSpacing: '-0.5px',
              }}
            >
              AURA<span style={{ color: '#C5A880' }}>.</span> ARCHITECTS
            </span>
          </div>

          {/* Main Title Banner */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxWidth: '1000px',
            }}
          >
            <span
              style={{
                color: '#C5A880',
                fontSize: '14px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontWeight: '600',
              }}
            >
              EDITORIAL INSIGHTS
            </span>
            <div
              style={{
                color: '#F8F8F8',
                fontSize: '48px',
                fontWeight: 'bold',
                lineHeight: 1.15,
              }}
            >
              {title}
            </div>
          </div>

          {/* Footer Metadata */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              borderTop: '1px solid rgba(211, 211, 211, 0.25)',
              paddingTop: '24px',
            }}
          >
            <span style={{ color: '#D3D3D3', fontSize: '18px' }}>
              By <span style={{ color: '#C5A880' }}>{author}</span>
            </span>
            <span style={{ color: 'rgba(248, 248, 248, 0.6)', fontSize: '16px' }}>
              https://aura-architects.vercel.app
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the OG image`, {
      status: 500,
    });
  }
}
