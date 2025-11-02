import { v4 as uuid } from 'uuid';
import type { ProjectItem } from '../models/project-item';

export const projects: ProjectItem[] = [
    {
        id: uuid(),
        name: 'i18n-excel-manager',
        description: 'CLI tool for converting and validating i18n JSON and Excel files with placeholder validation',
        url: 'https://www.npmjs.com/package/i18n-excel-manager',
        imgSrc: 'https://raw.githubusercontent.com/mariokreitz/i18n-excel-manager/refs/heads/main/Bildschirmfoto%202025-11-03%20um%2000.48.00.png',
        tags: [
            'i18n',
            'CLI-tool',
            'javascript',
            'converter',
        ],
        status: 'released',
        isFeatured: true,
    },
];