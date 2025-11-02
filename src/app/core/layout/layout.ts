import { Component } from '@angular/core';
import { Navigation } from '../components/navigation/navigation';

@Component({
    selector: 'app-layout',
    imports: [
        Navigation,
    ],
    templateUrl: './layout.html',
    styleUrl: './layout.css',
})
export class Layout {

}
