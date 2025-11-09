import { NgOptimizedImage } from '@angular/common';
import {
    Component,
    effect,
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
    public readonly slideSpeed: InputSignal<number> = input<number>(1_000);
    public readonly progressInPercent: WritableSignal<number> = signal<number>(0);

    private autoPlayInterval: ReturnType<typeof setInterval> | null = null;
    private progressInterval: ReturnType<typeof setInterval> | null = null;
    private readonly progressEffect = effect(() => {
        this.progressInPercent.set(0);
    });

    public ngOnInit(): void {
        this.setupAutoPlay();
        this.startProgressTracking();
    }

    public ngOnChanges(): void {
        this.setupAutoPlay();
        this.restartProgressTracking();
    }

    public ngOnDestroy(): void {
        this.clearAutoPlayInterval();
        this.clearProgressInterval();
        this.progressEffect.destroy();
    }

    public nextSlide(): void {
        const slidesLength: number = this.slides().length;
        this.currentIndex.set((this.currentIndex() + 1) % slidesLength);
        this.restartProgressTracking();
    }

    private setupAutoPlay(): void {
        this.clearAutoPlayInterval();
        if (this.autoPlay()) {
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, this.slideDelay());
        }
    }

    private startProgressTracking(): void {
        this.clearProgressInterval();
        if (!this.autoPlay()) {
            this.progressInPercent.set(0);
            return;
        }
        const delay: number = this.slideDelay();
        const tickMs: number = 50; // granularity
        let elapsed: number = 0;
        this.progressInterval = setInterval(() => {
            elapsed += tickMs;
            const pct: number = Math.min(100, (elapsed / delay) * 100);
            this.progressInPercent.set(pct);
            if (elapsed >= delay) {
                this.progressInPercent.set(100);
                elapsed = 0; // prepare next cycle
            }
        }, tickMs);
    }

    private restartProgressTracking(): void {
        this.startProgressTracking();
    }

    private clearAutoPlayInterval(): void {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    private clearProgressInterval(): void {
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
            this.progressInterval = null;
        }
    }
}
