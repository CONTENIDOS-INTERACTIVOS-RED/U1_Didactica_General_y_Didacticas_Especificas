<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. La didáctica general entre las ciencias de la educación: objeto de estudio y ámbitos de intervención'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Para Ruíz (2020), la didáctica tiene como objeto de conocimiento la <b>teoría de la enseñanza</b>, entendida en relación directa con el aprendizaje. Esta relación es <b>ontológicamente interdependiente</b>, puesto que enseñar implica necesariamente provocar un aprendizaje. De ahí que la didáctica no solo explore qué y cómo enseñar, sino, también, cómo asegurar que el aprendizaje sea significativo.
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-15.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Este campo se ocupa de analizar y aplicar <b>técnicas, procedimientos y acciones pedagógicas</b>, orientadas a lograr objetivos de aprendizaje, en contextos concretos. Además, actúa como <b>modelo de actuación docente</b>, guiando la toma de decisiones en el aula y abordando procesos como la <b>transposición didáctica</b>, es decir, la adaptación del conocimiento académico a un saber enseñable (Ruíz, 2020). 
          span El rol de la didáctica es cerrar la brecha entre la teoría y la práctica, diseñando estrategias que consideren las necesidades del alumnado y fomenten aprendizajes relevantes.

      h2 Múltiples enfoques del objeto de estudio
      p.mb-4 Abreu <i>et al. (2018)</i>, identifican cinco perspectivas principales del objeto de estudio de la didáctica, mostrando su evolución y complejidad:

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="La enseñanza como objeto de estudio")
              p Autores como Stocker (1964), Alves (1962), Rosales (1988) y Sacristán (1989) citados por Abreu, et.al., (2018), consideran que la didáctica estudia los principios y normas de la enseñanza, más allá de una materia específica. Otros, como Vasco (1990) y Camilloni (1994), también citados por Abreu, et.al., (2018), la entienden como parte del saber pedagógico o como teoría de la enseñanza. Si bien estas visiones históricas fueron importantes, hoy se reconoce que centrarse solo en la enseñanza es limitante, porque esta no puede separarse del aprendizaje.
            .div(titulo="El aprendizaje como objeto de estudio")
              p Autores como Titone (1970), Nérici (1973), y Fernández y Sarramona (1984), citados por Abreu, et.al., (2018), destacan el papel de la didáctica en guiar y organizar el aprendizaje, aunque no lo consideran su único foco. Actualmente, se reconoce que enseñanza y aprendizaje son procesos interdependientes, en los que tanto docentes como estudiantes participan activamente.
            .div(titulo="Procesos de enseñanza y aprendizaje")
              p Desde autores como Díaz (1999), y Korner (2002), hasta Parcerisa (2007), y Moreno (2011), citados por Abreu, et.al., (2018), se sostiene que la didáctica debe estudiar los procesos de enseñanza y aprendizaje, como sistemas comunicativos e intencionados. Se busca reflexionar sobre la práctica docente para favorecer un aprendizaje significativo. Meyer (2015), también citado por Abreu, et.al., (2018), introduce el concepto de “competencia didáctica del estudiante”, dándole un rol activo y responsable en su formación.
            .div(titulo="El proceso de enseñanza-aprendizaje como unidad")
              p Autores como Kansanen y Meri (1999), Sevillano (2011) y Hashimoto (2006), citados por Abreu, et.al., (2018), proponen que el objeto de estudio de la didáctica debe ser el proceso enseñanza-aprendizaje como una unidad sistémica. Este proceso implica interacción docente-estudiante, diseño didáctico y reflexión crítica. Según Ruíz (2020), esta unidad integra objetivos, métodos, medios, contenidos, evaluación y formas de organización, lo que permite una acción educativa coherente y transformadora.
            .div(titulo="El proceso educativo en su conjunto")
              p Autores como Álvarez (1997), López (2010), y Pla et al. (2010), citados por Abreu, et.al., (2018), amplían el objeto de la didáctica al proceso educativo global, que abarca también a la familia, la comunidad y los medios. Desde esta visión, el proceso educativo busca preparar a la persona para la vida, no solo para aprobar asignaturas. La didáctica, entonces, se vincula estrechamente con las necesidades sociales y culturales, superando el aula como único espacio educativo.
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')

      h2 Componentes estructurales de la didáctica
      p.mb-4 Según Ruíz (2020), la didáctica se apoya en <b>categorías claves</b> que permiten organizar el proceso de enseñanza-aprendizaje:

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row.mb-4
            .col-10.col-md-6.col-lg-4.mb-4
              .d-flex.align-items-start.bg-amarillo-oscuro.h-100.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-17.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.pe-xl-3.mb-2.text-bold Objetivo
                  span ¿Para qué enseñar?
            .col-10.col-md-6.col-lg-4.mb-4
              .d-flex.align-items-start.bg-amarillo-oscuro.h-100.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-17.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.pe-xl-3.mb-2.text-bold Contenido 
                  span ¿Qué enseñar?
            .col-10.col-md-6.col-lg-4.mb-4
              .d-flex.align-items-start.bg-amarillo-oscuro.h-100.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-17.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.pe-xl-3.mb-2.text-bold Método 
                  span ¿Cómo enseñar?
            .col-10.col-md-6.col-lg-4.mb-4
              .d-flex.align-items-start.bg-amarillo-oscuro.h-100.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-17.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.pe-xl-3.mb-2.text-bold Medios 
                  span ¿Con qué enseñar?
            .col-10.col-md-6.col-lg-4.mb-4
              .d-flex.align-items-start.bg-amarillo-oscuro.h-100.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-17.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.pe-xl-3.mb-2.text-bold Evaluación 
                  span ¿Se lograron los objetivos?
            .col-10.col-md-6.col-lg-4.mb-4
              .d-flex.align-items-start.bg-amarillo-oscuro.h-100.p-3(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-17.svg', alt='Texto descriptivo de la imagen')
                .my-auto
                  p.pe-xl-3.mb-2.text-bold Formas de organización
                  span ¿Cómo estructurar la enseñanza?

          p.mb-4 Estos componentes aseguran coherencia y efectividad en el proceso educativo, adaptándose a las características del estudiante, el contexto social y los fines de formación.

          h2 Conceptos complementarios
          p.mb-4 Para lograr una comprensión integral del proceso educativo, se deben distinguir claramente algunos conceptos:

          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Objetivo
                p.px-1.text-small.mb-0.text-center Meta general del proceso de enseñanza.<br><b>Ejemplo</b>. Resolver ecuaciones lineales. con precisión.

            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-19.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Logro
                p.px-1.text-small.mb-0.text-center Resultado observable vinculado a un objetivo.<br><b>Ejemplo</b>. Resolver 8 de 10 ejercicios, correctamente.

            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Competencia
                p.px-1.text-small.mb-0.text-center Capacidad de aplicar conocimientos en contextos reales.<br><b>Ejemplo.</b> Resolver problemas cotidianos, de forma crítica.

            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Estándar
                p.px-1.text-small.mb-0.text-center Nivel esperado de calidad en el aprendizaje.<br><b>Ejemplo.</b> Leer con fluidez y comprender textos, adecuados a la edad.


      h2 Didáctica general y específicas

      .row.bg-fondo-1.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3
      
          .row.mb-4
            .col-12.col-xl-8
              .bg-azul.p-4(data-aos='fade-up').mb-4
                span Según Fuentes (2000), y Alarcão, Costa y Araújo (1999), citados por Abreu, et.al., (2018), la <b>didáctica general</b> se ocupa del proceso de enseñanza en su expresión más amplia, mientras que las <b>didácticas específicas</b> se enfocan en disciplinas concretas. Ambas coexisten y responden a necesidades educativas diferentes, aunque deben integrarse en una visión pedagógica unificada.
              span El debate sobre el objeto de estudio de la didáctica muestra su carácter <b>complejo, dinámico e interdisciplinario</b>. Desde enfoques centrados en la enseñanza, pasando por el aprendizaje, hasta llegar a una concepción integral del proceso educativo, queda claro que la didáctica articula teoría, práctica, investigación y compromiso social. Su evolución constante refleja su capacidad para responder a los desafíos del aula y de la sociedad (Abreu et al., 2018, Ruíz, 2020).
            .col-4.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')

          .row.mb-0
            .col-12.col-xl-8.mx-auto
              .shadow.p-3.mb-0.bg-white
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.px-4
                    img(src='@/assets/componentes/youtube-icon-circle.svg')
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.text-bold.mb-3 Leyes, principios y categorías de la didáctica
                        p.text-small Compartimos el siguiente video para profundizar en las leyes, principios y categorías de la didáctica:
                      .col-sm-auto
                        a.download-btn.boton.bg-azul-oscuro.text-white(href="https://www.youtube.com/watch?v=ECPc2TCtoT4" target='_blank')
                          span.text-small Ver video
                          i.fas.fa-arrow-right

      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 Ámbitos de intervención

      p.mb-4 Según Abreu <i>et al</i>. (2018), los <b>ámbitos de intervención de la didáctica</b>, se derivan de su objeto de estudio: los procesos de enseñanza-aprendizaje. Estos ámbitos articulan dimensiones teóricas y prácticas y abarcan diversos contextos educativos, formales e informales. A continuación, se presentan los principales espacios de acción didáctica:

      .row.position-relative.mb-0.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold El aula y los procesos de enseñanza-aprendizaje
                p El aula es el espacio central de intervención didáctica. Aquí, la didáctica analiza las interacciones entre docentes y estudiantes para diseñar estrategias que promuevan un aprendizaje activo, significativo y colaborativo, considerando diversos estilos de aprendizaje, etapas de desarrollo y herramientas pedagógicas, para favorecer la participación y comunicación. <br><b>Ejemplo práctico</b>. Uso de debates o simulaciones para fortalecer competencias críticas y comunicativas.

            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Diseño curricular
                p La didáctica interviene en la planificación curricular, estructurando contenidos, definiendo objetivos y secuenciando aprendizajes, de manera lógica y progresiva. Además, incorpora valores culturales, equidad y formación integral, para responder a las necesidades del contexto. <br><b>Ejemplo práctico.</b> Elaboración de un currículo por competencias, que combine teoría y práctica.

            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Formación docente
                p Un ámbito esencial es la capacitación y actualización profesional docente. La didáctica ofrece herramientas metodológicas, enfoques innovadores y recursos pedagógicos, para mejorar la práctica educativa, promoviendo la reflexión continua y adaptación a nuevos desafíos educativos. <br><b>Ejemplo práctico</b>. Talleres para docentes sobre el uso pedagógico de tecnologías digitales.

            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Evaluación educativa
                p Este ámbito evalúa, tanto el aprendizaje del estudiante como la pertinencia de las estrategias de enseñanza. La didáctica diseña instrumentos para medir competencias cognitivas y socioemocionales, asegurando evaluaciones justas, inclusivas y contextualizadas. <br><b>Ejemplo práctico</b>. Proyectos integradores como forma de evaluación auténtica.

            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Innovación educativa
                p La didáctica impulsa transformaciones en las prácticas educativas mediante metodologías activas e innovadoras como aprendizaje basado en proyectos, <i>flipped classroom</i>, classroom o gamificación, explorando además tecnologías emergentes como simuladores, realidad aumentada o entornos digitales interactivos. <br><b>Ejemplo práctico</b>. Plataforma gamificada donde los estudiantes superan retos y acumulan puntos.

            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Contextos no formales e informales
                p Más allá de la educación formal, la didáctica también interviene en escenarios educativos alternativos, tales como talleres comunitarios, capacitaciones laborales, museos y proyectos sociales, adaptando sus estrategias para audiencias diversas con objetivos específicos. <br><b>Ejemplo práctico.</b> Actividades interactivas en museos, dirigidas a públicos de diferentes edades.

      .row.bg-morado.border-top-morado-6.bg-full-width.py-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Concepto de aprendizaje: diversos enfoques
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Concepto de aprendizaje, donde se aborda una revisión profunda y comparativa, sobre qué es aprender, desde distintas teorías psicológicas y pedagógicas.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Concepto_de_aprendizaje.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Concepto de aprendizaje: diversos enfoques
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              //- ST2
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://v.isu.edu.mx/pdf/maes/educacion/mat_did/02.pdf") Mallart, J. (s.f.). Didáctica: concepto, objeto y finalidad. Capítulo 1.
              
              //- ST5 (distribuido a tema 2)
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.academia.edu/96808296/M%C3%A9todos_y_t%C3%A9cnicas_de_investigaci%C3%B3n_educativa") Balleste, L. B., Nadal, C. A., Fernández, J. A. & Quesada, V. S. (2022). Métodos y técnicas en investigación educativa (3ra ed.). Palma Ediciones.
              
              //- Recursos audiovisuales ST2
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=ECPc2TCtoT4") [Vídeo] Frank Vázquez. (2021). Leyes- principios- categoría de la didáctica
              
              //- Recursos audiovisuales ST5 (distribuido a tema 2)
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=RPb52-4hepc") [Vídeo] SFPIEUV. (2023). Investigación vs Intervención: similitudes y diferencias
            
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p

  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
