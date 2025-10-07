import type {Metadata} from "next";
import {Open_Sans, Source_Sans_3, Libre_Baskerville} from "next/font/google";
import "./globals.css";
import {AuthProvider} from "./_contexts/AuthContext";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"]
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"]
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"]
});

export const metadata: Metadata = {
  title: "Teyu Guardaria | Viva a experiência completa do surfe",
  description:
    "Guardaria, organização, estilo e praticidade. Serviços premium pensados para quem valoriza qualidade e tempo. Cadastre-se e tenha mais tempo para o que importa.",
  keywords:
    "guardaria, surfe, organização, estilo, serviços premium, praia, surfe profissional",
  icons: {
    icon: "/favico.png",
    shortcut: "/favico.png",
    apple: "/favico.png"
  },
  openGraph: {
    title: "Teyu Guardaria | Viva a experiência completa do surfe",
    description:
      "Guardaria premium para surfistas. Organize suas pranchas, tenha mais tempo para o surfe. Serviços exclusivos em Santos-SP.",
    type: "website",
    url: "https://www.teyuguardaria.com",
    siteName: "Teyu Guardaria",
    locale: "pt_BR",
    countryName: "Brasil",
    images: [
      {
        url: "/metag_site_opengrafic.png",
        width: 1200,
        height: 630,
        alt: "Teyu Guardaria"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@TeyuGuardaria",
    title: "Teyu Guardaria | Viva a experiência completa do surfe",
    description:
      "Guardaria, organização, estilo e praticidade. Serviços premium pensados para quem valoriza qualidade e tempo.",
    images: ["/metag_site_opengrafic.png"]
  },
  other: {
    "adobe-fonts-myriad-pro": "https://use.typekit.net/deh7ypx.css",
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Teyu Guardaria",
      description: "Guardaria premium para surfistas",
      url: "https://www.teyuguardaria.com"
    }),

    // Meta tags adicionais
    "theme-color": "#1e40af",
    "msapplication-TileColor": "#1e40af",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${openSans.variable} ${sourceSans3.variable} ${libreBaskerville.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
