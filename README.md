# deepinfer.run

Independent guide site for **DeepSeek DeepInfer** (primary) and **deepseek-recipe** (secondary).

- Live: https://deepinfer.run
- Not affiliated with DeepSeek
- Pure static Cloudflare Pages (`deepinfer-run`) — no Pages Functions by default

## Official sources

- https://github.com/deepseek-ai/DeepInfer (Apache-2.0)
- https://github.com/deepseek-ai/deepseek-recipe (MIT)
- Related agent guide: https://dshbase.com/ · [DeepInfer for DSH readers](https://dshbase.com/blog/deepinfer-open-source-dsh-readers/)

## Develop

Static HTML/CSS/JS. Preview locally:

```bash
python3 -m http.server 8787
```

Deploy:

```bash
export WRANGLER_CACHE_DIR=/tmp/wrangler-cache
npx wrangler pages deploy . --project-name=deepinfer-run --commit-dirty=true
```

## Brand

SVG mark: `public/brand/mark.svg` (DI + pulse, cyan→violet on #0D0D12). Reference: `public/brand/reference.jpg`.
