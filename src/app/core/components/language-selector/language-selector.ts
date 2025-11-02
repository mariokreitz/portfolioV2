import { Component, inject, type Signal, signal, type WritableSignal } from '@angular/core';
import { FontAwesomeModule, type IconDefinition } from '@fortawesome/angular-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { availableLanguagesCode } from '../../constants/availableLanguages';
import type { LanguageCode } from '../../models/app-language';
import { LangNavigatorService } from '../../services/lang-navigator';

@Component({
    selector: 'app-language-selector',
    imports: [
        FontAwesomeModule,
        TranslatePipe,
    ],
    templateUrl: './language-selector.html',
    styleUrl: './language-selector.css',
})
export class LanguageSelector {
    protected readonly languageIcon: IconDefinition = faLanguage;
    protected readonly languages: LanguageCode[] = availableLanguagesCode;

    private readonly _isLanguageSelectionOpen: WritableSignal<boolean> = signal(false);
    public readonly isLanguageSelectionOpen: Signal<boolean> = this._isLanguageSelectionOpen.asReadonly();

    private readonly langNavigator: LangNavigatorService = inject(LangNavigatorService);
    private readonly translate: TranslateService = inject(TranslateService);
    public readonly currentLanguage: Signal<string> = signal(this.translate.getCurrentLang());

    public selectLanguage(lang: LanguageCode): void {
        void this.langNavigator.navigateTo(lang);
    }

    public toggleLanguageSelectionMenu() {
        this._isLanguageSelectionOpen.update(prev => !prev);
    }
}
