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
HTML contains a **comment placeholder** only — do **not** long-term reuse the dshbase `bauval.org` unit.  
When PM creates a deepinfer.run Social Bar, paste the script URL into the shared footer comment on all pages (or a future shared partial).

## GA4 — 待填 GA4 测量 ID

Do **not** reuse dshbase `G-YVWXYEDWK5`.  
Every page has:

```js
window.__GA_ID__ = ''; // 待填 GA4 测量 ID
```

Set an independent `G-…` measurement ID from the GA4 property for deepinfer.run, then redeploy. Until then gtag does not load.

## Develop / deploy

```bash
python3 -m http.server 8787
export WRANGLER_CACHE_DIR=/tmp/wrangler-cache
npx wrangler pages deploy dist --project-name=deepinfer-run --commit-dirty=true
```

Brand: cool blue `#38BDF8` · mark `public/brand/mark.svg`.
