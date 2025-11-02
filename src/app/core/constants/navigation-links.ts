import { faHome } from '@fortawesome/free-regular-svg-icons/faHome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import type { NavigationItem } from '../models/navigation-item';

export const navigationLinks: NavigationItem[] = [
    {
        label: 'Home',
        link: '/',
        icon: faHome,
    },
    {
        label: 'Projects',
        link: '/projects',
        icon: faProjectDiagram,
    },
];