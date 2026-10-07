# Cuaderno · Teoría Administrativa USACH

Página de estudio personal en español, construida con Vite y React. Reúne los materiales recuperados del curso y los capítulos 1 y 8 de **Introducción a la teoría general de la administración**, Idalberto Chiavenato, 10.ª edición, McGraw-Hill, 2019.

## Iniciar el proyecto

Requiere **Node.js 22.12 o posterior** y npm.

```sh
npm ci
npm run dev
```

Abre la dirección que muestra Vite. Para verificar y generar la versión de producción:

```sh
npm test
npm run build
npm run preview
```

`dist/` contiene la web compilada. Debe servirse por HTTP; no se abre haciendo doble clic en `index.html`. La configuración `base: './'` permite desplegarla en una subcarpeta. No requiere servidor de aplicación ni claves de API.

## Qué incluye

- Dashboard de Unidad I / ruta de la guía y capítulos 1 y 8.
- 31 conceptos con resúmenes desplegables y referencias.
- Mapas conceptuales con nodos interactivos y flujo de sistema abierto.
- 31 flashcards y selección de pendientes en modo revisión.
- Casos Ecológica Verde, ElectroSur y Andina Outdoor: 16 preguntas, espacio para redactar y soluciones explicadas.
- Quiz autocorregible de 20 preguntas, explicaciones e historial.
- Comparación de capítulos y glosario con búsqueda que admite palabras sin tildes.
- Progreso de lectura, tarjetas, respuestas de casos y resultados guardados en el navegador.
- Navegación móvil, acceso por teclado, diálogos y preferencia de movimiento reducido.

## Fuentes y alcance

Los materiales docentes son la fuente principal para los casos y la organización del estudio. El libro aporta fundamentos teóricos. Los resúmenes, mapas, tarjetas y respuestas son adaptaciones originales para estudiar; **no constituyen una pauta oficial de evaluación** ni reemplazan la lectura completa de los archivos.

Los nueve archivos se incluyen en `public/fuentes/` y se pueden abrir desde la sección Fuentes. `FUENTES.json` registra nombre original, archivo incluido, páginas, huella SHA-256 y referencias del contenido. Las referencias de las clases indican página del PDF. Las de Chiavenato muestran página impresa y abren la página correspondiente del extracto:

| Extracto | Páginas impresas | Páginas del PDF original |
| --- | --- | --- |
| Cap. 1 + introducción sobre habilidades/roles | 1–18 | 16–33 |
| Cap. 8 · Teoría de sistemas | 233–251 | 248–266 |

El libro se recuperó de la copia previamente adjunta accesible desde el chat «Automatizar metodologías y resúmenes». Las clases 2, 3 y 4, el Caso 1 y las dos fotos de Andina se recuperaron de «Resolver guía administrativa». La Ayudantía 1 se recuperó de «Resolver administración Chiavenato».

Decisiones explícitas:

- Andina presenta un modelo de **carpa** sin demanda; se corrigió la interpretación previa del chat que hablaba de mochila.
- La Clase 3 rotula sistemas como Unidad IV y la guía Andina lo incorpora a Unidad I. La web sigue la ruta solicitada por la guía y conserva esta discrepancia en Fuentes.
- La Clase 2 denomina Taylor «Cap. 1 Parte II», pero en la edición recuperada corresponde al capítulo 2. Se incluye como complemento, separado de los capítulos principales.
- La Clase 4 corresponde a oportunidades y se incluye como material complementario, sin atribuirla a Chiavenato.
- Las competencias desarrolladas en el texto y la figura I.2 usan «habilidad»; la figura I.4 usa «perspectiva». Se registra la diferencia.
- No se incorporaron cifras ni resultados no presentes en las fuentes.

## Progreso y privacidad

El progreso se almacena en `localStorage` bajo `usach-teoria-v1`. La última selección de caso usa `sessionStorage`. No se envían respuestas ni resultados a un servidor. Cada navegador y dirección web mantiene su propio progreso: la copia local y la versión alojada tienen almacenamientos independientes. Borrar datos del sitio elimina ese progreso.

Si el navegador bloquea el almacenamiento, se permite estudiar durante la sesión y se muestra un aviso. La tipografía usa Google Fonts con alternativas locales; el contenido de estudio funciona sin esas fuentes externas. El proyecto incluye únicamente los extractos necesarios del libro y los archivos docentes recuperados, para uso personal.

## Organización del proyecto

- `src/data.js`: contenido, respuestas, quiz y referencias.
- `src/App.jsx`: interfaz y navegación.
- `src/main.jsx`: inicio de React.
- `src/study.js`: persistencia, corrección y selección para revisión.
- `src/styles.css`: diseño responsive.
- `tests/study.test.js`: verificaciones del contenido y comportamiento de estudio.
- `public/fuentes/`: archivos originales del curso y extractos del libro.
- `dist/`: resultado compilado.
- `VALIDACION.md`: resultado de pruebas y revisión de interfaz.

Para agregar contenido, conserva los identificadores, declara la fuente y su página, y ejecuta las pruebas. La versión de datos de progreso se normaliza al leerla para recuperar archivos locales malformados.
