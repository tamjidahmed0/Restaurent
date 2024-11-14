import localFont from "next/font/local";
import {Bebas_Neue ,Roboto, Raleway, Poppins, Inter, Montserrat} from 'next/font/google'
import "./globals.css";


const raleway = Raleway({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-raleway',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-poppins',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400' ],
  variable: '--font-bebas',
});

const inter = Inter({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-montserrat',
});



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${poppins.variable} ${roboto.variable} ${bebas.variable} ${inter.variable} ${montserrat.variable} antialiased`}
      >
    

        {children}
      </body>
    </html>
  );
}
