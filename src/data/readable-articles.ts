export interface ArticleSection {
  label: string;
  heading: string;
  body: string;
}
export interface ReadableArticle {
  slug: string;
  title: string;
  description: string;
  author: string;
  role: string;
  portrait: string;
  image: string;
  sections: ArticleSection[];
}
export const readableArticles: ReadableArticle[] = [
  {
    slug: "why-your-mood-deserves-better-content",
    title: "Why Your Mood Deserves Better Content",
    description:
      "Your state of mind changes—and your reading list should change with it.",
    author: "Niharika Jain",
    role: "Emotional UX Researcher",
    portrait: "/readable/lpCmKW6VNu2gYhsSZgVOpkcSvU.jpg",
    image: "/readable/p3Z5zH2jSIA6IktmOi8HEqYXOFc.png",
    sections: [
      {
        label: "Not Every Day Feels the Same",
        heading: "Your content should reflect how you feel, not fight it",
        body: "Some days you want motivation. Other days, you just need comfort or a distraction that makes you laugh. The problem is, most apps push whatever’s trending—not what you need. Mood-based content curation isn’t just a nice-to-have—it’s the future of meaningful, mindful reading.",
      },
      {
        label: "Reading Should Adapt to Your Energy",
        heading:
          "Bite-sized, soothing, or deep—let your mood decide the format",
        body: "If you’re low-energy, a five-minute summary is perfect. Feeling focused? Dive into a long-form feature. Our app gets this. It tailors the type of content and tone based on your vibe, so reading becomes a form of care, not just consumption.",
      },
      {
        label: "AI That Understands You = Content That Supports You",
        heading: "When tech pays attention, it delivers what really matters",
        body: "Using voice input and mood signals, our AI learns what kinds of content lift you up or help you reset. You’re not just getting articles—you’re getting support in the form of words. It’s not just smart—it’s personal.",
      },
    ],
  },
  {
    slug: "article-summaries-that-make-sense",
    title: "Article Summaries That Make Sense",
    description:
      "Save time, skip the fluff, and get straight to what matters with AI.",
    author: "Darren Cole",
    role: "AI Content Specialist",
    portrait: "/readable/w34mv0xl75Erf31TIITA0n8qaQo.jpg",
    image: "/readable/rkV6Wvj5pPEO1gWTi3YuB6UJaw.png",
    sections: [
      {
        label: "The Problem With Long Reads",
        heading: "Great content, but no time to read it all",
        body: "We’re flooded with brilliant think pieces, but most of us don’t have the time (or attention span) to process them. Skimming becomes the norm, and the value of the article is lost in a blur of scrolls and distractions. That’s where summaries come in—to respect your time without sacrificing the message.",
      },
      {
        label: "Smarter Summaries With Real Context",
        heading: "It’s not just about shorter—it’s about better",
        body: "Our AI doesn’t just chop down content. It highlights intent, preserves tone, and gives you the heart of the message. You get the who, what, why, and what now—without needing to decipher 15 paragraphs. It feels like a friend giving you the highlights over coffee.",
      },
      {
        label: "Choose Your Depth",
        heading: "Read at your own pace, your own way",
        body: "Whether you want a fast digest or a deeper dive, smart article summaries put you in control. Skim when you’re short on time, or expand when you’re curious. It’s flexible, adaptive, and built for how modern humans actually read and learn—on the go and in the flow.",
      },
    ],
  },
  {
    slug: "why-scrolling-is-out-and-speaking-is-in",
    title: "Why Scrolling Is Out and Speaking Is In",
    description:
      "Discover how voice-powered search is reshaping the way we read articles.",
    author: "Leena Kaur",
    role: "Voice Experience Researcher",
    portrait: "/readable/GsziVHwO9WqO73ygs6zszQUCgXo.jpg",
    image: "/readable/pRfPRv6mqS8whqgPrme2bT03I.png",
    sections: [
      {
        label: "The Scroll Fatigue Is Real",
        heading: "Information overload is silently burning us out",
        body: "We wake up and scroll. Stand in line and scroll. Even before bed—more scrolling. The problem? Our brains weren’t built for endless input. It leads to fatigue, anxiety, and decision paralysis. What started as curiosity becomes exhaustion. We don’t need more content—we need smarter ways to reach it.",
      },
      {
        label: "Your Voice Knows What You Want",
        heading: "Speaking out loud helps you search more clearly",
        body: "Talking is more natural than typing. When you speak, you don’t overthink keywords—you just say what’s on your mind. That’s what makes voice-powered discovery so refreshing. No filters. No complex search terms. Just pure, honest intent. And that’s what makes AI respond better to your actual needs.",
      },
      {
        label: "Let Tech Work the Way You Think",
        heading: "Why hands-free discovery is the future",
        body: "With AI that understands your words and your tone, article discovery becomes easier, faster, and even kind of fun. You talk, it listens, and within seconds, you’re reading something that actually matters to you. No clicks. No distractions. Just content that fits your vibe, not the algorithm’s.",
      },
    ],
  },
  {
    slug: "how-to-do-online-dating-as-weebs",
    title: "How To Do Online Dating As Weebs",
    description:
      "Is Sharing Anime Love a Match Made in Heaven? Feel free to check it out.",
    author: "Riku Sakamoto",
    role: "Pop Culture Writer",
    portrait: "/readable/kLhzYiC3FgjOn9d2Mc0AQu1uSJs.jpg",
    image: "/readable/3gVTKOrewAMq4jCyJ7oLlaYwhCY.png",
    sections: [
      {
        label: "Love at First Cosplay",
        heading: "Finding connection through shared fandoms",
        body: "For many anime lovers, discovering someone who speaks the same fandom language is magical. From quoting favorite lines to attending conventions, these shared moments foster an immediate sense of belonging. It’s not just about watching shows—it’s about experiencing a world together, and that builds strong emotional bonds right from the start.",
      },
      {
        label: "The Weeb Compatibility Test",
        heading: "When your waifu wishlist doesn’t align",
        body: "As fun as shared interests are, not all anime fans are the same. One person’s favorite anime might be another’s cringe. Debates over subs vs. dubs, top-tier studios, or even anime genres can reveal fundamental personality clashes. Compatibility goes beyond fandom—it’s about how you handle differences when your opinions clash like rival shōnen heroes.",
      },
      {
        label: "Beyond the Fandom Bubble",
        heading: "Building a relationship that lasts off-screen",
        body: "While a shared love for anime can kickstart romance, lasting connections need more. Do your goals align? Can you talk about things beyond character arcs and new releases? When fandom is the bonus, not the foundation, you create space for deeper emotional connection—and that’s what keeps the relationship going once the season ends.",
      },
    ],
  },
];
