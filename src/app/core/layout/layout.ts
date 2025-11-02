import { Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSelector } from '../components/language-selector/language-selector';
import { navigationLinks } from '../constants/navigation-links';
import type { NavigationItem } from '../models/navigation-item';
import { LangNavigatorService } from '../services/lang-navigator';

@Component({
    selector: 'app-layout',
    imports: [
        FaIconComponent,
        LanguageSelector,
        TranslatePipe,
    ],
    templateUrl: './layout.html',
    styleUrl: './layout.css',
})
export class Layout {
    protected readonly navigationLinks: NavigationItem[] = navigationLinks;
    private readonly langNavigator: LangNavigatorService = inject(LangNavigatorService);

    public navigateTo(link: string): void {
        void this.langNavigator.navigateTo(link);
    }
}
