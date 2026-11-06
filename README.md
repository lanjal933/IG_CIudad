# IG_Ciudad — Tickets a la Isla

Landing page de registro/tickets. Los usuarios dejan su **nombre, email y @ de Instagram**, y quedan guardados en una planilla.

Incluye sección de **objetivos de seguidores** (1K → 20K) con las recompensas de expansión de la isla.

> **Importante:** es una web de registro informativa. No hay verificación de follows ni mecanismos de canje — solo recolección de datos de interés.

## Archivos

- `index.html` — landing completa (frontend, autocontenida)
- `backend/Code.gs` — script de Google Apps Script que recibe los datos y los guarda en Google Sheets

## Cómo funciona el guardado

### Opción A — Google Sheets (recomendado, es "el Excel")

1. Creá una planilla de Google nueva: https://sheets.google.com → "En blanco"
2. En la fila 1 poné los encabezados: `nombre | email | instagram | fecha`
3. Menú **Extensiones → Apps Script** → borrá el contenido y pegá `backend/Code.gs`
4. Guardá → **Implementar → Nueva implementación** → tipo "Aplicación web"
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier persona**
5. Autorizá los permisos cuando lo pida → copiá la **URL de la aplicación web**
6. Pegala en `index.html` donde dice `PONER_URL_APPS_SCRIPT_AQUI` (variable `SHEET_ENDPOINT`)

Listo: cada registro llega como una fila nueva en la planilla.

### Opción B — Sin backend (demo)

Si no configurás el endpoint, los datos se guardan en el `localStorage` del navegador (se ven en DevTools → Application → Local Storage). Sirve para probar, no para producción.

## Correr localmente

```bash
cd tickets_a_la_isla
python -m http.server 8080
```

Abrir http://localhost:8080

## Subir a GitHub

Cuando me pases la URL del repo:

```bash
cd tickets_a_la_isla
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <URL_DEL_REPO>
git push -u origin main
```

## Pendiente

- [ ] Pegar URL del repo de GitHub
- [ ] Configurar Google Apps Script y pegar el endpoint en `index.html`
