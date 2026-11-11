export const PAGES = {
  engineering: {
    icon: 'gear',
    title: 'Engineering',
    blurb:
      'We take an idea from a sketch to a tested prototype. Members learn the whole engineering loop, from modelling a part to checking it against real loads.',
    intro:
      'Engineering is the technical core of Delta. Five tracks cover the path from design to research, and most projects touch several of them.',
    items: [
      ['Digital Design', 'Parametric CAD, schematic capture and PCB layout for every project, kept in one shared library with version history.'],
      ['Simulation & Analysis', 'Finite element, CFD and circuit simulation to test a design before anything is cut, printed or soldered.'],
      ['Systems Integration', 'Bringing mechanical, electronic and software parts together into one machine that works as a whole.'],
      ['Computing & Digital Operations', 'Build servers, data logging and the tooling that keeps our projects reproducible.'],
      ['Research & Development', 'Longer studies with faculty mentors, from literature review to conference-ready results.'],
    ],
  },
  sustainability: {
    icon: 'leaf',
    title: 'Sustainability',
    blurb:
      'Our projects are judged on energy, materials and lifetime cost. We build things that last, use less and can be repaired.',
    intro:
      'Sustainability work at Delta is measured, not promised. Each track starts with a baseline and reports what changed.',
    items: [
      ['Energy Systems', 'Solar, storage and microgrid prototypes with live monitoring of generation and demand.'],
      ['Sustainable Mobility', 'Light electric vehicles, regenerative drives and route studies for campus transport.'],
      ['Resource Efficiency', 'Audits of water, power and waste across labs and hostels, followed by changes we can measure.'],
      ['Sustain Initiative', 'Our open campaign that invites every department to propose and pilot one green project each semester.'],
    ],
  },
  media: {
    icon: 'camera',
    title: 'Media',
    blurb:
      'Delta documents what it builds. The media team shoots, edits and publishes so our projects reach people beyond the lab.',
    intro:
      'Media turns lab work into stories people can follow. The team covers every project and every event we host.',
    items: [
      ['Photography & Videography', 'Project shoots, event coverage and short documentaries produced by our own crew.'],
      ['Content & Editing', 'Scripts, posters, newsletters and edited reels that explain our work in plain language.'],
      ['Events Management', 'Planning, logistics and run-of-show for workshops, hackathons and the annual showcase.'],
      ['Social Media & Digital Presence', 'Our accounts, website and community channels, kept current and answered promptly.'],
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
      ['How do I reach the team?', 'Use the Join form, message us on Instagram or write to delta.club@example.com.'],
    ],
  },
  terms: {
    kind: 'legal',
    title: 'Terms & Conditions',
    eyebrow: 'Support',
    intro: 'Sample text for layout purposes. Replace before launch.',
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
    intro: 'Sample text for layout purposes. Replace before launch.',
    items: [
      ['What we collect', 'Your name, branch, department, email, phone number and the reason you gave for joining.'],
      ['How we use it', 'To contact you about club activities and to place you in a department. We do not sell your data.'],
      ['Who can see it', 'Only the core team. Photos of members appear publicly only with consent.'],
      ['Your choices', 'You can ask us to correct or delete your details at any time by writing to the club email.'],
    ],
  },
};

export const ABOUT_IDS = ['engineering', 'sustainability', 'media'];

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
  { n: 'Mechanical', icon: 'gear', d: 'Designs and builds physical systems: chassis, mechanisms, thermal parts and test rigs.', f: ['CAD and prototyping', 'Thermal and fluid studies', 'Fabrication and testing'], lead: 'Rohan Shetty' },
  { n: 'Electronics', icon: 'chip', d: 'Develops the circuits, sensors and embedded controllers that make our machines respond.', f: ['PCB design', 'Embedded firmware', 'Sensors and power'], lead: 'Kavya Nambiar' },
  { n: 'Computer Science', icon: 'code', d: 'Writes the software, data pipelines and models that connect and control every project.', f: ['Web and tooling', 'Machine learning', 'Simulation code'], lead: 'Vikram Desai' },
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
    m: '"My role is to keep the doors open and the budget honest. The ideas, the late nights and the results belong to the students, and they have earned every bit of the club’s reputation."',
  },
];

