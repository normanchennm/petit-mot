# Working on Petit Mot

Read README.md first; consult DEVELOPMENT.md for runtime details. Use targeted searches and read only relevant files to keep sessions efficient.

Preserve the learning content, responsive layout, accessibility, audio fallbacks, and existing progress event schema unless the task specifically changes them. Do not reset or export production user data.

Install with `npm run install:ci`; build with `npm run build` when executable source changes. Document any checks that cannot run. Documentation-only changes do not require a build.

Never commit secrets, `.env*`, `.dev.vars*`, local databases, node_modules, dist, or runtime caches. Preserve vendored license files.

GitHub is a shared source repository; it is not automatically synchronized with the existing Sites repository. Do not claim a GitHub commit updates the live app. For requested deployment, use authorized Sites access and reconcile both repositories before publishing. Forks must remove the original project_id before creating a different Site.
