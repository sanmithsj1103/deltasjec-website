// All dummy content lives here. Replace with real details when ready.
// Add `photo: '/path/or/url.jpg'` to any person to use a real photo instead of the placeholder.

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
  { n: 'Onshape', file: 'onshape'},
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
    n: 'Dr. Meera Raghavan',
    desig: 'Head of Department (HOD)',
    inst: 'Department of Mechanical Engineering, Meridian Institute of Technology',
    m: 'Delta gives students a place to apply what they learn in class to problems that do not come with answer keys. I have watched members grow from hesitant first-years into people who lead teams and defend their designs.',
  },
  {
    n: 'Prof. Suresh Kamath',
    desig: 'Faculty Coordinator',
    inst: 'Department of Electronics and Communication, Meridian Institute of Technology',
    m: 'My role is to keep the doors open and the budget honest. The ideas, the late nights and the results belong to the students, and they have earned every bit of the club’s reputation.',
  },
];

export const TEAM = {
  president: [
    { n: 'Aarav Menon', b: 'B.E. Mechanical Engineering', d: 'Mechanical', r: 'President', q: 'Good machines start with honest measurements.' },
  ],
  leads: [
    { n: 'Ishita Rao', b: 'B.E. Computer Science', d: 'Computer Science', r: 'Vice President', q: 'Ship early, learn loudly, fix quickly.' },
    { n: 'Rohan Shetty', b: 'B.E. Mechanical Engineering', d: 'Mechanical', r: 'Mechanical Lead', q: 'If it can vibrate, it will. Plan for it.' },
    { n: 'Kavya Nambiar', b: 'B.E. Electronics and Communication', d: 'Electronics', r: 'Electronics Lead', q: 'Every great system hides a quiet power supply.' },
    { n: 'Vikram Desai', b: 'B.E. Computer Science', d: 'Computer Science', r: 'Computer Science Lead', q: 'Readable code is a team sport.' },
  ],
  members: [
    { n: 'Ananya Gowda', b: 'B.E. Mechanical', d: 'Mechanical', r: 'Design Engineer', q: 'Sketch first, model second.' },
    { n: 'Dev Patel', b: 'B.E. Electronics', d: 'Electronics', r: 'Embedded Developer', q: 'Blink an LED, then take over the world.' },
    { n: 'Sneha Kulkarni', b: 'B.E. Computer Science', d: 'Computer Science', r: 'Web Developer', q: 'Good interfaces feel obvious.' },
    { n: 'Rahul Iyer', b: 'B.E. Electrical', d: 'Electronics', r: 'Power Systems', q: 'Efficiency is a feature.' },
    { n: 'Meghana S', b: 'B.E. Civil', d: 'Mechanical', r: 'Sustainability Analyst', q: 'What we measure, we can improve.' },
    { n: 'Tanvir Ahmed', b: 'B.E. Electronics', d: 'Electronics', r: 'Photographer', q: 'The best shot is the one at the bench.' },
    { n: 'Nikhil Joseph', b: 'B.E. Computer Science', d: 'Computer Science', r: 'Events Coordinator', q: 'A schedule is a promise.' },
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
