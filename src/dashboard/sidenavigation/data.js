import * as Icon from './icons';

const data = [
  {
    section: 'Apps',
    content: [
      {
        title: 'All Apps',
        icon: <Icon.AllAppsSVG />,
        link: '/',
      },
      {
        title: 'Updates',
        icon: <Icon.UpdatesSVG />,
        link: '/admin/updates',
      },
    ],
  },
  {
    section: 'Categories',
    content: [
      {
        title: 'Photography',
        icon: <Icon.PhotographySVG />,
        link: '/admin/photography',
      },
      {
        title: 'Graphic Design',
        icon: <Icon.GraphicDesignSVG />,
        link: '/admin/graphic-design',
      },
      {
        title: 'Videos',
        icon: <Icon.VideosSVG />,
        link: '/admin/videos',
      },
      {
        title: 'Illustrations',
        icon: <Icon.IllustrationSVG />,
        link: '/admin/illustration',
      },
      {
        title: 'UI/UX',
        icon: <Icon.UxSVG />,
        link: '/admin/ux',
      },
      {
        title: '3D/AR',
        icon: <Icon.ArSVG />,
        link: '/admin/ar',
      },
    ],
  },
  {
    section: 'Guides',
    content: [
      {
        title: 'Documentation',
        icon: <Icon.DocumentationSVG />,
        link: '/admin/documentation',
      },
    ],
  },
];

export default data;
