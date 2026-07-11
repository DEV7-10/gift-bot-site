import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gift Bot — Discord's Favorite Giveaway Bot",
  description:
    "Gift Bot — The ultimate Discord bot for gift drops, lucky wheels, and streaks. Add it to your server now!",
  icons: {
    icon: "/gift-bot-site/avatar.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
