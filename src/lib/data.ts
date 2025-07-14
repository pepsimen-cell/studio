import type { Icons } from "@/components/icons";

export const announcements = [
  {
    id: "announcement-1",
    title: "New Product Launch!",
    date: "2024-07-28",
    content:
      "We are thrilled to announce the launch of our new Fortnite Private cheat. It comes with advanced features and unparalleled security. Check it out in the products tab!",
  },
  {
    id: "announcement-2",
    title: "Scheduled Maintenance",
    date: "2024-07-25",
    content:
      "All our services will be down for scheduled maintenance on July 30th from 2:00 AM to 4:00 AM UTC. We apologize for any inconvenience.",
  },
  {
    id: "announcement-3",
    title: "Discord Community Event",
    date: "2024-07-20",
    content:
      "Join us for a community game night this Friday! Prizes include free subscriptions and exclusive roles. More details in the #events channel.",
  },
];

export const changelogs = [
  {
    id: "changelog-1",
    version: "v2.5.1",
    date: "2024-07-27",
    changes: [
      {
        type: "Fixed",
        description:
          "Resolved a critical issue with the aimbot module in the DMA cheat.",
      },
      {
        type: "Improved",
        description: "Enhanced ESP performance for lower-end systems.",
      },
      {
        type: "Added",
        description: "New skin changer feature added to the Private cheat.",
      },
    ],
  },
  {
    id: "changelog-2",
    version: "v2.5.0",
    date: "2024-07-15",
    changes: [
      {
        type: "Added",
        description: "Initial release of the Fortnite Private cheat.",
      },
      {
        type: "Improved",
        description: "Overall stability and anti-cheat bypass mechanisms.",
      },
    ],
  },
];

export const services = [
  { id: "service-1", name: "Fortnite DMA", status: "Online" as const },
  { id: "service-2", name: "Fortnite Private", status: "Online" as const },
  {
    id: "service-3",
    name: "Authentication Server",
    status: "Online" as const,
  },
  { id: "service-4", name: "Main Website", status: "Maintenance" as const },
  { id: "service-5", name: "Discord Bots", status: "Offline" as const },
];

export const products = [
  {
    id: "prod-dma",
    name: "Fortnite DMA",
    description:
      "Direct Memory Access cheat for ultimate performance and security.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "circuit board",
    features: [
      { icon: "cpu" as keyof typeof Icons, text: "Kernel Level Security" },
      { icon: "zap" as keyof typeof Icons, text: "Lightning Fast ESP" },
      {
        icon: "fingerprint" as keyof typeof Icons,
        text: "Undetected Since Release",
      },
      {
        icon: "shield" as keyof typeof Icons,
        text: "Hardware Spoofing Included",
      },
    ],
  },
  {
    id: "prod-private",
    name: "Fortnite Private",
    description: "Our flagship private cheat with all features included.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "abstract tech",
    features: [
      { icon: "shield" as keyof typeof Icons, text: "Advanced Aimbot" },
      { icon: "zap" as keyof typeof Icons, text: "Player & Item ESP" },
      { icon: "cpu" as keyof typeof Icons, text: "Full Skin Changer" },
      {
        icon: "fingerprint" as keyof typeof Icons,
        text: "Built-in Anti-Cheat Bypass",
      },
    ],
  },
];

export type Product = (typeof products)[0];
export type Announcement = (typeof announcements)[0];
export type Changelog = (typeof changelogs)[0];
