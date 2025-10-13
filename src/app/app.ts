import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    imports: [
        TranslatePipe,
    ],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    private readonly translate: TranslateService = inject(TranslateService);

    constructor() {
        this.translate.addLangs([
            'de',
            'en',
        ]);
        this.translate.use(this.translate.getBrowserLang() ?? 'en');
    }
}