# C1 Practice — Reading & Use of English

App web para practicar las 8 partes del papel **Reading & Use of English** del examen
Cambridge C1 Advanced. Cada vez que entras, te propone ejercicios al azar; si te toca uno
que ya has hecho, puedes pedir otro o elegir uno concreto de la lista. El progreso se
guarda en el navegador (`localStorage`), no necesita cuentas ni backend.

## Cómo funciona

- **Parte 1** Multiple-choice cloze
- **Parte 2** Open cloze
- **Parte 3** Word formation
- **Parte 4** Key word transformation
- **Parte 5** Reading multiple choice
- **Parte 6** Cross-text multiple matching
- **Parte 7** Gapped text
- **Parte 8** Multiple matching

Cada ejercicio se corrige en el momento y queda marcado como "hecho" (con tu nota) en
la lista, para que puedas ver de un vistazo lo que te falta por practicar.

## Modo examen

Además de practicar parte por parte, desde la portada hay un **modo examen** que
encadena varias partes en una sola sesión cronometrada, tal como en el examen real:

- **Examen completo**: las 8 partes, una tras otra.
- **Solo Use of English**: partes 1-4.
- **Solo Reading**: partes 5-8.

En cada sesión se elige un ejercicio al azar de cada parte (priorizando los que aún no
hayas hecho), y al terminar ves un resumen con la puntuación de cada parte, el total y
el tiempo empleado.

## Writing

Desde la portada hay una sección de **Writing** con las dos partes reales del examen:

- **Parte 1**: ensayo obligatorio (220-260 palabras), a partir de una entrada de "clase"
  con notas y opiniones citadas, igual que en el examen real.
- **Parte 2**: eliges una de varias tareas (email, informe, reseña, propuesta, carta,
  artículo), también de 220-260 palabras.

El editor incluye:

- Contador de palabras en vivo, con color según si estás dentro del rango objetivo.
- Cronómetro (con pausa) para practicar bajo presión de tiempo.
- Guardado automático del borrador en el navegador (por tarea).
- Una **autoevaluación** con los 4 criterios oficiales de Cambridge Writing (Content,
  Communicative Achievement, Organisation, Language) mediante sliders.
- **Feedback opcional por IA**: si añades tu propia clave de la API de Anthropic (botón
  "Configurar clave de API"), puedes pedir una corrección automática con nota por
  criterio, puntos fuertes, áreas de mejora y errores de lengua corregidos. La clave se
  guarda solo en tu navegador (`localStorage`) y las peticiones van directamente desde
  tu navegador a `api.anthropic.com` — no pasan por ningún servidor propio del proyecto,
  y no se suben a GitHub si subes el repositorio (no forma parte del código).

Para conseguir una clave de API: [console.anthropic.com](https://console.anthropic.com).
El uso de la API tiene coste según el uso (fuera del plan gratuito de claude.ai).

## Desarrollo local

```bash
npm install
npm run dev
```

## Compilar para producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para servir estáticamente.

## Desplegar en GitHub Pages

1. Sube este proyecto a un repositorio de GitHub.
2. En **Settings → Pages**, elige "GitHub Actions" como origen.
3. Haz `push` a `main`: el workflow en `.github/workflows/deploy.yml` compila y
   despliega automáticamente. La URL será `https://tu-usuario.github.io/tu-repo/`.

No hace falta tocar nada más: `vite.config.ts` ya usa rutas relativas (`base: './'`)
para que funcione en cualquier subcarpeta de GitHub Pages.

## Cómo añadir tus propios ejercicios

Todo el banco de ejercicios vive en dos archivos, como datos puros en TypeScript
(sin tocar ningún componente):

- `src/data/useOfEnglish.ts` → partes 1-4
- `src/data/reading.ts` → partes 5-8

Cada tipo de ejercicio tiene una forma fija definida en `src/types.ts`. Para añadir un
ejercicio nuevo, copia uno existente del mismo tipo y cambia el contenido. Por ejemplo,
para añadir un **Open Cloze** (parte 2):

```ts
{
  id: 'moe-p2-03',              // único, sin espacios
  part: 2,
  title: 'Un título descriptivo',
  text: `Texto con huecos marcados así {{0}}, y así {{1}}, etc.`,
  gaps: [
    { answers: ['la'] },        // puedes dar varias respuestas válidas
    { answers: ['whether', 'if'] },
    // ... uno por cada {{n}} usado en el texto
  ],
},
```

Y añádelo al array correspondiente (`openCloze`, en este caso) en el mismo archivo.
El resto de la app (aleatoriedad, lista, progreso, corrección) funciona automáticamente
para cualquier ejercicio que añadas — no hay que tocar nada más.

Formatos de cada parte (resumen rápido):

| Parte | Campo especial                                             |
|-------|-------------------------------------------------------------|
| 1     | `gaps[i].options` (4 opciones) + `answer` (índice 0-3)      |
| 2     | `gaps[i].answers` (una o más respuestas válidas)             |
| 3     | `gaps[i].root` (palabra raíz) + `answers`                    |
| 4     | `items[i].prompt`, `keyword`, `gapStart`/`gapEnd`, `answers` |
| 5     | `questions[i].options` (4) + `answer`                        |
| 6     | `texts` (A-D) + `questions[i].answerLabel`                   |
| 7     | `paragraphs` (con un distractor) + `answers` (letra por hueco) |
| 8     | `texts` + `questions[i].answerLabel`                          |

Como son solo arrays de objetos, puedes generar cientos de ejercicios con un script,
pegarlos desde un CSV convertido a JSON, o simplemente ir añadiéndolos a mano — la app
escala igual de bien con 10 que con 1000 ejercicios por parte.

## Estructura del proyecto

```
src/
  types.ts                 tipos de cada uno de los 8 formatos de ejercicio
  data/                    banco de ejercicios (aquí se añade contenido)
  lib/                     utilidades (parseo de huecos, selección aleatoria)
  hooks/useProgress.ts     progreso guardado en localStorage
  components/
    exercises/             un componente de interacción por cada parte (1-8)
    ExercisePlayer.tsx      despacha al componente correcto según la parte
    ExerciseListView.tsx    lista de ejercicios con progreso, para elegir manualmente
    SectionHome.tsx         pantalla de las 4 partes de una sección
    Home.tsx                pantalla de inicio
  App.tsx                  navegación entre pantallas
```

## Próximos pasos posibles

- **Listening**: se podría generar audio a partir de guiones de texto con la Web
  Speech API (gratis, calidad variable) o un servicio de TTS más natural, y reutilizar
  el mismo patrón de datos que Reading.
- **Writing**: un editor de texto + prompts, con feedback generado por una IA usando
  los descriptores de banda de Cambridge como criterio.
- **Speaking**: conversación guiada con una IA siguiendo el guion de las Parts 1-4 del
  Speaking, con feedback al final.
