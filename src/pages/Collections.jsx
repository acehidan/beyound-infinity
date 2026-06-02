import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'

const tabs = [
  { id: 'jewellery', label: 'Jade Jewellery' },
  { id: 'stones', label: 'Raw Jade Stones' },
  { id: 'bespoke', label: 'Custom & Bespoke' },
]

const jewelleryProducts = [
  { name: 'Jade Ring Classic', detail: 'Jadeite · Polished Cabochon', badge: 'Signature', img: '/images/collection/jade ring1.png' },
  { name: 'Jade Ring Emerald Set', detail: '18K Gold Setting · Premium Grade', badge: 'Bespoke Available', img: '/images/collection/jade ring 2.png' },
  { name: 'Jade Ring Vintage Band', detail: 'Hand-Carved · Natural Jadeite', badge: "Collector's Choice", img: '/images/collection/jade ring 3.png' },
  { name: 'Jade Ring Statement', detail: 'Bold Design · Imperial Green', badge: 'Limited', img: '/images/collection/jade ring 4.png' },
]

const necklaceProducts = [
  { name: 'Jade Necklace Elegant', detail: 'Carved Pendant · Gold Chain', badge: 'New Arrival', img: '/images/collection/jade necklace 1.png' },
  { name: 'Jade Necklace Classic', detail: 'Beaded Jadeite · Sterling Chain', badge: 'Bestseller', img: '/images/collection/jade necklace 2.png' },
]

const stoneProducts = [
  { name: 'Imperial Green Jadeite', detail: 'Top Grade · Vivid Saturation', badge: 'Premium Select', img: '/images/collection/jade 1.png' },
  { name: 'Natural Jadeite Stone', detail: 'Type A · Raw Formation', badge: 'Rare', img: '/images/collection/jade 2.png' },
  { name: 'Myanmar Jadeite', detail: 'Fine Texture · High Translucency', badge: 'Collector Grade', img: '/images/collection/jade 3.png' },
]

