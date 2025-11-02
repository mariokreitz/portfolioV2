import type { IconDefinition } from '@fortawesome/angular-fontawesome';

export type Url = `http${'s' | ''}://www.${string}`;

export type Route = `/${string}`

export interface NavigationItem {
    label: string;
    link: Url | Route;
    icon?: IconDefinition;
    children?: NavigationItem[];
}

