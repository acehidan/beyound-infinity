import { Link } from 'react-router-dom'
import { Shield, MapPin, Award, MessageCircle, Search, Gem, Globe } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const collections = [
  {
    num: '01',
    title: 'Jade Jewellery',
    desc: 'Rings, bangles, and pendants shaped by artisans who understand jade\'s soul. Wearable art rooted in Myanmar craftsmanship.',
    link: '/collections#jewellery',
    cta: 'View jewellery',
    img: '/images/home 1.png',
    alt: 'Jade jewellery collection, rings and pendants',
  },
  {
    num: '02',
    title: 'Raw Jade Stones',
    desc: 'Premium-grade jadeite in its natural form. For collectors and connoisseurs who value origin, clarity, and colour integrity.',
    link: '/collections#stones',
    cta: 'View stones',
    img: '/images/home 2.png',
    alt: 'Raw jade gemstones, premium jadeite',
  },
  {
    num: '03',
    title: 'Custom & Bespoke',
    desc: 'A piece envisioned entirely by you. We collaborate from stone selection to final setting, one-of-a-kind jade creations.',
    link: '/contact',
    cta: 'Enquire now',
    img: '/images/home 3.png',
    alt: 'Bespoke jade jewellery crafting',
  },
]

const stats = [
  { number: '10+', label: 'Years in Jade' },
  { number: 'A+', label: 'Certified Grade' },
  { number: '100%', label: 'Myanmar Origin' },
  { number: '∞', label: 'Global Vision' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-[5%] pt-36 pb-28 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_85%,rgba(45,94,78,0.22)_0%,transparent_65%),radial-gradient(ellipse_50%_35%_at_75%_15%,rgba(201,169,110,0.07)_0%,transparent_55%),radial-gradient(ellipse_30%_25%_at_20%_30%,rgba(201,169,110,0.05)_0%,transparent_50%)]" />

        {/* Eyebrow */}
        <AnimatedSection animation="fadeUp" delay={0}>
          <div className="relative flex items-center justify-center gap-4 mb-7">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-gold-muted" />
            <span className="text-[0.72rem] tracking-[0.32em] uppercase text-gold font-normal">
              Myanmar Jade &amp; Jewellery
            </span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-gold-muted" />
          </div>
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection animation="fadeUp" delay={150}>
          <h1 className="relative font-serif text-[clamp(4rem,10vw,9rem)] font-light leading-[0.95] tracking-[-0.01em] text-ivory">
            Beyond<em className="block italic text-gold">Infinity</em>
          </h1>
        </AnimatedSection>

        {/* Decorative Rule */}
        <AnimatedSection animation="fadeUp" delay={250}>
          <div className="relative flex items-center gap-4 my-10">
            <div className="w-15 h-px bg-border" />
            <div className="w-[5px] h-[5px] bg-gold rotate-45" />
            <div className="w-15 h-px bg-border" />
          </div>
        </AnimatedSection>

        {/* Tagline */}
        <AnimatedSection animation="fadeUp" delay={300}>
          <p className="relative font-serif text-[clamp(1.1rem,2.2vw,1.5rem)] italic font-light text-light tracking-[0.04em]">
            Where Ancient Earth Meets Enduring Elegance
          </p>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection animation="fadeUp" delay={400}>
          <p className="relative mt-3 text-[0.75rem] tracking-[0.22em] uppercase text-muted font-normal">
            Est. 2013 &nbsp;&middot;&nbsp; Yangon, Myanmar
          </p>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection animation="fadeUp" delay={500}>
          <div className="relative flex flex-wrap justify-center gap-5 mt-14">
            <Link
              to="/collections"
              className="px-11 py-4 bg-gold text-dark text-[0.75rem] tracking-[0.2em] uppercase font-medium no-underline hover:bg-gold-light hover:-translate-y-px transition-all duration-300"
            >
              Explore Collections
            </Link>
            <Link
              to="/about"
              className="px-11 py-4 border border-border text-gold text-[0.75rem] tracking-[0.2em] uppercase font-medium no-underline hover:border-gold hover:text-gold-light transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </AnimatedSection>

        {/* Scroll Hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-fade-up" style={{ animationDelay: '1s' }}>
          <span className="text-[0.55rem] tracking-[0.25em] uppercase text-muted">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-scroll-pulse" />
        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="bg-dark-2 border-y border-border">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Left */}
          <AnimatedSection animation="fadeLeft" delay={0}>
            <div>
              <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-4">Who We Are</p>
              <h2 className="font-serif text-[clamp(2.2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-ivory">
                Rooted in Tradition.<br /><em className="italic text-gold">Built for the World.</em>
              </h2>
              <div className="text-light text-[1rem] leading-[1.9] font-light mt-6">
                <p>Beyond Infinity was founded by traders with deep roots in Myanmar's jade industry, with decades of hands-on expertise in sourcing, grading, and exporting some of the world's most prized jadeite.</p>
                <p className="mt-4">We bring that heritage to an international audience, uncompromising in quality, provenance, and craft.</p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 mt-7 text-[0.72rem] tracking-[0.2em] uppercase text-gold no-underline font-normal hover:gap-4 transition-all duration-300"
              >
                Discover our story <span>&rarr;</span>
              </Link>
            </div>
          </AnimatedSection>

          {/* Right: Stats */}
          <AnimatedSection animation="fadeRight" delay={200}>
            <div className="grid grid-cols-2 gap-px bg-border">
              {stats.map(({ number, label }) => (
                <div key={label} className="bg-dark-2 p-8 md:p-9 text-center hover:bg-dark-3 transition-colors duration-300">
                  <div className="font-serif text-[3.5rem] font-normal text-gold leading-none">{number}</div>
                  <div className="text-[0.72rem] tracking-[0.15em] uppercase text-muted mt-2 font-normal">{label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-dark">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16 md:py-28">
          <AnimatedSection animation="fadeUp" delay={0}>
            <div className="text-center mb-16">
              <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-4 inline-block">Why Choose Us</p>
              <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] text-ivory">
                The Beyond Infinity <em className="italic text-gold">Difference</em>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              {
                icon: <Shield className="w-8 h-8 text-gold" strokeWidth={1.5} />,
                title: 'Certified Authentic',
                desc: 'Every stone is Type A jadeite, natural, untreated, and certified. We never compromise on authenticity.',
              },
              {
                icon: <MapPin className="w-8 h-8 text-gold" strokeWidth={1.5} />,
                title: 'Myanmar Origin',
                desc: 'Sourced directly from Kachin State, the world\'s only significant deposit of gem-quality jadeite.',
              },
              {
                icon: <Award className="w-8 h-8 text-gold" strokeWidth={1.5} />,
                title: 'Expert Grading',
                desc: 'Decades of hands-on experience ensure every piece meets the highest standards of colour, clarity, and cut.',
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-gold" strokeWidth={1.5} />,
                title: 'Global Support',
                desc: 'WeChat available for international buyers. Responsive, professional service from Yangon to the world.',
              },
            ].map(({ icon, title, desc }, i) => (
              <AnimatedSection key={title} animation="fadeUp" delay={i * 100}>
                <div className="bg-dark p-8 md:p-10 hover:bg-dark-2 transition-colors duration-300 h-full">
                  <div className="mb-5">{icon}</div>
                  <h3 className="font-serif text-[1.25rem] font-normal text-ivory mb-3">{title}</h3>
                  <p className="text-[0.9rem] text-muted leading-[1.8]">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-dark-2 border-y border-border">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16 md:py-28">
          <AnimatedSection animation="fadeUp" delay={0}>
            <div className="text-center mb-16">
              <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-4 inline-block">Our Process</p>
              <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] text-ivory">
                From Earth to <em className="italic text-gold">Elegance</em>
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Connecting line - desktop only */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              {[
                {
                  step: '01',
                  title: 'Sourcing',
                  desc: 'Direct from Myanmar\'s legendary jade mines in Kachin State, personal relationships with miners ensure access to the finest rough stones.',
                  icon: <MapPin className="w-8 h-8 text-gold" strokeWidth={1.5} />,
                },
                {
                  step: '02',
                  title: 'Grading',
                  desc: 'Each stone is meticulously evaluated for colour saturation, translucency, texture, and structural integrity using international gemological standards.',
                  icon: <Search className="w-8 h-8 text-gold" strokeWidth={1.5} />,
                },
                {
                  step: '03',
                  title: 'Crafting',
                  desc: 'Myanmar artisans shape each piece by hand, honouring centuries-old techniques while embracing precision for modern aesthetics.',
                  icon: <Gem className="w-8 h-8 text-gold" strokeWidth={1.5} />,
                },
                {
                  step: '04',
                  title: 'Delivery',
                  desc: 'Secure, insured worldwide shipping with full documentation. From our hands in Yangon to yours, anywhere on earth.',
                  icon: <Globe className="w-8 h-8 text-gold" strokeWidth={1.5} />,
                },
              ].map(({ step, title, desc, icon }, i) => (
                <AnimatedSection key={step} animation="fadeUp" delay={i * 150}>
                  <div className="relative bg-dark-2 lg:bg-transparent p-6 lg:p-0 text-center lg:text-center">
                    {/* Step number circle */}
                    <div className="relative z-10 w-24 h-24 mx-auto mb-6 border border-border rounded-full flex items-center justify-center bg-dark-2 lg:bg-dark-2">
                      {icon}
                    </div>
                    <div className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-muted mb-2 font-normal">Step {step}</div>
                    <h3 className="font-serif text-[1.4rem] font-normal text-ivory mb-3">{title}</h3>
                    <p className="text-[0.9rem] text-muted leading-[1.8] max-w-[280px] mx-auto px-2">{desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION PREVIEW */}
      <section className="bg-dark">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16 md:py-28">
          {/* Section Header */}
          <AnimatedSection animation="fadeUp" delay={0}>
            <div className="text-center mb-16">
              <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-4 inline-block">Our Collections</p>
              <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] text-ivory">
                Crafted From the <em className="italic text-gold">Earth&apos;s Finest</em>
              </h2>
            </div>
          </AnimatedSection>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gold/10">
            {collections.map(({ num, title, desc, link, cta, img, alt }, i) => (
              <AnimatedSection key={num} animation="fadeUp" delay={i * 150}>
                <Link
                  to={link}
                  className="group bg-dark flex flex-col no-underline text-inherit overflow-hidden hover:bg-dark-3 transition-colors duration-500"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative bg-dark-3">
                    <img
                      src={img}
                      alt={alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/55 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <div className="text-[0.72rem] tracking-[0.15em] text-gold-muted mb-3 font-normal">{num}</div>
                    <h3 className="font-serif text-[1.4rem] font-normal text-ivory mb-2.5">{title}</h3>
                    <p className="text-[0.9rem] text-muted leading-[1.75] flex-1">{desc}</p>
                    <span className="mt-5 text-[0.7rem] tracking-[0.18em] uppercase text-gold font-normal inline-flex items-center gap-2 group-hover:gap-3.5 transition-all duration-200">
                      {cta} <span>&rarr;</span>
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* JADE STATEMENT */}
      <section className="bg-jade border-y border-white/8">
        <div className="max-w-[900px] mx-auto px-[5%] py-16 md:py-20 text-center">
          <AnimatedSection animation="scaleUp" delay={0}>
            <blockquote className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light italic leading-[1.55] text-ivory/92">
              &ldquo;Jade is not merely a stone. In Myanmar, it is memory, legacy, and aspiration, held in the palm of the earth for millennia, waiting to be shared with the world.&rdquo;
            </blockquote>
            <cite className="block mt-6 text-[0.7rem] tracking-[0.25em] uppercase font-sans not-italic text-ivory/40">
              – Beyond Infinity, Yangon
            </cite>
          </AnimatedSection>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="bg-dark">
        <div className="max-w-[1400px] mx-auto px-[5%] py-20 md:py-28">
          {/* Header */}
          <AnimatedSection animation="fadeUp" delay={0}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
              <div>
                <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-4">Gallery</p>
                <h2 className="font-serif text-[clamp(2.2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-ivory">
                  A Glimpse of <em className="italic text-gold">Myanmar Jade</em>
                </h2>
              </div>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2.5 text-[0.72rem] tracking-[0.2em] uppercase text-gold no-underline font-normal hover:gap-4 transition-all duration-300"
              >
                View full collection <span>&rarr;</span>
              </Link>
            </div>
          </AnimatedSection>

          {/* Gallery Grid - Masonry style */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {/* Image 1 - Tall */}
            <AnimatedSection animation="fadeUp" delay={0}>
              <Link to="/collections#jewellery" className="group relative block overflow-hidden aspect-[3/4]">
                <img
                  src="/images/collection/jade ring1.png"
                  alt="Jade ring, classic design"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[0.58rem] tracking-[0.2em] uppercase text-gold font-normal mb-1">Rings</p>
                  <p className="font-serif text-lg md:text-xl text-ivory">Classic Jade Ring</p>
                </div>
              </Link>
            </AnimatedSection>

            {/* Image 2 - Square */}
            <AnimatedSection animation="fadeUp" delay={100}>
              <Link to="/collections#stones" className="group relative block overflow-hidden aspect-square">
                <img
                  src="/images/collection/jade 1.png"
                  alt="Raw imperial green jadeite"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[0.58rem] tracking-[0.2em] uppercase text-gold font-normal mb-1">Stones</p>
                  <p className="font-serif text-lg md:text-xl text-ivory">Imperial Green</p>
                </div>
              </Link>
            </AnimatedSection>

            {/* Image 3 - Tall */}
            <AnimatedSection animation="fadeUp" delay={200}>
              <Link to="/collections#jewellery" className="group relative block overflow-hidden aspect-[3/4]">
                <img
                  src="/images/collection/jade ring 2.png"
                  alt="Jade ring, emerald gold setting"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[0.58rem] tracking-[0.2em] uppercase text-gold font-normal mb-1">Rings</p>
                  <p className="font-serif text-lg md:text-xl text-ivory">Gold-Set Ring</p>
                </div>
              </Link>
            </AnimatedSection>

            {/* Image 4 - Square */}
            <AnimatedSection animation="fadeUp" delay={100}>
              <Link to="/collections#stones" className="group relative block overflow-hidden aspect-square">
                <img
                  src="/images/collection/jade 2.png"
                  alt="Natural jadeite stone"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[0.58rem] tracking-[0.2em] uppercase text-gold font-normal mb-1">Stones</p>
                  <p className="font-serif text-lg md:text-xl text-ivory">Natural Jadeite</p>
                </div>
              </Link>
            </AnimatedSection>

            {/* Image 5 - Tall */}
            <AnimatedSection animation="fadeUp" delay={200}>
              <Link to="/collections#jewellery" className="group relative block overflow-hidden aspect-[3/4]">
                <img
                  src="/images/collection/jade necklace 1.png"
                  alt="Jade necklace, elegant pendant"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[0.58rem] tracking-[0.2em] uppercase text-gold font-normal mb-1">Necklaces</p>
                  <p className="font-serif text-lg md:text-xl text-ivory">Elegant Pendant</p>
                </div>
              </Link>
            </AnimatedSection>

            {/* Image 6 - Square */}
            <AnimatedSection animation="fadeUp" delay={300}>
              <Link to="/collections#jewellery" className="group relative block overflow-hidden aspect-square">
                <img
                  src="/images/collection/jade ring 3.png"
                  alt="Jade ring, vintage band"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[0.58rem] tracking-[0.2em] uppercase text-gold font-normal mb-1">Rings</p>
                  <p className="font-serif text-lg md:text-xl text-ivory">Vintage Band</p>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA - CONTACT */}
      <section className="bg-dark-2 border-y border-border">
        <div className="max-w-[1200px] mx-auto px-[5%] py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <AnimatedSection animation="fadeLeft" delay={0}>
            <div>
              <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-4">Get in Touch</p>
              <h2 className="font-serif text-[clamp(2.2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-ivory">
                Ready to Explore<br /><em className="italic text-gold">Myanmar&apos;s Finest Jade?</em>
              </h2>
              <p className="text-[1rem] text-light leading-[1.9] font-light mt-6">
                Whether you&apos;re seeking a specific piece, interested in wholesale, or wish to commission something entirely bespoke, our team is ready to assist you.
              </p>
              <div className="flex flex-wrap gap-5 mt-10">
                <Link
                  to="/contact"
                  className="px-10 py-4 bg-gold text-dark text-[0.75rem] tracking-[0.2em] uppercase font-medium no-underline hover:bg-gold-light hover:-translate-y-px transition-all duration-300"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:hello@beyondinfinity.mm"
                  className="px-10 py-4 border border-border text-gold text-[0.75rem] tracking-[0.2em] uppercase font-medium no-underline hover:border-gold hover:text-gold-light transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Contact Cards */}
          <AnimatedSection animation="fadeRight" delay={200}>
            <div className="flex flex-col gap-4">
              {/* Phone */}
              <a
                href="tel:+959792090909"
                className="group flex items-center gap-5 p-6 bg-dark border border-border no-underline hover:border-gold/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0 group-hover:border-gold/40 transition-colors duration-300">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold font-normal mb-0.5">Phone</p>
                  <p className="text-[1rem] text-ivory font-light">+959 792 090 909</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:kevinlin@byondinfinity.com"
                className="group flex items-center gap-5 p-6 bg-dark border border-border no-underline hover:border-gold/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0 group-hover:border-gold/40 transition-colors duration-300">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold font-normal mb-0.5">Email</p>
                  <p className="text-[1rem] text-ivory font-light">kevinlin@byondinfinity.com</p>
                </div>
              </a>

              {/* WeChat */}
              <a
                href="#"
                className="group flex items-center gap-5 p-6 bg-dark border border-border no-underline hover:border-gold/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0 group-hover:border-gold/40 transition-colors duration-300">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold font-normal mb-0.5">WeChat</p>
                  <p className="text-[1rem] text-ivory font-light">BeyondInfinityMM</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@beyondinfinity.mm"
                className="group flex items-center gap-5 p-6 bg-dark border border-border no-underline hover:border-gold/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0 group-hover:border-gold/40 transition-colors duration-300">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.58rem] tracking-[0.2em] uppercase text-gold font-normal mb-0.5">Email</p>
                  <p className="text-[0.9rem] text-ivory font-light">hello@beyondinfinity.mm</p>
                </div>
              </a>

              {/* WeChat */}
              {/* <a
                href="#"
                className="group flex items-center gap-5 p-6 bg-dark border border-border no-underline hover:border-gold/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0 group-hover:border-gold/40 transition-colors duration-300">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.58rem] tracking-[0.2em] uppercase text-gold font-normal mb-0.5">WeChat</p>
                  <p className="text-[0.9rem] text-ivory font-light">BeyondInfinityMM</p>
                </div>
              </a> */}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
