import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    Company: ['About', 'Careers', 'Affiliates', 'Blog'],
    Learn: ['Browse crypto prices', 'What is Bitcoin?', 'What is Ethereum?', 'What is crypto?'],
    Support: ['Help center', 'Contact us', 'Create account', 'ID verification'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <span className="text-2xl font-bold text-[#0052ff] mb-4 md:mb-0">coinbase</span>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Coinbase Clone. For educational purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
