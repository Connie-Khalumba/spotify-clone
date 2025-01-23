import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SuperbaseProvider from "@/providers/SupabaseProvider";

// Import the Figtree font and define a single variable for it
const figtreeFont = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify weights if needed
});

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtreeFont.variable} antialiased`}>
        <SuperbaseProvider>
        <Sidebar>
        {children}
        </Sidebar>
        </SuperbaseProvider>
      </body>
    </html>
  );
}
