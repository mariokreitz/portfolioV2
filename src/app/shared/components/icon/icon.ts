import { NgOptimizedImage } from '@angular/common';
import { Component, input, type InputSignal } from '@angular/core';

@Component({
    selector: 'app-icon',
    imports: [
        NgOptimizedImage,
    ],
    templateUrl: './icon.html',
    styleUrl: './icon.css',
})
export class Icon {
    public readonly imgSrc: InputSignal<string> = input.required();
    public readonly imgAlt: InputSignal<string> = input.required();
    public readonly imgWidth: InputSignal<string> = input('50');
    public readonly imgHeight: InputSignal<string> = input('50');

}
