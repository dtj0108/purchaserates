import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'PurchaseRates.com - Find the Best Mortgage Rates';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {/* House Icon */}
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
            }}
          >
            🏠
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: 'white',
            }}
          >
            <span style={{ fontSize: '56px', fontWeight: 'bold' }}>PurchaseRates.com</span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '36px',
            fontWeight: '600',
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Find the Best Mortgage Rates
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Compare rates and get matched with licensed loan experts. No spam, no pressure.
        </div>

        {/* CTA Badge */}
        <div
          style={{
            marginTop: '40px',
            background: 'white',
            padding: '24px 48px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '32px',
            fontWeight: '600',
            color: '#16a34a',
          }}
        >
          See the starting rates now →
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

