# Panel Vinted

Panel local para seguir, día a día, el calentamiento de una cuenta de Vinted (31 días) y estimar su índice de confianza.

## Cómo usarlo

- **Sin instalar nada:** abre `panel/index.html` con doble clic. Funciona desde el disco.
- **Con servidor local (opcional):** `node serve.js` y abre http://localhost:8765
- Al crear la cuenta de Vinted, pulsa **"He creado la cuenta"**: ese es el día 1 y el panel cuenta los días solo.

## Pestañas

- **Panel:** banner con el día, resumen, roadmap en camino, tareas del día en formato chat, índice de confianza y calendario.
- **Artículos:** añadir artículos, registrar ventas (con su valoración) y añadir valoraciones.
- **Incidencias:** asistente con reglas para devoluciones, revisiones, bloqueos, disputas, valoraciones negativas, etc. Las incidencias abiertas restan puntos al índice.
- **Registro:** actividad diaria (se anota sola al completar el día) y copia de seguridad.

## Dónde se guardan los datos

En el navegador (`localStorage`), **no** en este repositorio. Si borras los datos del navegador o cambias de equipo se pierden:
descarga una copia desde **Registro → Descargar copia** cada pocos días.

## Importante

- El índice de confianza es una **estimación propia**; Vinted no publica ninguna puntuación y nada de esto garantiza que un anuncio no entre en revisión.
- El plan solo contempla uso real de una sola cuenta: sin automatizar, sin compras cruzadas y sin cuentas de terceros.

## Ficheros

- `panel/index.html`: interfaz y lógica.
- `panel/data.js`: plan de 31 días.
- `serve.js`: servidor estático opcional.
- `*.csv`: hojas de seguimiento antiguas (opcionales).
