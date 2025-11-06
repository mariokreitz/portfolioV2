import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from '@ngx-translate/core';
import { Icon } from '../../../shared/components/icon/icon';
import { navigationLinks } from '../../constants/navigation-links';
import type { NavigationItem } from '../../models/navigation-item';
import { LangNavigatorService } from '../../services/lang-navigator';
import { LanguageSelector } from '../language-selector/language-selector';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [
        FaIconComponent,
        LanguageSelector,
        TranslatePipe,
        Icon,
    ],
    templateUrl: './navigation.html',
    styleUrl: './navigation.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navigation {
    protected readonly navigationLinks: NavigationItem[] = navigationLinks;

    private readonly langNavigator: LangNavigatorService = inject(LangNavigatorService);

    public navigateTo(link: string): void {
        void this.langNavigator.navigateTo(link);
    }
}
