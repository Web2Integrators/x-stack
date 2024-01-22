<div align="center">
  <img src="/public/icons/X-light/safari-pinned-tab.svg" style="width: 20%;" alt="Click to see the source">
</div>

<h1 align="center">Web-first, cross-platform stack for building apps at scale.</h1>

<br>

<p align="center">🙅‍♂️ No more re-writing your code for different platforms</p>
<p align="center">🙅‍♂️ No more backend slowness</p>
<p align="center">🙅‍♂️ No more frontend optimization</p>

<br>

<p align="center">🙋‍♂️ Deployable on the web, mobile & desktop</p>
<p align="center">🙋‍♂️ SSR first & Edge-Ready</p>
<p align="center">🙋‍♂️ Signals based & Resumable</p>

<br>

<p align="center"><a href="https://x-stack.vercel.app/">Website demo</a></p>
<p align="center">
<a href="https://play.google.com/store/apps/details?id=app.vercel.x_stack.twa">Play Store demo 👀</a>
</p>

<br>

<p align="center">Come say hi on <a href="https://discord.gg/W4e8ReQWv2">Discord</a> 👋</p>

<br>
<br>

## Core design

**Empowering**

An all-in-one toolbox for you to stop worrying about DX, scalability, performance, security, compatibility, customizability, maintainability, data modeling, data quality, and costs.

**Intelligible**

A place for you to easily weigh the pros and cons of each fullstack framework, components library/collection, API architecture, Database, ORM, analytics service, Auth toolkit, deployment strategy, and development tool.

**Flexible**

A cli to let you choose great alternatives that better match your project requirements _(tbd)_.

## Building blocks - bleeding edge, but production-ready.

