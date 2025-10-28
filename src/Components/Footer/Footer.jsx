// import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-black text-white border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Mukul Porwal. All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
