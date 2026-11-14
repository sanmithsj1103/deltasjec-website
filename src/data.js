export const PAGES = {
  research: {
    icon: 'search',
    title: 'Research',
    headline: 'Research That Moves Engineering Forward.',
    blurb:
      'Faculty-mentored studies where control theory, energy systems and machine learning meet real hardware. Members move from a literature review to a validated result.',
    intro:
      'Research at Delta is built around five tracks that share one habit: model it, test it on hardware, and report what the data says.',
    items: [
      ['Control & Optimization', 'Feedback control, estimation and optimal decision-making for dynamic systems.'],
      ['Electrified Powertrains & Energy Management', 'Motor drives, battery packs and energy strategies for electric vehicles.'],
      ['Physics-Informed & Scientific Machine Learning', 'Learning models that respect the physical laws behind the data.'],
      ['Digital Twins & Cyber-Physical Systems', 'Live virtual replicas that mirror and predict real machines.'],
      ['Embedded AI & Hardware-in-the-Loop', 'Running trained models on microcontrollers and testing them against simulated plants.'],
    ],
    focusAreas: [
      {
        id: 'control-optimization',
        title: 'Control & Optimization',
        blurb: 'Feedback control, state estimation and optimal decision-making for systems that must stay stable, fast and efficient.',
        icon: '◎',
        activities: [
          'Model dynamic systems and design PID, state-feedback and model-predictive controllers.',
          'Formulate optimization problems with clear objectives and constraints, then solve and compare methods.',
          'Build state estimators such as Kalman filters and validate them against measured sensor data.',
          'Test controllers in simulation first, then on a bench rig, and document the gap between the two.',
        ],
        outcomes: 'Members leave with a validated controller design, a reproducible simulation-to-hardware workflow and a write-up ready for a conference poster or paper.',
      },
      {
        id: 'electrified-powertrains',
        title: 'Electrified Powertrains & Energy Management',
        blurb: 'Motor drives, battery systems and energy-management strategies that decide how far and how efficiently an electric vehicle goes.',
        icon: '⚡',
        activities: [
          'Model motor, inverter and battery behaviour and match the model to bench measurements.',
          'Develop energy-management strategies that split power between sources to save energy and extend battery life.',
          'Characterise battery cells for capacity, resistance and ageing, and build simple state-of-charge estimators.',
          'Compare strategies on standard drive cycles and report energy use, range and losses.',
        ],
        outcomes: 'Members gain hands-on experience with electric-vehicle drive systems and battery data, plus a measured comparison of energy strategies they can present in interviews.',
      },
      {
        id: 'physics-informed-ml',
        title: 'Physics-Informed & Scientific Machine Learning',
        blurb: 'Machine-learning models that are trained on data and constrained by the physical laws behind it.',
        icon: 'Φ',
        activities: [
          'Train physics-informed neural networks that solve or approximate differential equations.',
          'Learn unknown system dynamics from data and compare against first-principles models.',
          'Build surrogate models that replace slow simulations with fast, accurate predictions.',
          'Check every model against held-out data and physical limits, and report where it fails.',
        ],
        outcomes: 'Members build a reproducible notebook-to-paper pipeline and a clear understanding of when learning from physics beats learning from data alone.',
      },
      {
        id: 'digital-twins-cps',
        title: 'Digital Twins & Cyber-Physical Systems',
        blurb: 'Virtual replicas that stay in sync with real machines, so behaviour can be monitored, predicted and improved.',
        icon: '⧉',
        activities: [
          'Build a digital twin of a Delta rig that updates from live sensor streams.',
          'Connect sensors, a communication layer and a model so the physical and virtual systems exchange data.',
          'Use the twin to detect faults early and test control changes before they reach the hardware.',
          'Measure latency, accuracy and drift of the twin and report them honestly.',
        ],
        outcomes: 'Members finish with a working twin, experience in data pipelines between hardware and software, and results that apply to industry monitoring and predictive maintenance.',
      },
      {
        id: 'embedded-ai-hil',
        title: 'Embedded AI & Hardware-in-the-Loop',
        blurb: 'Trained models running on small processors, tested against simulated machines before they touch real ones.',
        icon: '⌬',
        activities: [
          'Compress and deploy neural networks and controllers on microcontrollers within tight memory and timing limits.',
          'Set up a hardware-in-the-loop bench where real firmware runs against a simulated plant.',
          'Profile execution time, power use and accuracy on the target device.',
          'Automate repeatable test runs and record the results for later comparison.',
        ],
        outcomes: 'Members leave with firmware that runs a real model on real hardware, a hardware-in-the-loop test setup and the skills to move research code toward a product.',
      },
    ],
  },
  engineering: {
    icon: 'gear',
    title: 'Engineering',
    headline: 'Engineering Ideas into Real Systems.',
    blurb:
      'We explore design, simulation, and system integration to solve real engineering challenges through a research-driven approach.',
    intro:
      'Engineering is the technical core of Delta. Six tracks cover the path from design to research, and most projects touch several of them.',
    items: [
      ['Digital Design', 'Parametric CAD, schematic capture and PCB layout for every project.'],
      ['Simulation & Analysis', 'FEA, CFD and circuit simulation before anything is cut or soldered.'],
      ['Systems Integration', 'Bringing mechanical, electronic and software parts into one working machine.'],
      ['Computing in Engineering', 'Cross-disciplinary software, algorithms and data workflows.'],
      ['IT & Digital Operations', 'Websites, member portals, databases and internal tooling.'],
    ],
    focusAreas: [
      {
        id: 'digital-design',
        title: 'Digital Design',
        blurb: 'Parametric CAD, schematic capture and PCB layout for every project, kept in one shared library with version history.',
        icon: '⬡',
        activities: [
          'Model mechanical parts and assemblies in Onshape with parametric constraints.',
          'Capture schematics and lay out 2-layer PCBs using KiCad with DRC sign-off.',
          'Maintain a shared component library across all Delta hardware projects.',
          'Conduct peer design reviews before any part goes to fabrication.',
        ],
        outcomes: 'Completed members leave with a portfolio of CAD assemblies, two signed-off PCB layouts, and a contribution to the shared component library — ready to show at internship interviews.',
      },
      {
        id: 'simulation-analysis',
        title: 'Simulation & Analysis',
        blurb: 'FEA, CFD and circuit simulation to test a design before anything is cut, printed or soldered.',
        icon: '◈',
        activities: [
          'Run structural FEA on chassis and bracket designs and interpret stress/displacement maps.',
          'Set up and post-process basic CFD studies for thermal and fluid problems.',
          'Simulate circuit behaviour in SPICE before committing to a PCB spin.',
          'Write structured simulation reports with conclusions and design changes.',
        ],
        outcomes: 'Members produce a simulation portfolio (FEA report + CFD result + SPICE netlist) and learn to read and challenge vendor datasheets — a skill set valued by both industry and postgrad programmes.',
      },
      {
        id: 'systems-integration',
        title: 'Systems Integration',
        blurb: 'Bringing mechanical, electronic and software parts together into one machine that works as a whole.',
        icon: '⬡',
        activities: [
          'Write firmware for STM32 and ESP32 microcontrollers that talks to sensors and actuators.',
          'Define serial, I²C and CAN communication contracts between subsystems.',
          'Build test harnesses that let any sub-team verify their module before the full assembly.',
          'Debug field failures with logic analyser and oscilloscope traces.',
        ],
        outcomes: 'Members leave with a working embedded project in their portfolio, hands-on experience with real-time debugging, and a solid grounding in hardware-software interfacing.',
      },
      {
        id: 'computing-in-engineering',
        title: 'Computing in Engineering',
        blurb: 'Cross-disciplinary software, algorithms and data workflows that connect engineering departments. (CSE — Technical Integration track)',
        icon: '◇',
        activities: [
          'Build data pipelines that ingest sensor readings, clean them and feed visualisation dashboards.',
          'Write Python scripts and notebooks that automate repetitive simulation post-processing.',
          'Train and deploy lightweight ML models for predictive maintenance and fault detection.',
          'Contribute algorithms and integration code to live hardware projects across all departments.',
        ],
        outcomes: 'Members build a cross-disciplinary portfolio spanning data engineering, machine learning and embedded integration — directly applicable to data science and systems engineering roles.',
      },
      {
        id: 'it-digital-operations',
        title: 'IT & Digital Operations',
        blurb: 'Websites, member portals, databases and internal tooling. (CSE — Digital Infrastructure track)',
        icon: '◈',
        activities: [
          'Develop and maintain the Delta public website and member-facing portal.',
          'Design and administer the club\'s internal database (projects, members, assets).',
          'Build internal tools: inventory tracker, event RSVP system, attendance logger.',
          'Set up CI/CD pipelines and manage the club\'s GitHub organisation.',
        ],
        outcomes: 'Members graduate with a live production deployment in their portfolio, CI/CD experience, and full-stack skills spanning frontend, backend and database design.',
      },
    ],
  },

  sustainability: {
    icon: 'leaf',
    title: 'Sustainability',
    headline: 'Engineering for Long-Term Impact.',
    blurb:
      'We explore sustainable engineering, energy systems and resource-efficient solutions to create a more responsible future.',
    intro:
      'Sustainability work at Delta is measured, not promised. Each track starts with a baseline and reports what changed.',
    // Legacy items array kept for About chips
    items: [
      ['Energy Systems', 'Solar, storage and microgrid prototypes with live monitoring.'],
      ['Sustainable Mobility', 'Electric vehicles, regenerative drives and campus transport studies.'],
      ['Resource Efficiency', 'Audits of water, power and waste with measurable outcomes.'],
      ['DeltaSustain Initiative', 'Open campaign: every department proposes one green project per semester.'],
    ],
    // ALL 17 UN SDGs shown in the animated marquee on the Sustainability page
    sdgs: [3, 4, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17],
    focusAreas: [
      {
        id: 'energy-systems',
        title: 'Energy Systems',
        blurb: 'Solar panels, battery storage and microgrid prototypes with live monitoring of generation and demand.',
        icon: '☀',
        activities: [
          'Install and commission small-scale PV arrays; wire MPPT charge controllers and battery banks.',
          'Build IoT monitoring nodes that log voltage, current and energy to a live Grafana dashboard.',
          'Conduct load-flow studies for a simple campus microgrid and identify optimisation points.',
          'Compare measured output against PVsyst predictions and document the delta.',
        ],
        outcomes: 'Members can commission a PV system end-to-end, interpret energy production reports, and present a measured baseline-to-result comparison — a differentiator for clean-energy internships.',
      },
      {
        id: 'sustainable-mobility',
        title: 'Sustainable Mobility',
        blurb: 'Light electric vehicles, regenerative drive systems and campus transport route studies.',
        icon: '⚡',
        activities: [
          'Convert a cargo tricycle to electric drive using a hub motor, BMS and Li-ion pack.',
          'Tune regenerative braking settings and log energy recovery on a fixed campus loop.',
          'Conduct a campus transport audit: map routes, survey ridership and calculate emissions saved.',
          'Build a simple range-prediction model from GPS and speed log data.',
        ],
        outcomes: 'Members produce a measurement-backed mobility report, hands-on EV wiring experience, and a range-model notebook — directly applicable to EV and smart-city internships.',
      },
      {
        id: 'resource-efficiency',
        title: 'Resource Efficiency',
        blurb: 'Audits of water, power and waste across labs and hostels, followed by changes we can measure.',
        icon: '♻',
        activities: [
          'Conduct metered water and electricity audits across selected campus buildings.',
          'Identify the top five waste streams and propose and pilot at least one reduction measure.',
          'Install low-cost sub-metering (clamp meters + data loggers) for 30-day baselining.',
          'Write a semester resource report with before/after numbers and a cost-benefit analysis.',
        ],
        outcomes: 'Members leave with a metered audit report, real data-driven recommendations, and experience presenting quantified impact to non-technical stakeholders — a rare and valued skill set.',
      },
      {
        id: 'deltasustain',
        title: 'DeltaSustain Initiative',
        blurb: 'An open cross-department campaign where every engineering department proposes and pilots at least one green project per semester.',
        icon: '🌱',
        activities: [
          'Run the semester call-for-proposals: brief departments, collect ideas, score feasibility.',
          'Mentor selected project teams through a structured 10-week pilot cycle.',
          'Publish a semester impact report with measured outcomes for every pilot.',
          'Coordinate with college administration to scale successful pilots campus-wide.',
        ],
        outcomes: 'Members gain project management and stakeholder communication skills alongside technical depth — experience that translates directly to sustainability consulting and ESG reporting roles.',
      },
    ],
  },

  media: {
    icon: 'camera',
    title: 'Media',
    headline: 'Stories Behind the Engineering.',
    blurb:
      'WE capture, create and communicate the work, people and ideas that drive Delta through visuals, design and content.',
    intro:
      'Media turns lab work into stories people can follow. The team covers every project and every event we host.',
    // Legacy items kept for About chips
    items: [
      ['Photography & Videography', 'Project shoots, event coverage and short documentaries.'],
      ['Design & Content', 'Posters, newsletters, edited reels and technical writing.'],
      ['Events Management', 'Planning and run-of-show for workshops, hackathons and showcases.'],
      ['Digital Presence', 'Website, social media, documentation and community channels.'],
    ],
    focusAreas: [
      {
        id: 'photo-video',
        title: 'Photography & Videography',
        blurb: 'Project shoots, event coverage and short documentaries produced entirely by our own crew.',
        icon: '📷',
        activities: [
          'Plan and execute editorial-style shoots of Delta projects in the lab and field.',
          'Film and produce short-form documentary reels (3–5 min) for each major project milestone.',
          'Cover all club events — workshops, hackathons, the annual showcase — with a full media crew.',
          'Manage the Delta photo archive: catalogue, keyword and back up every shoot.',
        ],
        outcomes: 'Members leave with a curated reel, a print-ready photo portfolio, and production credits on published club content — ready to present to media agencies or marketing departments.',
      },
      {
        id: 'design-content',
        title: 'Design & Content',
        blurb: 'Posters, newsletters, edited reels, scripts and technical writing that explain Delta\'s work in plain language.',
        icon: '✏',
        activities: [
          'Design event posters, social graphics and sponsorship decks using the Delta brand system.',
          'Write and edit the monthly Delta newsletter: project updates, member spotlights, upcoming events.',
          'Script and storyboard videos for the photography team; write captions and blog posts.',
          'Produce technical documentation: project reports, how-to guides and onboarding materials.',
        ],
        outcomes: 'Members build a visual design portfolio, published writing credits, and hands-on brand management experience — directly applicable to design, marketing and technical writing roles.',
      },
      {
        id: 'events-management',
        title: 'Events Management',
        blurb: 'End-to-end planning, logistics and run-of-show for Delta workshops, hackathons and the annual showcase.',
        icon: '🗓',
        activities: [
          'Own the event calendar: schedule workshops, coordinate speakers and book rooms months in advance.',
          'Write run-of-show documents and brief volunteers on roles, timing and contingencies.',
          'Manage event registrations, name badges, materials and post-event surveys.',
          'Debrief every event and publish a one-page lessons-learned summary to the team.',
        ],
        outcomes: 'Members gain project management and stakeholder coordination experience, a portfolio of event post-mortems, and practised public-speaking from anchoring sessions.',
      },
      {
        id: 'digital-presence',
        title: 'Digital Presence',
        blurb: 'The Delta website, social media channels, technical documentation and the community portal — all kept current and answered promptly.',
        icon: '🌐',
        activities: [
          'Manage and grow Delta\'s Instagram, LinkedIn and YouTube channels with a consistent content calendar.',
          'Maintain and update the Delta public website (this site) and the member portal.',
          'Moderate the Discord community: welcome new members, answer questions, pin resources.',
          'Track analytics weekly and produce a monthly channel performance report for the core team.',
        ],
        outcomes: 'Members leave with analytics experience, a live digital portfolio (website contributions, published posts) and community management skills valued in marketing, communications and product roles.',
      },
    ],
  },
  faq: {
    kind: 'faq',
    title: 'Help & FAQ',
    eyebrow: 'Support',
    intro: 'Quick answers for new and prospective members.',
    items: [
      ['Who can join Delta?', 'Any student of the institute, from any branch and any year. Applications are open all semester.'],
      ['Do I need prior experience?', 'No. Most members start with none. Mentors pair you with a project that matches your level.'],
      ['How often does the club meet?', 'Departments meet weekly, and the whole club gathers once a month for demos and planning.'],
      ['Is there a membership fee?', 'Membership is free for your first semester. Project materials are funded by the club.'],
      ['How do I reach the team?', 'Use the Join form, message us on Instagram or write to delta@sjec.ac.in.'],
    ],
  },
  terms: {
    kind: 'legal',
    title: 'Terms & Conditions',
    eyebrow: 'Support',
    intro: 'These terms govern membership and participation in Delta Club at SJEC.',
    items: [
      ['Membership', 'Membership is open to enrolled students and may be ended by the core team if club rules are repeatedly broken.'],
      ['Use of equipment', 'Club tools and lab equipment may be used only with a mentor present and must be returned in working order.'],
      ['Project ownership', 'Members keep authorship of their work. Delta may show project photos and results on its channels with credit.'],
      ['Changes', 'These terms may be updated. The latest version is always the one on this page.'],
    ],
  },
  privacy: {
    kind: 'legal',
    title: 'Privacy Policy',
    eyebrow: 'Support',
    intro: 'This policy explains how Delta Club collects and uses member information.',
    items: [
      ['What we collect', 'Your name, branch, department, email, phone number and the reason you gave for joining.'],
      ['How we use it', 'To contact you about club activities and to place you in a department. We do not sell your data.'],
      ['Who can see it', 'Only the core team. Photos of members appear publicly only with consent.'],
      ['Your choices', 'You can ask us to correct or delete your details at any time by writing to the club email.'],
    ],
  },
};

