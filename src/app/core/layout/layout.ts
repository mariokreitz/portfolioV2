import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Footer } from '../components/footer/footer';
import { Navigation } from '../components/navigation/navigation';

@Component({
    selector: 'app-layout',
    imports: [
        Navigation,
        Footer,
        TranslatePipe,
    ],
    templateUrl: './layout.html',
    styleUrl: './layout.css',
})
export class Layout {
}
