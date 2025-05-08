export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'La didáctica, antecedentes y marco teórico. El proceso de enseñanza y aprendizaje ',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Origen y evolución del concepto de didáctica: campo conceptual y terminológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿La didáctica es ciencia o es disciplina?',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'La didáctica general entre las ciencias de la educación: objeto de estudio y ámbitos de intervención',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Ámbitos de intervención',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Concepto de enseñanza: diversos enfoques',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Modelos de enseñanza',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Métodos de la enseñanza',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Enfoques de la enseñanza',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Peñafort, C. & Bastiani, J. G. (2022). Didáctica: desde su definición e historia hasta su fundamento en el diálogo. Universidad Autónoma de Occidente.',
      link:
        'https://www.researchgate.net/publication/361080924_Didactica_desde_su_definicion_e_historia_hasta_su_fundamento_en_el_dialogo',
    },
    {
      referencia:
        'Ruiz, N. (2020). Origen y evolución de la didáctica. Calameo.',
      link: 'https://www.calameo.com/books/004185594f5813994a10f',
    },
    {
      referencia:
        'Abreu, O., Rhea, S., Arciniegas, G. & Rosero, M. (2018). Objeto de Estudio de la Didáctica: Análisis Histórico Epistemológico y Crítico del Concepto. Formación Universitaria.',
      link:
        'https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0718-50062018000600075',
    },
    {
      referencia:
        'Ruiz, N. (2020). Origen y evolución de la didáctica. Calameo.com.',
      link: 'https://www.calameo.com/books/004185594f5813994a10f',
    },
    {
      referencia:
        'JFVM - Portafolio. (2019). Diferencias entre competencias, objetivos, logros, indicadores de logro y estándares. Portafolio.',
      link:
        'https://portafoliojvm.siempreaprendemos.org/2019/06/22/diferencias-entre-competencias-objetivos-logros-indicadores-de-logro-y-estandares/',
    },
    {
      referencia:
        'Azorín Abellán, C. M. (2018). El método de aprendizaje cooperativo y su aplicación en las aulas. Perfiles educativos, 40(161), 181–194.',
      link: 'https://doi.org/10.22201/IISUE.24486167E.2018.161.58622',
    },
    {
      referencia:
        'Bolaño Muñoz, O. E. (2020). El constructivismo: modelo pedagógico para la enseñanza de las matemáticas.',
      link:
        'https://revistas.investigacion-upelipb.com/index.php/educare/article/view/1413/1359',
    },
    {
      referencia:
        'Clazes. (2023). La Teoría Humanista en la Educación: Enfoque en el Desarrollo Integral del Estudiante.',
      link: 'https://clazes.com/teoria-humanista-en-la-educacion/',
    },
    {
      referencia:
        'Camacho Marín, R., Rivas Vallejo, C. & Gaspar Castro, M. (2020). Innovación y tecnología educativa en el contexto actual latinoamericano.',
      link:
        'https://repositoriobibliotecas.uv.cl/bitstream/uvscl/2036/1/28064146030.pdf',
    },
    {
      referencia:
        'Ramírez-Díaz, J. L. (2020). El enfoque por competencias y su relevancia en la actualidad: Consideraciones desde la orientación ocupacional en contextos educativos. Revista Electrónica Educare, 24.',
      link:
        'https://www.redalyc.org/journal/1941/194163269023/194163269023.pdf',
    },
    {
      referencia:
        'Lesteime, D. (2021). Apuntes y reflexiones sobre didáctica. Homo Sapiens Ediciones.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/177038?page=14',
    },
    {
      referencia:
        'Moreno, P. (2024). La teoría conductista y su aplicación en la educación. Centro de e-Learning UTNBA.',
      link: 'https://blog.centrodeelearning.com/teoria-conductista/',
    },
    {
      referencia:
        'Zambrano Briones, M. A., Hernández Díaz, A. & Mendoza Bravo, K. L. (2022). El aprendizaje basado en proyectos como estrategia didáctica. Revista Conrado, 18(84).',
      link: 'http://scielo.sld.cu/pdf/rc/v18n84/1990-8644-rc-18-84-172.pdf',
    },
    {
      referencia:
        'Lesteime, D. (2021). Apuntes y reflexiones sobre didáctica. Homo Sapiens Ediciones.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/177038?page=14',
    },
    {
      referencia:
        'Aprendiz en la Vida. (2019). ¿Qué es el aprendizaje? Definición, según diferentes autores. Aprendiz en la Vida - Aprende, crece y conecta.',
      link:
        'https://www.aprendizenlavida.com/definicion-aprendizaje-segun-diferentes-autores/',
    },
    {
      referencia:
        'Universidad Contemporánea de las Américas. (s.f.). ¿Qué es el aprendizaje? Edu.mx.',
      link:
        'https://uniclanet.unicla.edu.mx/assets/contenidos/116820240209174330.pdf',
    },
    {
      referencia:
        'Álvarez Balandra, A. & Álvarez Tenorio, V. (2014). Métodos en la investigación educativa. Universidad Pedagógica Nacional.',
      link:
        'https://www.aefcm.gob.mx/dgenam/desarrollo-profesional/archivos/biblioteca/metodos-invet-educ.pdf',
    },
    {
      referencia:
        'Delgadode Colmenares, F. (2002). La investigación educativa, su concepción y su práctica. Algunos aspectos teóricos para la reflexión y discusión. Educere, 5(16), 405-412.',
      link: 'https://www.redalyc.org/pdf/356/35601605.pdf',
    },
    {
      referencia:
        'Mosteiro G., A. & Porto, C. (2017). La investigación en educación.',
      link: 'https://books.scielo.org/id/yjxdq/pdf/mororo-9788574554938-01.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje',
      significado:
        'Proceso mediante el cual los individuos adquieren, modifican o refuerzan conocimientos, habilidades, valores o actitudes, a través de la experiencia o el estudio.',
    },
    {
      termino: 'Competencia',
      significado:
        'Capacidad de aplicar conocimientos, habilidades y actitudes, para resolver problemas en contextos específicos, tanto personales como profesionales.',
    },
    {
      termino: 'Didáctica',
      significado:
        'Disciplina de la educación que se encarga de estudiar y organizar los métodos y técnicas para facilitar el proceso de enseñanza-aprendizaje.',
    },
    {
      termino: 'Enseñanza',
      significado:
        'Proceso estructurado mediante el cual se transmiten conocimientos, habilidades o valores, a los estudiantes, con el fin de promover su aprendizaje.',
    },
    {
      termino: 'Evaluación',
      significado:
        'Proceso sistemático que permite valorar los resultados del aprendizaje o de una intervención educativa, identificando logros y áreas de mejora.',
    },
    {
      termino: 'Metodología',
      significado:
        'Conjunto de métodos y técnicas aplicadas en un proceso de investigación o enseñanza, con el objetivo de alcanzar un resultado específico.',
    },
    {
      termino: 'Objetivo',
      significado:
        'Meta o propósito que se espera alcanzar en un contexto educativo, ya sea al término de una lección, una unidad o un curso.',
    },
    {
      termino: 'Paradigma',
      significado:
        'Conjunto de teorías, conceptos y enfoques, que forman una perspectiva específica en un área, como la pedagogía o la didáctica.',
    },
    {
      termino: 'Planificación',
      significado:
        'Organización previa de actividades, objetivos y recursos necesarios, para llevar a cabo un proceso educativo de manera eficaz.',
    },
  ],
}
