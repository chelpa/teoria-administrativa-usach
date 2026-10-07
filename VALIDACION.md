# Validación · 7 de octubre de 2026

## Pruebas automáticas

Las 5 pruebas de `npm test` verifican:

1. Las referencias del contenido tienen archivo disponible y página válida.
2. Las 20 preguntas poseen identificadores únicos, opciones distintas, respuesta válida y concepto existente.
3. El puntaje y la selección de conceptos por reforzar consideran la última respuesta de cada concepto.
4. El modo revisión incluye tarjetas pendientes y conceptos con errores no resueltos, incluso si la tarjeta se había marcado como recordada.
5. El progreso se recupera, las marcas de lectura se alternan y los datos corruptos o el almacenamiento bloqueado no rompen la recuperación.

Se verificaron además las cantidades reales de páginas de los 7 PDF y la existencia de las 2 fotos. El proyecto compila para producción con Vite.

## Revisión de interfaz

Revisión directa en Chrome, en escritorio y con viewport móvil de 390 × 844:

- Dashboard, navegación, resúmenes y marcado de lectura.
- Recarga de la página conserva la lectura marcada.
- Revelado de flashcard, referencias y autoevaluación.
- Quiz: una respuesta incorrecta registra 0%; una práctica posterior correcta registra 100% y elimina el concepto de los pendientes.
- Casos: selección de Andina, escritura de respuesta, recarga y recuperación del texto; apertura de solución explicada. El texto de prueba fue eliminado.
- Mapas: apertura de nodo y referencia. Chiavenato p. 237 enlaza a la página 5 del extracto de capítulo 8.
- Glosario: «tecnica» encuentra «Habilidad técnica».
- Menú móvil y cierre al navegar.
- Dashboard y mapas sin desbordamiento horizontal del documento. La tabla comparativa permite desplazamiento dentro de su contenedor en pantallas pequeñas.

Una advertencia de recarga durante el desarrollo motivó separar el punto de entrada de React del componente de la app. La comprobación posterior utiliza la versión corregida.

## Alcance

Los controles automáticos validan integridad de referencias y lógica de práctica, no certifican una pauta académica. Las respuestas son propuestas fundamentadas en los archivos recuperados. No se afirma cobertura total del programa USACH fuera de estos materiales.
