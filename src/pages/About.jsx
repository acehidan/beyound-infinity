import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'

const timeline = [
  {
    year: 'Pre-2013',
    title: 'Foundations in the Field',
    desc: 'Founders immersed in Myanmar\'s jade trade, sourcing directly from mines, mastering grading, and building deep industry relationships across the country.',
  },
  {
    year: '2013',
    title: 'Beyond Infinity is Established',
    desc: 'The brand is born in Yangon, formalising years of expertise into a trusted name for premium Myanmar jade and jewellery.',
  },
  {
    year: 'Now',
    title: 'Eyes on the International Market',
    desc: 'With a decade of experience and a clear global vision, Beyond Infinity is expanding, bringing Myanmar\'s finest jade and craftsmanship to collectors and buyers worldwide.',
  },
]

const values = [
  {
    title: 'Authentic Origin',
    desc: 'Every stone we source is traceable to Myanmar\'s legendary jade regions. Provenance is not a detail, it is the foundation of everything we offer.',
  },
  {
    title: 'Uncompromising Quality',
    desc: 'We apply rigorous grading standards to each piece, whether a raw stone for a collector or a finished ring for a discerning buyer.',
  },
  {
    title: 'Craft & Heritage',
    desc: 'Our artisans carry forward a tradition that spans generations. We honour that legacy in every carve, setting, and finish.',
  },
  {
    title: 'Technology & Transparency',
    desc: 'We bring modern tools and global standards to Myanmar\'s jade sector, for the benefit of the industry and every buyer we serve.',
  },
]

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <header className="relative pt-40 pb-20 md:pt-44 md:pb-24 text-center bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(45,94,78,0.18)_0%,transparent_65%)]" />
        <AnimatedSection animation="fadeUp" delay={0}>
          <p className="relative text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-4 inline-block">
            About Beyond Infinity
          </p>
        </AnimatedSection>
        <AnimatedSection animation="fadeUp" delay={150}>
          <h1 className="relative font-serif text-[clamp(3rem,7vw,7rem)] font-light leading-[1.05] text-ivory">
            A Legacy of<br /><em className="italic text-gold">Jade Expertise</em>
          </h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeUp" delay={300}>
          <p className="relative mt-6 font-serif text-[clamp(1.1rem,2vw,1.5rem)] italic font-light text-light max-w-[540px] mx-auto">
            Over a decade of sourcing, trading, and exporting Myanmar's finest jadeite, now offered to the world.
          </p>
        </AnimatedSection>
      </header>

      {/* ORIGIN STORY */}
      <section className="bg-dark-2 border-y border-border">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          {/* Image */}
          <AnimatedSection animation="fadeLeft" delay={0}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80"
                alt="Myanmar jade mines and mountains, origin of Beyond Infinity"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-dark py-5 px-6 text-center z-10">
                <span className="font-serif text-2xl font-semibold leading-none block">2013</span>
                <span className="text-[0.65rem] tracking-[0.18em] uppercase font-normal block mt-1">Founded</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fadeRight" delay={200}>
            <div>
              <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-4">Our Origin</p>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-ivory">
                Where the Stone<br /><em className="italic text-gold">Meets Its Story</em>
              </h2>
              <div className="text-light text-[1rem] leading-[1.9] font-light mt-6">
                <p>Beyond Infinity was born from a lifetime spent in Myanmar's jade trade. Our founders began their journey long before the company was established, handling stones first-hand, building supply chains, and earning trust in an industry where knowledge is earned, not inherited.</p>
                <p className="mt-4">In 2013, that expertise became a brand. Today, we stand at the intersection of tradition and technology, committed to bringing Myanmar's finest jade to discerning buyers around the world with transparency, craft, and pride.</p>
                <p className="mt-4">We are more than traders. We are advocates for Myanmar's gemological heritage, working to modernise how jade is valued, verified, and experienced on the global stage.</p>
              </div>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2.5 mt-7 text-[0.72rem] tracking-[0.2em] uppercase text-gold no-underline font-normal hover:gap-4 transition-all duration-300"
              >
                Explore our collections <span>&rarr;</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-dark py-16 md:py-24 px-[5%]">
        <div className="max-w-[800px] mx-auto">
          {/* Header */}
          <AnimatedSection animation="fadeUp" delay={0}>
            <div className="text-center mb-16">
              <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-4 inline-block">Our Journey</p>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light text-ivory">
                Decade of <em className="italic text-gold">Deep Roots</em>
              </h2>
            </div>
          </AnimatedSection>

          {/* Timeline Items */}
          <div className="flex flex-col border-l border-border ml-6">
            {timeline.map(({ year, title, desc }, i) => (
              <AnimatedSection key={year} animation="fadeLeft" delay={i * 200}>
                <div className="flex gap-10 pb-12 pl-10 relative">
                  {/* Diamond marker */}
                  <div className="absolute -left-[4px] top-1 w-[7px] h-[7px] bg-gold rotate-45" />
                  {/* Year */}
                  <div className="font-serif text-[1.2rem] font-normal text-gold min-w-[60px] pt-0.5">{year}</div>
                  {/* Content */}
                  <div>
                    <h3 className="font-serif text-[1.3rem] font-normal text-ivory mb-1.5">{title}</h3>
                    <p className="text-[0.9rem] text-muted leading-[1.75]">{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-jade border-t border-white/8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2">
          <AnimatedSection animation="fadeLeft" delay={0}>
            <div className="py-16 md:py-20 px-[5%] border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-ivory/45 font-normal mb-5">Our Vision</p>
              <p className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-light italic text-ivory/95 leading-[1.45]">
                &ldquo;To carry Myanmar's finest jade beyond borders, and introduce the world to a stone that has held civilisations in awe.&rdquo;
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeRight" delay={200}>
            <div className="py-16 md:py-20 px-[5%]">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-ivory/45 font-normal mb-5">Our Mission</p>
              <p className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-light italic text-ivory/95 leading-[1.45]">
                &ldquo;To harness technology in service of Myanmar's jade industry, exporting premium jade and accessories that express the full depth of Myanmar craftsmanship.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-dark">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16 md:py-28">
          <AnimatedSection animation="fadeUp" delay={0}>
            <div className="text-center mb-14">
              <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-4 inline-block">What Guides Us</p>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light text-ivory">
                Our <em className="italic text-gold">Principles</em>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {values.map(({ title, desc }, i) => (
              <AnimatedSection key={title} animation="fadeUp" delay={i * 150}>
                <div className="bg-dark p-10 md:p-10 hover:bg-dark-2 transition-colors duration-300">
                  <div className="w-7 h-px bg-gold mb-6" />
                  <h3 className="font-serif text-[1.25rem] font-normal text-ivory mb-2.5">{title}</h3>
                  <p className="text-[0.9rem] text-muted leading-[1.8]">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
