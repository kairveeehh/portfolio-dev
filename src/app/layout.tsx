import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/common/Navbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kairvee",
  description: "personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"suppressHydrationWarning>
     
       <body>
      
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <Navbar />
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
