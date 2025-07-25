import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Drey Portfolio',
  description: 'My personal website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

