# Phase 1 — Manasvi Facility Services Homepage

## Goal
Build the responsive homepage at `/`, closely matching the supplied Figma/PDF design and using the homepage PDF’s contact details as the approved source.

## What will be built
- Recreate the announcement bar, desktop/mobile navigation, branded hero, local trust details, and quote/WhatsApp/call actions.
- Build the six-service selector with an active state and contextual service copy.
- Recreate the value strip, About Manasvi, service-in-action gallery, four-step process, Pune/PMC coverage, closer-look gallery, quote form, final contact band, and footer.
- Add the persistent mobile action bar for Call, WhatsApp, and Quote.
- Use authentic images extracted from the supplied homepage design rather than inventing staff, reviews, or business claims.
- Make all phone, WhatsApp, email, navigation, and quote controls functional; the Phase 1 form will validate locally and prepare an enquiry for WhatsApp because persistent form delivery is outside this phase.

## Visual and responsive treatment
- Preserve the PDF’s clean blue/green/white visual system, typography hierarchy, compact rounded corners, editorial spacing, and asymmetric image layouts.
- Match the supplied desktop composition and create a deliberate mobile layout with readable content, touch-friendly controls, no overlaps, and a usable mobile menu.
- Keep motion subtle and disable non-essential effects for visitors who prefer reduced motion.

## Technical details
- Implement with the project’s existing React/TanStack and Tailwind setup, using semantic design tokens and existing interface controls.
- Add accessible labels, keyboard focus states, semantic landmarks, useful image descriptions, and clear form errors.
- Add homepage-specific title, description, Open Graph fields, social card metadata, and local-business structured data using only approved facts.
- Keep Phase 1 static-first: no database, email delivery, analytics service, or CMS will be added.

## Verification
- Check desktop and mobile renderings against the supplied PDF.
- Test menu behavior, service selection, call/WhatsApp links, quote scrolling, form validation, and the mobile action bar.
- Confirm the preview builds cleanly with no browser errors or broken images.
