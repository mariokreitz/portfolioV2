import { CommonModule } from '@angular/common';
import type { OnDestroy, OnInit, Signal, WritableSignal } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FontAwesomeModule, type IconDefinition } from '@fortawesome/angular-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import { availableLanguagesCode } from '../../constants/available-languages';
import type { LanguageCode } from '../../models/app-language';
import { LangNavigatorService } from '../../services/lang-navigator';

@Component({
    selector: 'app-language-selector',
    imports: [
        CommonModule,
        FontAwesomeModule,
        TranslatePipe,
    ],
    templateUrl: './language-selector.html',
    styleUrl: './language-selector.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.lang-open]': 'isLanguageSelectionOpen()',
    },
})
export class LanguageSelector implements OnInit, OnDestroy {
    protected readonly languageIcon: IconDefinition = faLanguage;
    protected readonly languages: LanguageCode[] = availableLanguagesCode;

    private readonly _isLanguageSelectionOpen: WritableSignal<boolean> = signal(false);
    public readonly isLanguageSelectionOpen: Signal<boolean> = this._isLanguageSelectionOpen.asReadonly();

    private readonly langNavigator: LangNavigatorService = inject(LangNavigatorService);
    private readonly translate: TranslateService = inject(TranslateService);

    private readonly _currentLanguage: WritableSignal<string> = signal(this.translate.getCurrentLang());
    public readonly currentLanguage: Signal<string> = this._currentLanguage.asReadonly();

    private outsideClickListener?: (e: MouseEvent) => void;

    public ngOnInit(): void {
        this.translate.onLangChange.pipe(take(1)).subscribe(() => {
            this._currentLanguage.set(this.translate.getCurrentLang());
        });

        this.outsideClickListener = (e: MouseEvent): void => {
            const path: EventTarget[] | undefined = e.composedPath ? e.composedPath() : (e as unknown as { path?: EventTarget[] }).path;
            const host: Element | null = document.querySelector('app-language-selector');
            if (!host) return;
            if (!path || !path.includes(host)) {
                this._isLanguageSelectionOpen.set(false);
            }
        };
        document.addEventListener('click', this.outsideClickListener);
    }

    public ngOnDestroy(): void {
        if (this.outsideClickListener) {
            document.removeEventListener('click', this.outsideClickListener);
            this.outsideClickListener = undefined;
        }
    }

    public selectLanguage(lang: LanguageCode): void {
        void this.langNavigator.setLanguage(lang).then(() => {
            this._isLanguageSelectionOpen.set(false);
        }).catch(() => {
            this._isLanguageSelectionOpen.set(false);
        });
    }

    public toggleLanguageSelectionMenu(): void {
        this._isLanguageSelectionOpen.update((prev: boolean): boolean => !prev);
    }

    public onToggleButtonKeydown(event: KeyboardEvent): void {
        const key = event.key;
        if (key === 'ArrowDown' || key === 'Enter' || key === ' ') {
            event.preventDefault();
            this._isLanguageSelectionOpen.set(true);
            const firstId = `lang-option-${this.languages[0]}`;
            const el = document.getElementById(firstId) as HTMLElement | null;
            el?.focus();
        } else if (key === 'Escape') {
            this._isLanguageSelectionOpen.set(false);
        }
    }

    public onMenuItemKeydown(event: KeyboardEvent, lang: LanguageCode): void {
        const key = event.key;
        if (key === 'Escape') {
            this._isLanguageSelectionOpen.set(false);
            const btn = document.querySelector('app-language-selector button') as HTMLElement | null;
            btn?.focus();
            return;
        }

        const idx = this.languages.indexOf(lang);
        if (key === 'ArrowDown') {
            event.preventDefault();
            const next = this.languages[(idx + 1) % this.languages.length];
            const el = document.getElementById(`lang-option-${next}`) as HTMLElement | null;
            el?.focus();
        } else if (key === 'ArrowUp') {
            event.preventDefault();
            const prev = this.languages[(idx - 1 + this.languages.length) % this.languages.length];
            const el = document.getElementById(`lang-option-${prev}`) as HTMLElement | null;
            el?.focus();
        } else if (key === 'Enter' || key === ' ') {
            event.preventDefault();
            this.selectLanguage(lang);
        }
    }
}
