import "./globals.css";
import { Inter, Orbitron } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "CyberWebStack",
  description: "Next-gen Cyber & Cloud Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {/* Background Cyber Gradient */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.15),transparent)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,0,255,0.15),transparent)] animate-pulse"></div>
        </div>

        {/* Navbar */}
        <Navbar orbitron={orbitron.className} />
        
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
