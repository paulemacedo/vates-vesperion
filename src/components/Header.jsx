
import { useState } from 'react'
import { HiMenu, HiX, HiChevronDown} from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import { secoes } from './Servicos'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false)

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#leituras', label: 'Leituras' },
    { 
      href: '#servicos', 
      label: 'Serviços', 
      hasSubmenu: true,
      submenu: secoes.map(secao => ({
        href: `#${secao.id}`,
        label: secao.titulo,
      })),
    },
    { href: '#faq', label: 'FAQ' },
    { href: '#depoimentos', label: 'Depoimentos' },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-midnight border-b border-gold/30">
      <div className="max-w-6xl mx-auto px-5">
        <nav className="flex items-center justify-between p-5 w-full">
          <a href="#hero" className="font-cinzel text-xl text-gold font-bold">
            VV
          </a>
          
          {/* Desktop Navigation */}
          <ul className="flex space-x-8 max-md:hidden">
            {navLinks.map((link) => (
              <li 
                key={link.href}
                className="relative group"
                onMouseEnter={() => link.hasSubmenu && setIsServiceMenuOpen(true)}
                onMouseLeave={() => link.hasSubmenu && setIsServiceMenuOpen(false)}
              >
                <a 
                  href={link.href}
                  className="font-montserrat text-sm text-gold uppercase tracking-wider hover:opacity-70 transition-opacity flex items-center gap-1"
                >
                  {link.label}
                  {link.hasSubmenu && <HiChevronDown className="text-xs" />}  
                </a>

                {/* Submenu */}
                {link.hasSubmenu && (
                  <AnimatePresence>
                    {isServiceMenuOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 bg-midnight border border-gold/30 rounded-md shadow-lg min-w-[180px] py-2 z-[60]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.submenu.map((subLink) => (
                          <a 
                            key={subLink.href}
                            href={subLink.href}
                            className="block px-4 py-2 font-montserrat text-sm text-gold hover:bg-gold/10 transition-colors"
                            >
                              {subLink.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
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
                  {/* Submenu for Services */}
                  {link.hasSubmenu && (
                    <div className="mt-2 space-y-2">
                      {link.submenu.map((subLink) => (
                        <a 
                          key={subLink.href}
                          href={subLink.href}
                          className="block font-montserrat text-xs text-gold/80 hover:bg-gold transition-colors py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subLink.label}
                        </a>
                      ))}
                    </div>
                  )}
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