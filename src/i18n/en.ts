export const en = {
  nav: {
    features: "Features",
    howItWorks: "How It Works",
    commands: "Commands",
    stats: "Stats",
    addToDiscord: "Add to Discord",
  },
  hero: {
    badge: "Live & Active",
    title1: "Gifts, Drops &",
    title2: "Lucky Wheels",
    description:
      "The ultimate Discord bot for gift drops and lucky wheels. Be the fastest to grab gifts, build your streak, and spin the wheel of fortune every 200 messages.",
    addBot: "Add Gift Bot",
    learnMore: "Learn More",
  },
  features: {
    badge: "Core Features",
    title: "Two Powerful Features,",
    subtitle:
      "Endless excitement in your server. Here's what Gift Bot brings to the table.",
    drop: {
      title: "Gift Drops",
      description:
        "The bot sends gift drops in your server every hour. A gift button appears — the fastest person to click it wins the account! Speed is everything.",
      features: [
        "Automatic drops every hour",
        "Fastest click wins the account",
        "Real accounts as rewards",
      ],
    },
    wheel: {
      title: "Lucky Wheel",
      description:
        "Every 200 messages, you can spin the wheel of fortune! Your streak determines your luck percentage — the higher your streak, the better your odds from 10% to 90%.",
      features: [
        "Spin every 200 messages",
        "Streak boosts your luck (10%–90%)",
        "Streak emoji shows your chance",
      ],
      streakLevel: "Streak Level",
    },
  },
  howItWorks: {
    badge: "Step by Step",
    title: "How It Works",
    subtitle: "Getting started with Gift Bot is simple and fun.",
    steps: [
      {
        title: "Add the Bot",
        description: "Invite Gift Bot to your Discord server with one click.",
      },
      {
        title: "Wait for Drops",
        description:
          "Gift drops appear automatically every hour in your channels.",
      },
      {
        title: "Click Fast!",
        description:
          "Be the fastest to click the gift button and win the account.",
      },
      {
        title: "Build Your Streak",
        description:
          "Stay active, build your streak, and spin the lucky wheel every 200 messages.",
      },
    ],
  },
  commands: {
    badge: "Bot Commands",
    title: "Commands",
    subtitle: "Simple slash commands to interact with Gift Bot.",
    list: [
      {
        name: "/drop",
        title: "Start a gift drop in the channel",
        description: "Admins can manually trigger a gift drop for the server.",
      },
      {
        name: "/wheel",
        title: "Spin the lucky wheel",
        description:
          "Requires 200 messages. Your streak determines your luck percentage.",
      },
      {
        name: "/streak",
        title: "Check your current streak",
        description:
          "View your message streak and luck percentage for the wheel.",
      },
      {
        name: "/leaderboard",
        title: "View the top gift grabbers",
        description:
          "See who has the most gifts and highest streaks in the server.",
      },
      {
        name: "/profile",
        title: "View your gift profile",
        description:
          "See your total gifts, streak, messages, and luck stats.",
      },
      {
        name: "/help",
        title: "Get help and bot info",
        description: "Shows all available commands and how to use them.",
      },
    ],
  },
  stats: {
    badge: "By the Numbers",
    title: "Gift Bot Stats",
    servers: "Servers",
    users: "Users",
    giftsGiven: "Gifts Given",
    wheelSpins: "Wheel Spins",
  },
  cta: {
    title: "Ready to Start Winning?",
    description:
      "Add Gift Bot to your server now and join thousands of users already winning gifts and spinning the wheel!",
    addBot: "Add Gift Bot to Discord",
  },
  footer: {
    rights: "All rights reserved.",
    addBot: "Add Bot",
    commands: "Commands",
    features: "Features",
  },
} as const;

// DeepString makes all string values flexible for other languages
type DeepString<T> = T extends string
  ? string
  : T extends (infer U)[]
  ? DeepString<U>[]
  : T extends object
  ? { [K in keyof T]: DeepString<T[K]> }
  : T;

export type Translation = DeepString<typeof en>;
