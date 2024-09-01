
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

import Navbar from "@/components/navbar";



const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Jose de San Martin 👀",
  description: "Created by Nico Morgani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" ></script>
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
          <footer >
            <div className="flex justify-center items-center mt-40 " >
                  
            </div>
            <div data-aos="fade-up"
     data-aos-duration="3000" >
            <div className="flex justify-center items-center " >
           
           <p>❤Nico Morgani - Lucy Diamond❤ </p>
     </div>
            <div className="flex justify-center items-center mb-28 mt-5" >
           
                  <p>Todos los Derechos Reservados 😎</p>
            </div>
            </div>
            
          </footer>
        </ThemeProvider>
        
        <script>
  AOS.init();
</script>
      </body>
    </html>
  );
}
