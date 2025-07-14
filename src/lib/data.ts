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
  { id: "service-3", name: "Fortnite Slotted", status: "Online" as const },
  { id: "service-4", name: "BO6 Unlocker", status: "Maintenance" as const },
  { id: "service-5", name: "BO6 External", status: "Online" as const },
  { id: "service-6", name: "Kernel Unban", status: "Online" as const },
  { id: "service-7", name: "Temp Unban", status: "Offline" as const },
  {
    id: "service-8",
    name: "Authentication Server",
    status: "Online" as const,
  },
  { id: "service-9", name: "Main Website", status: "Maintenance" as const },
  { id: "service-10", name: "Discord Bots", status: "Offline" as const },
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
    image: "https://skatesgarage.cc/images/fortnite%20private.png",
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
  {
    id: "prod-bo6-unlocker",
    name: "BO6 Unlocker",
    description: "Unlock all in-game items, camos, and operators in Black Ops 6 instantly.",
    image: "https://cdn.discordapp.com/attachments/1330236077843288145/1351629865404862484/box_1.gif?ex=6875fb27&is=6874a9a7&hm=db18afba6085714f992edaee0f4f419a37e712731c3ed2cabfe99e8d25f74041&",
    dataAiHint: "video game soldier",
    features: [
      { icon: "zap" as keyof typeof Icons, text: "Instant Unlock All" },
      { icon: "shield" as keyof typeof Icons, text: "Safe & Secure Process" },
      { icon: "cpu" as keyof typeof Icons, text: "Works for All Game Versions" },
      { icon: "fingerprint" as keyof typeof Icons, text: "Undetectable by Game Client" },
    ],
  },
  {
    id: "prod-bo6-external",
    name: "BO6 External",
    description: "External cheat for Black Ops 6, focused on safety and ease of use.",
    image: "https://skatesgarage.cc/images/SkatesBO6External.png",
    dataAiHint: "radar screen",
    features: [
      { icon: "shield" as keyof typeof Icons, text: "External Overlay ESP" },
      { icon: "zap" as keyof typeof Icons, text: "Customizable Wallhacks" },
      { icon: "cpu" as keyof typeof Icons, text: "Minimal Performance Impact" },
      { icon: "fingerprint" as keyof typeof Icons, text: "Low Detection Risk" },
    ],
  },
  {
    id: "prod-kernel-unban",
    name: "Kernel Unban",
    description: "Permanent hardware ID unban solution using advanced kernel-level techniques.",
    image: "https://skatesgarage.cc/images/permanent%20spoofer.png",
    dataAiHint: "data unlock",
    features: [
      { icon: "cpu" as keyof typeof Icons, text: "Kernel-Level Spoofing" },
      { icon: "shield" as keyof typeof Icons, text: "Permanent Ban Removal" },
      { icon: "zap" as keyof typeof Icons, text: "Works on Major Anti-Cheats" },
      { icon: "fingerprint" as keyof typeof Icons, text: "One-Click Unban Process" },
    ],
  },
  {
    id: "prod-temp-unban",
    name: "Temp Unban",
    description: "Temporarily bypass your hardware ID ban to get back in the game quickly.",
    image: "https://skatesgarage.cc/images/temporary%20spoofer.png",
    dataAiHint: "timer clock",
    features: [
      { icon: "zap" as keyof typeof Icons, text: "Quick Temporary Unban" },
      { icon: "cpu" as keyof typeof Icons, text: "Easy to Use Interface" },
      { icon: "shield" as keyof typeof Icons, text: "Supports Multiple Games" },
      { icon: "fingerprint" as keyof typeof Icons, text: "Effective Session-Based Spoof" },
    ],
  },
];

export type Product = (typeof products)[0];
export type Announcement = (typeof announcements)[0];
export type Changelog = (typeof changelogs)[0];
