
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 mt-20">
      <div className="blog-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <NavLink to="/" className="flex items-center space-x-2">
              <span className="font-serif font-bold text-2xl text-indigo-700">Echo</span>
            </NavLink>
            <p className="mt-4 text-slate-600">
              A modern platform for thoughtful writers and curious readers. Share stories, insights, and ideas with our community.
            </p>
          </div>

          {/* Links section */}
          <div>
            <h4 className="font-medium text-sm mb-4 text-slate-500">NAVIGATE</h4>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-sm hover:text-indigo-700 transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-sm hover:text-indigo-700 transition-colors">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-sm hover:text-indigo-700 transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-sm hover:text-indigo-700 transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Legal section */}
          <div>
            <h4 className="font-medium text-sm mb-4 text-slate-500">LEGAL</h4>
            <ul className="space-y-3">
              <li>
                <NavLink to="/privacy" className="text-sm hover:text-indigo-700 transition-colors">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" className="text-sm hover:text-indigo-700 transition-colors">
                  Terms of Service
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            © {currentYear} Echo Blog. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-slate-500">
              Made with <span className="text-indigo-700">♥</span> for better blogging
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
