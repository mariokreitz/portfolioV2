import { UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { availableLanguagesCode } from '../../constants/availableLanguages';
import type { LanguageCode } from '../../models/app-language';
import { LangNavigatorService } from '../../services/lang-navigator';

@Component({
    selector: 'app-language-selector',
    imports: [
        UpperCasePipe,
    ],
    templateUrl: './language-selector.html',
    styleUrl: './language-selector.css',
})
export class LanguageSelector {
    protected readonly languages: LanguageCode[] = availableLanguagesCode;

    private readonly langNavigator: LangNavigatorService = inject(LangNavigatorService);

    public selectLanguage(lang: LanguageCode): void {
        void this.langNavigator.navigateTo(lang);
    }
}
