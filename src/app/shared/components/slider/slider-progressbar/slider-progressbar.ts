import { Component, linkedSignal } from '@angular/core';

@Component({
    selector: 'app-slider-progressbar',
    imports: [],
    templateUrl: './slider-progressbar.html',
    styleUrl: './slider-progressbar.css',
})
export class SliderProgressbar {
    protected readonly progressPercentage = linkedSignal(() => {
        // Placeholder logic for progress percentage
        return 70; // This should be replaced with actual calculation
    });
}
