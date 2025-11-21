import { ChangeDetectionStrategy, Component, inject, input, type InputSignal, type Signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from '@ngx-translate/core';
import { Image } from '../../../../../shared/components/image/image';
import type { NavigationItem } from '../../../../models/navigation-item';
import { LangNavigatorService } from '../../../../services/lang-navigator';
import { LanguageSelector } from '../../../language-selector/language-selector';

@Component({
    selector: 'app-desktop-navigation',
    imports: [
        FaIconComponent,
        TranslatePipe,
        LanguageSelector,
        Image,
    ],
    templateUrl: './desktop-navigation.html',
    styleUrl: './desktop-navigation.css',
    host: { class: 'hidden sm:block' },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopNavigation {
    public readonly navigationLinks: InputSignal<NavigationItem[]> = input.required();
    private readonly langNavigator: LangNavigatorService = inject(LangNavigatorService);
    protected readonly currentRoute: Signal<string> = this.langNavigator.currentRoute;

    public navigateTo(link: string): void {
        void this.langNavigator.navigateTo(link);
    }
}
