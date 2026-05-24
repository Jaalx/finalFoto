import type { TeamMember } from '@/components/ui/team-showcase';

export type AuthorId = 'jav' | 'jos' | 'sof' | 'est';

export type Author = {
  id: AuthorId;
  name: string;
  code: string;
  image: string;
  shortBio: string;
  social?: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    behance?: string;
  };
};

export type Photo = {
  id: string;
  src: string;
  alt: string;
  author: AuthorId;
  title?: string;
  note?: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  authors: AuthorId[];
  description?: string;
  photos: Photo[];
};

export const authors: Record<AuthorId, Author> = {
  jav: {
    id: 'jav',
    name: 'Javier Álvarez Marín',
    code: '20202020028',
    image: '/img/autores/jav.webp',
    shortBio: `Soy ingeniero de sistemas, pero desde siempre he estado conectado al mundo audiovisual. De pequeño editaba videos e imágenes para subirlos a mi canal de YouTube. Esa afición se convirtió en una especialización en audiovisuales durante el colegio y, ya en la universidad, en un trabajo paralelo a los estudios: primero en una agencia y luego en producciones de una productora, donde he podido aplicar lo aprendido en los cursos previos y en la carrera.

Intento siempre ser auténtico y dar la mejor calidad posible. Me gusta hacer de todo, y por eso la fotografía es uno de los hobbies que más disfruto.`,
    // social: { instagram: 'https://instagram.com/tu_usuario' },
  },
  jos: {
    id: 'jos',
    name: 'Jose Céspedes Rivera',
    code: '20211020118',
    image: '/img/autores/jos.webp',
    shortBio: `Como estudiante de Ingeniería de Sistemas, paso mis días entre la lógica, las estructuras y las pantallas. Sin embargo, a través del lente, encuentro un espacio de total libertad para desarmar esa rigidez, jugando con las formas, la calidez del hogar y los colores.

Mi mirada se detiene en lo que exige paciencia: el proceso minucioso de lo artesanal, las texturas ocultas que la prisa cotidiana ignora y la sutil nostalgia de lo retro. En la fotografía encontré el arte de saber esperar; ya sea para capturar el gesto espontáneo de un animal, el detalle imperceptible de un insecto, o la belleza suspendida en la cotidianidad. Para mí, fotografiar no es registrar lo obvio, sino revelar el valor y la pausa que existen detrás de cada pequeño detalle.`,
    // social: { instagram: 'https://instagram.com/tu_usuario' },
  },
  sof: {
    id: 'sof',
    name: 'Sofía Lozano Martínez',
    code: '20211020088',
    image: '/img/autores/sof.webp',
    shortBio: `Soy ingeniera en sistemas y, al mismo tiempo, exploro mi lado creativo a través del diseño de ropa y diferentes formas de expresión artística. Me gusta crear, observar y encontrar belleza en los detalles que muchas veces pasan desapercibidos.

Soy una persona creativa y curiosa. Me inspira la naturaleza, especialmente las aves, porque reflejan libertad, movimiento y autenticidad.

La fotografía nació para mí como una manera de capturar la esencia de situaciones reales y espontáneas: una risa inesperada, una mirada sincera o un instante. A través de mis imágenes también comparto mi arte, las prendas que he diseñado y el proceso creativo que hay detrás de cada una de ellas.`,
    // social: { instagram: 'https://instagram.com/tu_usuario' },
  },
  est: {
    id: 'est',
    name: 'Esteban Bautista Solano',
    code: '20221020089',
    image: '/img/autores/est.webp',
    shortBio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.',
    // social: { instagram: 'https://instagram.com/tu_usuario' },
  },
};

export const authorList: Author[] = [
  authors.jav,
  authors.jos,
  authors.sof,
  authors.est,
];

export const teamMembers: TeamMember[] = authorList.map((a) => ({
  id: a.id,
  name: a.name,
  role: a.code,
  image: a.image,
  bio: a.shortBio,
  social: a.social,
}));

export const projectAutoral = {
  title: 'El tiempo',
  subtitle: 'Proyecto autoral · Tercer corte',
  statement: [
    'El tiempo no se ve, pero deja huella. Este proyecto reúne doce miradas sobre eso que pasa entre un instante y el siguiente: cómo se vacía un lugar cuando nadie lo habita, cómo envejece un objeto en silencio, cómo cambia la luz cuando el día se rinde a la noche.',
    'Cada fotografía es una pregunta distinta sobre el mismo asunto. Reloj, rutina, deterioro, movimiento detenido. Cuatro autores observan desde ángulos propios, pero las imágenes hablan entre sí y arman un solo gesto: el de mirar despacio lo que se nos escurre rápido.',
    'No buscamos una conclusión. El tiempo no se concluye, se atraviesa. Esto es lo que vimos al atravesarlo.',
  ],
};

