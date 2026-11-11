# Petit Mot content and progress

Add vocabulary in app/vocab.ts and verbs in app/verbs.ts. Add guided sessions in app/lessons.ts. Keep existing word, verb, lesson and sentence IDs unchanged: these identify saved progress. Do not reuse old IDs for unrelated content.

Progress is an append-only stream in D1, scoped by the authenticated ChatGPT user ID from the platform. POST is idempotent by user/event ID. The browser caches pending answers per account and merges on focus, reconnect and every 30 seconds. Never replace the progress table when adding content. New schema changes require a new Drizzle migration.

Grades: 2 unaided, 1 aided/self-assessed, 0 revisit. Speaking is never a pronunciation score. Audio uses the device French speech-synthesis voice, with visible transcript fallback and no microphone.

Check TypeScript, content ID uniqueness and referenced lesson vocabulary after changes; check the affected interaction at phone width. Publish with the Sites workflow. Do not include temporary QA pages or test identities in the deployed assets.

Skipped guided sessions use a skip event. They do not grant XP, completion, review records, or stickers. Suggestions move past skipped sessions; the lesson grid always allows replay. A later lesson completion is displayed as completed.

The 9 November course adds positions and four room themes, six guided lessons, se trouver and s’appeler. Calendar/time and number practice were requested alongside it. Class vocabulary has course=2026-11-09 and extra=false; requested additions use extra=true. Existing content IDs stay unchanged.

PositionScene and ClockVisual are authored SVGs; uploaded classroom illustrations are not copied into the site. Grammar exercises map to sentence progress with stable lesson:grammar:index targets. Never reorder these indices after learners begin using them; append new questions instead. Plural forms are stored as metadata, not accepted as singular spelling aliases.

Corrected note slips: vous vous trouvez; nous nous appelons; rideau/tableau → rideaux/tableaux (-eau rule, not a rule for words ending in -n). Au-dessus and en dessous distinguish separation from sur/sous. Midi/minuit use demi; heures uses demie.
