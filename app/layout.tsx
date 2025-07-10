import type {Metadata} from "next";
import {Open_Sans, Source_Sans_3} from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "Teyu Guardaria | Viva a experiência completa do surfe",
    description:
      "Guardaria, organização, estilo e praticidade. Serviços premium pensados para quem valoriza qualidade e tempo.",
    type: "website",
    url: "https://www.teyuguardaria.com",
    images: [
      {
        url: "/favicon_teyu.png",
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
    images: ["/favicon_teyu.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon_teyu.png" type="image/png" />
        <link rel="canonical" href="https://www.teyuguardaria.com" />
      </head>
      <body
        className={`${openSans.variable} ${sourceSans3.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
