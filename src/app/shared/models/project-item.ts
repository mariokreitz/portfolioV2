import { v4 as uuid } from 'uuid';
import type { Route, Url } from '../../core/models/navigation-item';

export type uuidType = ReturnType<typeof uuid>;

export type ProjectItem = {
    id: uuidType;
    name: string;
    description: string;
    url?: Url | Route;
    imgSrc?: string;
    tags?: string[]
    status: 'released' | 'in-progress' | 'on-hold';
    isFeatured?: boolean;
};