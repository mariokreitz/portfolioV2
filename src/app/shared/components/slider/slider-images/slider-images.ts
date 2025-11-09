import { NgOptimizedImage } from '@angular/common';
import { Component, input, type InputSignal } from '@angular/core';
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
})
export class SliderImages {
    public readonly autoPlay: InputSignal<boolean> = input.required<boolean>();
    public readonly showControls: InputSignal<boolean> = input.required<boolean>();
    public readonly showProgressBar: InputSignal<boolean> = input.required<boolean>();
    public readonly slideDelay: InputSignal<number> = input.required<number>();
    public readonly slides: InputSignal<ProjectItem[]> = input.required<ProjectItem[]>();
}

