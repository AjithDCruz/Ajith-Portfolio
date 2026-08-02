export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  category: "Microsoft" | "GitHub" | "Oracle";
  image: string;
}

export const certificates: Certificate[] = [
  {
    id: "az-900",
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    category: "Microsoft",
    image: "/certificates/az-900.png",
  },
  {
    id: "ai-900",
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    category: "Microsoft",
    image: "/certificates/ai-900.png",
  },
  {
    id: "ai-102",
    name: "Azure AI Engineer Associate",
    issuer: "Microsoft",
    category: "Microsoft",
    image: "/certificates/ai-102.png",
  },
  {
    id: "az-204",
    name: "Azure Developer Associate",
    issuer: "Microsoft",
    category: "Microsoft",
    image: "/certificates/az-204.png",
  },
  {
    id: "az-400",
    name: "DevOps Engineer Expert",
    issuer: "Microsoft",
    category: "Microsoft",
    image: "/certificates/az-400.png",
  },
  {
    id: "github-foundations",
    name: "GitHub Foundations",
    issuer: "GitHub",
    category: "GitHub",
    image: "/certificates/github-foundations.png",
  },
];