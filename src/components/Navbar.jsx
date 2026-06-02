import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/collections', label: 'Collections' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const closeMobile = () => setMobileOpen(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Navbar Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-xl shadow-lg shadow-black/20'
            : 'bg-dark/80 backdrop-blur-md'
        } border-b border-border`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-[5%] py-3.5 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline shrink-0">
            <img src="/images/logo.jpg" alt="Beyond Infinity" className="h-12 md:h-16 w-auto object-contain" />
            <span className="font-serif text-lg md:text-[1.2rem] font-semibold tracking-[0.1em] text-gold hidden sm:inline">
              Beyond <span className="font-light italic">Infinity</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-10 list-none">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`text-[0.68rem] font-normal tracking-[0.2em] uppercase no-underline pb-0.5 border-b transition-colors duration-300 ${
                    location.pathname === path
                      ? 'text-gold border-gold/40'
                      : 'text-light border-transparent hover:text-gold hover:border-gold/40'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 bg-transparent border-none cursor-pointer text-gold shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - rendered outside nav via portal-like positioning */}
      <div
        className={`fixed inset-0 z-[55] bg-dark/98 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          mobileOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Close button in top-right */}
        <button
          onClick={closeMobile}
          className="absolute top-4 right-5 flex items-center justify-center w-10 h-10 bg-transparent border-none cursor-pointer text-gold"
          aria-label="Close menu"
        >
          <X size={22} strokeWidth={1.5} />
        </button>

        <ul className="flex flex-col items-center gap-8 list-none p-0 m-0">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={closeMobile}
                className={`font-serif text-2xl tracking-[0.15em] uppercase no-underline transition-colors duration-300 ${
                  location.pathname === path
                    ? 'text-gold'
                    : 'text-ivory hover:text-gold'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Brand at bottom */}
        <div className="absolute bottom-10 text-center">
          <img src="/images/logo.jpg" alt="Beyond Infinity" className="h-16 w-auto object-contain mx-auto mb-3" />
          <p className="text-[0.6rem] tracking-[0.25em] uppercase text-muted">
            Est. 2013 · Yangon, Myanmar
          </p>
        </div>
      </div>
    </>
  )
}
