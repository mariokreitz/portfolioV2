import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
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
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/mario-kreitz/',
        icon: faLinkedin,
    },
    {
        label: 'GitHub',
        link: 'https://www.github.com/mariokreitz',
        icon: faGithub,
    },
    {
        label: 'TryHackMe',
        link: 'https://www.tryhackme.com/p/Hogg3r',
        icon: faCloud,
    },
];

export const footerLinks: NavigationItem[] = [
    {
        label: 'navigation.imprint',
        link: '/imprint',
    },
    {
        label: 'navigation.privacyPolicy',
        link: '/privacy-policy',
    },
];