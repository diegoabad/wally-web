# wally-web

Landing y páginas legales de [Wally](https://soywally.com.ar) para monotributistas.

## Páginas

| Ruta | Uso |
|------|-----|
| `/` | Landing |
| `/privacidad` | Política de privacidad (Google OAuth) |
| `/terminos` | Términos y condiciones |
| `/contacto` | Contacto / soporte |

## Desarrollo

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

## Variables

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_APP_URL` — URL de la app (ej. `https://app.soywally.com.ar`)

## Deploy

Recomendado: **Vercel** en `soywally.com.ar` y `www.soywally.com.ar`.

## Google OAuth (consent screen)

Usá estas URLs en Google Cloud Console:

- **App home page:** `https://soywally.com.ar`
- **Privacy policy:** `https://soywally.com.ar/privacidad`
- **Terms of service:** `https://soywally.com.ar/terminos`
- **Authorized domain:** `soywally.com.ar`
