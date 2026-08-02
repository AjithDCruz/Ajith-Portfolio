export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "enterprise-case-management",
    title: "Enterprise Case Management Automation",
    subtitle: "Banking AML / FCCM",
    description:
      "An end-to-end automation solution for validating banking case management workflows, customer information, events, accounts, evidence and transaction details.",
    technologies: [
      "Java",
      "Selenium",
      "TestNG",
      "Cucumber",
      "Oracle SQL",
      "Jenkins",
    ],
    highlights: [
      "Reusable Page Object Model framework",
      "UI and database validation",
      "Automated execution reports",
    ],
    image: "/projects/enterprise-case-management.png",
  },
  {
    id: "transaction-monitoring",
    title: "Transaction Monitoring Validation",
    subtitle: "Financial Crime Compliance",
    description:
      "Automated validations for cash, wire and account transactions, including alert totals, customer data and event-level database verification.",
    technologies: [
      "Java",
      "Selenium",
      "Oracle SQL",
      "Cucumber",
    ],
    highlights: [
      "Validated transaction data across multiple tables",
      "Handled large paginated datasets",
      "Improved regression reliability",
    ],
    image: "/projects/transaction-monitoring.png",
  },
];