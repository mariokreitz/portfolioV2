import { Component, model, type ModelSignal } from '@angular/core';

@Component({
    selector: 'app-slider-progressbar',
    imports: [],
    templateUrl: './slider-progressbar.html',
    styleUrl: './slider-progressbar.css',
})
export class SliderProgressbar {
    public readonly progressInPercent: ModelSignal<number> = model.required<number>();
}
