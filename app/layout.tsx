import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Abdoulaye Fall - Candidat Président FSF | Un nouveau souffle pour le football sénégalais',
  description: 'Découvrez la vision d\'Abdoulaye Fall pour la présidence de la Fédération Sénégalaise de Football. Ensemble, bâtissons l\'avenir de notre football.',
  keywords: 'Abdoulaye Fall, FSF, Football Sénégal, Président Fédération, Candidat',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}