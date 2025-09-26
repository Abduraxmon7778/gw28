import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Estate (Uy qurish)",
    description: "React va Tailwind-dan foydalanadigan chiroyli ochilish sahifasi ilovasi" ,
    image: "../src/assets/image.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    demosayt:"https://gw28.netlify.app/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Diskond",
    description:
      "Qulay interfeys orqali muhim ko‘rsatkichlarni kuzatish va tahlil qilish imkonini beradi.",
    image: "../src/assets/image copy.png",
    tags: ["React", "TailwindCSS", "Mongodb"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Youtube Clone",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "../src/assets/image copy 2.png",
    tags: ["React", "Javascript", "CSS", "Mongodb"],
    demoUrl: "#",
    demosayt:"https://youtube2-git-main-abduraxmons-projects-1ba3d4db.vercel.app/",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Qilingan <span className="text-primary"> Proyeklarim </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Mana mening so'nggi loyihalarim. Har bir loyiha ehtiyotkorlik bilan amalga oshirildi
          Tafsilotlarga, ishlashga va foydalanuvchi tajribasiga e'tibor qaratgan holda yaratilgan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
  <a
    href={project.demosayt}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
    />
  </a>
</div>


              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};
