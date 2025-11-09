import { ChangeDetectionStrategy, Component, computed, input, type InputSignal, type Signal } from '@angular/core';

@Component({
    selector: 'app-slider-controls',
    imports: [],
    templateUrl: './slider-controls.html',
    styleUrl: './slider-controls.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderControls<T extends any[] = any[]> {
    public readonly slides: InputSignal<T> = input.required<T>();
    public readonly slidesLength: Signal<number> = computed(() => this.slides().length);

    public goToSlide(index: number): void {
        // Implementation for navigating to a specific slide
        console.log(index);
    }
}
