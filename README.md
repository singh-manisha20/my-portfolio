# Manisha Singh – Professional Portfolio

A premium, responsive React + Vite + TypeScript portfolio for an experienced software engineer.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  components/Portfolio.tsx
  data/experience.ts
  data/skills.ts
  data/projects.ts
  data/education.ts
  hooks/useActiveSection.ts
  types/index.ts
  App.tsx
  App.css
  index.css
  main.tsx
public/
  favicon.svg
  images/
  resume/README.txt
```

## Personal placeholders

- Add the real resume PDF at `public/resume/Manisha-Singh-Resume.pdf`.
- Replace the GitHub placeholder in `src/components/Portfolio.tsx` with the actual profile URL.
- The contact form does not send messages; connect it to a backend, Formspree, EmailJS or another email service.
- No confidential project source code, screenshots or internal URLs are included.

## Vercel deployment

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Select Vite as the framework preset.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy and add a custom domain if required.
