# USERNAME.github.io

Hej! 

Här är en mall för den webbplats ni kommer bygga över året. Den innehåller en del startkod för vissa av era webbsidor och en del färdig konfigerade delar så att ni bland annat kan hosta en egen hemsida på GitHub. 


## Fork av Github Repo

- Klicka på fork repository. Döp det nya repot till **USERNAME.github.io** där USERNAME är ert användarnamn på GitHub. Ni kan behöva byta namn på det repository ni skapade i ettan då ni testade på webbutveckling.




## GitHub Pages

Ni behöver aktivera GitHub Pages för ert repo när ni är klara:

![Instruktioner för GitHub Pages](github_pages.png "GitHub Pages Instruction")

Ni kan [läsa mer här](https://pages.github.com/).

Sedan kommer ni nå er hemsida på Ni kan [https://username.github.io](https://lisaviktorsson.github.io/).


## Köra er webbplats lokalt

För att kunna se era ändringar i realtid under utvecklingsprocessen så kommer ni köra er kod lokalt på datorn. Innan ni kan göra detta så kommer ni behöva installera en rad paket. Detta gör ni genom att skriva in följande kommando i terminalen:
```bash
npm install
```

För att starta en starta en utvecklingsserver lokalt på din dator används kommandot 

```bash
npm run dev
```

När er webbserver körs på er dator, kan du nå den genom att använda adressen "http://localhost:5173/" - siffrorna kan skilja sig ifall du har flera webbservrar igång. 

## Bygg er webbplats lokalt


Det enda som behövs för att bygga en statisk hemsida är att skriva in följande kommandot i terminalen:

```bash
# create a new project in the current directory
npm run build
```

Detta bygger er hemsida och lägger den i mappen docs/