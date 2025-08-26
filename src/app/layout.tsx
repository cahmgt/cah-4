import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'California Healthcare Management Group - Compassionate Home Health Care Services | Southern California',
  description: 'Leading home health care agency serving Los Angeles, Orange, Ventura, San Bernardino & Riverside Counties since 2013. Skilled nursing, physical therapy, occupational therapy & more.',
  keywords: 'home health care, skilled nursing, physical therapy, occupational therapy, speech therapy, medical social services, Southern California, Los Angeles, Orange County, Ventura County, San Bernardino County, Riverside County',
  authors: [{ name: 'California Healthcare Management Group' }],
  creator: 'California Healthcare Management Group',
  publisher: 'California Healthcare Management Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cahmgt.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'California Healthcare Management Group - Compassionate Home Health Care Services',
    description: 'Leading home health care agency serving Southern California since 2013. Skilled nursing, physical therapy, occupational therapy & more.',
    url: 'https://cahmgt.com',
    siteName: 'California Healthcare Management Group',
    images: [
      {
        url: '/gims/026.png',
        width: 1200,
        height: 630,
        alt: 'California Healthcare Management Group Home Health Care Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
      twitter: {
      card: 'summary_large_image',
      title: 'California Healthcare Management Group - Compassionate Home Health Care Services',
      description: 'Leading home health care agency serving Southern California since 2013.',
      images: ['/gims/026.png'],
    },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "California Healthcare Management Group (CAHMGT)",
              "alternateName": "California Healthcare Management Group",
              "description": "Leading home health care agency serving Southern California since 2013",
              "url": "https://cahmgt.com",
              "logo": "https://cahmgt.com/gims/026.png",
              "image": "https://cahmgt.com/gims/026.png",
              "telephone": "+1-818-783-4427",
              "email": "info@cahmgt.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "17337 Ventura Blvd, Suite 202",
                "addressLocality": "Encino",
                "addressRegion": "CA",
                "postalCode": "91316",
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "County",
                  "name": "Los Angeles County"
                },
                {
                  "@type": "County", 
                  "name": "Orange County"
                },
                {
                  "@type": "County",
                  "name": "Ventura County"
                },
                {
                  "@type": "County",
                  "name": "San Bernardino County"
                },
                {
                  "@type": "County",
                  "name": "Riverside County"
                }
              ],
              "serviceType": [
                "Skilled Nursing",
                "Physical Therapy", 
                "Occupational Therapy",
                "Speech Therapy",
                "Medical Social Services",
                "Home Health Aides"
              ],
              "medicalSpecialty": [
                "Home Health Care",
                "Rehabilitation",
                "Geriatric Care",
                "Post-Surgical Care",
                "Chronic Disease Management"
              ],
              "foundingDate": "2013",
              "award": "Home Care Elite Top Agency",
              "hasCredential": [
                "Medicare Certified",
                "Licensed by California Department of Public Health",
                "Accredited by The Joint Commission"
              ],
              "sameAs": [
                "https://www.cahmgt.com"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
