import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

import Navbar from "@/components/navbar";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Jose de San Martin",
  description: "Created by Nico Morgani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </head>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="container " >
            <Navbar />

            {children}
          </main>
        </ThemeProvider>
        <script>
  AOS.init();
</script>
      </body>
    </html>
  );
}
