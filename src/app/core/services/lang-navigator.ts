import { inject, Injectable } from '@angular/core';
import { type Params, Router, UrlSegment, UrlTree } from '@angular/router';
import { availableLanguagesCode } from '../constants/availableLanguages';
import type { LanguageCode } from '../models/app-language';

@Injectable({
    providedIn: 'root',
})
export class LangNavigatorService {
    private readonly router: Router = inject(Router);

    public async navigateTo(language: LanguageCode): Promise<void> {
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
}
