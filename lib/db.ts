import { PrismaClient } from "@prisma/client"

let prisma: PrismaClient | undefined

export function getPrisma() {
  if (typeof window === "undefined") {
    // Server-side
    if (!prisma) {
      prisma = new PrismaClient()
    }
    return prisma
  } else {
    // Client-side - return a dummy client or handle appropriately
    return new PrismaClient()
  }
}
