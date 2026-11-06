# Yo-HeYo-AI

A small site for the game Yo He-Yo, served by a local Node server.

## Requirements

- [Node.js](https://nodejs.org/) 18 or newer

## Run it

From this folder:

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

To use a different port:

```bash
# Windows PowerShell
$env:PORT = 8080; npm start
```

Stop the server with `Ctrl+C`.

## Files

| File | Role |
| --- | --- |
| `server.js` | Serves everything in `public/` |
| `public/index.html` | Page markup |
| `public/styles.css` | Page styles |
| `public/script.js` | Page behavior |

Edit the files in `public/`, save, and refresh the browser to see changes. Restart the server only if you change `server.js`.