export const ABOUT_IDS = ['research', 'engineering', 'sustainability', 'media'];

export const NAV = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#technologies', label: 'Technologies' },
  { href: '#departments', label: 'Departments' },
  { href: '#team', label: 'Team' },
];

// `file` is the logo file name (without extension) in src/assets/tech/
export const TECHNOLOGIES = [
  { n: 'Ansys', file: 'ansys' },
  { n: 'MathWorks MATLAB', file: 'matlab' },
  { n: 'Visual Studio Code', file: 'vscode' },
  { n: 'Autodesk', file: 'autodesk' },
  { n: 'Blender', file: 'blender' },
  { n: 'Claude', file: 'claude' },
  { n: 'DaVinci Resolve', file: 'davinci-resolve' },
  { n: 'Elsevier', file: 'elsevier' },
  { n: 'GitHub', file: 'github' },
  { n: 'Google Scholar', file: 'google-scholar' },
  { n: 'KiCad', file: 'kicad' },
  { n: 'LibreOffice', file: 'libreoffice' },
  { n: 'Mendeley', file: 'mendeley' },
  { n: 'Notion', file: 'notion' },
  { n: 'Obsidian', file: 'obsidian' },
  { n: 'Onshape', file: 'onshape' },
  { n: 'Overleaf', file: 'overleaf' },
  { n: 'Perplexity', file: 'perplexity' },
  { n: 'Python', file: 'python' },
  { n: 'Unity', file: 'unity' },
  { n: 'Unreal Engine', file: 'unreal-engine' },
  { n: 'Zotero', file: 'zotero' },
];

