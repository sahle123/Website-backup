import type { ImageMetadata } from "astro";

// Card / gallery imagery (imported so Astro can optimize them at build time)
import afterlifeCard from "../assets/projects/afterlife-card.jpg";
import afterlife1 from "../assets/projects/afterlife-1.jpg";
import wrinkleCard from "../assets/projects/wrinkle-card.jpg";
import wrinkle1 from "../assets/projects/wrinkle-1.jpg";
import clankCard from "../assets/projects/clank-card.jpg";
import clank1 from "../assets/projects/clank-1.jpg";
import socialCard from "../assets/projects/social-card.jpg";
import social1 from "../assets/projects/social-1.jpg";
import pharmaseeCard from "../assets/projects/pharmasee-card.png";
import pharmasee1 from "../assets/projects/pharmasee-1.png";
import pharmasee2 from "../assets/projects/pharmasee-2.png";

export interface Project {
  slug: string;
  title: string;
  /** Short label used on the card, e.g. "Unity · Game" */
  category: string;
  /** One-line hook shown on the card */
  tagline: string;
  /** Image shown on the home grid card */
  card: ImageMetadata;
  /** Larger imagery shown on the project detail page */
  gallery: ImageMetadata[];
  /** Full write-up. Array = paragraphs. */
  description: string[];
  technologies: string[];
  team?: string[];
  /** External / bundled link to try the project, if available */
  launch?: { label: string; url: string };
  /** Optional accolade badge */
  badge?: string;
}

export const projects: Project[] = [
  {
    slug: "pharmasee",
    title: "PharmaSee",
    category: "Unity · Game Jam",
    tagline: "A moral-dilemma pharmacy sim that won 3rd place at Gamers8.",
    card: pharmaseeCard,
    gallery: [pharmasee1, pharmasee2],
    badge: "🏆 3rd Place · 20,000 SAR",
    description: [
      "PharmaSee was built for a 2022 hackathon in Riyadh, Saudi Arabia, where our team placed 3rd and won 20,000 SAR. The track challenged us to make a game that raised awareness of contemporary public-health issues across the Middle East — and we had just six days to ship a playable demo.",
      "Our four-person team paired a single programmer (me) with a junior physician for medical accuracy, plus two supporting members. Taking heavy inspiration from Papers, Please, PharmaSee casts you as a pharmacist whose income is tied to the drugs you dispense. Some prescriptions pay far better than others — but aren't right for the patient.",
      "Every counter visit becomes a quiet negotiation between ethics and survival: prescribe carelessly and you land in jail, play it too safe and you go out of business. The game is intentionally short and still rough around the edges, but fully playable.",
    ],
    technologies: ["Unity", "C#", "Audacity", "Discord"],
    team: [
      "Sahle Alturaigi (Programmer)",
      "Junior physician + 2 supporting members",
    ],
    launch: {
      label: "Play on itch.io",
      url: "https://itch.io/jam/gamers8-gameathon-game-jam-2022/rate/1675647",
    },
  },
  {
    slug: "afterlife",
    title: "AfterLife",
    category: "Unity · First-Person Platformer",
    tagline:
      "A Zelda- and Dark Souls-inspired soul hunt, beatable in 15 minutes.",
    card: afterlifeCard,
    gallery: [afterlife1, afterlifeCard],
    description: [
      "AfterLife is a first-person platformer I built as a senior project. The brief was to satisfy two of the eight aesthetics from the MDA framework — I chose Challenge and Exploration — and to design every mechanic around reinforcing them.",
      "You play a lost soul collecting enough souls to escape. The level design draws openly from The Legend of Zelda and Dark Souls: rewarding curiosity, punishing carelessness, and asking you to read the space around you. A competent player can beat it in roughly 10–15 minutes.",
      "The build runs right here in your browser via Unity WebGL — no download required.",
    ],
    technologies: ["Unity", "C#", "JavaScript", "Blender", "GIMP"],
    launch: { label: "Play in browser", url: "/games/afterlife/index.html" },
  },
  {
    slug: "wrinkle-wrumble",
    title: "Wrinkle Wrumble",
    category: "Unity · Networked Party Game",
    tagline: "A chaotic online brawler set in a retirement home.",
    card: wrinkleCard,
    gallery: [wrinkle1, wrinkleCard],
    description: [
      'Wrinkle Wrumble is a humorous "party-style" multiplayer game where you shove and hurl objects around a cramped retirement house to knock out your opponents.',
      "The build leans heavily on Photon Unity Networking (PUN) for its real-time multiplayer layer. It's more of a proof-of-concept — a benchmark for what we could pull off before polish and balance passes — rather than a finished product, and there are no current plans to develop it further.",
      "Launch it below to play with friends.",
    ],
    technologies: [
      "Unity",
      "C#",
      "JavaScript",
      "Photon (PUN)",
      "Mixamo",
      "Fuse",
      "HTML5",
    ],
    team: ["Akmal Idris", "Sahle Alturaigi"],
    launch: {
      label: "Launch demo",
      url: "http://akmalhisyam.com/demo/WrinkleWrumble/",
    },
  },
  {
    slug: "social-circuit",
    title: "Social Circuit",
    category: "UX Research · App Concept",
    tagline: "A user-centered app concept for spur-of-the-moment local events.",
    card: socialCard,
    gallery: [social1, socialCard],
    description: [
      "Social Circuit is an app concept that helps people discover and spin up local events on the fly — think Meetup, but built for the spur of the moment.",
      "The goal was never a shipping product; it was to gather qualitative evidence for the idea and produce a prototype worth pitching to stakeholders. So we went well past surveys and paper sketches: the team ran ethnographic studies with our target demographic (college students) and applied user-centered design principles throughout.",
      "We iterated through mock-ups and focus groups, testing each round against usability issues we'd missed, until we converged on a prototype our users were genuinely excited about. Along the way the team got fluent in blending quantitative and qualitative research — because users rarely describe exactly what they want or need.",
    ],
    technologies: ["Axure", "User-Centered Design", "Nielsen's UI Heuristics"],
    team: ["Sahle Alturaigi", "Jacob Rail", "Amrutha Rajiv", "Chris Powell"],
    launch: {
      label: "View project files",
      url: "https://drive.google.com/folderview?id=0B5dg0RY3IF6mfm5NNHF6TXVncHJEU09WYzdfbEF1cERVZTd0VDVIRmt1bFhab3pXOXRKemc&usp=sharing",
    },
  },
  {
    slug: "opengl-clank",
    title: "OpenGL Clank",
    category: "C/C++ · Graphics",
    tagline: "A hand-modeled Clank rendered and animated in raw OpenGL.",
    card: clankCard,
    gallery: [clank1, clankCard],
    description: [
      "A from-scratch take on Clank, the sidekick from Insomniac's Ratchet & Clank series. I modeled the character in Blender, then imported it as an object file into a C/C++ program built on OpenGL and the GLUT libraries.",
      "Inside the OpenGL code I handled the scene lighting and a set of short character animations. It currently runs only as a Windows executable — I haven't yet found the time to port the renderer to WebGL, which is what a browser-playable version would need.",
    ],
    technologies: ["OpenGL", "GLUT", "Blender", "C", "C++"],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
