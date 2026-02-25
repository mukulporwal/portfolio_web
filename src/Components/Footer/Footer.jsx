// import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gradient-to-br from-orange-200 via-red-200 to-beige-200 ">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex flex-col md:flex-row justify-center items-center gap-2  text-md">
                <span>© {currentYear} Mukul Porwal. All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
