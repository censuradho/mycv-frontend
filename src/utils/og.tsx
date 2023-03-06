import { ImageResponse } from "@vercel/og"
import { NextApiRequest } from "next"
import { theme } from "stitches.config"

export const config = {
  runtime: 'edge'
}

export default function handler (req: NextApiRequest) {
  const { searchParams } = new URL(req.url as string)

  const { colors, radii } = theme

  const name = searchParams.get('name') ?? 'default name'
  const jobTitle = searchParams.get('jobTitle') ?? ''
  const city = searchParams.get('city') ?? ''
  const country = searchParams.get('country') ?? ''
  const avatar = searchParams.get('avatar') ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          background: colors.background.value,
          padding: '32px',
          flexDirection: 'column'
        }}
      >
        <main style={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
          width: '100%',
        }}>
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            padding: '16px',
          }}>
            {avatar && (
              <img 
                src={avatar} 
                alt={name} 
                width={80} 
                height={80} 
                style={{ 
                  objectFit: 'contain',
                  borderRadius: '50%'
                }} 
              />
            )}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              <h1 style={{
                fontSize: '34px',
              }}>{name}</h1>
              <strong style={{
                fontSize: '18px'
              }}>{jobTitle}</strong>
            </div>
          </div>
        </main>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          width: '100%',
          marginTop: 'auto',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}>
            <strong style={{
              fontWeight: 500,
              fontSize: '14px'
            }}>{country}</strong>
            <strong>{city}</strong>
          </div>
          <img 
            src="https://mycv-online.vercel.app/logo.svg" 
            alt="logo" 
            width={40} 
            height={40} 
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )

}