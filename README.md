# deepinfer.run

Guide site for **DeepSeek DeepInfer** (primary) and **deepseek-recipe** (secondary).

- Live: https://deepinfer.run (custom domain pending NS) · https://deepinfer-run.pages.dev
- Pure static Cloudflare Pages (`deepinfer-run`) — no Pages Functions
- Quiet footer: unofficial community guide · not affiliated with DeepSeek

## Official sources

- https://github.com/deepseek-ai/DeepInfer (Apache-2.0)
- https://github.com/deepseek-ai/deepseek-recipe (MIT)
- Related: https://dshbase.com/

## Ads — 待建独立 placement

Adsterra **Social Bar only** (no Native Banner / 300×250).  
Live Social Bar: `https://bauval.org/14/f1ee1fe490192b0a856e617a2e113bc0` (SocialBar_1 / zone 31830530 / site 6136999).  
Never use dshbase unit `3a79b35d…`. Social Bar only — no Native Banner / 300×250.

## GA4 — 待填 GA4 测量 ID

Do **not** reuse dshbase `G-YVWXYEDWK5`.  
Every page has:

```js
window.__GA_ID__ = 'G-W75JV8JJKH';
```

Measurement ID **G-W75JV8JJKH** (independent; not dshbase). Change in page head `window.__GA_ID__` if rotating.

## Develop / deploy

```bash
python3 -m http.server 8787
export WRANGLER_CACHE_DIR=/tmp/wrangler-cache
npx wrangler pages deploy dist --project-name=deepinfer-run --commit-dirty=true
```

Brand: cool blue `#38BDF8` · mark `public/brand/mark.svg`.
