import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import ProgressBar from "@/components/ProgressBar";
import profile from "@/data/profile";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter", display: "swap" });

const title = `${profile.name} — BSIT Student & Back-End Learner`;
const desc = `${profile.intro} BSIT student at ${profile.school}.`;

export const metadata = {
  title,
  description: desc,
  authors: [{ name: profile.name }],
  keywords: [profile.name, "BSIT Student", "Back-End Developer", "Node.js", "Express.js", "MongoDB", "React", "Portfolio"],
  openGraph: { title, description: desc, siteName: profile.name, type: "website", locale: "en_PH" },
  twitter: { card: "summary_large_image", title, description: desc },
};
export const viewport = { themeColor: "#050816", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Preloader />
        <div className="bg1" aria-hidden="true" />
        <div className="bg2" aria-hidden="true" />
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
