<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Origen y evolución del concepto de didáctica: campo conceptual y terminológico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')

      .col-12.col-xl-8
        p.mb-4 Según Peñafort y Bastiani (2022), el término “didáctica” proviene del griego didaskein que significa "enseñar", mientras que <i>didaktikos</i> alude a lo "apto para enseñar". En la Alemania moderna, el concepto se desarrolló bajo el término <i>Didaktik</i>, entendido como el "arte o estudio de la enseñanza". Esta noción se remonta al siglo XVII con las ideas de <b>Jan Amos Komensky (Comenius)</b>, quien, en su obra Didáctica Magna, definió la didáctica como un conjunto de <b>estrategias de enseñanza</b>. Su propósito era claro: enseñar todo a todos, uniendo la instrucción con el contexto más amplio del mundo y proponiendo una enseñanza universal e inclusiva.
        p.mb-4 Por su parte, Ruíz (2020) señala que, desde las primeras civilizaciones, la educación ha estado orientada a desarrollar el intelecto, mediante diversos métodos.
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos='flip-left').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-4.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Por ejemplo, en China se implementaron sistemas de evaluación; en la India, la enseñanza se integraba con rituales religiosos; en Grecia se impulsó el humanismo; Roma estableció una educación bilingüe, y el pueblo judío centró su instrucción en el Talmud. Más adelante, en la Edad Media, el <i>trivium</i> (gramática, lógica y retórica) y el quadrivium (aritmética, geometría, música y astronomía), estructuraron el conocimiento. Estas prácticas tempranas sentaron las <b>bases de la didáctica</b>, al experimentar y consolidar diversas estrategias para <b>transmitir saberes y habilidades</b>.

    .row.bg-morado.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Origen y evolución del concepto de didáctica: campo conceptual y terminológico
          p.mb-5(data-aos="fade-up") Se invita a leer el documento “Origen y evolución del concepto de Didáctica”, donde se aborda el desarrollo histórico y teórico de la didáctica como disciplina educativa. Este material ofrece explicaciones detalladas, reflexiones críticas y ejemplos históricos, que ilustran la transformación de la enseñanza desde el siglo XVII hasta el siglo XX.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Origen_y_evolución.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Origen y evolución del concepto de didáctica: campo conceptual y terminológico
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 ¿La didáctica es ciencia o es disciplina?

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul.p-4(data-aos="fade-up")
        p.mb-0 La evolución del concepto de didáctica ha generado una discusión clave: ¿se trata de una ciencia o de una disciplina? Esta interrogante toma fuerza en el siglo XX, al intentar definir su naturaleza epistemológica y su vínculo con áreas como la pedagogía y la psicología. En general, se reconoce a la didáctica como un campo complejo que integra teoría y práctica, orientado a optimizar los procesos de enseñanza y aprendizaje. Diversos autores han contribuido al debate, proponiéndola como ciencia, disciplina, o una síntesis de ambas (Peñafort y Bastiani, 2022).

    h2 Didáctica como ciencia
    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Desde esta perspectiva, autores clásicos como Herbart y Comenio, consideran que la didáctica busca principios generales para la enseñanza, fundamentándose en la observación y la sistematización. En el siglo XX, Klafki la propone como ciencia aplicada, dado que recurre a teorías científicas para mejorar la práctica educativa.
        .bg-gris.p-4(data-aos='flip-right')
          span Para Peñafort y Bastiani, (2022) citando a Rosales (1988) y Díaz (1999), la definen como una ciencia que organiza el proceso de enseñanza con el fin de optimizar el aprendizaje y la formación integral del individuo. Peñafort y Bastiani, (2022) citando a Gervilla (2000), destaca su interés por las condiciones óptimas del aprendizaje, mientras que <i>Abreu et al</i>.(2018), la entienden como una ciencia en evolución, centrada en resolver problemáticas concretas del aula, mediante investigación y experiencia. En esa línea, Peñafort y Bastiani, (2022) citando a Addine et al. (1998), destacan su carácter investigativo, y la aparición de nuevas ramas como la neurodidáctica, refleja su dinamismo teórico-práctico.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')

    h2 Didáctica como disciplina
    p.mb-4 Por otro lado, autores como Anabella Cadile citada por Peñafort y Bastiani, (2022) argumentan que la didáctica es, ante todo, una disciplina práctica, centrada en aplicar conocimientos en contextos específicos, más que en establecer leyes universales. Desde esta visión, se valoran las estrategias didácticas adaptadas a las necesidades reales del aula.
    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-azul-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-9.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Ferrández y Sarramona (1984), citados por Peñafort y Bastiani, (2022)  la consideran teórico-normativa, orientada a formar hábitos intelectuales; Benedito (1987), también citado por Peñafort y Bastiani, (2022) resalta su dimensión comunicativa y relacional; y Gimeno Sacristán (2010), citados por Peñafort y Bastiani, (2022)  la concibe como ciencia, arte y praxis. Sevillano (2004), también citado por citado por Peñafort y Bastiani, (2022) refuerza su papel como guía teórico-práctica en contextos interactivos.
        span Otros autores, todos citados por citado por Peñafort y Bastiani, (2022), destacan su aplicabilidad contextual: Contreras (1990), la entiende como herramienta para guiar procesos, según objetivos educativos; Carvajal (2009), la vincula con la pedagogía y la formación docente; Zabalza (1990), subraya su función en la planificación e innovación, y Saturnino de la Torre (1993), resalta su evolución desde lo artesanal hasta lo epistémico. También se le reconoce un rol práctico en la pedagogía (Cervantes, 1996), en la acción social (De Camilloni, 1994), en la formación profesional (Fuentes, 2000) y en los desafíos educativos de la era digital (Moreno, 2011). La didáctica dialógica, por su parte, pone en primer plano el diálogo, como recurso pedagógico.
    
    p.mb-4 <b>Tabla 1.</b> Didáctica como ciencia vs. didáctica como disciplina

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
    
        .tabla-a.mb-4
          table
            thead
              tr
                th.bg-morado-oscuro.text-white.text-center Didáctica como ciencia
                th.bg-morado-oscuro.text-white.text-center Didáctica como disciplina
            tbody
              tr
                td Busca principios generales y sistemáticos para la enseñanza.
                td Aplica estrategias contextualizadas, según las necesidades del aula.
              tr
                td Se apoya en la observación, la investigación y la sistematización.
                td Tiene un enfoque práctico, técnico y metodológico.
              tr
                td Ejemplos: Herbart, Comenio, Klafki, Rosales, Gervilla, Addine.
                td Ejemplos: Cadile, Ferrández, Gimeno Sacristán, Contreras, Zabalza.

        .row.mb-0
          .col-12.col-xl-7.mx-auto
            .tarjeta.shadow.p-3.mb-0.bg-white
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2
                  img.p-2(src='@/assets/componentes/link-icon-circle.svg')
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.text-bold.mb-3 Apuntes y reflexiones sobre didáctica
                      p.text-small Los invitamos a leer el primer capítulo del libro:
                    .col-sm-auto
                      a.download-btn.boton.bg-azul-oscuro(href="https://elibro.net/es/ereader/tecnologicadeloriente/177038?page=14" target='_blank')
                        span.text-small Ir al sitio
                        i.fas.fa-arrow-right

    h2 Perspectivas integradoras
    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 La perspectiva integradora combina la visión de la didáctica como ciencia y como disciplina, reconociendo la diversidad y complejidad de los procesos de enseñanza-aprendizaje. Este enfoque plantea que la didáctica no se limita a ser una teoría abstracta ni una simple aplicación técnica, sino que abarca ambos aspectos de forma complementaria (Ruíz, 2020).
        .mb-4.bg-amarillo.p-4(data-aos='flip-up')
          span Según esta visión, la didáctica se constituye como un campo dinámico que investiga, sistematiza y transforma la realidad educativa, articulando el pensamiento teórico con la acción pedagógica concreta.
        span.text-bold Los componentes de la perspectiva integradora, son: 
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-11.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='35%' y='66%' numero='+')
        .h5.mb-2 Componente científico
        p •	Investiga fenómenos educativos: analiza métodos, estrategias y condiciones de enseñanza.<br>•	Genera teorías y modelos explicativos basados en la evidencia.<br>•	Sistematiza el conocimiento educativo, mediante datos y evidencia científica.

      .tarjeta.bg-white.p-4(x='65%' y='66%' numero='+')
        .h5.mb-2 Componente práctico
        p •	Implementa estrategias adaptadas al contexto educativo y a las características del alumnado.<br>•	Aborda y resuelve problemas específicos del aula con soluciones contextualizadas.<br>•	Promueve la flexibilidad y adaptabilidad, según las particularidades de cada situación.

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 La integración de estos componentes permite que la didáctica no solo explique el proceso educativo, sino que también lo transforme. Así, combina la <b>rigurosidad científica</b> con la <b>creatividad pedagógica</b>, lo cual le permite responder de manera efectiva a las exigencias del contexto educativo contemporáneo (Ruíz, 2020).
        .d-flex.align-items-start.bg-azul-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-13.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Este enfoque, ha sido respaldado por académicos como Rafael Porlán Ariza, quien define la didáctica como una “práctica reflexiva”, y Antoni Zabala Vidiella, quien enfatiza la necesidad de unir teoría y práctica para lograr una enseñanza significativa (Ruíz, 2020).
        span La didáctica se presenta hoy como un campo de estudio <b>dinámico y multifacético</b>. Mientras algunos autores la conciben como una ciencia, otros resaltan su carácter práctico, acercándola más a una disciplina o incluso a una combinación de ciencia y arte. Su evolución constante, incluyendo nuevas disciplinas como la <b>Neurodidáctica</b> y enfoques como la <b>Didáctica Dialógica</b>, refleja su capacidad de adaptación frente a los desafíos de la educación contemporánea (Peñafort y Bastiani, 2022).

    
    .row.bg-fondo-1.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3
        .row.mb-4
          .col-12.col-xl-8.mx-auto
            .tarjeta.shadow.p-3.mb-5.bg-white
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.px-4
                  img(src='@/assets/componentes/youtube-icon-circle.svg')
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.text-bold.mb-3 Lo que es la didáctica
                      p.text-small Para conocer más sobre la didáctica, recomendamos ver el siguiente video:
                    .col-sm-auto
                      a.download-btn.boton.bg-azul-oscuro.text-white(href="https://www.youtube.com/watch?v=Eehp_4O-8w4" target='_blank')
                        span.text-small Ver video
                        i.fas.fa-arrow-right

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            //- ST1
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/177038?page=14") Lesteime, D. (2021). Apuntes y reflexiones sobre didáctica. Homo Sapiens Ediciones.
            
            //- ST4 (distribuido a tema 1)
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://uniclanet.unicla.edu.mx/assets/contenidos/116820240209174330.pdf") Universidad Contemporánea de las Américas. (s.f.). ¿Qué es el aprendizaje?
            
            //- Recursos audiovisuales ST1
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=Eehp_4O-8w4") [Vídeo] TutoraOnline. (2022). El arte de enseñar (elementos de la didáctica)
            
            //- Recursos audiovisuales ST4 (distribuido a tema 1)
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=oMPQNOD-2fo") [Vídeo] Sprouts Español. (2023). El método de aprendizaje activo
          
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')



    p

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
