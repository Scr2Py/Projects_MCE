// 1. Project data: edit this array to add or change projects.
// const projects = [
//   {
//     category: "PROJECT 01 / BUILDING",
//     title: "My First Minecraft House",
//     titleJa: "はじめてのマインクラフトハウス",
//     image: "images/project-01-house.jpg",
//     alt: "Block-style house with a garden and mountains",
//     description: "Build a home, explore materials, and develop creative thinking.",
//     descriptionJa: "家を建てながら、素材について学び、創造力を育てます。",
//     skills: ["Building", "Creativity", "Design"]
//   },
//   {
//     category: "PROJECT 02 / REDSTONE",
//     title: "Redstone Door Challenge",
//     titleJa: "レッドストーン自動ドアに挑戦",
//     image: "images/project-02-redstone.jpg",
//     alt: "Redstone circuit and an automatic block door",
//     description: "Use redstone circuits to make a door open automatically.",
//     descriptionJa: "レッドストーン回路を使って、自動で開くドアを作ります。",
//     skills: ["Redstone", "Logic", "Engineering"]
//   },
//   {
//     category: "PROJECT 03 / CODING",
//     title: "Code Your Agent",
//     titleJa: "エージェントをプログラミング",
//     image: "images/project-03-coding.jpg",
//     alt: "A blocky robot agent building a path in a Minecraft world",
//     description: "Write simple instructions and let an agent build a path for you.",
//     descriptionJa: "簡単な命令を書いて、エージェントに道を作ってもらいます。",
//     skills: ["Coding", "Algorithms", "Automation"]
//   },
//   {
//     category: "PROJECT 04 / GAME DESIGN",
//     title: "The Escape Maze",
//     titleJa: "脱出迷路を作ろう",
//     image: "images/project-04-maze.jpg",
//     alt: "A colorful block maze viewed from above",
//     description: "Design a maze, add challenges, and test it with your friends.",
//     descriptionJa: "迷路や仕掛けを作り、友だちに遊んでもらって改善します。",
//     skills: ["Game Design", "Testing", "Problem Solving"]
//   },
//   {
//     category: "PROJECT 05 / ENVIRONMENT",
//     title: "Build a Greener World",
//     titleJa: "地球にやさしい街づくり",
//     image: "images/project-05-greenworld.jpg",
//     alt: "A green block city with trees, water, and solar panels",
//     description: "Create a sustainable town with green spaces and clean energy.",
//     descriptionJa: "緑やクリーンエネルギーを取り入れた、持続可能な街を作ります。",
//     skills: ["Environment", "Planning", "Creativity"]
//   }
// ];
const projects = [
  {
    category: "PROJECT 18 / ARCHITECTURE",
    title: "The Eiffel Tower",
    titleJa: "エッフェル塔",
    image: "images/images/Screenshot 2026-10-28 180024_800x800.jpg",
    alt: "Minecraft Eiffel Tower",
    description: "Build the famous Eiffel Tower using Minecraft blocks.",
    descriptionJa: "マインクラフトでエッフェル塔を建築します。",
    skills: ["Building", "Architecture", "Creativity"]
  },
  {
    category: "PROJECT 19 / BUILDING",
    title: "Minecraft Building Project",
    titleJa: "マインクラフト建築作品",
    image: "images/Screenshot 2026-10-28 175910_800x800.jpg",
    alt: "Minecraft building project",
    description: "Discover a creative Minecraft building project.",
    descriptionJa: "マインクラフトの建築作品を紹介します。",
    skills: ["Building", "Creativity", "Design"]
  },
  {
    category: "PROJECT 12 / ROLLER COASTER",
    title: "Roller Coaster",
    titleJa: "ローラーコースター",
    image: "images/Screenshot 2026-10-28 175836_800x800.jpg",
    alt: "Minecraft roller coaster",
    description: "Build an exciting roller coaster in Minecraft.",
    descriptionJa: "マインクラフトで楽しいジェットコースターを作ります。",
    skills: ["Engineering", "Mechanisms", "Design"]
  },
  {
    category: "PROJECT 09 / BUILDING",
    title: "My Dream House",
    titleJa: "マイホーム",
    image: "images/Screenshot 2026-10-25 165029_800x800.jpg",
    alt: "Minecraft dream house",
    description: "Build your dream home in Minecraft.",
    descriptionJa: "マインクラフトで夢のマイホームを作ります。",
    skills: ["Building", "Creativity", "Design"]
  },
  {
    category: "PROJECT 20 / CREATIVE BUILDING",
    title: "Creative Minecraft Project",
    titleJa: "マインクラフト作品",
    image: "images/Screenshot 2026-10-25 114820_800x800.jpg",
    alt: "Minecraft creative project",
    description: "Explore a creative Minecraft construction.",
    descriptionJa: "マインクラフトの創作作品を紹介します。",
    skills: ["Creativity", "Building", "Design"]
  },
  {
    category: "PROJECT 01 / PIXEL ART",
    title: "Pixel Art",
    titleJa: "ピクセルアート",
    image: "images/スクリーンショット 2026-03-05 174443_800x800.jpg",
    alt: "Minecraft pixel art",
    description: "Create beautiful pixel art using Minecraft blocks.",
    descriptionJa: "ピクセルアート拡張機能を使って美しいドット絵を描きます。",
    skills: ["Pixel Art", "Creativity", "Design"]
  },
  {
    category: "PROJECT 04 / TNT ENGINEERING",
    title: "Rapid-Fire TNT Cannon",
    titleJa: "小型TNTキャノン",
    image: "images/Screenshot 2026-10-25 114515_800x800.jpg",
    alt: "Minecraft rapid-fire TNT cannon",
    description: "Build a compact TNT cannon with rapid-fire capabilities.",
    descriptionJa: "連射式の小型TNTキャノンを作ります。",
    skills: ["Engineering", "Mechanisms", "Logic"]
  },
  {
    category: "PROJECT 07 / MAZE DESIGN",
    title: "Maze",
    titleJa: "迷路",
    image: "images/Screenshot 2026-10-25 111708_800x800.jpg",
    alt: "Minecraft maze",
    description: "Explore maze patterns and construct a challenging design.",
    descriptionJa: "迷路のようなフラクタルを構築します。",
    skills: ["Game Design", "Logic", "Problem Solving"]
  },
  {
    category: "PROJECT 02 / MECHANISMS",
    title: "Elevator",
    titleJa: "エレベーター",
    image: "images/Screenshot 2026-10-25 095633_800x800.jpg",
    alt: "Minecraft elevator",
    description: "Build an elevator with button-operated functions.",
    descriptionJa: "ボタンで呼び出したり発進させたりできるエレベーターを作ります。",
    skills: ["Engineering", "Logic", "Automation"]
  },
  {
    category: "PROJECT 05 / PIXEL ART",
    title: "Pokemon",
    titleJa: "ポケモン",
    image: "images/Screenshot 2026-10-25 093343_800x800.jpg",
    alt: "Pokemon-inspired Minecraft creation",
    description: "Recreate a popular Pokemon character using Minecraft blocks.",
    descriptionJa: "人気のポケモンをマインクラフトで作ります。",
    skills: ["Pixel Art", "Building", "Creativity"]
  },
  {
    category: "PROJECT 08 / TNT ENGINEERING",
    title: "TNT Cannon",
    titleJa: "TNTキャノン",
    image: "images/Screenshot 2026-10-25 093229_800x800.jpg",
    alt: "Minecraft TNT cannon",
    description: "Experiment with a small TNT cannon and its mechanisms.",
    descriptionJa: "小型TNTキャノンの作り方を試します。",
    skills: ["Engineering", "Mechanisms", "Logic"]
  },
  {
    category: "PROJECT 03 / AQUARIUM",
    title: "Aquarium",
    titleJa: "水族館",
    image: "images/Screenshot 2026-09-27 112053_800x800.jpg",
    alt: "Minecraft aquarium",
    description: "Build an aquarium filled with marine life and plants.",
    descriptionJa: "海の生き物や植物があふれる水族館を作ります。",
    skills: ["Building", "Creativity", "Environment"]
  },
  {
    category: "PROJECT 06 / ZOO DESIGN",
    title: "Zoo",
    titleJa: "動物園",
    image: "images/Screenshot 2026-09-27 112001_800x800.jpg",
    alt: "Minecraft zoo",
    description: "Create a zoo for animals in your Minecraft world.",
    descriptionJa: "マインクラフトで動物園を作ります。",
    skills: ["Building", "Planning", "Creativity"]
  },
  {
    category: "PROJECT 21 / CREATIVE BUILDING",
    title: "Creative Minecraft Project",
    titleJa: "マインクラフト作品",
    image: "images/Screenshot 2026-09-27 111827_800x800.jpg",
    alt: "Minecraft creative building",
    description: "Discover another creative Minecraft construction.",
    descriptionJa: "マインクラフトの創作作品を紹介します。",
    skills: ["Building", "Creativity", "Design"]
  },
  {
    category: "PROJECT 10 / AMUSEMENT PARK",
    title: "Merry-Go-Round",
    titleJa: "メリーゴーランド",
    image: "images/Screenshot 2026-09-24 125504_800x800.jpg",
    alt: "Minecraft merry-go-round",
    description: "Build a merry-go-round in Minecraft.",
    descriptionJa: "マインクラフトでメリーゴーランドを作ります。",
    skills: ["Building", "Design", "Engineering"]
  },
  {
    category: "PROJECT 13 / SECURITY SYSTEMS",
    title: "Security Camera",
    titleJa: "監視カメラ",
    image: "images/Screenshot 2026-09-24 124353_800x800.jpg",
    alt: "Minecraft security camera",
    description: "Create a security camera in Minecraft.",
    descriptionJa: "マインクラフトで監視カメラを作ります。",
    skills: ["Engineering", "Design", "Creativity"]
  },
  {
    category: "PROJECT 16 / ARCHITECTURE",
    title: "Classroom",
    titleJa: "クラスルーム",
    image: "images/Screenshot 2026-09-24 122028_800x800.jpg",
    alt: "Minecraft classroom",
    description: "Build a classroom for learning and collaboration.",
    descriptionJa: "スクールのクラスルームを作ります。",
    skills: ["Architecture", "Planning", "Building"]
  },
  {
    category: "PROJECT 11 / VILLAGE BUILDING",
    title: "Villager Houses",
    titleJa: "村人の家",
    image: "images/Screenshot 2026-09-24 120634_800x800.jpg",
    alt: "Minecraft villager houses",
    description: "Build a small village with houses for villagers.",
    descriptionJa: "村人の家が集まった小さな村を作ります。",
    skills: ["Building", "Planning", "Creativity"]
  },
  {
    category: "PROJECT 14 / TNT ENGINEERING",
    title: "TNT Cannon Variations",
    titleJa: "キャノン",
    image: "images/Screenshot 2026-08-18 182125_800x800.jpg",
    alt: "Alternative Minecraft TNT cannon",
    description: "Experiment with a different small TNT cannon design.",
    descriptionJa: "違う小型TNTキャノンを作ります。",
    skills: ["Engineering", "Experimentation", "Logic"]
  },
  {
    category: "PROJECT 17 / MULTIPLAYER GAME",
    title: "Hide-and-Seek or Tag",
    titleJa: "かくれんぼ・鬼ごっこ",
    image: "images/Screenshot 2026-08-18 180339_800x800.jpg",
    alt: "Minecraft multiplayer hide-and-seek or tag",
    description: "Play hide-and-seek or tag with friends in Minecraft.",
    descriptionJa: "マイクラで友だちと本気の鬼ごっこを楽しみます。",
    skills: ["Teamwork", "Game Design", "Problem Solving"]
  },
  {
    category: "PROJECT 15 / COLLABORATIVE BUILDING",
    title: "Build a Whale Together",
    titleJa: "クジラ",
    image: "images/Screenshot 2026-06-05 135610_800x800.jpg",
    alt: "Minecraft whale created with friends",
    description: "Build a whale together with friends using Minecraft blocks.",
    descriptionJa: "友だちと一緒にクジラを作ります。",
    skills: ["Teamwork", "Building", "Creativity"]
  }
];
// 2. Find the page elements once so we can update them.
const intro = document.querySelector("#intro");
const gallery = document.querySelector("#gallery");
const startButton = document.querySelector("#startButton");
const backButton = document.querySelector("#backButton");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const projectCategory = document.querySelector("#projectCategory");
const projectTitle = document.querySelector("#projectTitle");
const projectTitleJa = document.querySelector("#projectTitleJa");
const projectImage = document.querySelector("#projectImage");
const projectDescription = document.querySelector("#projectDescription");
const projectDescriptionJa = document.querySelector("#projectDescriptionJa");
const projectSkills = document.querySelector("#projectSkills");
const currentNumber = document.querySelector("#currentNumber");
const totalNumber = document.querySelector("#totalNumber");
const progressFill = document.querySelector("#progressFill");
const dots = document.querySelector("#dots");

