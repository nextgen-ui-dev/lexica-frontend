import "./globals.css";
import HydrationHandler from "../components/core/layout/HydrationHandler";
import { Montserrat, Hind } from "next/font/google";
import LoginModal from "../components/core/organism/modals/LoginModal";
import Footer from "../components/core/organism/footer/Footer";
import Navbar from "../components/core/organism/navbar/Navbar";
import TanstackQueryProvider from "../providers/TanstackQueryProvider";
import AssistantModal from "@/components/core/organism/modals/AsisstantModal";
import AuthProvider from "@/providers/AuthProvider";
import OnboardingModal from "@/components/core/organism/modals/OnboardingModal";
import { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

const hind = Hind({
  subsets: ["latin"],
  variable: "--font-hind",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lexica",
  description: "Lexica, you're reading companion",
  manifest: "/manifest.json",
  icons: { icon: "/icon.png", apple: "/icon.png" },
  themeColor: "#fff",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative selection:bg-primary-600 selection:text-white ${montserrat.className} ${hind.className}`}
      >
        <TanstackQueryProvider>
          <AuthProvider>
            <LoginModal />
            <AssistantModal />
            <OnboardingModal />
            <HydrationHandler>
              <Navbar />
              {children}
              <Footer />
            </HydrationHandler>
          </AuthProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
