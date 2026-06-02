import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  return (
    <>
      {/* PAGE HERO */}
      <header className="relative pt-40 pb-20 md:pt-44 md:pb-24 text-center bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(45,94,78,0.15)_0%,transparent_65%)]" />
        <AnimatedSection animation="fadeUp" delay={0}>
          <p className="relative text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-4 inline-block">
            Get in Touch
          </p>
        </AnimatedSection>
        <AnimatedSection animation="fadeUp" delay={150}>
          <h1 className="relative font-serif text-[clamp(3rem,7vw,7rem)] font-light leading-[1.05] text-ivory">
            Contact <em className="italic text-gold">Us</em>
          </h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeUp" delay={300}>
          <p className="relative mt-5 text-[1rem] font-light text-light max-w-[440px] mx-auto">
            Whether you're seeking a specific piece, exploring wholesale, or wishing to learn more, we are glad to hear from you.
          </p>
        </AnimatedSection>
      </header>

      {/* MAIN CONTACT */}
      <section className="bg-dark-2 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-[5%] py-16 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

          {/* LEFT: Contact Info */}
          <AnimatedSection animation="fadeLeft" delay={0}>
            <div>
              {/* Contact Person */}
              <div className="mb-10">
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-gold font-normal mb-2.5">Contact Person</p>
                <p className="font-serif text-[1.3rem] text-ivory">Kevin Lin @ Lin Thu Han</p>
                <p className="text-[0.9rem] text-muted mt-1">Executive Director</p>
              </div>

              <div className="w-8 h-px bg-border my-10" />

              {/* Phone */}
              <div className="mb-10">
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-gold font-normal mb-2.5">Phone</p>
                <p className="text-[1rem] text-ivory leading-[1.65]">
                  <a href="tel:+959792090909" className="text-ivory no-underline hover:text-gold transition-colors duration-200">
                    +959 792 090 909
                  </a>
                </p>
              </div>

              <div className="w-8 h-px bg-border my-10" />

              {/* Email */}
              <div className="mb-10">
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-gold font-normal mb-2.5">Email</p>
                <div className="text-[1rem] text-ivory leading-[1.8]">
                  <a href="mailto:kevinlin@byondinfinity.com" className="text-ivory no-underline hover:text-gold transition-colors duration-200 block">
                    kevinlin@byondinfinity.com
                  </a>
                  <a href="mailto:linthuhan9@gmail.com" className="text-ivory no-underline hover:text-gold transition-colors duration-200 block">
                    linthuhan9@gmail.com
                  </a>
                </div>
              </div>

              <div className="w-8 h-px bg-border my-10" />

              {/* Address */}
              <div className="mb-10">
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-gold font-normal mb-2.5">Address</p>
                <p className="text-[1rem] text-ivory leading-[1.7]">
                  N2, Ground Floor, Shwe Sabae Yeikmon Housing,<br />
                  Shwe Zalat Street, Kamayut Township,<br />
                  Yangon. 11041
                </p>
              </div>

              <div className="w-8 h-px bg-border my-10" />

              {/* Social */}
              <div>
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-gold font-normal mb-3">Follow Us</p>
                <div className="flex flex-wrap gap-2.5">
                  {['Facebook', 'Instagram', 'LinkedIn'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-[0.7rem] tracking-[0.15em] uppercase text-muted no-underline border border-gold/20 px-3.5 py-1.5 font-normal hover:text-gold hover:border-gold/50 transition-colors duration-200"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT: QR Code + Enquiry Note */}
          <AnimatedSection animation="fadeRight" delay={200}>
            <div>
              {/* QR Code Panel */}
              <div className="border border-border p-8 md:p-10 bg-dark mb-px">
                <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-normal mb-3">Scan to Connect</p>
                <h2 className="font-serif text-[1.5rem] font-light text-ivory">
                  Contact <em className="italic text-gold">QR Code</em>
                </h2>
                <p className="text-[0.9rem] text-muted leading-[1.8] mt-3">
                  Scan the QR code below to save our contact information directly to your phone.
                </p>

                {/* QR Code */}
                <div className="flex gap-8 items-center mt-8 pt-8 border-t border-border">
                  <div className="w-[150px] h-[150px] bg-white flex-shrink-0 flex items-center justify-center p-2">
                    <img
                      src="/images/beyondInfinityQR.jpg"
                      alt="Beyond Infinity QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-[0.22em] uppercase text-muted mb-1.5">Scan to save contact</p>
                    <p className="font-serif text-[1.1rem] text-ivory">Kevin Lin @ Lin Thu Han</p>
                    <p className="text-[0.85rem] text-muted mt-2 leading-[1.6]">
                      Executive Director<br />
                      Beyond Infinity Gems &amp; Jewellery
                    </p>
                  </div>
                </div>
              </div>

              {/* Enquiry Note */}
              <div className="bg-dark-3 border border-border p-8 md:p-10 mt-px">
                <p className="text-[0.9rem] text-muted leading-[1.8]">
                  We respond to all enquiries within <strong className="text-light font-normal">24 to 48 hours</strong>. For urgent requests, international orders, or stone specifications, feel free to reach out directly via phone or email.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* RESPONSE STRIP */}
      <div className="bg-jade border-t border-white/8 py-8 text-center">
        <AnimatedSection animation="fadeUp" delay={0}>
          <p className="text-[0.85rem] text-ivory/70 tracking-[0.06em]">
            Available for international export, wholesale, and custom commissions &nbsp;&middot;&nbsp;{' '}
            <strong className="text-ivory/95 font-normal">Established 2013, Yangon, Myanmar</strong>
          </p>
        </AnimatedSection>
      </div>
    </>
  )
}
