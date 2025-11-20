import { ChangeDetectionStrategy, Component } from '@angular/core';
import { navigationLinks } from '../../constants/navigation-links';
import type { NavigationItem } from '../../models/navigation-item';
import { DesktopNavigation } from './components/desktop-navigation/desktop-navigation';
import { MobileNavigation } from './components/mobile-navigation/mobile-navigation';

@Component({
    selector: 'app-navigation',
    imports: [
        MobileNavigation,
        DesktopNavigation,
    ],
    templateUrl: './navigation.html',
    styleUrl: './navigation.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navigation {
    protected readonly navigationLinks: NavigationItem[] = navigationLinks;
}
