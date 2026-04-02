import React from 'react'

const FooterComponent = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white text-gray-700 py-8 mt-auto border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-sm">
            © {currentYear} Lateral. All rights reserved.
          </div>
          
          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="hover:text-black transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-black transition-colors duration-200">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-black transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent