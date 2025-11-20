import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import type { NavigationItem } from '../models/navigation-item';

export const navigationLinks: NavigationItem[] = [
    {
        label: 'navigation.home',
        link: '/',
    },
    {
        label: 'navigation.projects',
        link: '/projects',
    },
    {
        label: 'navigation.aboutMe',
        link: '/about',
    },
];

export const socialLinks: NavigationItem[] = [
    {
        label: 'GitHub',
        link: 'https://www.github.com/mariokreitz',
        icon: faGithub,
    },
];