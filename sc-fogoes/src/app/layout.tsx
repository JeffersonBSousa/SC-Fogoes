import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SC Fogões",
  description: "Empresa especializada em instalação e manutenção de fogões",
  icons: {
    icon: "/img/LOGOSITE.JPEG",
    apple: "/img/LOGOSITE.JPEG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10976263576"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10976263576');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SC Fogões",
              description:
                "Empresa especializada em instalação e manutenção de fogões, medidores de gás e tubulações de gás em João Pessoa-PB.",
              url: "https://www.scfogoes.online",
              telephone: "+55 83 3142-7333",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+55 83 98800-5001",
                  contactType: "customer service",
                  availableLanguage: ["Portuguese"],
                },
              ],
              email: "scfogoes@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av Maria Rosa, 1470, Sala 10",
                addressLocality: "Manaíra",
                addressRegion: "PB",
                postalCode: "58038-461",
                addressCountry: "BR",
              },
              openingHours: ["Mo-Fr 08:00-17:30", "Sa 08:00-12:00"],
              sameAs: ["https://www.instagram.com/scfogões"],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
