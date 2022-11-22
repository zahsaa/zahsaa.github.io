# USERNAME.github.io

Hej! Här är en mall för att hosta en egen hemsida på GitHub i ett projekt som ni kallar USERNAME.github.io där USERNAME är ert användarnamn, typ som att mitt användarnamn är **williamviktorsson**.

Jag har förberett hela detta projekt med det som behövs för att bygga en statisk hemsida med kommandot:

```bash
# create a new project in the current directory
npm run build
```

Detta bygger er hemsida och lägger den i mappen docs/

Ni kan klona detta repo förslagsvis eller zippa och kopiera över det själva.

Ni behöver aktivera GitHub Pages för ert repo när ni är klara:

![Instruktioner för GitHub Pages](github_pages.png "GitHub Pages Instruction")

Ni kan [läsa mer här](https://pages.github.com/).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
