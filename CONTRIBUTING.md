# Guía para colaborar

## Flujo de trabajo
1. Actualizar la rama principal:
   ```bash
   git checkout main
   git pull origin main
   ```
2. Crear una rama nueva:
   ```bash
   git checkout -b rama-nombre-seccion
   ```
3. Realizar cambios y commits significativos.
4. Subir la rama:
   ```bash
   git push origin rama-nombre-seccion
   ```
5. Crear un Pull Request hacia `main`.
6. Solicitar revisión de otro integrante.
7. Hacer merge cuando el PR sea aprobado.

## Reglas para nombrar ramas
Usar nombres claros y relacionados con la sección:

- `rama-header`
- `rama-footer`
- `rama-eventos`
- `rama-contacto`
- `rama-documentacion`
- `rama-conflicto-a`
- `rama-conflicto-b`
- `rama-Index`


## Reglas para mensajes de commit
Los mensajes deben ser descriptivos y explicar el cambio realizado.

Ejemplos:
- `Agrega estructura inicial del sitio web`
- `Diseña sección principal del index`
- `Agrega tarjetas de eventos`
- `Crea formulario de contacto`
- `Corrige estilos responsivos del menú`
