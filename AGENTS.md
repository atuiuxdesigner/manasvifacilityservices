<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The quote form posts through a server function (src/lib/quote.functions.ts) to the owner's Google Apps Script web app and only reports success when the script replies "OK", because a browser no-cors request can't verify delivery.
- Keep navigation collapsed below 1024px, use staged tablet grids, and reserve dense multi-column layouts for wide screens so all content remains readable without horizontal overflow.
- Hosting/deploy settings for Netlify live in `netlify.toml` at the repo root; keep its build command and publish directory matching the Vite/nitro output instead of duplicating them in chat or Netlify's UI.

