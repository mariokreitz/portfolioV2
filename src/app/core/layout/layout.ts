import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Footer } from '../components/footer/footer';
import { Navigation } from '../components/navigation/navigation';
import { UnderConstructionHint } from '../components/under-construction-hint/under-construction-hint';

@Component({
    selector: 'app-layout',
    imports: [
        Navigation,
        UnderConstructionHint,
        Footer,
        TranslatePipe,
    ],
    templateUrl: './layout.html',
    styleUrl: './layout.css',
})
export class Layout {
}
