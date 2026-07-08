export const site = {
  name: 'Sahle Alturaigi',
  nickname: 'Sal',
  role: 'Full-Stack Developer & Game Tinkerer',
  location: 'Riyadh, Saudi Arabia',
  // One-sentence brief for the hero
  hero:
    'I build for the web, harden it against people like me, and ship the occasional video game — a full-stack developer based in Riyadh who values technology and games in equal measure.',
  cv: '/media/Sahle-Alturaigi-CV.pdf',
  socials: {
    github: 'https://github.com/sahle123',
    stackoverflow: 'https://stackoverflow.com/users/6369752/sal-alturaigi',
    linkedin: 'https://www.linkedin.com/in/sahlealturaigi/',
  },
};

export interface Skill {
  icon: string; // inline SVG path data handled in the component by key
  title: string;
  blurb: string;
  /** grid emphasis — 'wide' spans two columns on larger screens */
  span?: 'wide' | 'tall';
}

export const skills: Skill[] = [
  {
    icon: 'code',
    title: 'Full-Stack Web Development',
    blurb:
      'End-to-end web apps in C#, Python, and JavaScript across popular frameworks — plus Bash, C/C++, SQL, and MongoDB when the job calls for it.',
    span: 'wide',
  },
  {
    icon: 'dotnet',
    title: '.NET Core',
    blurb:
      'Several years building web and mobile applications on the .NET Framework and .NET Core.',
  },
  {
    icon: 'chart',
    title: 'Data & Analytics',
    blurb:
      'Big-data work with MS Azure, QlikSense, SAP BusinessObjects, Excel, and Python — scikit-learn, NumPy, and pandas.',
  },
  {
    icon: 'shield',
    title: 'Security',
    blurb:
      'Pentesting, code analysis, custom payload development, and application hardening.',
  },
  {
    icon: 'gamepad',
    title: 'Game Development',
    blurb:
      'Award-winning Unity games and graphics work — from networked party brawlers to hand-rolled OpenGL renderers.',
    span: 'wide',
  },
];

export const aboutFacts: string[] = [
  'I used to play the harmonica — though I\'ve gotten very rusty at it.',
  'I spend a lot of my free time doing parkour.',
  'I\'ve lived most of my life between the U.S. and Saudi Arabia.',
  'I\'m an avid fan of real-time strategy games.',
  'Thanks to a passport error, I\'m "Sahal" in Saudi Arabia and "Sahle" in the U.S. — I never know which to use.',
];

export const aboutBio =
  'I\'m a jack-of-all-trades developer whose talents lean hardest toward web development. I currently live and work in Riyadh, Saudi Arabia, moving comfortably between building web apps, wrangling data, poking at security, and making games.';
