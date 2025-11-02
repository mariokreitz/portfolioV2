import { faHome } from '@fortawesome/free-regular-svg-icons/faHome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import type { NavigationItem } from '../models/navigation-item';

export const navigationLinks: NavigationItem[] = [
    {
        label: 'nav.home',
        link: '/',
        icon: faHome,
    },
    {
        label: 'nav.projects',
        link: '/projects',
        icon: faProjectDiagram,
    },
];