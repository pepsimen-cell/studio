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
  { id: "service-4", name: "BO6 Unlocker", status: "Online" as const },
  { id: "service-5", name: "BO6 External", status: "Online" as const },
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
    id: "prod-bo6-unlocker",
    name: "BO6 Unlocker",
    description: "Unlock all in-game items, camos, and operators in Black Ops 6 instantly.",
    image: "https://cdn.discordapp.com/attachments/1330236077843288145/1351629865404862484/box_1.gif?ex=6875fb27&is=6874a9a7&hm=db18afba6085714f992edaee0f4f419a37e712731c3ed2cabfe99e8d25f74041&",
    dataAiHint: "video game soldier",
    features: [
      { icon: "wrench" as keyof typeof Icons, text: "Constantly Updated - Automatically Updates" },
      { icon: "shield" as keyof typeof Icons, text: "Private & Secure - Encrypted Anonymity" },
      { icon: "cpu" as keyof typeof Icons, text: "Kernel-level Security - Operates at the highest level" },
    ],
  },
  {
    id: "prod-bo6-external",
    name: "BO6 External",
    description: "External cheat for Black Ops 6, focused on safety and ease of use.",
    image: "https://skatesgarage.cc/images/SkatesBO6External.png",
    dataAiHint: "radar screen",
    features: [
      { icon: "wrench" as keyof typeof Icons, text: "Automatically Updates" },
      { icon: "zap" as keyof typeof Icons, text: "Strongest External" },
      { icon: "cpu" as keyof typeof Icons, text: "Kernel-level Security" },
      { icon: "shield" as keyof typeof Icons, text: "Lightweight & Powerful" },
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
