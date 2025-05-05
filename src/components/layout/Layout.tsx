
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Enhanced subtle background pattern */}
      <div className="fixed inset-0 bg-slate-50 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-indigo-50 opacity-80"></div>
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(#818cf820 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}></div>
      </div>
      
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
