import { Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "On Learning Landing with Nextjs & Tailwinds",
  description: "Landing page created with Nextjs and Tailwinds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