export const autoralPhotos: Photo[] = [
  {
    id: 'a01',
    src: '/img/autoral/01.webp',
    alt: 'Fotografía 01 del proyecto autoral',
    author: 'jav',
    title: 'Reloj',
    note: 'Un reloj de pared que paró hace años, pero el polvo sobre los números sigue contando el tiempo a su manera. Lo fotografié sin disfrazar lo que era: un objeto que perdió su función pero no su presencia.',
  },
  { id: 'a02', src: '/img/autoral/02.webp', alt: 'Fotografía 02 del proyecto autoral', author: 'jav', title: 'Lugar vacío' },
  { id: 'a03', src: '/img/autoral/03.webp', alt: 'Fotografía 03 del proyecto autoral', author: 'jav', title: 'Rutina' },
  { id: 'a04', src: '/img/autoral/04.webp', alt: 'Fotografía 04 del proyecto autoral', author: 'jos', title: 'Envejecimiento' },
  {
    id: 'a05',
    src: '/img/autoral/05.webp',
    alt: 'Fotografía 05 del proyecto autoral',
    author: 'jos',
    title: 'Objeto deteriorado',
    note: 'Lo que el uso le hace a las cosas. Una textura que no estaba ahí cuando el objeto era nuevo: tiempo escrito en la superficie. La luz fue la única decisión consciente; el resto lo puso el paso de los años.',
  },
  { id: 'a06', src: '/img/autoral/06.webp', alt: 'Fotografía 06 del proyecto autoral', author: 'jos', title: 'Día' },
  {
    id: 'a07',
    src: '/img/autoral/07.webp',
    alt: 'Fotografía 07 del proyecto autoral',
    author: 'sof',
    title: 'Noche',
    note: 'La hora exacta en que el día deja de ser día y todavía no es noche. Esa pausa que casi nadie mira. Fotografié sin trípode, con la respiración lenta, porque quería que la imagen llevara también ese ritmo.',
  },
  { id: 'a08', src: '/img/autoral/08.webp', alt: 'Fotografía 08 del proyecto autoral', author: 'sof', title: 'Movimiento' },
  { id: 'a09', src: '/img/autoral/09.webp', alt: 'Fotografía 09 del proyecto autoral', author: 'sof', title: 'Silencio' },
  { id: 'a10', src: '/img/autoral/10.webp', alt: 'Fotografía 10 del proyecto autoral', author: 'est', title: 'Huella' },
  { id: 'a11', src: '/img/autoral/11.webp', alt: 'Fotografía 11 del proyecto autoral', author: 'est', title: 'Tránsito' },
  { id: 'a12', src: '/img/autoral/12.webp', alt: 'Fotografía 12 del proyecto autoral', author: 'est', title: 'Quietud' },
];

function makePhotos(
  prefix: string,
  folder: string,
  author: AuthorId,
  count: number,
  altPrefix: string,
): Photo[] {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    return {
      id: `${prefix}-${n}`,
      src: `/img/${folder}/${n}.webp`,
      alt: `${altPrefix} ${n}`,
      author,
    };
  });
}

export const primerCorteProjects: Project[] = [
  {
    id: 'pc-jav',
    title: 'La mirada fotográfica',
    authors: ['jav'],
    description:
      '[Descripción breve del proyecto — reemplaza este texto en src/lib/data.ts]',
    photos: makePhotos('pc-jav', 'primer-corte/javier', 'jav', 5, 'Primer corte · Javier'),
  },
  {
    id: 'pc-sof-jos',
    title: '[Título del proyecto en pareja]',
    authors: ['sof', 'jos'],
    description:
      '[Descripción breve del proyecto realizado en pareja durante el primer corte]',
    photos: [
      ...makePhotos('pc-sj', 'primer-corte/sofia-jose', 'sof', 10, 'Primer corte · Sofía + Jose'),
      ...Array.from({ length: 9 }, (_, i) => {
        const n = String(i + 11).padStart(2, '0');
        return {
          id: `pc-sj-${n}`,
          src: `/img/primer-corte/sofia-jose/${n}.webp`,
          alt: `Primer corte · Sofía + Jose ${n}`,
          author: 'jos' as AuthorId,
        };
      }),
    ],
  },
  {
    id: 'pc-est',
    title: '[Título del proyecto de Esteban]',
    authors: ['est'],
    description:
      '[Descripción breve del proyecto — reemplaza este texto en src/lib/data.ts]',
    photos: makePhotos('pc-est', 'primer-corte/esteban', 'est', 5, 'Primer corte · Esteban'),
  },
];

export const segundoCorteProjects: Project[] = [
  {
    id: 'sc-jardin-dorado',
    title: 'Jardín Dorado',
    authors: ['jav', 'jos', 'sof', 'est'],
    description:
      '[Descripción de la serie fotográfica grupal — reemplaza este texto en src/lib/data.ts]',
    photos: makePhotos(
      'sc-jd',
      'segundo-corte/jardin-dorado',
      'jav',
      10,
      'Jardín Dorado',
    ),
  },
  {
    id: 'sc-eu-jav',
    title: 'Azul',
    subtitle: 'Escenas urbanas — actividad de color',
    authors: ['jav'],
    description:
      '[Descripción del trabajo de Javier sobre el color azul en escenas urbanas]',
    photos: makePhotos(
      'sc-eu-jav',
      'segundo-corte/escenas-urbanas/javier',
      'jav',
      20,
      'Escenas urbanas · Javier · Azul',
    ),
  },
  {
    id: 'sc-eu-sof',
    title: '[Color]',
    subtitle: 'Escenas urbanas — actividad de color',
    authors: ['sof'],
    description:
      '[Pendiente: agregar fotos en public/img/segundo-corte/escenas-urbanas/sofia/ y completar este texto]',
    photos: [],
  },
  {
    id: 'sc-eu-jos',
    title: '[Color]',
    subtitle: 'Escenas urbanas — actividad de color',
    authors: ['jos'],
    description:
      '[Pendiente: agregar fotos en public/img/segundo-corte/escenas-urbanas/jose/ y completar este texto]',
    photos: [],
  },
  {
    id: 'sc-eu-est',
    title: '[Color]',
    subtitle: 'Escenas urbanas — actividad de color',
    authors: ['est'],
    description:
      '[Pendiente: agregar fotos en public/img/segundo-corte/escenas-urbanas/esteban/ y completar este texto]',
    photos: [],
  },
];

export const navLinks = [
  { href: '/', label: 'Autoral' },
  { href: '/primer-corte', label: 'Primer corte' },
  { href: '/segundo-corte', label: 'Segundo corte' },
];

export const year = new Date().getFullYear();
