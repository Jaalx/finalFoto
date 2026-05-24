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
    image: '/img/autores/jav.jpg',
    shortBio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in metus eget arcu commodo facilisis. Cras pulvinar nibh ut nisl rhoncus.',
    // social: { instagram: 'https://instagram.com/tu_usuario' },
  },
  jos: {
    id: 'jos',
    name: 'Jose Céspedes Rivera',
    code: '20211020118',
    image: '/img/autores/jos.jpg',
    shortBio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum auctor sapien, eu placerat nisi mattis nec.',
    // social: { instagram: 'https://instagram.com/tu_usuario' },
  },
  sof: {
    id: 'sof',
    name: 'Sofía Lozano Martínez',
    code: '20211020088',
    image: '/img/autores/sof.jpg',
    shortBio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lacinia velit. Donec accumsan, lacus a vulputate iaculis.',
    // social: { instagram: 'https://instagram.com/tu_usuario' },
  },
  est: {
    id: 'est',
    name: 'Esteban Bautista Solano',
    code: '20221020089',
    image: '/img/autores/est.jpg',
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
    src: '/img/autoral/01.jpg',
    alt: 'Fotografía 01 del proyecto autoral',
    author: 'jav',
    title: 'Reloj',
    note: 'Un reloj de pared que paró hace años, pero el polvo sobre los números sigue contando el tiempo a su manera. Lo fotografié sin disfrazar lo que era: un objeto que perdió su función pero no su presencia.',
  },
  { id: 'a02', src: '/img/autoral/02.jpg', alt: 'Fotografía 02 del proyecto autoral', author: 'jav', title: 'Lugar vacío' },
  { id: 'a03', src: '/img/autoral/03.jpg', alt: 'Fotografía 03 del proyecto autoral', author: 'jav', title: 'Rutina' },
  { id: 'a04', src: '/img/autoral/04.jpg', alt: 'Fotografía 04 del proyecto autoral', author: 'jos', title: 'Envejecimiento' },
  {
    id: 'a05',
    src: '/img/autoral/05.jpg',
    alt: 'Fotografía 05 del proyecto autoral',
    author: 'jos',
    title: 'Objeto deteriorado',
    note: 'Lo que el uso le hace a las cosas. Una textura que no estaba ahí cuando el objeto era nuevo: tiempo escrito en la superficie. La luz fue la única decisión consciente; el resto lo puso el paso de los años.',
  },
  { id: 'a06', src: '/img/autoral/06.jpg', alt: 'Fotografía 06 del proyecto autoral', author: 'jos', title: 'Día' },
  {
    id: 'a07',
    src: '/img/autoral/07.jpg',
    alt: 'Fotografía 07 del proyecto autoral',
    author: 'sof',
    title: 'Noche',
    note: 'La hora exacta en que el día deja de ser día y todavía no es noche. Esa pausa que casi nadie mira. Fotografié sin trípode, con la respiración lenta, porque quería que la imagen llevara también ese ritmo.',
  },
  { id: 'a08', src: '/img/autoral/08.jpg', alt: 'Fotografía 08 del proyecto autoral', author: 'sof', title: 'Movimiento' },
  { id: 'a09', src: '/img/autoral/09.jpg', alt: 'Fotografía 09 del proyecto autoral', author: 'sof', title: 'Silencio' },
  { id: 'a10', src: '/img/autoral/10.jpg', alt: 'Fotografía 10 del proyecto autoral', author: 'est', title: 'Huella' },
  {
    id: 'a11',
    src: '/img/autoral/11.jpg',
    alt: 'Fotografía 11 del proyecto autoral',
    author: 'est',
    title: 'Tránsito',
    note: 'El cuerpo en movimiento, congelado en un sexto de segundo. Pero no es la velocidad lo que me interesa: es lo que queda cuando algo pasa demasiado rápido para ser visto.',
  },
  { id: 'a12', src: '/img/autoral/12.jpg', alt: 'Fotografía 12 del proyecto autoral', author: 'est', title: 'Quietud' },
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
      src: `/img/${folder}/${n}.jpg`,
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
      ...Array.from({ length: 10 }, (_, i) => {
        const n = String(i + 11).padStart(2, '0');
        return {
          id: `pc-sj-${n}`,
          src: `/img/primer-corte/sofia-jose/${n}.jpg`,
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
    photos: makePhotos('pc-est', 'primer-corte/esteban', 'est', 7, 'Primer corte · Esteban'),
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
