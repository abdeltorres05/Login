# Authify

## Objetivo del Proyecto

El objetivo de este proyecto es crear una libreria de inicio de sesión funcional que permita a los usuarios autenticarse de manera segura.

## Hitos

1. Diseño de la interfaz de usuario.
2. Implementación de la validación de formularios.
3. Integración con un backend para la autenticación de usuarios.
4. Implementación de mensajes de error y retroalimentación al usuario.
5. Pruebas y depuración del sistema.

## Tecnologías y Herramientas Utilizadas

- HTML: Para la estructura de la página.
- CSS: Para el diseño y estilos de la página.
- JavaScript: Para la funcionalidad y validación del formulario.
- Git: Para el control de versiones.
- GitHub: Para alojar el repositorio del proyecto.

## WorkFlow

### Trunk-Based Development (TBD)

Trunk-Based Development (TBD) es una estrategia de desarrollo en Git que enfatiza la integración frecuente de cambios en una sola rama principal (la trunk, que usualmente es `main` o `master`), en lugar de trabajar con múltiples ramas de larga duración.

### ¿Cómo funciona?

- Todo el código se mantiene en la rama principal (`main`).
- No hay una rama `develop` como en Git Flow.
- Las ramas de feature (si se usan) son muy cortas y duran solo unas pocas horas o días.
- Los desarrolladores trabajan en cambios pequeños y frecuentes.
- En lugar de grandes pull requests, se hacen commits incrementales.
- Se prioriza la integración continua (CI) con pruebas automatizadas.
- No hay ramas de larga duración.
- Las ramas `feature/*` o `fix/*` existen solo temporalmente y se eliminan después de la fusión.
- En equipos más avanzados, los desarrolladores pueden incluso committear directamente en `main` si hay buenas pruebas y revisión de código.
- Uso de "Feature Flags" para cambios grandes.
- En vez de ramas largas, se usan feature flags o toggles para activar/desactivar nuevas funcionalidades sin afectar el código en producción.
- Las fusiones a `main` son frecuentes.
- Cada cambio se fusiona rápidamente en `main`, evitando acumulación de código.
- Se ejecutan pipelines de CI/CD para verificar cada cambio antes de desplegar.

### Ventajas de Trunk-Based Development

- ✅ Menos conflictos de merge: Al integrar cambios rápidamente, se evitan conflictos grandes entre ramas.
- ✅ Más velocidad en desarrollo: Perfecto para CI/CD y despliegues rápidos.
- ✅ Mayor estabilidad: Como las pruebas y el código se integran constantemente, hay menos sorpresas en producción.
- ✅ Menos ramas para gestionar: Todo se mantiene simple y centralizado en `main`.


## Wiki de las Herramientas y Tecnologías

- **HTML**: Lenguaje de marcado para la creación de páginas web.
- **CSS**: Lenguaje de hojas de estilo para describir la presentación de documentos HTML.
- **JavaScript**: Lenguaje de programación que permite implementar funcionalidades complejas en páginas web.
- **Git**: Sistema de control de versiones distribuido.
- **GitHub**: Plataforma de alojamiento de código fuente y control de versiones utilizando Git.
