import { ChangeDetectionStrategy, Component, input, type InputSignal, model, type ModelSignal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-slider-controls',
    imports: [
        TranslatePipe,
    ],
    templateUrl: './slider-controls.html',
    styleUrl: './slider-controls.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderControls<T extends any[] = any[]> {
    public readonly slides: InputSignal<T> = input.required<T>();
    public readonly currentIndex: ModelSignal<number> = model.required<number>();

    public goToSlide(index: number): void {
        const length: number = this.slides().length;
        if (length === 0) return;

        const bounded: number = Math.max(0, Math.min(index, length - 1));
        if (this.currentIndex() !== bounded) {
            this.currentIndex.set(bounded);
        }
    }
}
