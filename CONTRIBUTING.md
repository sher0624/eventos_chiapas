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

## Tipos de commits

| Tipo | Descripción | Ejemplo |
|---|---|---|
| `feat` | Agrega una nueva funcionalidad | `feat: agrega sección de eventos` |
| `fix` | Corrige errores o bugs | `fix: corrige error del menú responsive` |
| `style` | Cambios visuales o estilos CSS | `style: mejora diseño del formulario` |
| `docs` | Cambios en documentación | `docs: actualiza README del proyecto` |
| `refactor` | Mejora interna del código sin cambiar funcionalidad | `refactor: reorganiza estructura del navbar` |
| `test` | Agrega o modifica pruebas | `test: agrega validación del formulario` |
| `merge` | Fusión entre ramas | `merge: fusiona rama-eventos con principal` |

## Estructura recomendada de commits:
tipo: descripción breve del cambio