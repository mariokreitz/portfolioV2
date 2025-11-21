import { NgOptimizedImage } from '@angular/common';
import { Component, computed, input, type InputSignal, type Signal } from '@angular/core';
import { cn } from '../../utils';

@Component({
    selector: 'app-image',
    imports: [
        NgOptimizedImage,
    ],
    templateUrl: './image.html',
    styleUrl: './image.css',
})
export class Image {
    public readonly className: InputSignal<string | undefined> = input<string>();
    public readonly imgSrc: InputSignal<string> = input.required();
    public readonly imgAlt: InputSignal<string> = input.required();
    public readonly imgWidth: InputSignal<string> = input('50');
    public readonly imgHeight: InputSignal<string> = input('50');
    protected readonly iconClasses: Signal<string> = computed(() =>
      cn('', this.className()),
    );
}
