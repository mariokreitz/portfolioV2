import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faHome } from '@fortawesome/free-regular-svg-icons/faHome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import type { NavigationItem } from '../models/navigation-item';

export const navigationLinks: NavigationItem[] = [
    {
        label: 'navigation.home',
        link: '/',
        icon: faHome,
    },
    {
        label: 'navigation.projects',
        link: '/projects',
        icon: faProjectDiagram,
    },
];

export const socialLinks: NavigationItem[] = [
    {
        label: 'GitHub',
        link: 'https://www.github.com/mariokreitz',
        icon: faGithub,
    },
];