import { ChangeDetectionStrategy, Component, computed, input, type InputSignal, type Signal } from '@angular/core';
import { SliderControls } from '../../shared/components/slider/slider-controls/slider-controls';
import { SliderImages } from '../../shared/components/slider/slider-images/slider-images';
import { SliderProgressbar } from '../../shared/components/slider/slider-progressbar/slider-progressbar';
import type { FeaturedProjectsConfig } from '../../shared/models/configs';
import type { ProjectItem } from '../../shared/models/project-item';

@Component({
    selector: 'app-featured-project',
    imports: [
        SliderImages,
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
    public readonly showProgressbar: Signal<boolean> = computed(() => this.effectiveConfig().showProgressbar);
    public readonly enableAutoplay: Signal<boolean> = computed(() => this.effectiveConfig().enableAutoplay);
    public readonly delayBetweenSlides: Signal<number> = computed(() => this.effectiveConfig().delayBetweenSlides);

}