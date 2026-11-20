import { useEffect, useState, type FormEvent } from 'react'
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Download, Mail, MapPin, Menu, Phone, ServerCog, ArrowUp, X } from 'lucide-react'
import { experiences } from '../data/experience'
import { skillGroups } from '../data/skills'
import { projects } from '../data/projects'
import { education } from '../data/education'
import { useActiveSection } from '../hooks/useActiveSection'
import profilePhoto from '../assets/Profile.jpg'
import resumePdf from '../assets/Manisha-Singh_Resume.pdf'

const navItems = [
  ['home', 'Home'], ['about', 'About'], ['experience', 'Experience'], ['skills', 'Skills'],
  ['projects', 'Projects'], ['education', 'Education'], ['contact', 'Contact'],
]

const capabilities = ['Frontend Architecture', 'Full-Stack Development', 'Enterprise Application Modernization', 'REST API Integration', 'System Design', 'HLD & LLD', 'Performance Optimization', 'Core Web Vitals', 'Reusable Component Libraries', 'Database-Driven Applications', 'Generative AI', 'AI-assisted Development', 'CI/CD', 'Agile/Scrum Delivery']

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const sectionIds = navItems.map(([id]) => id)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll)

    const revealItems = document.querySelectorAll('.section-heading, .about-copy, .capability, .stat-card, .timeline-item, .skill-card, .project-card, .education-card, .contact-grid')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in-view')
      })
    }, { threshold: 0.12 })

    revealItems.forEach((item) => observer.observe(item))
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const subject = String(formData.get('subject') ?? '')
    const message = String(formData.get('message') ?? '')
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:manisha081999singh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <header className="navbar">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home"><span>MS</span></button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map(([id, label]) => <button key={id} className={activeSection === id ? 'active' : ''} onClick={() => scrollTo(id)}>{label}</button>)}
        </nav>
        <a className="nav-resume" href={resumePdf} download="Manisha-Singh-Resume.pdf"><Download size={16} /> Resume</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability"><span /> Available for engineering opportunities</div>
              <p className="hero-kicker">MANISHA SINGH</p>
              <h1>Software Engineer<br /><span>Full-Stack Developer.</span></h1>
              <p className="hero-lead">Building scalable digital experiences through modern frontend architecture and full-stack engineering.</p>
              <p className="hero-description">Software Engineer with almost 5 years of experience building enterprise applications using React.js, Angular, Next.js, TypeScript and Node.js—supported by Generative AI, Anthropic Claude and GitHub Copilot for AI-assisted development.</p>
              <div className="hero-actions">
                <button className="button primary" onClick={() => scrollTo('experience')}>View My Experience <ArrowRight size={17} /></button>
                <button className="button secondary" onClick={() => scrollTo('projects')}>Explore My Projects</button>
                <a className="button secondary" href={resumePdf} download="Manisha-Singh-Resume.pdf"><Download size={17} /> Download Resume</a>
              </div>
              <div className="hero-social">
                <a href="https://linkedin.com/in/manisha-singh20" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span aria-hidden="true">in</span></a>
                <a href="#" onClick={(event) => event.preventDefault()} aria-label="GitHub profile placeholder"><span aria-hidden="true">GH</span></a>
              </div>
            </div>
            <div className="identity-panel" aria-label="Portrait of Manisha Singh">
              <div className="identity-orbit"><span className="orbit-dot dot-a" /><span className="orbit-dot dot-b" /></div>
              <div className="profile-frame">
                <img src={profilePhoto} alt="Manisha Singh, Software Engineer" />
              </div>
              <div className="identity-meta"><span>Frontend Architecture</span><strong>Enterprise Engineering</strong></div>
            </div>
          </div>
          <div className="tech-strip" aria-label="Core technologies"><span>React.js</span><i /><span>Angular</span><i /><span>TypeScript</span><i /><span>Node.js</span><i /><span>System Design</span></div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-inner">
            <SectionHeading eyebrow="01 / About" title="Engineering systems that work beautifully." copy="A full-stack engineering mindset focused on maintainability, performance and dependable enterprise delivery." />
            <div className="about-grid">
              <div className="about-copy"><p>I design and build data-driven applications for complex business environments—from modern React interfaces to Angular enterprise modules and REST-connected backend workflows.</p><p>My work balances product quality with engineering discipline: reusable components, clear architecture, measurable performance improvements and close collaboration across Agile teams.</p></div>
              <div className="capability-grid">{capabilities.map((item) => <div className="capability" key={item}><CheckCircle2 size={16} /><span>{item}</span></div>)}</div>
            </div>
            <div className="stats-grid">
              {[['Almost 5', 'Years of experience'], ['30%', 'Page responsiveness improvement'], ['20%', 'Release efficiency improvement'], ['≈30%', 'Reduction in manual effort']].map(([value, label]) => <div className="stat-card" key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-inner">
            <SectionHeading eyebrow="02 / Experience" title="Professional journey" copy="Enterprise delivery across retail, supplier operations and workflow-driven applications." />
            <div className="timeline">
              {experiences.map((item) => <article className="timeline-item" key={item.company}><div className="timeline-marker"><BriefcaseBusiness size={19} /></div><div className="timeline-card"><div className="timeline-head"><div><span className={item.type === 'current' ? 'status current' : 'status'}>{item.type === 'current' ? 'Current role' : 'Previous role'}</span><h3>{item.role}</h3><p>{item.company}</p></div><time>{item.period}</time></div><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-inner">
            <SectionHeading eyebrow="03 / Technical skills" title="A modern enterprise stack" copy="Tools organized around how I build, test and deliver software—not arbitrary ratings." />
            <div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.title}><div className="skill-card-head"><span>0{index + 1}</span><h3>{group.title}</h3></div><div className="tag-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-inner">
            <SectionHeading eyebrow="04 / Selected work" title="Enterprise project experience" copy="Case studies derived from professional experience. Confidential source code and internal details are intentionally excluded." />
            <div className="projects-grid">
              {projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-top"><span>0{index + 1}</span><span className="case-label">Professional case study</span></div><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-overview">{project.overview}</p><div className="project-detail"><span>Business challenge</span><p>{project.problem}</p></div><div className="project-detail"><span>Technical solution</span><p>{project.solution}</p></div><div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><details><summary>Architecture & key contributions <ArrowRight size={16} /></summary><div className="details-grid"><div><b>Contributions</b><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></div><div><b>Architecture highlights</b><ul>{project.architecture.map((item) => <li key={item}>{item}</li>)}</ul></div></div></details></article>)}
            </div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-inner">
            <SectionHeading eyebrow="05 / Education" title="Academic foundation" />
            <div className="education-grid">{education.map((item, index) => <article className="education-card" key={item.degree}><div className="education-icon"><ServerCog size={22} /></div><span>0{index + 1}</span><h3>{item.degree}</h3><p>{item.institution}</p><time>{item.period}</time></article>)}</div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-inner">
            <SectionHeading eyebrow="06 / Contact" title="Let's Build Something Meaningful." copy="Open to connecting with engineering professionals, recruiters and teams building impactful software products." />
            <div className="contact-grid">
              <div className="contact-info"><h3>Start a conversation</h3><a href="mailto:manisha081999singh@gmail.com"><Mail size={19} /><span><small>Email</small>manisha081999singh@gmail.com</span></a><a href="tel:+918800924103"><Phone size={19} /><span><small>Phone</small>+91 8800924103</span></a><a href="https://linkedin.com/in/manisha-singh20" target="_blank" rel="noreferrer"><span aria-hidden="true">in</span><span><small>LinkedIn</small>manisha-singh20</span></a><a href="#" onClick={(event) => event.preventDefault()} aria-label="GitHub profile placeholder"><span aria-hidden="true">GH</span><span><small>GitHub</small>Profile URL placeholder</span></a><div className="location"><MapPin size={19} /><span><small>Location</small>India</span></div></div>
              <form className="contact-form" onSubmit={submitForm}><div className="form-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@company.com" /></label></div><label>Subject<input name="subject" required placeholder="Project or opportunity" /></label><label>Message<textarea name="message" required rows={5} placeholder="Tell me about the opportunity..." /></label><button className="button primary" type="submit">Send Message <ArrowRight size={17} /></button></form>
            </div>
          </div>
        </section>
      </main>

      <footer><div><button className="brand footer-brand" onClick={() => scrollTo('home')}><span>MS</span></button><p>Manisha Singh · Software Engineer</p></div><p>© {new Date().getFullYear()} Manisha Singh</p></footer>
      {showTop && <button className="back-top" onClick={() => scrollTo('home')} aria-label="Back to top"><ArrowUp size={19} /></button>}
    </>
  )
}
