import type { Icons } from "@/components/icons";

export const announcements = [
  {
    id: "announcement-1",
    title: "Welcome to Our New Website!",
    date: "2025-07-14",
    content:
      "We are excited to launch our new official website. Here you can find product information, status updates, and announcements all in one place.",
  },
];

export const changelogs = [
  {
    id: "changelog-1",
    version: "v1.0.0",
    date: "2025-07-14",
    changes: [
      {
        type: "Added",
        description: "Created new website.",
      },
    ],
  },
];

export const services = [
  { id: "service-2", name: "Fortnite Private", status: "Online" as const },
  { id: "service-3", name: "Fortnite Slotted", status: "Online" as const },
  { id: "service-6", name: "Kernel Unban", status: "Online" as const },
  { id: "service-7", name: "Temp Unban", status: "Online" as const },
  {
    id: "service-8",
    name: "Authentication Server",
    status: "Online" as const,
  },
];

export const products = [
  {
    id: "prod-private",
    name: "Fortnite Private",
    description: "Essential details about our flagship private solution.",
    image: "https://skatesgarage.cc/images/fortnite%20private.png",
    dataAiHint: "abstract tech",
    features: [
      { icon: "shield" as keyof typeof Icons, text: "Private & Secure - Strict Invite-Only Access & Advanced Encryption" },
      { icon: "fingerprint" as keyof typeof Icons, text: "Undetectable Technology - Dynamic Injection Method & Kernel-Level Security" },
      { icon: "zap" as keyof typeof Icons, text: "Pricing & Access - Affordable Plans & Spontaneous Delivery" },
    ],
  },
  {
    id: "prod-fortnite-slotted",
    name: "Fortnite Slotted",
    description: "Gain a competitive edge with our limited-slot Fortnite solution.",
    image: "https://media.discordapp.net/attachments/1394207576505454713/1394224089685819422/image.png?ex=687607de&is=6874b65e&hm=cceb7c17d641a9813e41724cf27239457df2fa8e9c3b2fa135294649c3e00311&=&format=webp&quality=lossless",
    dataAiHint: "abstract technology",
    features: [
      { icon: "shield" as keyof typeof Icons, text: "Slotted Access for Enhanced Security" },
      { icon: "fingerprint" as keyof typeof Icons, text: "Advanced Undetected Features" },
      { icon: "zap" as keyof typeof Icons, text: "Instant and Reliable Access" },
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