function ProductCard({ name, detail, badge, img, delay = 0 }) {
  return (
    <AnimatedSection animation="fadeUp" delay={delay}>
      <div className="group bg-dark overflow-hidden flex flex-col hover:bg-dark-3 transition-colors duration-350 cursor-pointer h-full">
        <div className="aspect-square overflow-hidden bg-dark-3 relative">
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
        </div>
        <div className="p-5 md:p-6">
          <p className="font-serif text-[1.2rem] font-normal text-ivory">{name}</p>
          <p className="text-[0.85rem] text-muted mt-1 tracking-[0.03em]">{detail}</p>
          <span className="inline-block mt-2.5 text-[0.62rem] tracking-[0.15em] uppercase text-gold-muted border border-gold/25 px-2.5 py-0.5 font-normal">
            {badge}
          </span>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function Collections() {
  const [activeTab, setActiveTab] = useState('jewellery')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 160
      const sectionIds = ['jewellery', 'stones', 'bespoke']
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          setActiveTab(id)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = id === 'jewellery' ? 130 : 80
      window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* PAGE HERO */}
      <header className="relative pt-40 pb-20 md:pt-44 md:pb-24 text-center bg-dark-2 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_50%_100%,rgba(45,94,78,0.16)_0%,transparent_65%)]" />
        <AnimatedSection animation="fadeUp" delay={0}>
          <p className="relative text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-4 inline-block">
            Collections
          </p>
        </AnimatedSection>
        <AnimatedSection animation="fadeUp" delay={150}>
          <h1 className="relative font-serif text-[clamp(3rem,7vw,7rem)] font-light leading-[1.05] text-ivory">
            Jade &amp; <em className="italic text-gold">Jewellery</em>
          </h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeUp" delay={300}>
          <p className="relative mt-5 text-[1rem] font-light text-light max-w-[480px] mx-auto">
            Every piece personally selected, graded for colour, translucency, and integrity before it bears our name.
          </p>
        </AnimatedSection>
      </header>

      {/* STICKY TABS */}
      <div className="bg-dark border-b border-border sticky top-[52px] md:top-[68px] z-40">
        <div className="max-w-[1200px] mx-auto px-[5%] flex">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-[0.72rem] tracking-[0.2em] uppercase whitespace-nowrap py-4 px-5 md:px-7 border-b-[1.5px] font-normal bg-transparent cursor-pointer transition-colors duration-200 ${
                activeTab === id
                  ? 'text-gold border-gold'
                  : 'text-muted border-transparent hover:text-light'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* CATEGORY 1: JADE JEWELLERY */}
      <section id="jewellery" className="bg-dark" style={{ paddingBottom: 0 }}>
        {/* Hero Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-border">
          <AnimatedSection animation="fadeLeft" delay={0}>
            <div className="relative overflow-hidden bg-dark-3 min-h-[300px] md:min-h-[400px]">
              <img
                src="/images/collection/jade ring1.png"
                alt="Jade jewellery collection, rings and necklaces"
                className="w-full h-full object-cover transition-transform duration-800 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-dark/40 to-transparent" />
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeRight" delay={200}>
            <div className="py-12 md:py-20 px-8 md:px-16 flex flex-col justify-center bg-dark-2">
              <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-4">Category 01</p>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-ivory">
                Jade <em className="italic text-gold">Jewellery</em>
              </h2>
              <p className="text-[1rem] text-light leading-[1.9] font-light mt-5">
                Handcrafted by Myanmar artisans, each piece is a dialogue between stone and skill. Shaped to be worn, treasured, and passed forward through generations.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 mt-8 text-[0.72rem] tracking-[0.2em] uppercase text-gold no-underline font-normal hover:gap-4 transition-all duration-300"
              >
                Enquire about a piece <span>&rarr;</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Rings Grid */}
        <div className="max-w-[1200px] mx-auto px-[5%] py-12 md:py-16">
          <AnimatedSection animation="fadeUp" delay={0}>
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-3">Rings</p>
            <h2 className="font-serif text-[clamp(1.8rem,2.8vw,2.5rem)] font-light text-ivory mb-2">
              Jade <em className="italic text-gold">Rings</em>
            </h2>
            <p className="text-[0.95rem] text-light leading-[1.9] font-light max-w-[540px] mb-10">
              Each ring is a testament to Myanmar's jade heritage, hand-selected stones set with precision and care.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/8">
            {jewelleryProducts.map((p, i) => (
              <ProductCard key={p.name} {...p} delay={i * 100} />
            ))}
          </div>
        </div>

        {/* Necklaces Grid */}
        <div className="max-w-[1200px] mx-auto px-[5%] pb-12 md:pb-16">
          <AnimatedSection animation="fadeUp" delay={0}>
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-3">Necklaces</p>
            <h2 className="font-serif text-[clamp(1.8rem,2.8vw,2.5rem)] font-light text-ivory mb-2">
              Jade <em className="italic text-gold">Necklaces</em>
            </h2>
            <p className="text-[0.95rem] text-light leading-[1.9] font-light max-w-[540px] mb-10">
              Elegant jade pendants and beaded necklaces, timeless pieces that embody the soul of Myanmar craftsmanship.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/8">
            {necklaceProducts.map((p, i) => (
              <ProductCard key={p.name} {...p} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY 2: RAW JADE STONES */}
      <section id="stones" className="bg-dark-2" style={{ paddingTop: 0, paddingBottom: 0 }}>
        {/* Featured Stone */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] border-y border-border">
          <AnimatedSection animation="fadeLeft" delay={0}>
            <div className="overflow-hidden bg-dark-3">
              <img
                src="/images/collection/jade 1.png"
                alt="Imperial green jadeite raw stone, premium grade"
                className="w-full h-full min-h-[400px] md:min-h-[450px] object-cover transition-transform duration-800 hover:scale-[1.03]"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeRight" delay={200}>
            <div className="py-12 md:py-20 px-8 md:px-12 flex flex-col justify-center border-l border-border bg-dark-2">
              <span className="inline-block text-[0.65rem] tracking-[0.25em] uppercase text-gold bg-gold/8 px-3.5 py-1.5 mb-6 border border-border">
                Featured Stone
              </span>
              <h2 className="font-serif text-2xl md:text-[2.2rem] font-light text-ivory leading-[1.2]">
                Imperial<br /><em className="italic text-gold">Green Jadeite</em>
              </h2>
              <p className="text-[0.95rem] text-light leading-[1.85] mt-5">
                The most coveted jade in the world. Vivid, even saturation with exceptional translucency, sourced from Myanmar's Kachin State, the only significant deposit of gem-quality jadeite on earth.
              </p>
              <div className="grid grid-cols-2 gap-px bg-border mt-8">
                {[
                  { k: 'Origin', v: 'Kachin, Myanmar' },
                  { k: 'Type', v: 'Type A Jadeite' },
                  { k: 'Treatment', v: 'Natural, Untreated' },
                  { k: 'Grade', v: 'Premium Select' },
                ].map(({ k, v }) => (
                  <div key={k} className="bg-dark-2 p-4 text-center">
                    <p className="text-[0.58rem] tracking-[0.15em] uppercase text-muted">{k}</p>
                    <p className="font-serif text-[1rem] text-ivory mt-0.5 font-normal">{v}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 mt-8 text-[0.65rem] tracking-[0.2em] uppercase text-gold no-underline font-normal hover:gap-4 transition-all duration-300"
              >
                Request stone details <span>&rarr;</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Stone Grid */}
        <div className="max-w-[1200px] mx-auto px-[5%] py-12 md:py-16">
          <AnimatedSection animation="fadeUp" delay={0}>
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-3">Category 02</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light text-ivory mb-2">
              Raw Jade <em className="italic text-gold">Stones</em>
            </h2>
            <p className="text-[1rem] text-light leading-[1.9] font-light max-w-[540px] mb-10">
              Premium jadeite in its natural form. For collectors, jewellers, and those who appreciate jade as it emerged from the earth.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/8">
            {stoneProducts.map((p, i) => (
              <ProductCard key={p.name} {...p} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* BESPOKE CTA */}
      <section id="bespoke" className="bg-jade">
        <div className="max-w-[700px] mx-auto px-[5%] py-16 md:py-24 text-center">
          <AnimatedSection animation="scaleUp" delay={0}>
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-ivory/50 font-normal mb-4">Custom &amp; Bespoke</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light text-ivory/95">
              Something <em className="italic text-gold-light">Entirely Yours</em>
            </h2>
            <p className="text-[1rem] text-ivory/60 leading-[1.9] font-light mt-4">
              We welcome bespoke commissions. Bring your concept, we bring the stone, the craft, and the expertise to make it extraordinary.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-10 px-11 py-4 bg-ivory text-dark text-[0.75rem] tracking-[0.2em] uppercase font-medium no-underline hover:bg-ivory-2 transition-colors duration-300"
            >
              Begin Your Enquiry
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
