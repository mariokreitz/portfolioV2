import { inject, Injectable } from '@angular/core';
import { type Params, Router, UrlSegment, UrlTree } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { availableLanguagesCode } from '../constants/available-languages';
import type { LanguageCode } from '../models/app-language';

@Injectable({
    providedIn: 'root',
})
export class LangNavigatorService {
    protected translate: TranslateService = inject(TranslateService);
    private readonly router: Router = inject(Router);

    public async setLanguage(language: LanguageCode): Promise<void> {
        const urlTree: UrlTree = this.router.parseUrl(this.router.url);

        const segments: string[] = urlTree.root.children['primary']?.segments.map((s: UrlSegment): string => s.path) || [];

        const urlWithoutLang: string[] = availableLanguagesCode.includes(segments[0] as LanguageCode) ? segments.slice(1) : segments;

        const fragment: string | undefined = urlTree.fragment ?? undefined;

        const queryParams: Params = urlTree.queryParams;

        const newUrl: string[] = language !== 'de' ? [
            '/',
            language,
            ...urlWithoutLang,
        ] : [
            '/',
            ...urlWithoutLang,
        ];

        await this.router.navigate(newUrl, {
            fragment,
            queryParams,
            queryParamsHandling: 'merge',
        });
    }

    public async navigateTo(path: string): Promise<void> {
        await this.router.navigate([ (this.translate.getCurrentLang() != 'de' ? this.translate.getCurrentLang() : '') + path ]);
    }
}
