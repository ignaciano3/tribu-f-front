No deben existir ningun .html
tampoco este readme!

## La estructura de app

Toda ruta tiene su carpeta

ej:

    └── app/
        ├── projects/
        │   ├── page.tsx //pagina en si
        │   ├── layout.tsx // se mantiene en subdirectorios
        │   └── [id]/
        │       └── page.tsx //queda url.com/proyects/23
        └── tickets/
            ├── page.tsx
            ├── layout.tsx
            ├── [id]/
            │   └── page.tsx
            └── create/
                └── page.tsx
