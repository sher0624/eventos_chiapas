# Registro de conflicto

## Archivo afectado
`index.html`

## Descripción del conflicto
Se simuló un conflicto modificando la misma línea del archivo `index.html` en dos ramas diferentes:

- Rama 1: `rama-conflicto-a`
- Rama 2: `rama-conflicto-b`

Ambas ramas modificaron el título principal de la página de inicio.

## Proceso realizado
1. Se creó la rama `rama-conflicto-a` y se modificó el texto del `<h1>`.
2. Se creó la rama `rama-conflicto-b` desde `main` y se modificó la misma línea del `<h1>`.
3. Se intentó hacer merge de ambas ramas.
4. Git detectó el conflicto porque la misma línea tenía cambios diferentes.

## Solución aplicada
Se revisaron manualmente las marcas de conflicto generadas por Git:

```html
<<<<<<< HEAD
Texto de la rama actual
=======
Texto de la rama entrante
>>>>>>> rama-conflicto-b
```

Después se eligió una versión final del texto y se eliminaron las marcas de conflicto.

## Resultado
El conflicto fue resuelto correctamente y los cambios fueron integrados a la rama `main`.