// 3. currentIndex remembers which project is displayed (arrays start at 0).
let currentIndex = 0;
totalNumber.textContent = String(projects.length).padStart(2, "0");

// 4. Render the selected project into the page.
function showProject(index) {
  currentIndex = index;
  const project = projects[currentIndex];

  projectCategory.textContent = project.category;
  projectTitle.textContent = project.title;
  projectTitleJa.textContent = project.titleJa;
  projectImage.src = project.image;
  projectImage.alt = project.alt;
  projectDescription.textContent = project.description;
  projectDescriptionJa.textContent = project.descriptionJa;
  currentNumber.textContent = String(currentIndex + 1).padStart(2, "0");

  // Rebuild the skill tags for the current project.
  projectSkills.replaceChildren();
  for (const skill of project.skills) {
    const tag = document.createElement("span");
    tag.className = "skill";
    tag.textContent = skill;
    projectSkills.appendChild(tag);
  }

  // Update the progress bar and navigation buttons.
  progressFill.style.width = `${((currentIndex + 1) / projects.length) * 100}%`;
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === projects.length - 1;

  // Highlight the dot for the current project.
  [...dots.children].forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentIndex);
    dot.setAttribute("aria-current", dotIndex === currentIndex ? "true" : "false");
  });
}

// 5. Make one clickable dot for every project.
projects.forEach((project, index) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `Show project ${index + 1}: ${project.title}`);
  dot.addEventListener("click", () => showProject(index));
  dots.appendChild(dot);
});

// 6. Button events.
startButton.addEventListener("click", () => {
  intro.classList.add("hidden");
  gallery.classList.remove("hidden");
  showProject(0);
});
backButton.addEventListener("click", () => {
  gallery.classList.add("hidden");
  intro.classList.remove("hidden");
});
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) showProject(currentIndex - 1);
});
nextButton.addEventListener("click", () => {
  if (currentIndex < projects.length - 1) showProject(currentIndex + 1);
});

// 7. Keyboard controls: left/right arrows move between projects.
// Ignore keys when someone is using a text field or modifier key.
document.addEventListener("keydown", (event) => {
  if (gallery.classList.contains("hidden")) return;
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === "ArrowLeft" && currentIndex > 0) {
    showProject(currentIndex - 1);
  } else if (event.key === "ArrowRight" && currentIndex < projects.length - 1) {
    showProject(currentIndex + 1);
  }
});

// Prepare the first project in the background.
showProject(0);
