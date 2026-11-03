# Blue Star Spray Foam Insulation — website design preview

A public design preview for Blue Star, built around a clear customer-to-contractor handoff: describe the building, share existing plans or photos, and let Josh recommend the scope.

## Main version

The approved architectural design is the main GitHub Pages site at https://cmcnosky.github.io/blue-star-spray-foam-preview/. Previously shared `/concept/` page URLs redirect to the corresponding main pages. Generate both the current pages and these aliases with the root `build.py`; do not maintain a second concept build. The pre-promotion site is retained in Git history at commit `8d4d01f` and in the local Historical Source archive.

## Pages

- Home: project routes, applications, surface-area guidance, next steps and answers.
- Residential: existing spaces, new construction, air sealing and encapsulation inquiries.
- Commercial: drawings, specifications, addenda, bid timing and procurement requirements.
- Project: the real Blue Star intake, embedded from its separately hosted service.
- Privacy: the preview and review-processing boundaries.

## Local development

Run `python3 build.py` to regenerate the six HTML pages, then `python3 -m http.server 4173 --bind 127.0.0.1`.

`site.js` uses a local intake at `http://127.0.0.1:5173/intake-embed` when this preview is served from localhost. To work on static pages only, the fallback link opens the hosted form. On GitHub Pages the embedded form connects to the existing hosted Blue Star service.

## Hosting and data

GitHub Pages hosts only these static pages and public assets. Contact details, uploads, private review records and staff tools remain on the separately hosted Blue Star service. No customer files, backend source, database contents, credentials or staff instructions belong in this repository.

The parent accepts only the documented iframe sizing/dirty/submitted message from the exact intake origin and frame. No project details are passed to this parent through that channel. The form uses its own same-origin APIs. Its backend allows framing only by this GitHub Pages account origin and itself.

This preview adds no marketing analytics or ad trackers. It stores a local light/dim theme preference. Read `privacy.html` and the form consent for processing details. Submission creates a real Blue Star inquiry; uploading is not a booking or a firm price.

## Content and image provenance

Published contact information, service categories and gallery source images came from [Blue Star's current website](https://www.bluestarsprayfoam.com/), reviewed November 2 and rechecked November 3, 2026. The company has not supplied independently verified project names, locations, performance results, insurance, qualifications or capacity facts for this preview. Images are described as images from the existing gallery, without those additional claims.

The segmented-star logo and Blue Star / Spray Foam / Insulation wording retain the identity approved during this project. The metal-building photograph is resized and compressed for web delivery. The other photographs are existing gallery assets.

The original domain is not changed by publishing this preview. Search indexing is discouraged while the design is under review. Commercial prequalification claims and unattended email-delivery claims should be added only when supported by current evidence.
