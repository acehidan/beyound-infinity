import { Link } from 'react-router-dom'

const footerLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/collections', label: 'Collections' },
  { path: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-border py-6 md:py-10 px-[5%]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img src="/images/logo.jpg" alt="Beyond Infinity" className="h-16 w-auto object-contain" />
          <span className="font-serif text-[1rem] font-semibold tracking-[0.1em] text-gold">
            Beyond Infinity
          </span>
        </div>

        {/* Nav Links */}
        <ul className="flex items-center gap-5 md:gap-8 list-none p-0 m-0">
          {footerLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className="text-[0.62rem] tracking-[0.18em] uppercase text-muted no-underline hover:text-gold transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-[0.62rem] text-muted tracking-[0.05em] m-0">
          &copy; 2025 Beyond Infinity Gems &amp; Jewellery &middot; Est. 2013 &middot; Yangon, Myanmar
        </p>
      </div>
    </footer>
  )
}
