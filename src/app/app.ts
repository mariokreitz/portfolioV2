import { DOCUMENT, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import localeDeExtra from '@angular/common/locales/extra/de';
import localeEnExtra from '@angular/common/locales/extra/en';
import { Component, inject, type OnInit } from '@angular/core';
import { ActivatedRoute, type Data } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import type { LanguageCode, LocaleData } from './core/models/app-language';

@Component({
    selector: 'app-root',
    imports: [
        TranslatePipe,
    ],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App implements OnInit {
    private readonly availableLanguages: Readonly<Record<LanguageCode, LocaleData>> = {
        de: [
            localeDe,
            localeDeExtra,
        ],
        en: [
            localeEn,
            localeEnExtra,
        ],
    } as const;

    private readonly translate: TranslateService = inject(TranslateService);
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private readonly document: Document = inject(DOCUMENT);

    constructor() {
        this.translate.addLangs(Object.keys(this.availableLanguages));

        (Object.entries(this.availableLanguages) as Array<[ LanguageCode, LocaleData ]>).forEach(
          ([ language, [ core, extra ] ]: [ LanguageCode, LocaleData ]) => {
              registerLocaleData(core, language, extra);
          },
        );
    }

    public ngOnInit() {
        this.activatedRoute.data.pipe(take(1)).subscribe((data: Data) => {
            console.log(data);
            const language: string = data['lang'] || this.translate.getBrowserLang() || 'en';
            console.log(language);
            this.document.documentElement.lang = language;
            this.translate.use(language);
        });
    }
}