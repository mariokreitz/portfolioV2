import { ChangeDetectionStrategy, Component, input, type InputSignal } from '@angular/core';
import type { FeaturedProjectsConfig } from '../../shared/models/configs';
import type { ProjectItem } from '../../shared/models/project-item';

@Component({
    selector: 'app-featured-project',
    imports: [],
    templateUrl: './featured-project.html',
    styleUrls: [ './featured-project.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProject {
    public readonly projects: InputSignal<ProjectItem[]> = input.required<ProjectItem[]>();
    public readonly config: InputSignal<FeaturedProjectsConfig> = input.required();

}