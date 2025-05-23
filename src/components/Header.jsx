
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#leituras', label: 'Leituras' },
    { href: '#precos', label: 'Preços' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#faq', label: 'FAQ' },
    { href: '#depoimentos', label: 'Depoimentos' },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-midnight border-b border-gold/30">
      <div className="max-w-6xl mx-auto px-5">
        <nav className="flex items-center justify-between p-5">
          <a href="#hero" className="font-cinzel text-xl text-gold font-bold">
            VV
          </a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="font-montserrat text-sm text-gold uppercase tracking-wider hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gold text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className="md:hidden pb-4 space-y-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <li key={link.href} className="text-center">
                  <a 
                    href={link.href}
                    className="font-montserrat text-sm text-gold uppercase tracking-wider hover:opacity-70 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header