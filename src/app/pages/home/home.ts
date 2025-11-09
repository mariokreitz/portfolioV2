import { ChangeDetectionStrategy, Component, inject, type Signal, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Layout } from '../../core/layout/layout';
import { LangNavigatorService } from '../../core/services/lang-navigator';
import { FeaturedProject } from '../../features/featured-project/featured-project';
import { SectionHeadline } from '../../shared/components/section-headline/section-headline';
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
        SectionHeadline,

    ],
    templateUrl: './home.html',
    styleUrl: './home.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
    protected readonly projects: Signal<ProjectItem[]>;
    protected readonly featuredProjectsConfig: FeaturedProjectsConfig = featuredProjectsConfig;
    private readonly langNavigator: LangNavigatorService = inject(LangNavigatorService);

    constructor() {
        const featuredProject: ProjectItem[] = projects.filter((project: ProjectItem) => project.isFeatured);
        this.projects = signal(featuredProject);
    }

    public navigateTo(link: string): void {
        void this.langNavigator.navigateTo(link);
    }
}
