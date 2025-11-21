import { ChangeDetectionStrategy, Component, input, type InputSignal, signal, type WritableSignal } from '@angular/core';

type HorizontalPosition = 'left' | 'right';
type VerticalPosition = 'top' | 'bottom' | 'center';

@Component({
    selector: 'app-side-marker',
    imports: [],
    templateUrl: './side-marker.html',
    styleUrl: './side-marker.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'fixed z-10 transition-transform duration-500 ease-in-out',
        '[class.top-0]': 'verticalPosition() === "top"',
        '[class.bottom-0]': 'verticalPosition() === "bottom"',
        '[class.left-0]': 'horizontalPosition() === "left"',
        '[class.right-0]': 'horizontalPosition() === "right"',
        '[class.top-1/2]': 'verticalPosition() === "center"',
        '[class.-translate-y-1/2]': 'verticalPosition() === "center"',
        '[class.translate-x-5/6]': '!isOpen() && horizontalPosition() === "right"',
        '[class.-translate-x-5/6]': '!isOpen() && horizontalPosition() === "left"',
        '[class.translate-x-0]': 'isOpen()',
        '[class.shake-vertical]': '!isOpen()',
        '(mouseenter)': 'open()',
        '(mouseleave)': 'close()',
        '(touchend)': 'toggleOpen()',
    },
})
export class SideMarker {
    public readonly horizontalPosition: InputSignal<HorizontalPosition> = input<HorizontalPosition>('right');
    public readonly verticalPosition: InputSignal<VerticalPosition> = input<VerticalPosition>('center');
    protected readonly isOpen: WritableSignal<boolean> = signal<boolean>(false);

    public toggleOpen(): void {
        this.isOpen.update(prev => !prev);
    }

    public open(): void {
        this.isOpen.set(true);
    }

    public close(): void {
        this.isOpen.set(false);
    }

}
