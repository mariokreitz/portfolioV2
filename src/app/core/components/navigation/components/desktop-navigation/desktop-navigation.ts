import { Component, inject, input, type InputSignal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from '@ngx-translate/core';
import { Icon } from '../../../../../shared/components/icon/icon';
import type { NavigationItem } from '../../../../models/navigation-item';
import { LangNavigatorService } from '../../../../services/lang-navigator';
import { LanguageSelector } from '../../../language-selector/language-selector';

@Component({
    selector: 'app-desktop-navigation',
    imports: [
        FaIconComponent,
        TranslatePipe,
        LanguageSelector,
        Icon,
    ],
    templateUrl: './desktop-navigation.html',
    styleUrl: './desktop-navigation.css',
    host: { class: 'hidden sm:block' },
})
export class DesktopNavigation {
    public readonly navigationLinks: InputSignal<NavigationItem[]> = input.required();
    private readonly langNavigator: LangNavigatorService = inject(LangNavigatorService);

    public navigateTo(link: string): void {
        void this.langNavigator.navigateTo(link);
    }
}
