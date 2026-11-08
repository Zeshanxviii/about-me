import './style.css';

const experience = [
  {
    period: 'Jan 2024 – Nov 2025',
    role: 'Open Source Contributor (Full Stack / Frontend)',
    org: 'Open Healthcare Network',
    meta: 'UN-Recognized Digital Public Good · Remote',
    points: [
      'Rebuilt 3 data-driven healthcare modules (Treatment, Prescription, Discharge Summary) as modular, component-based React.js and TypeScript applications, improving UI load time by 40%',
      'Refactored a production legacy codebase serving 1,000+ daily users across multiple hospitals, improving maintainability, testability, and component code reuse',
      'Diagnosed and resolved performance bottlenecks and UI defects across production-facing modules through systematic production debugging, root-cause analysis, and code review',
      // 'Collaborated with engineering and product maintainers via Git pull requests, architectural discussions, code reviews, and structured technical feedback',
      // 'Enhanced Cypress end-to-end testing documentation, reducing new contributor onboarding time by 50%',
    ],
  },
  {
    period: 'Nov 2025 - Present',
    role: 'Software Engineer',
    org: 'BizClock Infotech',
    meta: 'Onsite',
    points: [
      'Comviva internal ERP integration: built an Oracle-to-PostgreSQL data pipeline that feeds the ERP data into their newly built internal system, using Node.js with connection pooling',
      'Blue Planet AISA LMS: built the learning management system end to end, including HLS video streaming served from AWS S3',
      'WeConnect1 HRMS: leading requirement gathering and designing the complete onboarding flow for an HRMS used by Team1 Consulting, currently live at weconnect1.com',
    ],
  },
];

const kw = (text) => `<span class="keyword-highlight">${text}</span>`;

const app = document.getElementById('app');

app.innerHTML = `
  <main class="max-w-2xl mx-auto px-6 py-16 sm:py-24 space-y-12">

    <!-- Header -->
    <header>
      <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Zeeshan</h1>
      <p class="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
        I'm a <span class="stat-highlight">Full Stack Engineer</span> with experience building
        <span class="stat-highlight">enterprise applications at scale</span>. I work across the
        entire stack — from ${kw('Node.js')} and ${kw('Express')} APIs to ${kw('React')} and
        ${kw('Next.js')} frontends, backed by ${kw('PostgreSQL')}, ${kw('MySQL')}, and
        ${kw('Oracle')} databases.
      </p>
    </header>

    <!-- Experience -->
    <section>
      <h2 class="cv-heading">Experience</h2>
      <div class="space-y-5">
        ${experience
    .map(
      (e) => `
          <div>
            <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <h3 class="font-semibold text-slate-900">${e.role} — ${e.org}</h3>
              ${e.period ? `<span class="font-mono text-[11px] text-slate-400">${e.period}</span>` : ''}
            </div>
            ${e.meta ? `<p class="mt-0.5 text-xs text-slate-400">${e.meta}</p>` : ''}
            <ul class="mt-1.5 space-y-1">
              ${e.points.map((p) => `<li class="cv-body flex gap-2.5"><span class="text-slate-300 mt-[9px] shrink-0">–</span><span>${p}</span></li>`).join('')}
            </ul>
          </div>`
    )
    .join('')}
      </div>
    </section>

    <!-- Contact -->
    <footer class="pt-2">
      <hr class="border-slate-200 mb-4" />
      <p class="cv-body">
        Open to opportunities — reach me at
        <a href="mailto:mzh881061@gmail.com" class="keyword-highlight">mzh881061@gmail.com</a>
      </p>
    </footer>

  </main>
`;
