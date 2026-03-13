import Image from 'next/image';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="text-[#a6a6a6] font-body">
      {/* Wave divider: FAQ (beige #e1ddda) → Footer (dark #1f1f1f) */}
      <div style={{ backgroundColor: '#1f1f1f', marginTop: '-4px' }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,0 C480,80 960,80 1440,0 L1440,0 L0,0 Z" fill="#e1ddda" />
        </svg>
      </div>
      <div className="bg-[#1f1f1f] py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/assets/logo.png" alt="Stove & Barrel Logo" width={120} height={40} className="mb-4" />
            <p className="max-w-xs text-lg leading-relaxed">Crafting signature scents for the modern gentleman. The code is in the bottle.</p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61570048682676" target="_blank" rel="noopener noreferrer" className="text-mutedGray hover:text-gold transition-colors duration-300">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/stoveandbarrel_official/" target="_blank" rel="noopener noreferrer" className="text-mutedGray hover:text-gold transition-colors duration-300">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-lg text-mutedGray hover:text-gold transition-colors duration-300">Home</a></li>
              <li><a href="https://stoveandbarrel.com/collections/all-products" target="_blank" rel="noopener noreferrer" className="text-lg text-mutedGray hover:text-gold transition-colors duration-300">The Collection</a></li>
              <li><a href="https://stoveandbarrel.com/pages/contact" target="_blank" rel="noopener noreferrer" className="text-lg text-mutedGray hover:text-gold transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl text-white mb-6">The Collection</h4>
            <ul className="space-y-3">
              <li><a href="https://stoveandbarrel.com/products/rustic-smoke-2" target="_blank" rel="noopener noreferrer" className="text-lg text-mutedGray hover:text-gold transition-colors duration-300">Rustic Smoke</a></li>
              <li><a href="https://stoveandbarrel.com/products/sawmill" target="_blank" rel="noopener noreferrer" className="text-lg text-mutedGray hover:text-gold transition-colors duration-300">Sawmill</a></li>
              <li><a href="https://stoveandbarrel.com/products/aged-bourbon" target="_blank" rel="noopener noreferrer" className="text-lg text-mutedGray hover:text-gold transition-colors duration-300">Aged Bourbon</a></li>
              <li><a href="https://stoveandbarrel.com/products/bundle" target="_blank" rel="noopener noreferrer" className="text-lg text-mutedGray hover:text-gold transition-colors duration-300">The Signature Bundle</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl text-white mb-6">Stay Connected</h4>
            <p className="mb-4 text-lg">Get news, updates, and promotions straight to your inbox.</p>
            <form className="flex max-w-sm mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#141414] border border-gold/30 text-white px-4 py-3 focus:outline-none focus:border-gold w-full transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-gold text-[#141414] px-6 py-3 font-bold hover:bg-[#d9c49a] transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#141414] py-5">
        <div className="container mx-auto px-6 text-center text-sm flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>&copy; 2026 Stove & Barrel. All rights reserved.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="https://stoveandbarrel.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-mutedGray hover:text-gold transition-colors duration-300">Privacy Policy</a>
            <span className="select-none text-gray-700">|</span>
            <a href="https://stoveandbarrel.com/policies/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-mutedGray hover:text-gold transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
