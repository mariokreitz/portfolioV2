import { v4 as uuid } from 'uuid';
import type { ProjectItem } from '../models/project-item';

export const projects: ProjectItem[] = [
    {
        id: uuid(),
        name: 'i18n-excel-manager',
        description: 'CLI tool for converting and validating i18n JSON and Excel files with placeholder validation',
        url: 'https://www.npmjs.com/package/i18n-excel-manager',
        tags: [
            'i18n',
            'CLI-tool',
            'javascript',
            'converter',
        ],
        status: 'in-progress',
        isFeatured: true,
    },
];