import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans selection:bg-primary/35 selection:text-foreground">
      {/* Blueprint Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-[length:56px_56px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_0%,transparent_70%)] bg-[linear-gradient(to_right,color-mix(in_oklab,var(--color-primary)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-primary)_6%,transparent)_1px,transparent_1px)]"
      />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-[1120px] mx-auto px-7 py-4.5 flex items-center justify-between">
          <Link href="#top" className="font-mono text-[0.88rem] tracking-tight flex items-center gap-2">
            bilal<span className="text-primary">.</span>mohammed <span className="text-muted-foreground">/ dev</span>
          </Link>
          <ul className="hidden sm:flex gap-[30px] list-none m-0 p-0 font-mono text-[0.8rem] tracking-wider text-muted-foreground">
            <li><Link href="#about" className="hover:text-primary transition-colors">about</Link></li>
            <li><Link href="#work" className="hover:text-primary transition-colors">work</Link></li>
            <li><Link href="#stack" className="hover:text-primary transition-colors">stack</Link></li>
            <li><Link href="#achievements" className="hover:text-primary transition-colors">achievements</Link></li>
            <li><Link href="#contact" className="hover:text-primary transition-colors">contact</Link></li>
          </ul>
        </div>
      </header>

      <main id="top" className="relative z-10">
        {/* Hero Section */}
        <section className="py-22 px-7">
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-primary inline-flex items-center gap-2 mb-3.5 before:w-1.5 before:h-1.5 before:rounded-sm before:bg-primary before:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-primary)_35%,transparent)]">
                full-stack engineer · vit chennai
              </p>
              <h1 className="font-sans font-semibold text-[clamp(2.3rem,4.4vw+1rem,3.6rem)] leading-[1.08] tracking-tight">
                Systems that know<br />who's allowed <span className="text-primary">in.</span>
              </h1>
              <p className="mt-5.5 text-muted-foreground text-[1.06rem] max-w-[46ch] leading-relaxed">
                I build multi-tenant web applications — Next.js on the front, Postgres and row-level security underneath. Every table scoped, every request resolved server-side, nothing trusted by default.
              </p>
              <div className="flex gap-3.5 mt-8.5 flex-wrap font-mono text-[0.82rem]">
                <Link href="#work" className="px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:-translate-y-0.5">
                  View work
                </Link>
                <a href="mailto:bilalmohammed333999@gmail.com" className="px-5 py-3 rounded-md bg-card border border-border text-card-foreground hover:border-[color-mix(in_oklab,var(--color-primary)_35%,transparent)] transition-all hover:-translate-y-0.5">
                  Get in touch
                </a>
              </div>
              <div className="flex gap-6.5 mt-11.5 flex-wrap font-mono">
                <div>
                  <div className="text-[1.4rem] font-semibold text-foreground">8.89</div>
                  <div className="text-[0.72rem] text-muted-foreground uppercase tracking-[0.08em] mt-0.5">CGPA / 10.0</div>
                </div>
                <div>
                  <div className="text-[1.4rem] font-semibold text-foreground">250+</div>
                  <div className="text-[0.72rem] text-muted-foreground uppercase tracking-[0.08em] mt-0.5">DSA problems</div>
                </div>
                <div>
                  <div className="text-[1.4rem] font-semibold text-foreground">2</div>
                  <div className="text-[0.72rem] text-muted-foreground uppercase tracking-[0.08em] mt-0.5">Shipped products</div>
                </div>
              </div>
            </div>

            {/* RLS Panel */}
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl relative before:absolute before:top-[-1px] before:left-[-1px] before:w-3.5 before:h-3.5 before:border-l-2 before:border-t-2 before:border-[color-mix(in_oklab,var(--color-primary)_35%,transparent)] after:absolute after:bottom-[-1px] after:right-[-1px] after:w-3.5 after:h-3.5 after:border-r-2 after:border-b-2 after:border-[color-mix(in_oklab,var(--color-primary)_35%,transparent)]">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border font-mono text-[0.74rem] text-muted-foreground">
                <span className="text-foreground">rls_policy.sql</span>
                <span className="inline-flex items-center gap-1.75 text-emerald-500 text-[0.7rem]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_0_3px_color-mix(in_oklab,#10b981_25%,transparent)]" />
                  RLS enforced
                </span>
              </div>
              <div className="p-5 pb-1.5 font-mono text-[0.78rem] leading-[1.8] text-muted-foreground overflow-x-auto whitespace-pre">
                <span className="text-muted-foreground/70">-- resolve identity server-side, never trust the client</span>{'\n'}
                <span className="text-primary">create policy</span> <span className="text-amber-500">"tenant_isolation"</span>{'\n'}
                {'  '}<span className="text-primary">on</span> tasks <span className="text-primary">for all</span>{'\n'}
                {'  '}<span className="text-primary">using</span> ({'\n'}
                {'    '}org_id = <span className="text-emerald-500">auth.org_id</span>(){'\n'}
                {'  '});<span className="inline-block w-1.75 h-[1em] bg-primary align-text-bottom ml-0.5 animate-pulse" />
              </div>
              <div className="m-1.5 mx-5 mb-5.5 p-5 pt-4 border border-dashed border-[color-mix(in_oklab,var(--color-primary)_35%,transparent)] rounded-lg relative">
                <span className="absolute -top-2.25 left-3.5 bg-card px-2 font-mono text-[0.64rem] tracking-[0.08em] uppercase text-primary">
                  scoped by org_id
                </span>
                <div className="flex gap-2.5 flex-wrap font-mono text-[0.72rem]">
                  <span className="px-2.75 py-1.75 rounded-md bg-secondary border border-[color-mix(in_oklab,var(--color-primary)_35%,transparent)] text-secondary-foreground flex items-center gap-1.5">
                    <span className="w-1.25 h-1.25 rounded-full bg-primary" />owner
                  </span>
                  <span className="px-2.75 py-1.75 rounded-md bg-secondary border border-border text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1.25 h-1.25 rounded-full bg-primary" />admin
                  </span>
                  <span className="px-2.75 py-1.75 rounded-md bg-secondary border border-border text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1.25 h-1.25 rounded-full bg-primary" />member
                  </span>
                  <span className="px-2.75 py-1.75 rounded-md bg-secondary border border-border text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1.25 h-1.25 rounded-full bg-primary" />viewer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-border m-0" />

        {/* About Section */}
        <section id="about" className="py-21 px-7">
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_0.9fr] gap-12">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-primary mb-3.5">// about</p>
              <h2 className="font-sans font-semibold text-[clamp(1.6rem,2.4vw,2.1rem)]">Studying computer science, shipping in production.</h2>
              <div className="mt-4 text-muted-foreground space-y-3.5 leading-relaxed">
                <p>
                  I'm a Computer Science & Engineering student at <strong className="text-foreground font-semibold">Vellore Institute of Technology, Chennai</strong>, expected to graduate in May 2029. Outside coursework, I build and deploy full-stack products end to end — architecture, database design, and the security boundaries that keep tenants apart.
                </p>
                <p>
                  My current focus is <strong className="text-foreground font-semibold">FlashAssign</strong>, a multi-tenant SaaS platform, alongside preparing for technical interviews and studying distributed systems, concurrency, and scalable architecture.
                </p>
              </div>
            </div>
            <ul className="list-none m-0 p-0 flex flex-col border border-border rounded-lg overflow-hidden bg-card">
              <li className="flex justify-between gap-3 p-3.5 px-4 border-b border-border text-[0.9rem]">
                <span className="text-muted-foreground font-mono text-[0.76rem]">EDUCATION</span>
                <span className="text-right">B.Tech CSE, VIT Chennai<br /><span className="text-muted-foreground text-[0.8rem]">Expected May 2029</span></span>
              </li>
              <li className="flex justify-between gap-3 p-3.5 px-4 border-b border-border text-[0.9rem]">
                <span className="text-muted-foreground font-mono text-[0.76rem]">CGPA</span>
                <span className="text-right">8.89 / 10.0 (Sem 1–2)</span>
              </li>
              <li className="flex justify-between gap-3 p-3.5 px-4 border-b border-border text-[0.9rem]">
                <span className="text-muted-foreground font-mono text-[0.76rem]">CLASS XII</span>
                <span className="text-right">94.2% · CBSE Nellore District Topper</span>
              </li>
              <li className="flex justify-between gap-3 p-3.5 px-4 border-b border-border text-[0.9rem]">
                <span className="text-muted-foreground font-mono text-[0.76rem]">CLASS X</span>
                <span className="text-right">96.2% · CBSE</span>
              </li>
              <li className="flex justify-between gap-3 p-3.5 px-4 border-none text-[0.9rem]">
                <span className="text-muted-foreground font-mono text-[0.76rem]">LOCATION</span>
                <span className="text-right">Chennai, India</span>
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-t border-border m-0" />

        {/* Work Section */}
        <section id="work" className="py-21 px-7">
          <div className="max-w-[1120px] mx-auto">
            <div className="mb-11">
              <p className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-primary mb-2">// work</p>
              <h2 className="font-sans font-semibold text-[clamp(1.6rem,2.4vw,2.1rem)]">Selected projects</h2>
              <p className="text-muted-foreground mt-2.5 max-w-[60ch]">Two products, built end to end — from schema design to deployment.</p>
            </div>

            <div className="space-y-5.5">
              {/* Project Card 1 */}
              <div className="border border-border rounded-lg bg-card p-7.5 lg:p-8 relative transition-all hover:border-[color-mix(in_oklab,var(--color-primary)_35%,transparent)] group">
                <div className="flex justify-between items-start gap-5 flex-wrap">
                  <div>
                    <h3 className="font-sans font-semibold text-[1.3rem]">FlashAssign</h3>
                    <div className="font-mono text-[0.72rem] text-muted-foreground mt-1">Jan 2026 — Present</div>
                  </div>
                  <a href="https://flashassign.com" target="_blank" rel="noopener noreferrer" className="font-mono text-[0.76rem] text-primary hover:underline pt-1">
                    flashassign.com ↗
                  </a>
                </div>
                <ul className="mt-4.5 pl-4.5 text-muted-foreground space-y-2 list-disc marker:text-primary">
                  <li>Multi-tenant SaaS supporting organization workspaces, task tracking, and team collaboration with role-based access across owner / admin / member / viewer tiers.</li>
                  <li>Enforced tenant isolation with Supabase Row-Level Security on every table; identity resolved server-side via <code className="text-foreground bg-secondary px-1.5 py-0.5 rounded text-[0.82em]">supabase.auth.getUser()</code> — the service role key is never exposed to the client.</li>
                  <li>Designed an organization-based architecture with an instant allocation engine for automated workload distribution and project assignment.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5 font-mono text-[0.7rem]">
                  {['Next.js 15', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'shadcn/ui', 'Google OAuth', 'Resend', 'Vercel'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-[5px] bg-secondary border border-border text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="border border-border rounded-lg bg-card p-7.5 lg:p-8 relative transition-all hover:border-[color-mix(in_oklab,var(--color-primary)_35%,transparent)] group">
                <div className="flex justify-between items-start gap-5 flex-wrap">
                  <div>
                    <h3 className="font-sans font-semibold text-[1.3rem]">Task Management Application</h3>
                    <div className="font-mono text-[0.72rem] text-muted-foreground mt-1">Jul 2025 — Dec 2025</div>
                  </div>
                  <a href="https://taskmanagernew-jpeq.onrender.com" target="_blank" rel="noopener noreferrer" className="font-mono text-[0.76rem] text-primary hover:underline pt-1">
                    taskmanagernew-jpeq.onrender.com ↗
                  </a>
                </div>
                <ul className="mt-4.5 pl-4.5 text-muted-foreground space-y-2 list-disc marker:text-primary">
                  <li>Full-stack task management app with a RESTful API, Google OAuth authentication, and persistent MongoDB storage.</li>
                  <li>Designed and deployed end to end on Render, supporting task creation, status tracking, and user management.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5 font-mono text-[0.7rem]">
                  {['Node.js', 'Express.js', 'MongoDB', 'Google OAuth', 'HTML', 'CSS', 'JavaScript', 'Render'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-[5px] bg-secondary border border-border text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-border m-0" />

        {/* Stack Section */}
        <section id="stack" className="py-21 px-7">
          <div className="max-w-[1120px] mx-auto">
            <div className="mb-11">
              <p className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-primary mb-2">// stack</p>
              <h2 className="font-sans font-semibold text-[clamp(1.6rem,2.4vw,2.1rem)]">Tools I build with</h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[1px] bg-border border border-border rounded-lg overflow-hidden">
              <div className="bg-card p-6">
                <h4 className="font-mono text-[0.72rem] uppercase tracking-widest text-muted-foreground mb-3.5">Languages</h4>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[0.84rem]">
                  {['TypeScript', 'JavaScript', 'Python', 'C', 'C++', 'HTML', 'CSS'].map(s => <span key={s}><span className="text-primary">› </span>{s}</span>)}
                </div>
              </div>
              <div className="bg-card p-6">
                <h4 className="font-mono text-[0.72rem] uppercase tracking-widest text-muted-foreground mb-3.5">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[0.84rem]">
                  {['Next.js', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'shadcn/ui'].map(s => <span key={s}><span className="text-primary">› </span>{s}</span>)}
                </div>
              </div>
              <div className="bg-card p-6">
                <h4 className="font-mono text-[0.72rem] uppercase tracking-widest text-muted-foreground mb-3.5">Databases</h4>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[0.84rem]">
                  {['PostgreSQL', 'MongoDB'].map(s => <span key={s}><span className="text-primary">› </span>{s}</span>)}
                </div>
              </div>
              <div className="bg-card p-6">
                <h4 className="font-mono text-[0.72rem] uppercase tracking-widest text-muted-foreground mb-3.5">Cloud & Backend</h4>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[0.84rem]">
                  {['Supabase', 'Vercel'].map(s => <span key={s}><span className="text-primary">› </span>{s}</span>)}
                </div>
              </div>
              <div className="bg-card p-6">
                <h4 className="font-mono text-[0.72rem] uppercase tracking-widest text-muted-foreground mb-3.5">Developer Tools</h4>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[0.84rem]">
                  {['Git', 'GitHub', 'VS Code', 'Linux'].map(s => <span key={s}><span className="text-primary">› </span>{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-border m-0" />

        {/* Achievements Section */}
        <section id="achievements" className="py-21 px-7">
          <div className="max-w-[1120px] mx-auto">
            <div className="mb-11">
              <p className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-primary mb-2">// achievements</p>
              <h2 className="font-sans font-semibold text-[clamp(1.6rem,2.4vw,2.1rem)]">Outside the codebase</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
              <div className="border border-border rounded-lg p-6.5 bg-card">
                <div className="font-sans text-[2.1rem] font-bold">250<span className="text-primary text-[1.2rem]">+</span></div>
                <div className="mt-2.5 text-muted-foreground text-[0.9rem]">DSA problems solved following the NeetCode 250 roadmap.</div>
              </div>
              <div className="border border-border rounded-lg p-6.5 bg-card">
                <div className="font-sans text-[2.1rem] font-bold">94.2<span className="text-primary text-[1.2rem]">%</span></div>
                <div className="mt-2.5 text-muted-foreground text-[0.9rem]">CBSE Board Nellore District Topper, Class XII.</div>
              </div>
              <div className="border border-border rounded-lg p-6.5 bg-card">
                <div className="font-sans text-[2.1rem] font-bold">96.2<span className="text-primary text-[1.2rem]">%</span></div>
                <div className="mt-2.5 text-muted-foreground text-[0.9rem]">Class X, CBSE — Rainbow School, Nellore.</div>
              </div>
            </div>
            <div className="mt-5.5 p-4 px-5 border-l-2 border-primary bg-secondary text-secondary-foreground text-[0.9rem] rounded-r-md">
              <strong className="text-foreground">Currently studying:</strong> distributed systems, concurrency, and scalable architecture.
            </div>
          </div>
        </section>

        <hr className="border-t border-border m-0" />

        {/* Contact Section */}
        <section id="contact" className="py-21 px-7">
          <div className="max-w-[1120px] mx-auto">
            <div className="border border-border rounded-lg p-13 text-center bg-card relative bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_6%,transparent),transparent_70%)]">
              <p className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-primary flex justify-center mb-2">// contact</p>
              <h2 className="font-sans font-semibold text-[clamp(1.7rem,3vw,2.4rem)]">Let's build something scoped correctly.</h2>
              <p className="text-muted-foreground mt-3.5 mx-auto max-w-[50ch]">Open to internships, collaborations, and conversations about systems design. Reach out directly.</p>
              <div className="flex gap-3.5 justify-center flex-wrap mt-8 font-mono text-[0.82rem]">
                <a className="px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all">
                  bilalmohammed333999@gmail.com
                </a>
                <a className="px-5 py-3 rounded-md bg-card border border-border text-card-foreground hover:border-[color-mix(in_oklab,var(--color-primary)_35%,transparent)] transition-all">
                  +91 90592 11522
                </a>
                <a href="https://linkedin.com/in/bilal-mohammed-webdev" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-md bg-card border border-border text-card-foreground hover:border-[color-mix(in_oklab,var(--color-primary)_35%,transparent)] transition-all">
                  LinkedIn ↗
                </a>
                <a href="https://github.com/bilalmohammed-prog" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-md bg-card border border-border text-card-foreground hover:border-[color-mix(in_oklab,var(--color-primary)_35%,transparent)] transition-all">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-muted-foreground font-mono text-[0.74rem]">
        <div className="max-w-[1120px] mx-auto px-7">© 2026 Bilal Mohammed — built with Next.js & Tailwind CSS.</div>
      </footer>
    </div>
  );
}