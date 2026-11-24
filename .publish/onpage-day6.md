BROWSER RULE (Hamza): don't paste prompts/text/links by script (no JS injection, clipboard script or fill command); only paste or type like a human; leave a 30–60 second gap between actions; move the cursor along random human-like paths, not straight lines.

MODE: AUTOMATED (Hamza 12 Nov + 16 Nov: local build/test first, then PR base main, merge when green, deploy live, verify live yourself). Automatic Vercel preview on a feature-branch PR is fine; do NOT change Vercel settings or promote a preview yourself. Merge and deploy live without waiting for Hamza.

Repo: infowayfreelance/MH-RECOVERY-SERVICE-LTD
Branch from main: onpage-jump-starts-sheffield
PR base: main

Page ONLY: https://mhrecoveryserviceltd.co.uk/services/jump-starts-sheffield
Scope: copy, metadata, JSON-LD, internal links. No design/layout/image change. Reuse existing section/list/step/accordion components. Keep the simple, short-sentence tone.

Brand hard rules:
- "MH Recovery Service Ltd"; phone **07799 180009** only; address Coupe Road, Sheffield S3 9DP (no street number)
- No prices, no ETAs in minutes, no height limits, no ratings/testimonials, no Meadowhall rules, no EV capability claims, no battery replacement/testing offers; don't name other businesses
- Don't touch the homepage (rank-well-leave), /blog/car-recovery-without-keys, or the Day 1–5 service pages (car-towing, lost-car-keys-help, breakdown-recovery, car-recovery, accident-recovery)

Full Day-6 competitor-gap brief follows next — implement every section (title/meta/og with brand, fix "Ltd ?" spacing, 4 new H2s: signs your battery is getting weak, why batteries go flat in winter, quick checks before you call, after the jump start; FAQ 6 → 10 with JSON-LD text matching the visible answers; Service JSON-LD update; internal links incl. the two blog guides). Build/test locally, push, PR base=main, merge when green, deploy live.

Report back: live URL, PR number, merge SHA, and the brief's verify checklist (section 8) with PASS/FAIL. Confirm the homepage is unchanged.

========== FULL DAY-6 BRIEF ==========

BROWSER RULE (Hamza): don't paste prompts/text/links by script (no JS injection, clipboard script or fill command); only paste or type like a human; leave a 30–60 second gap between actions; move the cursor along random human-like paths, not straight lines.

# On-page brief: mhrecoveryserviceltd.co.uk/services/jump-starts-sheffield (Day 6, 24 Nov 2026) — competitor-gap pass

**For:** ChatGPT, in the mhrecoveryserviceltd.co.uk "Website work" chat.
**Mode:** AUTOMATED — local build/test, PR base **main**, merge when green, deploy live; verify live yourself; report the live URL + PR number + merge SHA. Automatic Vercel preview on a feature-branch PR is fine; do NOT change Vercel settings. Merge and deploy without waiting for Hamza.
**Repo:** infowayfreelance/MH-RECOVERY-SERVICE-LTD · **Branch:** onpage-jump-starts-sheffield · **PR base:** main
**Scope:** copy, metadata, JSON-LD and internal links on this page only. **No design, layout or image changes.** Reuse the existing section, step, list, card and accordion components. White-hat only. Keep the page's simple, short-sentence tone.
**Page:** https://mhrecoveryserviceltd.co.uk/services/jump-starts-sheffield
**Status in queue:** row #6, "done" on the 19 Nov crawl (basics in place: Service, BreadcrumbList, FAQPage 6 whose text matches the visible answers). Today is the competitor-gap pass. Found on 24 Nov: no brand in the title ("Jump Start Service Sheffield | 24/7 Phone Line"), nothing on **the signs of a weak battery**, **why batteries go flat** (cold mornings, short trips, a car left parked), **quick checks before calling**, or **what to do after the jump start**; no answer for **car parks** or **hybrid/electric cars**; a stray space in the H2 "Why Choose MH Recovery Service Ltd ?"; and no links to the two existing blog guides on the topic (/blog/jump-start-car-on-a-hill-sheffield, /blog/car-park-recovery-sheffield).

