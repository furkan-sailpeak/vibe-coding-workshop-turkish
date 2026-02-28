# Vibes 101 — Product Hunt Launch Updates

## Critical (Must Fix Before Launch)

- [x] Add SEO meta tags (`description`, `canonical`, `robots`)
- [x] Add Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- [x] Add Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:image`)
- [x] Create OG image (1200x630px) for social sharing
- [x] Add favicon (`<link rel="icon">` using vibes101-logo.svg)
- [x] Add apple-touch-icon for iOS
- [x] Add `<meta name="theme-color" content="#0a0a0a">`
- [x] Add rate limiting on `/api/generate` endpoint
- [x] Persist language preference in localStorage
- [x] Add Privacy Policy page
- [x] Add Terms of Service page

## Important (Should Fix)

- [ ] Add analytics (Plausible, PostHog, or similar)
- [x] Add `lang` attribute to `<html>` tag (switch dynamically with language toggle)
- [x] Add `<link rel="canonical">` URL
- [x] Add health check endpoint (`GET /health`)
- [x] Show user-facing error message when Groq API fails (not just silent fallback)
- [x] Add request body validation on server (`/api/generate`)
- [x] Add security headers (CSP, X-Frame-Options, X-Content-Type-Options)

## Nice to Have

- [x] PWA support (manifest.json + service worker)
- [x] Accessibility improvements (ARIA labels, focus management, skip links)
- [x] Syntax highlighting in generated prompt output
- [x] Copy-to-clipboard success animation/toast
- [x] Save/resume step progress across sessions

## Product Hunt Specific

- [x] Write tagline (max 60 chars)
- [x] Create hero image (1270x760px)
- [ ] Prepare gallery screenshots (3-5)
- [x] Draft maker comment / backstory
- [x] Prepare first comment for launch day
- [x] Update OG image meta tags

### Tagline (56 chars)
> Have an idea? Turn it into an AI-ready prompt in seconds.

### Hero Image
Use `2.png` (EN version). TR version: `1.png`.

### Gallery Screenshots (TODO)
Capture these screens:
1. Welcome / landing page with example cards
2. Step 1 — Describe your idea (with text filled in)
3. Step 2 — Feature selection (some cards selected)
4. Step 3 — Visual style picker (a style selected)
5. Step 4 — Generated prompt output with syntax highlighting

### Maker Comment / Backstory

I built Vibes 101 because I kept seeing the same problem: beginners hear about "vibe coding" and want to try it, but they don't know how to write a good prompt. They paste vague instructions into ChatGPT or Claude and get mediocre results.

Vibes 101 asks a few simple questions — what's your app idea, what features do you need, what visual style do you want — and generates a structured, optimized prompt with XML tags, phased instructions, and beginner-friendly guidance baked in.

It's completely free, works in Turkish and English, and doesn't require any sign-up. The generated prompt works with Claude, Cursor, ChatGPT, Gemini, or any AI coding tool.

This is part of my YouTube series "Practical Introduction to Vibe Coding for Beginners" (in Turkish), where I teach non-technical people how to build real apps with AI. Vibes 101 is the companion tool that makes the first step effortless.

I'd love to hear your feedback — especially from fellow makers who are building tools for beginners. What would you add?

### First Comment for Launch Day

Hey Product Hunt! 👋

I'm Furkan, and I built Vibes 101 to solve a simple problem: most people who want to try AI coding and create apps are simply complete beginners who don't know how to prompt their AI tool.

Vibes 101 turns "I want to build a portfolio site" into a detailed, structured prompt that any AI tool can understand. It is complete with phases, constraints, and beginner-friendly instructions.

Here's what makes it different:
- 🎯 Structured XML output that AI tools love
- 🎨 15 visual styles to choose from (Minimal, Brutalist, Neon, Bento, etc.)
- 🌍 Works in Turkish and English
- ⚡ No sign-up, no paywall, completely free
- 📱 Mobile friendly

Try it at vibes101.org and let me know what you think! Happy to answer any questions.
