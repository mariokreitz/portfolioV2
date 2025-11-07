import { ChangeDetectionStrategy, Component, type Signal, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Layout } from '../../core/layout/layout';
import { FeaturedProject } from '../../features/featured-project/featured-project';
import { featuredProjectsConfig } from '../../shared/configs/featured-projects';
import { projects } from '../../shared/constants/project-items';
import type { FeaturedProjectsConfig } from '../../shared/models/configs';
import type { ProjectItem } from '../../shared/models/project-item';

@Component({
    selector: 'app-home',
    imports: [
        Layout,
        TranslatePipe,
        FeaturedProject,

    ],
    templateUrl: './home.html',
    styleUrl: './home.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
    protected readonly projects: Signal<ProjectItem[]>;
    protected readonly featuredProjectsConfig: FeaturedProjectsConfig = featuredProjectsConfig;

    constructor() {
        const featuredProject: ProjectItem[] = projects.filter((project: ProjectItem) => project.isFeatured);
        this.projects = signal(featuredProject);
    }
}