## Brand rules (MH Recovery Service Ltd)
- Name **"MH Recovery Service Ltd"**; phone **07799 180009** only; address Coupe Road, Sheffield S3 9DP (no street number).
- **No prices, no ETAs in minutes, no height limits, no ratings/testimonials, no Meadowhall rules, no EV capability claims** (only "tell us if it's electric or hybrid", as on the page now). Don't name other businesses. No battery-replacement or battery-testing claims (the page doesn't offer them; send people to a garage).
- Services business, Sheffield only among the 8 sites; plain, short sentences.

## Why this page (GSC first)
- GSC 16 Nov export (Web, "3 months" setting; data 14 Oct–14 Nov 2026, short history; `/workspace/gsc-onpage-2026-11-16/mhrecoveryserviceltd.co.uk/Pages.csv`): **this page 0 clicks, 29 impressions, avg pos 48.1** — not ranking well (rule: leave only if avg pos ≤8 with clicks), so the gap pass goes ahead.
- Related queries (site-level `Queries.csv`; query→page mapping inferred): "jump start service" 12 impr pos 60.7 · "jumpstart service" 4 pos 67 · "car jump start service" 2 pos 91.5 · "jump start assistance" 1 pos 49. So the title keeps the exact phrase **"Jump Start Service Sheffield"** and adds the brand.
- **Cannibalisation notes:** (1) the homepage owns "recovery sheffield" / "breakdown recovery sheffield" (rank-well-leave): **do not touch the homepage.** (2) /blog/jump-start-car-on-a-hill-sheffield and /blog/car-park-recovery-sheffield are articles: link to them as "read more" and don't copy them. (3) /services/breakdown-recovery-sheffield and /services/car-recovery-sheffield are the "still won't start" next step: link, don't repeat.
- Live page (curl 24 Nov): HTTP 200, 943 words, H1 "Jump Start Service in Sheffield", 6 H2s + CTA, Service + BreadcrumbList + FAQPage (6), 15 internal links, phone 07799 180009. Extract: `/workspace/onpage-daily/2026-11-24/competitors/_own-pages/mhrecoveryserviceltd_co_uk_services_jump_starts_sheffield.txt`.

