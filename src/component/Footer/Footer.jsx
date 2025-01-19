const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-6">
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()}. All rights reserved.
            </p>
            <p className="mt-2 text-gray-400">
              Designed & Developed by{' '}
              <a
                href="https://github.com/NazmulHasanNahin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0be58a] hover:underline"
              >
                Nazmul Hasan Nahin
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  