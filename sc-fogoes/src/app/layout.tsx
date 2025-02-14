import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SC Fogões",
  description: "Empresa especializada em instalação e manutenção de fogões",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
