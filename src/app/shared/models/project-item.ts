import { v4 as uuid } from 'uuid';
import type { Url } from '../../core/models/navigation-item';

export type uuidType = ReturnType<typeof uuid>;

export type ProjectItem = {
    id: uuidType;
    name: string;
    description: string;
    url?: Url;
    tags?: string[]
    status: 'completed' | 'in-progress' | 'on-hold';
    isFeatured?: boolean;
};