import { ChangeDetectionStrategy, Component, computed, inject, input, type InputSignal, type Signal, signal } from '@angular/core';
import { FaIconComponent, type IconDefinition } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { TranslatePipe } from '@ngx-translate/core';
import { Image } from '../../../../../shared/components/image/image';
import type { NavigationItem } from '../../../../models/navigation-item';
import { LangNavigatorService } from '../../../../services/lang-navigator';
import { LanguageSelector } from '../../../language-selector/language-selector';

@Component({
    selector: 'app-mobile-navigation',
    imports: [
        Image,
        FaIconComponent,
        LanguageSelector,
        TranslatePipe,

    ],
    templateUrl: './mobile-navigation.html',
    styleUrl: './mobile-navigation.css',
    host: { class: 'sm:hidden block' },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileNavigation {
    public readonly navigationLinks: InputSignal<NavigationItem[]> = input.required();
    protected readonly faBars: IconDefinition = faBars;
    protected readonly faXmark: IconDefinition = faXmark;
    protected readonly menuOpen = signal(false);
    protected readonly ariaExpanded = computed(() => this.menuOpen());

    private readonly langNavigator: LangNavigatorService = inject(LangNavigatorService);
    protected readonly currentRoute: Signal<string> = this.langNavigator.currentRoute;

    public toggleMenu(): void {
        this.menuOpen.update(v => !v);
    }

    public closeMenu(): void {
        this.menuOpen.set(false);
    }

    public navigateTo(link: string): void {
        void this.langNavigator.navigateTo(link);
        this.closeMenu();
    }
}
