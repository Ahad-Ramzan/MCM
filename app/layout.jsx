import "./globals.css";
import TopNavbar from "@/components/Navbar/TopNavbar";
import BottomNavbar from "@/components/Navbar/BottomNavbar";
import Newsletter from "@/components/Footer/NewsLetter";
import FooterLinks from "@/components/Footer/FooterLinks";
import MobileTopbar from "@/components/Navbar/mobile/MobileTopbar";
import MobileBottombar from "@/components/Navbar/MobileBottombar";
import localFont from "next/font/local";

const geistSans = localFont({
  src: [
    {
      path: "../public/fonts/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: '/fonts/Geist-Regular.woff',
    //   weight: '400',
    //   style: 'normal',
    // },
  ],
  display: "swap",
});

const geistMono = localFont({
  src: [
    {
      path: "../public/fonts/GeistMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: '/fonts/GeistMono-Regular.woff',
    //   weight: '400',
    //   style: 'normal',
    // },
  ],
  display: "swap",
});

export const metadata = {
  title: "MCM - Construção",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <div className="hidden xl:block">
          <TopNavbar />
          <BottomNavbar />
        </div>
        <div className="xl:hidden ">
          <MobileTopbar />
          <MobileBottombar />
        </div>

        {children}
        <span className="block border-t-1 border-[var(--lightGray6)] w-full my-8" />
        <Newsletter />
        <span className="block border-t-1 border-[var(--lightGray6)] w-full my-8" />
        <FooterLinks />
      </body>
    </html>
  );
}
