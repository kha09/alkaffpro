// This file would contain functions to fetch content from the database
// For now, we're simulating it with mock data

export type HeroContent = {
  id: number
  title: string
  subtitle: string
  description: string
  image?: string | null
  language: "ENGLISH" | "ARABIC"
}

export type HeroSlide = {
  id: number
  title: string
  subtitle: string
  description: string
  image?: string | null
  order: number
  language: "ENGLISH" | "ARABIC"
}

// Mock data - in real implementation this would come from database
export const mockHeroContent: HeroContent[] = [
  {
    id: 1,
    title: "ابدأ رحلتك الجامعية معنا",
    subtitle: "التقديم أصبح أسهل من أي وقت مضى!",
    description: "منصة ذكية تربطك بأفضل الجامعات والتخصصات حول العالم، خطوة بخطوة.",
    image: "/images/students-campus.png",
    language: "ARABIC"
  },
  {
    id: 2,
    title: "Start Your University Journey With Us",
    subtitle: "Application Has Never Been Easier!",
    description: "A smart platform that connects you with the best universities and programs around the world, step by step.",
    image: "/images/students-campus.png",
    language: "ENGLISH"
  }
]

export const mockHeroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "ابدأ رحلتك الجامعية معنا",
    subtitle: "التقديم أصبح أسهل من أي وقت مضى!",
    description: "منصة ذكية تربطك بأفضل الجامعات والتخصصات حول العالم، خطوة بخطوة.",
    image: "/images/students-campus.png",
    order: 0,
    language: "ARABIC"
  },
  {
    id: 2,
    title: "ابدأ رحلتك الجامعية معنا",
    subtitle: "التقديم أصبح أسهل من أي وقت مضى!",
    description: "منصة ذكية تربطك بأفضل الجامعات والتخصصات حول العالم، خطوة بخطوة.",
    image: "/images/students-studying.png",
    order: 1,
    language: "ARABIC"
  },
  {
    id: 3,
    title: "Start Your University Journey With Us",
    subtitle: "Application Has Never Been Easier!",
    description: "A smart platform that connects you with the best universities and programs around the world, step by step.",
    image: "/images/students-campus.png",
    order: 0,
    language: "ENGLISH"
  },
  {
    id: 4,
    title: "Start Your University Journey With Us",
    subtitle: "Application Has Never Been Easier!",
    description: "A smart platform that connects you with the best universities and programs around the world, step by step.",
    image: "/images/students-studying.png",
    order: 1,
    language: "ENGLISH"
  }
]

// In a real implementation, these would be database queries
export const getHeroContentForLanguage = (language: "ENGLISH" | "ARABIC"): HeroContent | null => {
  return mockHeroContent.find(content => content.language === language) || null
}

export const getHeroSlidesForLanguage = (language: "ENGLISH" | "ARABIC"): HeroSlide[] => {
  return mockHeroSlides
    .filter(slide => slide.language === language)
    .sort((a, b) => a.order - b.order)
}
