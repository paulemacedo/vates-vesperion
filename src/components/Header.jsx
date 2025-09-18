import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveCategory } from '../redux/slices/leituraSlice'
import { HiMenu, HiX, HiChevronDown} from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import { categories as categories } from '../data/oracleData'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false)
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false) // Novo estado
  const dispatch = useDispatch()

  const handleCategoryClick = (categoryId) => {
    dispatch(setActiveCategory(categoryId))
    setIsServiceMenuOpen(false)
    setIsMenuOpen(false)
    setIsMobileSubmenuOpen(false)
  }

  const navLinks = [
    { href: '/shop', label: 'Loja' },
    { href: '/', label: 'Home' },
    { 
      href: '#leituras', 
      label: 'Leituras', 
      hasSubmenu: true,
      submenu: (categories || []).map(category => ({
        href: `#leituras`,
        label: category.name,
        onClick: () => handleCategoryClick(category.id)
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

                {/* Desktop Submenu */}
                {link.hasSubmenu && (
                  <AnimatePresence>
                    {isServiceMenuOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 bg-midnight border border-gold/30 rounded-md shadow-lg min-w-[190px] py-2 z-[60]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.submenu.map((subLink) => (
                          <a 
                            key={subLink.href}
                            href={subLink.href}
                            onClick={subLink.onClick}
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
                  {link.hasSubmenu ? (
                    // Link com submenu - botão para expandir
                    <div>
                      <button
                        onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
                        className="font-montserrat text-sm text-gold uppercase tracking-wider hover:opacity-70 transition-opacity flex items-center justify-center gap-1 mx-auto"
                      >
                        {link.label}
                        <HiChevronDown className={`text-xs transition-transform ${isMobileSubmenuOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mobile Submenu */}
                      <AnimatePresence>
                        {isMobileSubmenuOpen && (
                          <motion.div
                            className="mt-2 space-y-2 bg-gold/10 rounded-md py-2 mx-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {link.submenu.map((subLink) => (
                              <a 
                                key={subLink.href}
                                href={subLink.href}
                                onClick={subLink.onClick}
                                className="block font-montserrat text-xs text-gold/80 hover:text-gold transition-colors py-1"
                              >
                                {subLink.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Link normal
                    <a 
                      href={link.href}
                      className="font-montserrat text-sm text-gold uppercase tracking-wider hover:opacity-70 transition-opacity"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
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