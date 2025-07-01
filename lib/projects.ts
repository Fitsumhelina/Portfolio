export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "Zulu Tech Page",
    title: "Zulu Tech Page",
    category: "Website",
    shortDescription: "A modern and responsive landing page for Zulu Tech, showcasing their services and portfolio.",
    description: [
      "The Zulu Tech Page is a modern and responsive landing page designed to showcase the services and portfolio of Zulu Tech,a tech company. The goal was to create a visually appealing and user-friendly website that effectively communicates the brand's identity and offerings.",
      " allow the user to see the previous project gallery and request the services of Zulu Tech.",
    
    ],
    features: [
      "Responsive design for optimal viewing on all devices",
      "Interactive portfolio section with project details",
      "Service offerings with detailed descriptions",
      "Contact form for inquiries and service requests",
      "Smooth scrolling and animations for enhanced user experience",
      "SEO-optimized for better visibility in search engines",
    ],
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    coverImage: "./../data/Img/Project/zulu/cover.png",
    thumbnailImage: "/../data/Img/Project/zulu/thumbnail.png",
    gallery: [
      { url: "../data/Img/Project/zulu/1.png", caption: "About page " },
      { url: "../data/Img/Project/zulu/2.png", caption: "Product page View" },
      { url: "../data/Img/Project/zulu/3.png", caption: "Blog section" },
      { url: "../data/Img/Project/zulu/4.png", caption: "Conatct us page " },
    ],
    timeline: "3 months (Q2 2023)",
    role: "Lead Product Designer",
    liveUrl: "https://example.com/job-finder",
    githubUrl: "https://github.com/example/job-finder",
    relatedProjects: [
      {
        slug: "finance-dashboard",
        title: "Finance Dashboard",
        category: "Web Application",
        image: "/modern-finance-overview.png",
      },
      {
        slug: "ecommerce-redesign",
        title: "E-Commerce Redesign",
        category: "UX Case Study",
        image: "/modern-apparel-storefront.png",
      },
    ],
  },
    
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