export const DEPTS = [
  { n: 'Mechanical', icon: 'gear', d: 'Designs and builds physical systems: chassis, mechanisms, thermal parts and test rigs.', f: ['CAD and prototyping', 'Thermal and fluid studies', 'Fabrication and testing'], lead: 'Norman Daran Dsouza' },
  { n: 'Electronics', icon: 'chip', d: 'Develops the circuits, sensors and embedded controllers that make our machines respond.', f: ['PCB design', 'Embedded firmware', 'Sensors and power'], lead: 'Nikhitha HL' },
  { n: 'Computer Science', icon: 'code', d: 'Writes the software, data pipelines and models that connect and control every project.', f: ['Web and tooling', 'Machine learning', 'Simulation code'], lead: 'Melrick Prith Dsouza' },
];

export const VOICES = [
  {
    n: 'Dr. Ravikantha Prabhu',
    desig: 'HOD - DEPT. OF MECHANICAL ENGINEERING',
    inst: 'St. Joseph Engineering College, Mangaluru',
    m: '"Delta gives students a place to apply what they learn in class to problems that do not come with answer keys. I have watched members grow from hesitant first-years into people who lead teams and defend their designs."',
  },
  {
    n: 'Dr. Ramananda H.S.',
    desig: 'FACULTY COORDINATOR - DELTA CLUB',
    inst: 'St. Joseph Engineering College, Mangaluru',
    m: '“Where Ideas Ignite, Research Innovates, and Discoveries Become Patents.”',
  },
];

