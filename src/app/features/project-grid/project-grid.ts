import { Component, input, type InputSignal } from '@angular/core';
import type { ProjectItem } from '../../shared/models/project-item';

@Component({
    selector: 'app-project-grid',
    imports: [],
    templateUrl: './project-grid.html',
    styleUrl: './project-grid.css',
})
export class ProjectGrid {
    public readonly projects: InputSignal<ProjectItem[]> = input.required<ProjectItem[]>();
}
