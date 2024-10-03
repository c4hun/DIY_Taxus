import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { frFR } from "@clerk/localizations";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Taxus - Vos taxis",
  description: "Gagner votre temps",
};

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={frFR}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
