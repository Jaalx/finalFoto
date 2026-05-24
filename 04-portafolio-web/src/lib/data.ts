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
};

export type Project = {
  id: string;
  title: string;
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
  { id: 'a01', src: '/img/autoral/01.jpg', alt: 'Fotografía 01 del proyecto autoral', author: 'jav', title: 'Reloj' },
  { id: 'a02', src: '/img/autoral/02.jpg', alt: 'Fotografía 02 del proyecto autoral', author: 'jav', title: 'Lugar vacío' },
  { id: 'a03', src: '/img/autoral/03.jpg', alt: 'Fotografía 03 del proyecto autoral', author: 'jav', title: 'Rutina' },
  { id: 'a04', src: '/img/autoral/04.jpg', alt: 'Fotografía 04 del proyecto autoral', author: 'jos', title: 'Envejecimiento' },
  { id: 'a05', src: '/img/autoral/05.jpg', alt: 'Fotografía 05 del proyecto autoral', author: 'jos', title: 'Objeto deteriorado' },
  { id: 'a06', src: '/img/autoral/06.jpg', alt: 'Fotografía 06 del proyecto autoral', author: 'jos', title: 'Día' },
  { id: 'a07', src: '/img/autoral/07.jpg', alt: 'Fotografía 07 del proyecto autoral', author: 'sof', title: 'Noche' },
  { id: 'a08', src: '/img/autoral/08.jpg', alt: 'Fotografía 08 del proyecto autoral', author: 'sof', title: 'Movimiento' },
  { id: 'a09', src: '/img/autoral/09.jpg', alt: 'Fotografía 09 del proyecto autoral', author: 'sof', title: 'Silencio' },
  { id: 'a10', src: '/img/autoral/10.jpg', alt: 'Fotografía 10 del proyecto autoral', author: 'est', title: 'Huella' },
  { id: 'a11', src: '/img/autoral/11.jpg', alt: 'Fotografía 11 del proyecto autoral', author: 'est', title: 'Tránsito' },
  { id: 'a12', src: '/img/autoral/12.jpg', alt: 'Fotografía 12 del proyecto autoral', author: 'est', title: 'Quietud' },
];

export const primerCorteProjects: Project[] = [
  {
    id: 'pc-jav',
    title: '[Título del proyecto de Javier]',
    authors: ['jav'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reemplaza este texto con una descripción breve del proyecto.',
    photos: [
      { id: 'pc-jav-01', src: '/img/primer-corte/javier/01.jpg', alt: 'Primer corte · Javier 01', author: 'jav' },
      { id: 'pc-jav-02', src: '/img/primer-corte/javier/02.jpg', alt: 'Primer corte · Javier 02', author: 'jav' },
      { id: 'pc-jav-03', src: '/img/primer-corte/javier/03.jpg', alt: 'Primer corte · Javier 03', author: 'jav' },
      { id: 'pc-jav-04', src: '/img/primer-corte/javier/04.jpg', alt: 'Primer corte · Javier 04', author: 'jav' },
    ],
  },
  {
    id: 'pc-sof-jos',
    title: '[Título del proyecto de Sofía y Jose]',
    authors: ['sof', 'jos'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proyecto realizado en pareja durante el primer corte.',
    photos: [
      { id: 'pc-sj-01', src: '/img/primer-corte/sofia-jose/01.jpg', alt: 'Primer corte · Sofía + Jose 01', author: 'sof' },
      { id: 'pc-sj-02', src: '/img/primer-corte/sofia-jose/02.jpg', alt: 'Primer corte · Sofía + Jose 02', author: 'jos' },
      { id: 'pc-sj-03', src: '/img/primer-corte/sofia-jose/03.jpg', alt: 'Primer corte · Sofía + Jose 03', author: 'sof' },
      { id: 'pc-sj-04', src: '/img/primer-corte/sofia-jose/04.jpg', alt: 'Primer corte · Sofía + Jose 04', author: 'jos' },
    ],
  },
  {
    id: 'pc-est',
    title: '[Título del proyecto de Esteban]',
    authors: ['est'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reemplaza este texto con una descripción breve del proyecto.',
    photos: [
      { id: 'pc-est-01', src: '/img/primer-corte/esteban/01.jpg', alt: 'Primer corte · Esteban 01', author: 'est' },
      { id: 'pc-est-02', src: '/img/primer-corte/esteban/02.jpg', alt: 'Primer corte · Esteban 02', author: 'est' },
      { id: 'pc-est-03', src: '/img/primer-corte/esteban/03.jpg', alt: 'Primer corte · Esteban 03', author: 'est' },
      { id: 'pc-est-04', src: '/img/primer-corte/esteban/04.jpg', alt: 'Primer corte · Esteban 04', author: 'est' },
    ],
  },
];

export const segundoCortePhotos: Photo[] = [
  { id: 's01', src: '/img/segundo-corte/01.jpg', alt: 'Segundo corte 01', author: 'jav' },
  { id: 's02', src: '/img/segundo-corte/02.jpg', alt: 'Segundo corte 02', author: 'jos' },
  { id: 's03', src: '/img/segundo-corte/03.jpg', alt: 'Segundo corte 03', author: 'sof' },
  { id: 's04', src: '/img/segundo-corte/04.jpg', alt: 'Segundo corte 04', author: 'est' },
  { id: 's05', src: '/img/segundo-corte/05.jpg', alt: 'Segundo corte 05', author: 'sof' },
  { id: 's06', src: '/img/segundo-corte/06.jpg', alt: 'Segundo corte 06', author: 'est' },
];

export const navLinks = [
  { href: '/', label: 'Autoral' },
  { href: '/primer-corte', label: 'Primer corte' },
  { href: '/segundo-corte', label: 'Segundo corte' },
];

export const year = new Date().getFullYear();
