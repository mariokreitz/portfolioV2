import { NgOptimizedImage } from '@angular/common';
import {
    Component,
    input,
    type InputSignal,
    type OnChanges,
    type OnDestroy,
    type OnInit,
    signal,
    type WritableSignal,
} from '@angular/core';
import type { ProjectItem } from '../../../models/project-item';
import { SliderControls } from '../slider-controls/slider-controls';
import { SliderProgressbar } from '../slider-progressbar/slider-progressbar';

@Component({
    selector: 'app-slider-images',
    imports: [
        SliderControls,
        SliderProgressbar,
        NgOptimizedImage,
    ],
    templateUrl: './slider-images.html',
    styleUrl: './slider-images.css',
    host: { class: 'inline-block max-w-fit w-full' },
})
export class SliderImages implements OnInit, OnChanges, OnDestroy {
    public readonly autoPlay: InputSignal<boolean> = input.required<boolean>();
    public readonly showControls: InputSignal<boolean> = input.required<boolean>();
    public readonly showProgressBar: InputSignal<boolean> = input.required<boolean>();
    public readonly slideDelay: InputSignal<number> = input.required<number>();
    public readonly slides: InputSignal<ProjectItem[]> = input.required<ProjectItem[]>();
    public readonly currentIndex: WritableSignal<number> = signal<number>(0);

    private autoPlayInterval: ReturnType<typeof setInterval> | null = null;

    public ngOnInit(): void {
        this.setupAutoPlay();
    }

    public ngOnChanges(): void {
        this.setupAutoPlay();
    }

    public ngOnDestroy(): void {
        this.clearAutoPlayInterval();
    }

    public nextSlide(): void {
        const slidesLength: number = this.slides().length;
        this.currentIndex.set((this.currentIndex() + 1) % slidesLength);
    }

    private setupAutoPlay(): void {
        this.clearAutoPlayInterval();
        if (this.autoPlay()) {
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, this.slideDelay());
        }
    }

    private clearAutoPlayInterval(): void {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

