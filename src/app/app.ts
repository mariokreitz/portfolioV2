import { DOCUMENT, registerLocaleData } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import { ActivatedRoute, type Data, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { availableLanguages } from './core/constants/available-languages';
import type { LanguageCode, LocaleData } from './core/models/app-language';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
    ],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App implements OnInit {
    private readonly translate: TranslateService = inject(TranslateService);
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private readonly document: Document = inject(DOCUMENT);

    constructor() {
        this.translate.addLangs(Object.keys(availableLanguages));

        (Object.entries(availableLanguages) as [ LanguageCode, LocaleData ][]).forEach(
          ([ language, [ core, extra ] ]: [ LanguageCode, LocaleData ]) => {
              registerLocaleData(core, language, extra);
          },
        );
    }

    public ngOnInit() {
        const data: Data = this.activatedRoute.snapshot.data;
        const language: string = data['lang'] || this.translate.getBrowserLang() || 'en';
        this.document.documentElement.lang = language;
        this.translate.use(language);

    }
}