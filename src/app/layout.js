import { Geist, Geist_Mono } from "next/font/google";
import { Gloock } from "next/font/google";
import "./global.scss";
import Navbar from "@/components/NavBar/navbar";
import Footer from "@/components/Footer/footer";
import MobileNavbar from "@/components/NavBar/mobilenav";

const itdoesntmatter = Gloock({
  subsets: ["latin"],
  weight: '400'
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eden Creates",
  description: "Eden Yeung Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{background: '#B5D584'}}
        className={`${itdoesntmatter.className} antialiased caseStudyWhite`}
      >
        <div className="edenCreates">
          <Navbar/>
          <MobileNavbar/>
          {children}
          <Footer/>
        </div>
        
      </body>
    </html>
  );
}