- ⚡️ **Fullstack framework: [Qwik](https://qwik.builder.io/)**
  - Make your app performant right from the start thanks to built-in resumability, automatic lazy-loading ($), signals-based reactivity, edge deployment, and server actions/loaders
  - Enjoy the best DX imaginable with code colocation, server/client RPC calls, app-wide middlewares, and automatic image optimization
  - Use any library from other frameworks (React & Angular ✅; Svelte, Solid & Vue incoming)
- ✨ **Components ~~library~~ collection: [Qwikcn](https://github.com/x-ploration-of-mars/qwikcn) (Shadcn "port" with Tailwind & headless components)**

  > ⚠️ Qwikcn is still a work in progress and should be considered as experimental!

  - Own your components and create your own design system to match your own brand requirements
  - Copy/Paste UI templates to speed up your scaffolding
  - Customize your sections and components easily with Tailwind utility classes
  - Bring in your favorite icon library: Lucide, HeroIcons, Font Awesome, etc.
  - Ship less CSS with Tailwind’s JIT (just in time) engine
  - Style your forms and markdown easily with @tailwindcss/forms and @tailwindcss/typography
  - Integrate your components with StoryBook _(tbd)_

- 🦺 **API layer: [Server actions/loaders](https://qwik.builder.io/docs/route-loader/)**
  - Never break your app again with end-to-end type safety
  - Handle Form validation with **Valibot** and **modular-form**
  - Rate limit your requests with **Upstash** (serverless Redis) _(tbd)_
- 💦 **ORM: [Drizzle](https://orm.drizzle.team/)**
  - Define a type-safe schema and take advantage of Intellisense/Auto-completion
  - Write queries even faster than raw SQL
  - Don’t worry about joins (thank you, relational queries)
  - Run migrations with ease
  - Use it anywhere, even on the edge
- 💪 **Database: [Planetscale](https://planetscale.com/) (Turso & Neon incoming)**
  - Scale to planet scale
  - Don’t worry about costs
  - Branch your database like you branch your code
  - Organize your migrations with deploy requests
  - Seamlessly deploy and revert schema changes with no downtime
  - Get real-time insights into your database performance
  - Integrate with third-party services for data warehousing, etc.
- 🎯 **Analytics: [GA4](https://analytics.google.com/analytics) (Plausible & Umami incoming)**
  - Enjoy a [100% free](https://support.google.com/analytics/answer/1070983?hl=en#zippy=%2Cin-this-article) non-open-source software
  - Keep track of your AARRR metrics with ease thanks to well-designed visualizations
  - Enjoy the power of cohort-based analysis to measure app usage and learn from your users
  - Run A/B tests with GrowthBook to find out what drives your users
  - Works on any platform
- 🔐 **Auth: Auth.js ([Qwik-Auth](https://qwik.builder.io/docs/integrations/authjs/))**
  - Enjoy a 100% free open-source auth solution
  - Easily implement social and OTP login
  - RBAC/ABAC support with custom user properties _(tbd)_
  - Choose between Database or JWT sessions _(tbd)_
  - Own your auth backend and improve query performance
- 🍀 **Development tools:**
  - Vscode extensions: Eslint, Prettier, Pretty Typescript Errors
  - AI assistants: [Codeium](https://codeium.com/) & [chatgpt](https://chat.openai.com/)
  - VScode shortcuts: `ctrl + d` `ctrl + f` `ctrl + shift + f` `ctrl + p`
  - Logging _(tbd)_
  - [Icon generation](https://tools.crawlink.com/tools/pwa-icon-generator/)
- 🌐📱💻🥽 **Deployment: [Vercel](https://qwik.builder.io/docs/deployments/vercel-edge/) (Netlify + Cloudflare incoming) + [TWA](https://www.pwabuilder.com/)**
  > ⚠️ Be aware that there is currently no deployment option for Vercel serverless on Qwik. It means a bit of extra latency with Planetscale's free tier that is deployed in one region vs Qwik on the edge.
  - Deploy your app seamlessly on the web, but also on mobile and desktop with just one codebase
  - Take advantage of the wide ecosystem of npm libraries from the web
  - Port your web app to native easily without impacting performance & development costs

Credits to [create-t3-app](https://github.com/t3-oss/create-t3-app) and the [epic-stack](https://github.com/epicweb-dev/epic-stack) that I’ve used as inspiration to make the 𝕏 stack a better stack.

<br>

# How to _(wip)_

## Test locally

- Clone project `git clone https://github.com/x-ploration/x-stack.git`
- Install dependencies `npm install`

### Add env variables

- Copy `.env.example` into `.env`
- Add `AUTH_SECRET` with this [secret generator](https://generate-secret.vercel.app/32) or with `openssl rand -base64 32`
- Add Discord provider `DISCORD_CLIENT_ID` `DISCORD_CLIENT_SECRET` with https://discord.com/developers/applications. You will need to create a new application (top-right corner button `New Application`) and copy the “client id” and “client_secret” from the oauth2 settings.
- Add Planetscale env vars. `DATABASE` `DATABASE_HOST` `DATABASE_USERNAME` `DATABASE_PASSWORD` with https://app.planetscale.com/. Go to `branches`, select your branch, click `connect`, and copy/paste.

### Add discord redirect

- Add discord redirect to your localhost url (e.g. `http://localhost:5173/api/auth/callback/discord`)

### Replace GA4 property

- In root.tsx, change id=G-VNBJX46X1T to your own GA4 property id

## Deploy

- Push your code into a new GitHub repository
- Go to vercel dashboard, `Add New` project (top-right button), and select your repository. Remember to add production env vars (the database env vars should point to your production database).
- On your terminal, run build command `yarn build`
- On your terminal, run deploy command `yarn deploy`
- Add discord redirect to your production url (e.g. `https://x-stack.vercel.app/api/auth/callback/discord`).

<br>

# Evaluation & Alternatives _(wip)_

The days of the MEAN (MongoDB, Express, Angular, Node.js) and MERN (MongoDB, Express, React, Node.js) stacks are over. For better or for worse, the web has gotten richer and richer. We now have amazing alternatives to what we used to use popping now and then, and this can feel overwhelming. So why not try to discuss and compare them in one single place?

## Fullstack Frameworks

When we look at a fullstack framework, we need to take into consideration many aspects: Reactivity; SSR; DX; the ecosystem. Most frameworks have at least acceptable levels of reactivity, SSR, and DX, but the ecosystem is what makes the difference. So who is winning the battle?

- 1️⃣ Qwik — Thanks to its serialized/resumable/compiled model, Qwik scores at the highest in many aspects: SSR _(ofc)_, but also Reactivity, DX, and **the ecosystem** (because you can run React inside of Qwik 🤯). Anything you can do in React, you can do in Qwik. But the opposite is not true. I wonder what could be possibly done in other frameworks that couldn’t be in Qwik 🤔.
- 2️⃣ React / Next / Remix — If you ask me, I’d say Next comes next (👈), followed by Remix. They are not as good in terms of Reactivity as Svelte, Solid, or even Vue, but you will find libraries you won’t find natively built in the other frameworks (e.g. [react webcam](https://www.npmjs.com/package/react-webcam)) and get newer trendy libraries sooner (hi 👋 [shadcn](https://github.com/shadcn-ui/ui)).
- 3️⃣ Svelte — I’d say it’s Svelte, because it is lightweight and brings significant performance gains, and it has Sveltekit ready. Rich Harris has also got some swag 👌.
- 4️⃣ Vue / Nuxt 3 — Although I highly respect Daniel Roe, I think apart from small performance gains, Vue 3’s composition api is simply React hooks into Vue. It isn’t worth losing the ecosystem.
- 5️⃣ Solid / Solidstart — Although Ryan is one of my heroes, Solidstart is still not solid (👈) enough to be used in production ☹️.
- 6️⃣ Angular…

## Authentication

- 1️⃣ Auth.js/Next-Auth — Open-source; 100% free; surprisingly powerful and flexible for an open-source library.
  - You won't find even half of its available adapters anywhere else.
  - Allows you to easily write custom logic through callbacks.
  - You can set up RBAC/ABAC pretty easily.
  - You can use jwt instead of database sessions if you want, although it's can be more complex and thus less secure.
- 2️⃣ Clerk — Not open-source; hard to beat the DX; good if you’re not just looking for basic auth but a complete identity management solution that’s **easy** to use.
  - Supports RBAC/ABAC.
  - Supports jwt has a crazy number of frameworks and third-party integrations.
  - The only catch is that it’s good if you don’t have more than 10,000 users, because (I’ll let you do the maths) $0.02/$0.05 is not cheap.
- 3️⃣ Supertokens — Open-source; really powerful; fair pricing; can be self-hosted; not so easy; good if you’re looking for advanced auth and identity management features that you couldn’t find elsewhere.
- 4️⃣ Supabase Auth — Open-source; not free; works with Postgres and Row-level security; good if you only use postgres.
  - It uses jwt sessions with refresh tokens under the hood. Expiry time is set to 1 hour by default, which means that if an attacker gets hold of the jwt token (not the refresh token), he will have access to your user’s account until that jwt expires. This is why, if you’re using Supabase Auth, you should use it with Postgres for maximum security.
- 5️⃣ Firebase Auth — Not open-source; free but not free if you use identity platform; works with Firestore, Firebase real-time database, and Firebase security rules; good if you only use Firebase.
  - It uses jwt sessions with refresh tokens under the hood. Expiry time is set to 1 hour by default, which means that if an attacker gets hold of the jwt token (not the refresh token), he will have access to your user’s account until that jwt expires. This is why, if you’re using Firebase Auth, you should use it with Firebase security rules for maximum security.
- 6️⃣ Lucia — Open-source; 100% free; works with server loaders & actions only; doesn't support jwt sessions; A bit new and might be more flexible but might also require deeper auth knowledge to implement than Auth.js; good if you hate jayson web tokens.
- 7️⃣ Auth0 — not OAuth; not cheap; not easy to use.
- 8️⃣ AWS Cognito — If you want to be locked in AWS forever.
- 9️⃣ Google Identity Platform — If you want to be locked in GCP forever.
- 🔟 Okta, Onelogin, FusionAuth, Keycloak — don't know much about them.

## Components collections → [🔗comparison-table](https://docs.google.com/spreadsheets/d/1CHG5uK4AoMEl4giF9uY0RDJawjTdtT27gFwoIdRlxTY/edit#gid=225083988) _(wip)_

- 1️⃣ Shadcn/ui
- 2️⃣ Tailwind-ui
- 3️⃣ Bootstrap
- 4️⃣ MUI
- 5️⃣ Bulma
- 6️⃣ Chakra-ui
- 7️⃣ Mantine
- 8️⃣ Ark UI

## API Architecture

- 1️⃣ tRPC
- 2️⃣ REST
- 3️⃣ GraphQL
- 4️⃣ loader/action RPC calls

## Database Platform

- 1️⃣ Planetscale
- 2️⃣ Turso
- 3️⃣ Neon
- 4️⃣ CockroachDB
- 5️⃣ Supabase
- 6️⃣ Railway
- 7️⃣ SurrealDB
- 8️⃣ Neo4j Aura
- 9️⃣ MongoDB
- 1️⃣0️⃣ Fauna
- 1️⃣1️⃣ ArrangoDB

## ORM

- 1️⃣ Drizzle
- 2️⃣ Kysely
- 3️⃣ Prisma
- 4️⃣ Knex
- 5️⃣ TypeORM

## Analytics

- 1️⃣ GA4
- 2️⃣ Umami
- 3️⃣ Plausible
- 4️⃣ Mixpanel
- 5️⃣ Amplitude
- 6️⃣ Matomo
- 7️⃣ Piwik Pro
- 8️⃣ Heap
- 9️⃣ Hotjar
- 1️⃣0️⃣ Gauges
- 1️⃣1️⃣ PostHog

## A/B Testing

- 1️⃣ GrowthBook
- 2️⃣ Optimizely

## Rate Limiting

- 1️⃣ Upstash
- 3️⃣ Memcached

## Deployment

- 1️⃣ Vercel
- 2️⃣ Netlify
- 3️⃣ Cloudflare pages
- 5️⃣ GCP
- 6️⃣ Azure

## Cross Platform solutions

The main goal of a cross-platform solution is to write your code once, and run it on multiple platforms to reduce development costs. But before we take a look at the available options, we need to talk about the fundamentals.

The core difference between web and native is that web always starts blank while native starts with a shell. As long as it's been built, you can access anything on the web, but you have to request the static parts (the shell) and the dynamic parts (the body) as part of the initial requests. On native apps on the other hand, you pre-download the static parts and then request the dynamic parts as the application is running.

All of this might seem obvious, but this fundamental difference forces you to choose between three strategies: web-first, native-first, or native-only.

### Web-first strategy

Web-first means that you build you app on the web and optimize it for the web with SSR for better SEO and performance - and then you port it to native. On the web, you are obviously limited to the web APIs, and so are you (more or less) when porting to native (for example, you can still use push notifications on native, which is a native API).

The key thing to understand here is that your native apps will mostly consist of an empty shell that serves your SSR optimized web app. This might feel a bit wrong, but an SSR optimized app with proper UI transitions and prefetching mechanisms can result in far better UX: an app that feels like an app with almost **zero** loading times.

> This is currently the strategy being used by the 𝕏 stack demo.

### Native-first

Native-first means that you build your app as if it were a native app on native and on the web, so that it can use the native APIs with equivalent fallbacks on the browser. For example, your app will use the native camera access on the android and ios apps, but will fallback to the web camera access on the web.

This approach has two major drawbacks. **(1)** In order to make this happen, you need to deploy your app as a static or CSR app that will fetch the body of the app once the static shell is up and running, which is known to be slower and bad for SEO. **(2)** It requires writing complex code that bridges the web and native APIs and will either result in limited capabilities or in imcompatibilities that will force you to write different code for native and web.

### Native-only

Native-only means that you build your app for all platforms except for the web. This allows you to use the native APIs to their full capabilities and even extend them further. This requires building your app quite differently than mobile-first and forces you to give up on having a website, which can be okay if you don't expect much benefits from SEO.

> The 𝕏 stack could potentially be used for native-only if future solutions support SSR out of the box. This would require testing.

<hr>

- 1️⃣ PWA — Web-first.
  - Installable through ios and android apps stores
  - Better performance than webviews on Android thanks to [TWA](https://developer.chrome.com/docs/android/trusted-web-activity/)
  - Incredibly easy to build with the web manifest
  - Needs a bit more testing on ios as a webview.
    > Push notifications should work with PWA on ios now. You can see PWA as a web app deployable on ios, android and desktop, hence web-first.
- 2️⃣ Capacitor — Native-first or Native-only.
  - Slow on Android because [Android webviews are slow](https://github.com/ionic-team/capacitor/discussions/3899)
  - Doesn't work with SSR (server.url isn't intended for use in production and it is impossible to set-up authentication tools that use cookies with it)
  - Can be buggy if you don't use Ionic
  - Plugins are quite limited, aren't updated often and can be buggy
- 3️⃣ Tauri — Native-first, Native-only and **potentially** web-first (requires testing)
  - Still in alpha/beta.
  - Likely slow on Android because [Android webviews are slow](https://github.com/ionic-team/capacitor/discussions/3899)
- 4️⃣ Socket-Supply — Native-first, Native-only and **potentially** web-first (requires testing)
  - Still in alpha/beta
  - Likely Slow on Android because [Android webviews are slow](https://github.com/ionic-team/capacitor/discussions/3899)
  - Allows you to implement an on-the-device backend (e.g. for handling file-system access) thanks to built-in Rust security.
  - Can extend native APIs with Socket APIs like P2P capabilities.
- 5️⃣ React-Native — Native-only (ios and android)
  - Battle tested for ios and android
  - React native for web is a joke, isn't it?
  - Limited to React (no automatic lazy-loading, no signals-based reactivity)

<br>

# Contributors _(tbd)_

## Cloudflare Pages

Cloudflare's [wrangler](https://github.com/cloudflare/wrangler) CLI can be used to preview a production build locally. To start a local server, run:

```
yarn serve
```

Then visit [http://localhost:8787/](http://localhost:8787/)

### Deployments

[Cloudflare Pages](https://pages.cloudflare.com/) are deployable through their [Git provider integrations](https://developers.cloudflare.com/pages/platform/git-integration/).

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages). Next go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/).

Within the projects "Settings" for "Build and deployments", the "Build command" should be `yarn build`, and the "Build output directory" should be set to `dist`.

### Function Invocation Routes

Cloudflare Page's [function-invocation-routes config](https://developers.cloudflare.com/pages/platform/functions/routing/#functions-invocation-routes) can be used to include, or exclude, certain paths to be used by the worker functions. Having a `_routes.json` file gives developers more granular control over when your Function is invoked.
This is useful to determine if a page response should be Server-Side Rendered (SSR) or if the response should use a static-site generated (SSG) `index.html` file.

By default, the Cloudflare pages adaptor _does not_ include a `public/_routes.json` config, but rather it is auto-generated from the build by the Cloudflare adaptor. An example of an auto-generate `dist/_routes.json` would be:

```
{
  "include": [
    "/*"
  ],
  "exclude": [
    "/_headers",
    "/_redirects",
    "/build/*",
    "/favicon.ico",
    "/manifest.json",
    "/service-worker.js",
    "/about"
  ],
  "version": 1
}
```

In the above example, it's saying _all_ pages should be SSR'd. However, the root static files such as `/favicon.ico` and any static assets in `/build/*` should be excluded from the Functions, and instead treated as a static file.

In most cases the generated `dist/_routes.json` file is ideal. However, if you need more granular control over each path, you can instead provide you're own `public/_routes.json` file. When the project provides its own `public/_routes.json` file, then the Cloudflare adaptor will not auto-generate the routes config and instead use the committed one within the `public` directory.
