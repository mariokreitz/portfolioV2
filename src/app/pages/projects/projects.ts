import { Component } from '@angular/core';
import { Layout } from '../../core/layout/layout';
import { PageHeadline } from '../../features/page-headline/page-headline';
import { ProjectGrid } from '../../features/project-grid/project-grid';

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

}
