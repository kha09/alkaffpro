// This file would contain functions to fetch content from the database
// For now, we're simulating it with mock data

import { HeroContent, HeroSlide } from "./content"

// In a real implementation, these would be database queries
export const fetchHeroContent = async (): Promise<HeroContent[]> => {
  // Simulate database fetch
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
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
      ])
    }, 500)
  })
}

export const fetchHeroSlides = async (): Promise<HeroSlide[]> => {
  // Simulate database fetch
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
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
      ])
    }, 500)
  })
}
