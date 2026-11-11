import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Petit Mot — Le français, petit à petit",
  description: "Des séances A1, des mots du quotidien, des verbes au présent et des progrès synchronisés.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
