import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, type InputSignal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import type { ProjectItem } from '../../shared/models/project-item';

@Component({
    selector: 'app-featured-project',
    imports: [
        TranslatePipe,
        NgOptimizedImage,
    ],
    templateUrl: './featured-project.html',
    styleUrls: [ './featured-project.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProject {
    public readonly projects: InputSignal<ProjectItem[]> = input.required<ProjectItem[]>();
}
