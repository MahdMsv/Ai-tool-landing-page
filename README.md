🎙️ SpeakFlow AI — Landing Page

A high-end, modern SaaS landing page for an AI-powered English speaking improvement platform. 
📌 About the Project
SpeakFlow AI is a conceptual AI-powered platform that helps users improve their English speaking skills through real-time conversation simulations, pronunciation feedback, and personalized learning paths.
This repository contains a fully static, frontend-only landing page — designed to look like a real startup ready for launch and investor presentation.
Target Audience: Intermediate to advanced English learners preparing for interviews, business communication, or daily fluency improvement.

✨ Features of the Landing Page
SectionDescriptionHeroBold headline, description, primary & secondary CTA buttons, live preview cardFeatures6 feature cards with icons, hover effects, and glassmorphism stylingHow It Works3-step visual explanation with numbered indicators and connecting lineDemoInteractive fake chat UI with AI tutor responses and mic simulationPricingFree / Pro / Premium cards with a highlighted "Most Popular" tierTestimonials3 realistic user reviews with avatars and company infoFooterNavigation links, social icons, legal links

🎨 Design System

Typography: Sora (display/headings) + DM Sans (body) — via Google Fonts
Color Palette:

Primary: #4f6ef7 (electric blue)
Accent: #12c4b4 (teal)
Dark: #0d0d1a
Surface: #ffffff / #f5f5fa


Style: Premium SaaS — inspired by Stripe, Notion, and OpenAI
Effects: Glassmorphism cards, radial gradient backgrounds, grid overlays, smooth hover micro-interactions
Responsive: Fully mobile-first layout


🗂️ Project Structure
speakflow-landing/
│
├── speakflow-landing.html    # Main landing page (single file — HTML + CSS + JS)
└── README.md                 # Project documentation

The entire project lives in a single .html file — no build tools, no frameworks, no dependencies required.


🚀 Getting Started
Prerequisites
No installation needed. Just a modern web browser.
Run Locally
bash# Clone the repository
git clone https://github.com/MahdMsv/Ai-tool-landing-page.git

🧩 Tech Stack

HTML5 — Semantic structure
CSS3 — Custom properties, Flexbox, Grid, animations, media queries
Vanilla JavaScript — Scroll reveal, interactive chat demo, nav behavior
Google Fonts — Sora & DM Sans
No frameworks. No dependencies. Zero build step.


📱 Responsive Breakpoints
BreakpointLayout> 900pxFull desktop multi-column layout≤ 900pxTablet — single column sections, hamburger nav≤ 600pxMobile — condensed spacing, stacked components

🖱️ Interactive Elements

Navigation — Scroll-triggered shadow, mobile hamburger menu
Hero card — Animated score bars on viewport entry
Chat Demo — Type a message or click the mic button to simulate an AI conversation with feedback chips
Feature cards — Hover lift with gradient glow overlay
Scroll Reveal — Staggered fade-up animations on all sections
Pricing cards — Hover elevation with border highlight


📸 Sections Preview
┌──────────────────────────────────┐
│           NAV BAR                │
├──────────────────────────────────┤
│        HERO SECTION              │
│   Headline + CTA + Dashboard     │
├──────────────────────────────────┤
│      SOCIAL PROOF STRIP          │
├──────────────────────────────────┤
│       FEATURES  (6 cards)        │
├──────────────────────────────────┤
│      HOW IT WORKS  (3 steps)     │
├──────────────────────────────────┤
│    DEMO  (Live Chat UI)          │
├──────────────────────────────────┤
│    PRICING  (3 tiers)            │
├──────────────────────────────────┤
│    TESTIMONIALS  (3 reviews)     │
├──────────────────────────────────┤
│        CTA BANNER                │
├──────────────────────────────────┤
│           FOOTER                 │
└──────────────────────────────────┘

🔧 Customization
All design tokens are defined as CSS custom properties at the top of the <style> block — easy to theme:
css:root {
  --accent: #4f6ef7;       /* Primary brand color */
  --teal:   #12c4b4;       /* Secondary accent */
  --ink:    #0a0a0f;       /* Text color */
  --radius: 18px;          /* Border radius */
  --font-display: 'Sora'; /* Heading font */
  --font-body: 'DM Sans'; /* Body font */
}
To change the brand color, update --accent and --teal — everything adapts automatically.

📄 License
All Rights Reserved

👤 Author
Mahdi Mousavi

GitHub: @MahdMsv


🌟 Show Your Support
If you like this project, give it a ⭐ on GitHub — it means a lot!

Built with ❤️ and pure HTML/CSS/JS — no frameworks were harmed in the making of this page.