export const TEAM = {
  // Row 1: Co-Founder & VP Mechanical  +  President
  row1: [
    {
      n: 'Norman Daran Dsouza', b: 'Mechanical Engineering',
      r: 'Co-Founder & Head of Mechanical Engineering',
      q: 'Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.',
      photo: 'https://res.cloudinary.com/zmg7zosm/image/upload/20261111_171743.jpg',
      linkedin: 'http://www.linkedin.com/in/norman-daran-dsouza',
      instagram: 'https://www.instagram.com/normandsouzaa',
      github: 'https://github.com/normandarannd-blip',
      email: 'normandaran.nd@gmail.com',
    },
    {
      n: 'Jawahar Lawrence Rodrigues', b: 'Electronics & Communication Engineering',
      r: 'President',
      q: 'Small circuits, big dreams, endless possibilities.',
      photo: 'https://res.cloudinary.com/zmg7zosm/image/upload/20261111_162441.jpg',
      linkedin: 'https://www.linkedin.com/in/jawahar-rodrigues-032540331',
      instagram: 'https://www.instagram.com/jlr1406',
      github: 'https://github.com/Jawahar4570',
      email: 'rodriguesjawahar4570@gmail.com',
    },
  ],
  // Row 2: VP Electronics, VP CS, Management Head, Media Head
  leads: [
    {
      n: 'Melrick Prith Dsouza', b: 'Artificial Intelligence & Machine Learning',
      r: 'Head of Computing Engineering',
      q: 'The best way to predict the future is to invent it.',
      photo: 'https://res.cloudinary.com/zmg7zosm/image/upload/20261111_134441_1.jpg',
      linkedin: 'https://www.linkedin.com/in/melrick-dsouza-95a956299',
      instagram: 'https://www.instagram.com/its_melrick_dsouza',
      github: 'https://github.com/melrickpd2006',
      email: 'melrick.p.d2006@gmail.com',
    },
    {
      n: 'Nikhitha HL', b: 'Electronics & Communication Engineering',
      r: 'Head of Electronics Engineering',
      q: 'Learning today, designing tomorrow, and building my future one chip at a time.',
      photo: 'https://res.cloudinary.com/zmg7zosm/image/upload/20261111_171530.jpg',
      linkedin: 'https://www.linkedin.com/in/nikhitha-hl-5345aa351',
      instagram: 'https://www.instagram.com/delta.sjec/',
      github: 'https://github.com/NikhithaHl',
      email: 'nikhithahl2006@gmail.com',
    },
    {
      n: 'Anjali R Rai', b: 'Artificial Intelligence & Machine Learning',
      r: 'Management Head',
      q: 'Turning Logic into Solutions.',
      photo: 'https://res.cloudinary.com/zmg7zosm/image/upload/20261111_134511_1.jpg',
      linkedin: 'https://www.linkedin.com/in/anjali-r-rai-b80022257',
      instagram: 'https://www.instagram.com/delta.sjec/',
      github: 'https://github.com/anjalirrai-4',
      email: 'anjalirrai4@gmail.com',
    },
    {
      n: 'Shawn Vas', b: 'Artificial Intelligence & Machine Learning',
      r: 'Media Head',
      q: 'Working behind the scences, running the show while everyone thinks it\'s magic.',
      photo: 'https://res.cloudinary.com/zmg7zosm/image/upload/20261111_135810_10.jpg',
      linkedin: 'https://www.linkedin.com/in/shawn-vas-aa0a56387',
      instagram: 'https://www.instagram.com/shawn_vas',
      github: 'https://github.com/Shawn-vas',
      email: 'shawnvas18@gmail.com',
    },
  ],
  // Row 3: Remaining members
  members: [
    {
      n: 'Anish Dsouza', b: 'Artificial Intelligence & Machine Learning',
      r: 'Computing Engineer',
      q: 'VibeCoding is the Art of coding while your vibing.',
      photo: 'https://res.cloudinary.com/zmg7zosm/image/upload/20261111_170535.jpg',
      linkedin: 'https://www.linkedin.com/in/anish-dsouza-6b660031b',
      instagram: 'https://www.instagram.com/anishdsouza23',
      github: 'https://github.com/23Anishds',
      email: 'anishdsouza236@gmail.com',
    },
    {
      n: 'Sanmith S Joseph', b: 'Artificial Intelligence & Machine Learning',
      r: 'Computing Engineer',
      q: 'My Projects are many, My Tokens are none.',
      photo: 'https://res.cloudinary.com/zmg7zosm/image/upload/20261111_135304.jpg',
      linkedin: 'https://www.linkedin.com/in/sanmith-s-joseph-347990272',
      instagram: 'https://www.instagram.com/sanmithjoseph',
      github: 'https://github.com/sanmithsj1103',
      email: 'sanmithsj1103@gmail.com',
    },
    {
      n: 'Ananya Amarnath', b: 'Computer Science Engineering',
      r: 'Digital Systems Engineer',
      q: 'Shaping code into solutions.',
      photo: 'https://res.cloudinary.com/zmg7zosm/image/upload/20261111_171649.jpg',
      linkedin: 'https://www.linkedin.com/in/ananya-amarnath-7a586144a',
      instagram: 'https://www.instagram.com/delta.sjec/',
      github: 'https://github.com/ananyaamar',
      email: 'ananyaamarnath2006@gmail.com',
    },
    {
      n: 'Anika Chrisal Patrao', b: 'Computer Science Engineering',
      r: 'Digital Systems Engineer',
      q: 'Every bug is a lesson, every failure a step forward.',
      photo: 'https://res.cloudinary.com/zmg7zosm/image/upload/20261111_134427_1.jpg',
      linkedin: 'https://www.linkedin.com/in/anika-patrao-77430a322/',
      instagram: 'https://www.instagram.com/delta.sjec/',
      github: 'https://github.com/Anikaa1221',
      email: 'anikapatrao12@gmail.com',
    },
    {
      n: 'Darren Merce Aranha', b: 'Computer Science Engineering',
      r: 'Creative Editor',
      q: 'Keep it simple, stupid.',
      photo: 'https://res.cloudinary.com/zmg7zosm/image/upload/20261111_171223.jpg',
      linkedin: 'https://www.linkedin.com/in/darren-aranha-46298344a/',
      instagram: 'https://www.instagram.com/not.__.darren/',
      github: 'https://github.com/darrenaranha',
      email: 'darrenaranha06@gmail.com',
    },
    {
      n: 'Melria Smitha Gonsalves', b: 'Artificial Intelligence & Machine Learning',
      r: 'Computing Engineer',
      q: 'Grow through what you grow through.',
      photo: 'https://res.cloudinary.com/zmg7zosm/image/upload/20261111_170823.jpg',
      linkedin: 'https://www.linkedin.com/in/melria-smitha-gonsalves-8a149a393/',
      instagram: 'https://www.instagram.com/delta.sjec/',
      github: 'https://github.com/melriasmitha9-git',
      email: 'melriasmitha9@gmail.com',
    },
    {
      n: 'Vanyashree', b: 'Electronics & Communication Engineering',
      r: 'Electronics Engineer',
      q: 'Powered by curiosity, driven by innovation.',
      photo: 'https://res.cloudinary.com/zmg7zosm/image/upload/20261111_171606.jpg',
      linkedin: 'https://www.linkedin.com/in/vanyashree-shekar',
      instagram: 'https://www.instagram.com/delta.sjec/',
      github: '',
      email: 'vanyashreeshekar281@gmail.com',
    },
  ],
};

export const BRANCHES = [
  'AIML',
  'CIVIL',
  'CSBS',
  'CSDS',
  'CSE',
  'ECE',
  'EEE',
  'MECH',
];

export const CLUB_SOCIAL = {
  instagram: 'https://www.instagram.com/delta.sjec/',
  linkedin: 'https://www.linkedin.com/company/deltasjec/',
};

export const CLUB_EMAIL = 'delta@sjec.ac.in';
