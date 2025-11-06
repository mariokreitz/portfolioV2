import { inject, Injectable, type Signal, signal, type WritableSignal } from '@angular/core';
import { type Params, Router, UrlSegment, UrlTree } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { availableLanguagesCode } from '../constants/available-languages';
import type { LanguageCode } from '../models/app-language';

@Injectable({
    providedIn: 'root',
})
export class LangNavigatorService {
    private readonly _currentRoute: WritableSignal<string> = signal('');
    public readonly currentRoute: Signal<string> = this._currentRoute.asReadonly();

    private readonly translate: TranslateService = inject(TranslateService);
    private readonly router: Router = inject(Router);

    constructor() {
        this.setCurrentRoute();
    }

    public async setLanguage(language: LanguageCode): Promise<void> {
        const urlTree: UrlTree = this.router.parseUrl(this.router.url);
        const urlWithoutLang: string[] = this.getUrlWithoutLang();
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
        this.setCurrentRoute();
    }

    private getUrlWithoutLang(): string[] {
        const urlTree: UrlTree = this.router.parseUrl(this.router.url);
        const segments: string[] = urlTree.root.children['primary']?.segments.map((s: UrlSegment): string => s.path) || [];
        return availableLanguagesCode.includes(segments[0] as LanguageCode) ? segments.slice(1) : segments;
    }

    private setCurrentRoute() {
        const urlWithoutLang: string[] = this.getUrlWithoutLang();
        this._currentRoute.set('/' + urlWithoutLang.join('/'));
    }
}