## Competitors checked (web search "jump start service Sheffield 24/7 flat battery", UK, 24 Nov 2026)
| Competitor | Title (chars) | Words | Schema | What they have that we don't |
|---|---|---|---|---|
| [TowManVan – Jump start Sheffield](https://towmanvan.co.uk/jump-start-sheffield) | Jump Start Sheffield - Flat Battery from £49 \| TowManVan (56) | 2,005 | FAQPage (16), EmergencyService, AutoRepair, BreadcrumbList | Long local section ("Seven Hills and why a Sheffield battery works harder", Parkway approach, parking spots), **"Boosted but it still won't run – what's happening?"**, EV/hybrid 12V explainer, **"Why where you park changes the callout"**, 16 FAQs |
| [JumpStartUK – Sheffield](https://jumpstartuk.uk/jump-start-sheffield/) | Car Jump Start Sheffield \| 24/7 Jump Start Service (50) | 1,244 | BreadcrumbList, WebPage (no FAQPage) | **"Why car batteries go flat"**, **"Signs your car battery is dying"**, 5-step "how it works", vehicle types (car, van, hybrid, EV 12V), FAQ "how long to charge after a jump start?" |
| [CarPal – Sheffield](https://carpal.uk.com/jump-start-sheffield/) | Jump Start Sheffield \| 24/7 Car Jump Start Service (50) | 786 | BreadcrumbList, WebPage | **"When a jump start is not enough"** + signs the battery needs replacing, areas list (same phone as JumpStartUK) |
| [Flat Battery Call Out – Sheffield](https://www.flat-battery-call-out.co.uk/Cities/sheffield.html) | Flat Battery Call Out Sheffield \| 24/7 Jump Start & Battery Replacement (75) | 844 | FAQPage (5), AutomotiveBusiness, LocalBusiness, BreadcrumbList | "Service facts" table, "typical jobs" (car parks, residential streets), local FAQs (steep drives, campus car parks, **winter grit on terminals**) |
Not readable today: carrecoverysheffield.com battery page (connection failed). Extracts: `/workspace/onpage-daily/2026-11-24/competitors/mh/`. (Their prices "from £49/£50", "25-minute"/"30–60 minute" arrival targets, "DBS-checked", battery replacement and free battery test offers are theirs; **don't copy any of them**; don't name them on our page.)

**Gap summary:** our page is already strong on "what to tell us" and the quote-first process. What the competitors do better: **keyword-led titles** (ours keeps the keyword and gains the brand) and **useful battery content**: why batteries go flat, signs a battery is dying, what to do after the boost, when a jump start isn't enough, car parks and hybrids/EVs. Add four short blocks, four FAQs and the missing links; no padding.

## 1. Title, meta, og
| Element | Current | New |
|---|---|---|
| Title | Jump Start Service Sheffield \| 24/7 Phone Line (46) | **Jump Start Service Sheffield \| MH Recovery Service Ltd** (54) |
| Meta | Jump start service Sheffield. MH Recovery Service Ltd serves Sheffield and South Yorkshire. Call our 24/7 phone line to discuss your car. (137) | **Flat battery in Sheffield? MH Recovery Service Ltd gives jump starts at home, in car parks or at the roadside. Call 07799 180009 for a quote first.** (147) |
| H1 | Jump Start Service in Sheffield | No change |
Update og:title / og:description / twitter tags to match.

## 2. Edit existing copy (text only)
- H2 "Why Choose MH Recovery Service Ltd ?" → **"Why Choose MH Recovery Service Ltd?"** (remove the space before "?").
- "Related services" line (…breakdown recovery in Sheffield / vehicle towing in Sheffield. Roadside assistance in Sheffield is also available — call us to discuss your needs.): keep as it is.
- Everything else (the 4 steps, "Jump Starts Across Sheffield", "Why Choose", the CTA) stays. Don't add ETAs, prices or battery-replacement offers.

## 3. New sections (existing section / list / card components; insert after "What to Tell Us About Your Battery Problem" (with its 4 steps) and before "Jump Starts Across Sheffield", in this order)

**H2: Signs Your Battery Is Getting Weak**
A battery often gives warnings before it stops the car. Look out for:
- The engine turning over slowly, especially on a cold morning.
- A clicking sound when you turn the key or press start.
- Dim lights, or the dashboard flickering when you try to start.
- A battery warning light while you drive.
- Needing a jump start more than once in a short time.
These signs point to the battery or the charging system, but they do not prove which. Tell us what you notice, and ask a garage to test both.

**H2: Why Car Batteries Go Flat in Winter**
Cold weather makes it harder for a battery to start the engine. Short journeys do not give it time to recharge, and a car left parked for a few weeks can lose charge on its own. Lights, an interior light or a charger left plugged in can also drain it overnight. An older battery is more likely to struggle when all of these come together. Parked on a steep street? Read our guide to [jump starting a car on a hill in Sheffield](/blog/jump-start-car-on-a-hill-sheffield).

**H2: Quick Checks Before You Call**
- Make sure the lights and interior lights are off.
- In an automatic, check the gear selector is in Park.
- If the car has keyless start, the key fob battery may be weak. Your handbook explains how to start the car with a weak fob.
- If the steering is locked, turn the wheel gently while you try to start.
- Do not keep trying to start a car that only clicks. It can drain the battery further.
If you have lost the key rather than the battery going flat, see our [lost car keys help in Sheffield](/services/lost-car-keys-help-sheffield).

**H2: After the Jump Start: What to Do Next**
1. **Keep the engine running.** Do not switch off straight away.
2. **Take a longer drive** if the car drives normally, so the battery can recharge.
3. **Book a garage check** of the battery and charging system, especially if it has gone flat before.
4. **If the car still will not start**, we explain the recovery option on the call. See [breakdown recovery in Sheffield](/services/breakdown-recovery-sheffield), [car recovery in Sheffield](/services/car-recovery-sheffield) and our guide on [how to get a car towed to a garage in Sheffield](/blog/how-to-get-car-towed-to-garage-sheffield).

## 4. FAQs (exact text; keep the 6 existing Q&As unchanged and add the 4 new ones at the end; FAQPage **10**, JSON-LD text identical to the visible answers)
1. **Can you jump start my car at home?** Yes, we provide jump starts at home in Sheffield. Tell us your address and where the car is parked.
2. **What details do you need for a jump start?** We need your location, registration, make, model and a description of what happens when you try to start the car. Please mention access limits and any earlier attempts to start it.
3. **Will a jump start fix my battery?** No, a jump start does not repair the battery. If the problem returns, ask a garage to find the cause.
4. **What if my car still will not start?** Recovery is the next option to discuss if the car remains stopped. We agree the destination and quote with you before arranging the move.
5. **Can I call for help at night?** Yes, our phone line is open 24 hours a day, 7 days a week. We give you an estimated arrival time during the call.
6. **Do you cover outside Sheffield?** We serve Sheffield and South Yorkshire. For nearby areas such as Rotherham, Barnsley and Doncaster, call us and we will confirm coverage.
7. **Can you jump start a car in a car park?** Tell us the car park name, the level and the space, and whether there is a barrier or a low entrance. We will explain on the call how the job can be handled. Read our guide to [car park recovery in Sheffield](/blog/car-park-recovery-sheffield).
8. **Can you jump start a hybrid or electric car?** Tell us the car is hybrid or electric, with the make and model, when you call. We will tell you on the call whether a jump start is suitable or whether recovery is the better option. Do not connect jump leads to a hybrid or electric car without checking the handbook first.
9. **Why does my battery keep going flat?** Common causes are short journeys that do not recharge the battery, a car left unused for a while, something left switched on, an ageing battery or a fault in the charging system. A jump start gets the car going but does not find the cause, so ask a garage to test the battery and charging system.
10. **What should I do after a jump start?** Keep the engine running and, if the car drives normally, take a longer drive rather than switching off straight away. If a warning light stays on or the car will not restart, call us to talk about recovery, and have the battery and charging system checked by a garage.

**FAQ HTML (answers must be in the server-rendered HTML; keep the site's accordion classes, this shows the content and links):**
```html
<section class="faq" aria-labelledby="faq-heading">
  <div class="faq-item">
    <h3>Can you jump start my car at home?</h3>
    <div class="faq-answer"><p>Yes, we provide jump starts at home in Sheffield. Tell us your address and where the car is parked.</p></div>
  </div>
  <div class="faq-item">
    <h3>What details do you need for a jump start?</h3>
    <div class="faq-answer"><p>We need your location, registration, make, model and a description of what happens when you try to start the car. Please mention access limits and any earlier attempts to start it.</p></div>
  </div>
  <div class="faq-item">
    <h3>Will a jump start fix my battery?</h3>
    <div class="faq-answer"><p>No, a jump start does not repair the battery. If the problem returns, ask a garage to find the cause.</p></div>
  </div>
  <div class="faq-item">
    <h3>What if my car still will not start?</h3>
    <div class="faq-answer"><p>Recovery is the next option to discuss if the car remains stopped. We agree the destination and quote with you before arranging the move.</p></div>
  </div>
  <div class="faq-item">
    <h3>Can I call for help at night?</h3>
    <div class="faq-answer"><p>Yes, our phone line is open 24 hours a day, 7 days a week. We give you an estimated arrival time during the call.</p></div>
  </div>
  <div class="faq-item">
    <h3>Do you cover outside Sheffield?</h3>
    <div class="faq-answer"><p>We serve Sheffield and South Yorkshire. For nearby areas such as Rotherham, Barnsley and Doncaster, call us and we will confirm coverage.</p></div>
  </div>
  <div class="faq-item">
    <h3>Can you jump start a car in a car park?</h3>
    <div class="faq-answer"><p>Tell us the car park name, the level and the space, and whether there is a barrier or a low entrance. We will explain on the call how the job can be handled. Read our guide to <a href="/blog/car-park-recovery-sheffield">car park recovery in Sheffield</a>.</p></div>
  </div>
  <div class="faq-item">
    <h3>Can you jump start a hybrid or electric car?</h3>
    <div class="faq-answer"><p>Tell us the car is hybrid or electric, with the make and model, when you call. We will tell you on the call whether a jump start is suitable or whether recovery is the better option. Do not connect jump leads to a hybrid or electric car without checking the handbook first.</p></div>
  </div>
  <div class="faq-item">
    <h3>Why does my battery keep going flat?</h3>
    <div class="faq-answer"><p>Common causes are short journeys that do not recharge the battery, a car left unused for a while, something left switched on, an ageing battery or a fault in the charging system. A jump start gets the car going but does not find the cause, so ask a garage to test the battery and charging system.</p></div>
  </div>
  <div class="faq-item">
    <h3>What should I do after a jump start?</h3>
    <div class="faq-answer"><p>Keep the engine running and, if the car drives normally, take a longer drive rather than switching off straight away. If a warning light stays on or the car will not restart, call us to talk about recovery, and have the battery and charging system checked by a garage.</p></div>
  </div>
</section>
```

## 5. Schema (JSON-LD), this page only
BreadcrumbList stays exactly as it is (Home › Services › Jump Start Service Sheffield). Replace the Service block with this (adds `@id` and a clearer description; provider unchanged):
```json
{
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": "https://mhrecoveryserviceltd.co.uk/services/jump-starts-sheffield#service",
 "name": "Jump Start Service Sheffield",
 "serviceType": "Jump start service",
 "description": "Jump start help in Sheffield and South Yorkshire when a flat battery stops your car, at home, in car parks or at the roadside. MH Recovery Service Ltd gives a quote and an estimated arrival time on the call, and explains the recovery option if the car still will not start.",
 "areaServed": [
  {
   "@type": "City",
   "name": "Sheffield"
  },
  {
   "@type": "AdministrativeArea",
   "name": "South Yorkshire"
  }
 ],
 "provider": {
  "@type": "AutomotiveBusiness",
  "name": "MH Recovery Service Ltd",
  "url": "https://mhrecoveryserviceltd.co.uk",
  "telephone": "+447799180009",
  "address": {
   "@type": "PostalAddress",
   "streetAddress": "Coupe Road",
   "addressLocality": "Sheffield",
   "postalCode": "S3 9DP",
   "addressCountry": "GB"
  },
  "areaServed": "Sheffield",
  "openingHours": "Mo-Su 00:00-23:59"
 },
 "url": "https://mhrecoveryserviceltd.co.uk/services/jump-starts-sheffield"
}
```
Replace the FAQPage block with this (all 10 visible Q&As, same order, text identical):
```json
{
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "@id": "https://mhrecoveryserviceltd.co.uk/services/jump-starts-sheffield#faq",
 "mainEntity": [
  {
   "@type": "Question",
   "name": "Can you jump start my car at home?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes, we provide jump starts at home in Sheffield. Tell us your address and where the car is parked."
   }
  },
  {
   "@type": "Question",
   "name": "What details do you need for a jump start?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "We need your location, registration, make, model and a description of what happens when you try to start the car. Please mention access limits and any earlier attempts to start it."
   }
  },
  {
   "@type": "Question",
   "name": "Will a jump start fix my battery?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "No, a jump start does not repair the battery. If the problem returns, ask a garage to find the cause."
   }
  },
  {
   "@type": "Question",
   "name": "What if my car still will not start?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Recovery is the next option to discuss if the car remains stopped. We agree the destination and quote with you before arranging the move."
   }
  },
  {
   "@type": "Question",
   "name": "Can I call for help at night?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes, our phone line is open 24 hours a day, 7 days a week. We give you an estimated arrival time during the call."
   }
  },
  {
   "@type": "Question",
   "name": "Do you cover outside Sheffield?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "We serve Sheffield and South Yorkshire. For nearby areas such as Rotherham, Barnsley and Doncaster, call us and we will confirm coverage."
   }
  },
  {
   "@type": "Question",
   "name": "Can you jump start a car in a car park?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Tell us the car park name, the level and the space, and whether there is a barrier or a low entrance. We will explain on the call how the job can be handled. Read our guide to car park recovery in Sheffield."
   }
  },
  {
   "@type": "Question",
   "name": "Can you jump start a hybrid or electric car?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Tell us the car is hybrid or electric, with the make and model, when you call. We will tell you on the call whether a jump start is suitable or whether recovery is the better option. Do not connect jump leads to a hybrid or electric car without checking the handbook first."
   }
  },
  {
   "@type": "Question",
   "name": "Why does my battery keep going flat?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Common causes are short journeys that do not recharge the battery, a car left unused for a while, something left switched on, an ageing battery or a fault in the charging system. A jump start gets the car going but does not find the cause, so ask a garage to test the battery and charging system."
   }
  },
  {
   "@type": "Question",
   "name": "What should I do after a jump start?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Keep the engine running and, if the car drives normally, take a longer drive rather than switching off straight away. If a warning light stays on or the car will not restart, call us to talk about recovery, and have the battery and charging system checked by a garage."
   }
  }
 ]
}
```
No ratings, prices, ETAs or EV capability claims in any schema.

## 6. Internal links (body copy)
- /blog/jump-start-car-on-a-hill-sheffield (3b) · /services/lost-car-keys-help-sheffield (3c) · /services/breakdown-recovery-sheffield, /services/car-recovery-sheffield, /blog/how-to-get-car-towed-to-garage-sheffield (3d) · /blog/car-park-recovery-sheffield (FAQ 7).
- No external links needed (the advice is general; don't cite or name other businesses).
- Keep all existing links (Related Services, nav, footer, CTA). All internal targets are in the live sitemap (21 URLs, 24 Nov).

## 7. Do NOT touch
- Design, layout, nav, the phone banner (07799 180009 only), footer, images, the WhatsApp link.
- Brand hard rules: "MH Recovery Service Ltd"; phone **07799 180009** only; address Coupe Road, Sheffield S3 9DP (no street number). **No prices, no ETAs in minutes, no height limits, no ratings/testimonials, no Meadowhall rules, no EV capability claims, no battery replacement/testing offers.** Don't name other businesses.
- **Don't touch the homepage** (rank-well-leave), /blog/car-recovery-without-keys (ranking post), /services/car-towing-sheffield (Day 1), /services/lost-car-keys-help-sheffield (Day 2), /services/breakdown-recovery-sheffield (Day 3), /services/car-recovery-sheffield (Day 4), /services/accident-recovery-sheffield (Day 5) or the blog posts (link only).
- URL stays `/services/jump-starts-sheffield`. H1 unchanged.

## 8. Verify after deploy (report back)
1. PR number, merge SHA, live URL 200 with self-referencing canonical.
2. `<title>`, meta and og/twitter tags match section 1; H1 unchanged and the only H1; the "Why Choose…" H2 has no space before "?".
3. The 4 new H2s are visible between "What to Tell Us About Your Battery Problem" and "Jump Starts Across Sheffield".
4. Rich Results Test: FAQPage (10), Service and BreadcrumbList valid; each FAQ answer in JSON-LD is identical to the visible text.
5. grep the HTML: "07799 180009" present; no "£", "minutes", "height", "rating", "Meadowhall", "battery replacement" in the new copy.
6. New body links return 200; the homepage is unchanged (same title/H1 as before).
