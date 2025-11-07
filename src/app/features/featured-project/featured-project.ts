import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, type InputSignal, type Signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import type { FeaturedProjectsConfig } from '../../shared/models/configs';
import type { ProjectItem } from '../../shared/models/project-item';
import { SliderControls } from './components/slider-controls/slider-controls';
import { SliderProgressbar } from './components/slider-progressbar/slider-progressbar';

@Component({
    selector: 'app-featured-project',
    imports: [
        TranslatePipe,
        NgOptimizedImage,
        SliderControls,
        SliderProgressbar,
    ],
    templateUrl: './featured-project.html',
    styleUrls: [ './featured-project.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProject {
    public readonly projects: InputSignal<ProjectItem[]> = input.required<ProjectItem[]>();
    public readonly config: InputSignal<FeaturedProjectsConfig> = input.required();

    public readonly effectiveConfig: Signal<FeaturedProjectsConfig> = computed(() => {
        const cfg: FeaturedProjectsConfig = this.config();
        return this.projects().length === 1
          ? { ...cfg, showControls: false, enableAutoScroll: false }
          : cfg;
    });

    public readonly showControls: Signal<boolean> = computed(() => this.effectiveConfig().showControls);
    public readonly enableAutoScroll: Signal<boolean> = computed(() => this.effectiveConfig().enableAutoScroll);

}