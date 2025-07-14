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
    description: "Essential details about our Fortnite Private.",
    image: "https://cdn.discordapp.com/attachments/1394207576505454713/1394224088641441873/image.png?ex=687607de&is=6874b65e&hm=c13aaea389c3f36fa460ad94ec65fa1a91ed09e35a3239ae98ed0ca40983e166&",
    dataAiHint: "abstract tech",
    features: [
      { icon: "zap" as keyof typeof Icons, text: "Toggle Aimbot (Activate/Deactivate)" },
      { icon: "wrench" as keyof typeof Icons, text: "Adjustable Smoothing" },
      { icon: "fingerprint" as keyof typeof Icons, text: "Comprehensive Player ESP" },
      { icon: "cpu" as keyof typeof Icons, text: "Customizable ESP Colors" },
      { icon: "wrench" as keyof typeof Icons, text: "...and many more powerful features" },
    ],
  },
  {
    id: "prod-fortnite-slotted",
    name: "Fortnite Slotted",
    description: "Gain a competitive advantage with our Fortnite Slotted.",
    image: "https://media.discordapp.net/attachments/1394207576505454713/1394224089685819422/image.png?ex=687607de&is=6874b65e&hm=cceb7c17d641a9813e41724cf27239457df2fa8e9c3b2fa135294649c3e00311&=&format=webp&quality=lossless",
    dataAiHint: "abstract technology",
    features: [
      { icon: "shield" as keyof typeof Icons, text: "Undetected & Private Build" },
      { icon: "zap" as keyof typeof Icons, text: "Aimbot with Smoothness" },
      { icon: "fingerprint" as keyof typeof Icons, text: "Unique Loader Build for every User" },
      { icon: "cpu" as keyof typeof Icons, text: "Performance Optimized" },
      { icon: "wrench" as keyof typeof Icons, text: "Built-in Controller Support" },
      { icon: "shield" as keyof typeof Icons, text: "Fully Undetected and secure" },
      { icon: "fingerprint" as keyof typeof Icons, text: "Inbuilt Tournament Spoofer" },
      { icon: "zap" as keyof typeof Icons, text: "Competitive Ready - optimized for legit gameplay" },
    ],
  },
  {
    id: "prod-kernel-unban",
    name: "Kernel Unban",
    description: "Permanently bypass your HWID ban.",
    image: "https://cdn.discordapp.com/attachments/1394207576505454713/1394224089258004571/image.png?ex=687607de&is=6874b65e&hm=fe2baca493a2c6c39b09b416a3ed7156fbe1987bae5d33722178e34cb8e5c872&",
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
    description: "Temporarily bypass your HWID ban.",
    image: "https://cdn.discordapp.com/attachments/1394207576505454713/1394224088976982036/image.png?ex=687607de&is=6874b65e&hm=bfe56e872a2dce6571245cb3513c61a2bb9a03156adc40d64e6619691569af33&",
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