export const TEAM = {
  // Row 1: Co-Founder & VP Mechanical  +  President
  row1: [
    {
      n: 'Norman Daran Dsouza', b: 'Mechanical Engineering',
      r: 'Co-Founder & Vice President of Mechanical Engineering',
      q: 'Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.',
      photo: '',
      linkedin: 'http://www.linkedin.com/in/norman-daran-dsouza',
      instagram: 'https://www.instagram.com/normandsouzaa?rpxt=MXRqM2tpbGhidHdzMw==',
      github: 'https://github.com/normandarannd-blip',
      email: 'normandaran.nd@gmail.com',
    },
    {
      n: 'Jawahar Lawrence Rodrigues', b: 'Electronics & Communication Engineering',
      r: 'President',
      q: 'Small circuits, big dreams, endless possibilities.',
      photo: '',
      linkedin: 'https://www.linkedin.com/in/jawahar-rodrigues-032540331?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      instagram: 'https://www.instagram.com/jlr1406?mdxt=MW54dXJyYmFibmtuMg==',
      github: 'https://github.com/Jawahar4570',
      email: 'rodriguesjawahar4570@gmail.com',
    },
  ],
  // Row 2: VP Electronics, VP CS, Management Head, Media Head
  leads: [
    {
      n: 'Melrick Prith Dsouza', b: 'Artificial Intelligence & Machine Learning',
      r: 'Vice President of Computer Science Engineering',
      q: 'The best way to predict the future is to invent it.',
      photo: '',
      linkedin: 'https://www.linkedin.com/in/melrick-dsouza-95a956299',
      instagram: 'https://www.instagram.com/its_melrick_dsouza?obrf=aHB4MHY1M3ZuMXVj',
      github: 'https://github.com/melrickpd2006',
      email: 'melrick.p.d2006@gmail.com',
    },
    {
      n: 'Nikhitha HL', b: 'Electronics & Communication Engineering',
      r: 'Vice President of Electronics Engineering',
      q: 'Learning today, designing tomorrow, and building my future one chip at a time.',
      photo: '',
      linkedin: 'https://www.linkedin.com/in/nikhitha-hl-5345aa351',
      instagram: '',
      github: 'https://github.com/NikhithaHl',
      email: 'nikhithahl2006@gmail.com',
    },
    {
      n: 'Anjali R Rai', b: 'Artificial Intelligence & Machine Learning',
      r: 'Management Head',
      q: 'Turning Logic into Solutions.',
      photo: '',
      linkedin: 'https://www.linkedin.com/in/anjali-r-rai-b80022257',
      instagram: '',
      github: 'https://github.com/anjalirrai-4',
      email: 'anjalirrai4@gmail.com',
    },
    {
      n: 'Shawn Vas', b: 'Artificial Intelligence & Machine Learning',
      r: 'Media Head',
      q: 'Working behind the scences, running the show while everyone thinks it\'s magic.',
      photo: '',
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
      photo: '',
      linkedin: 'https://www.linkedin.com/in/anish-dsouza-6b660031b',
      instagram: 'https://www.instagram.com/anishdsouza23',
      github: 'https://github.com/23Anishds',
      email: 'anishdsouza236@gmail.com',
    },
    {
      n: 'Sanmith S Joseph', b: 'Artificial Intelligence & Machine Learning',
      r: 'Computing Engineer',
      q: 'My Projects are many, My Tokens are none.',
      photo: '',
      linkedin: 'https://www.linkedin.com/in/sanmith-s-joseph-347990272',
      instagram: 'https://www.instagram.com/sanmithjoseph',
      github: 'https://github.com/sanmithsj1103',
      email: 'sanmithsj1103@gmail.com',
    },
    {
      n: 'Ananya Amarnath', b: 'Computer Science Engineering',
      r: 'Digital Systems Engineer',
      q: 'Shaping code into solutions.',
      photo: '',
      linkedin: 'https://www.linkedin.com/in/ananya-amarnath-7a586144a',
      instagram: '',
      github: 'https://github.com/ananyaamar',
      email: 'ananyaamarnath2006@gmail.com',
    },
    {
      n: 'Anika Chrisal Patrao', b: 'Computer Science Engineering',
      r: 'Digital Systems Engineer',
      q: 'Every bug is a lesson, every failure a step forward.',
      photo: '',
      linkedin: 'https://www.linkedin.com/in/anika-patrao-77430a322/',
      instagram: '',
      github: 'https://github.com/Anikaa1221',
      email: 'anikapatrao12@gmail.com',
    },
    {
      n: 'Darren Merce Aranha', b: 'Computer Science Engineering',
      r: 'Creative Editor',
      q: 'Keep it simple, stupid.',
      photo: '',
      linkedin: 'https://www.linkedin.com/in/darren-aranha-46298344a/',
      instagram: 'https://www.instagram.com/not.__.darren/',
      github: 'https://github.com/darrenaranha',
      email: 'darrenaranha06@gmail.com',
    },
    {
      n: 'Melria Smitha Gonsalves', b: 'Artificial Intelligence & Machine Learning',
      r: 'Computing Engineer',
      q: 'Grow through what you grow through.',
      photo: '',
      linkedin: 'https://www.linkedin.com/in/melria-smitha-gonsalves-8a149a393/',
      instagram: '',
      github: 'https://github.com/melriasmitha9-git',
      email: 'melriasmitha9@gmail.com',
    },
    {
      n: 'Vanyashree', b: 'Electronics & Communication Engineering',
      r: 'Electronics Engineer',
      q: 'Powered by curiosity, driven by innovation.',
      photo: '',
      linkedin: 'https://www.linkedin.com/in/vanyashree-shekar',
      instagram: '',
      github: '',
      email: 'vanyashreeshekar281@gmail.com',
    },
  ],
};

export const BRANCHES = [
  'Mechanical Engineering',
  'Electronics and Communication',
  'Computer Science',
  'Electrical Engineering',
  'Civil Engineering',
  'Other',
];

export const CLUB_EMAIL = 'delta.club@example.com';
