import React from 'react'

const FooterComponent = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white text-gray-700 py-8 mt-auto border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Copyright */}
          <div className="text-sm">
            © {currentYear} Lateral. All rights reserved.
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent