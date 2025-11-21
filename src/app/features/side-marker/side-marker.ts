import { ChangeDetectionStrategy, Component, input, type InputSignal } from '@angular/core';

type HorizontalPosition = 'left' | 'right' | 'center';
type VerticalPosition = 'top' | 'bottom' | 'center';

@Component({
    selector: 'app-side-marker',
    imports: [],
    templateUrl: './side-marker.html',
    styleUrl: './side-marker.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMarker {
    public readonly horizontalPosition: InputSignal<HorizontalPosition> = input<HorizontalPosition>('right');
    public readonly verticalPosition: InputSignal<VerticalPosition> = input<VerticalPosition>('center');

}
