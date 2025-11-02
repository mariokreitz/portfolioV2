import { Component } from '@angular/core';
import { Layout } from '../../core/layout/layout';
import { PageHeadline } from '../../features/page-headline/page-headline';
import { ProjectGrid } from '../../features/project-grid/project-grid';
import { projects } from '../../shared/constants/project-items';
import type { ProjectItem } from '../../shared/models/project-item';

@Component({
    selector: 'app-projects',
    imports: [
        Layout,
        PageHeadline,
        ProjectGrid,
    ],
    templateUrl: './projects.html',
    styleUrl: './projects.css',
})
export class Projects {
    protected readonly projects: ProjectItem[] = projects;
}
