import { ChangeDetectionStrategy, Component, input, type InputSignal } from '@angular/core';
import { navigationLinks, socialLinks } from '../../constants/navigation-links';
import type { NavigationItem } from '../../models/navigation-item';
import { DesktopNavigation } from './components/desktop-navigation/desktop-navigation';
import { MobileNavigation } from './components/mobile-navigation/mobile-navigation';
import type { NavigationClassesConfig } from './navigation-class-config';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [
        MobileNavigation,
        DesktopNavigation,
    ],
    templateUrl: './navigation.html',
    styleUrl: './navigation.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navigation {
    public readonly classes: InputSignal<NavigationClassesConfig | undefined> = input<NavigationClassesConfig>();
    public readonly rootWrapperClass: InputSignal<string | undefined> = input<string>();
    protected readonly navigationLinks: NavigationItem[] = navigationLinks;
    protected readonly socialLinks: NavigationItem[] = socialLinks;
}
