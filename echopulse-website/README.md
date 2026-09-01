# EchoPulse

Interactive 3D collar interface for language tone and distance analysis.

The collar changes color, glow, and inflatable form from fused signals:

- Unfriendly language keeps a warm contracted state.
- Friendly language keeps a cool expanded state.
- Neutral language lets distance control the visual state.

## Deploy

This project is ready for Vercel.

Set this environment variable on the hosting platform:

```bash
OPENAI_API_KEY=your_key_here
```

The public page calls `/api/analyze`, and the API key stays on the server.

## Files

- `index.html` is the homepage.
- `project2.html` is a compatibility copy.
- `api/analyze.js` connects to OpenAI from the server.
- `transparent-twisted-bracelet-from-usdz-web.obj` is the 3D collar model.
- `echopulse-vendor/` contains the local Three.js runtime files.
