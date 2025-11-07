import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, type Signal, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Layout } from '../../core/layout/layout';
import { FeaturedProject } from '../../features/featured-project/featured-project';
import { projects } from '../../shared/constants/project-items';
import type { ProjectItem } from '../../shared/models/project-item';

@Component({
    selector: 'app-home',
    imports: [
        Layout,
        NgOptimizedImage,
        TranslatePipe,
        FeaturedProject,

    ],
    templateUrl: './home.html',
    styleUrl: './home.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
    protected readonly projects: Signal<ProjectItem[]>;

    constructor() {
        const featuredProject = projects.filter(project => project.isFeatured);
        this.projects = signal(featuredProject);
    }
}
