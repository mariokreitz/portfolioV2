import { faHackerrank } from '@fortawesome/free-brands-svg-icons';
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
    {
        label: 'navigation.cv',
        link: '/cv',
    },
];

export const socialLinks: NavigationItem[] = [
    {
        label: 'GitHub',
        link: 'https://www.github.com/mariokreitz',
        icon: faGithub,
    },
    {
        label: 'TryHackMe',
        link: 'https://www.tryhackme.com/p/Hogg3r',
        icon: faHackerrank,
    },
];