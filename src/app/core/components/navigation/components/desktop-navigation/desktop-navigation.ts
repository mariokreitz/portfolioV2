import { Component, computed, inject, input, type InputSignal, type Signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from '@ngx-translate/core';
import { Icon } from '../../../../../shared/components/icon/icon';
import { cn } from '../../../../../shared/utils';
import type { NavigationItem } from '../../../../models/navigation-item';
import { LangNavigatorService } from '../../../../services/lang-navigator';
import { LanguageSelector } from '../../../language-selector/language-selector';
import type { NavigationClassesConfig } from '../../navigation-class-config';
import { DEFAULT_NAVIGATION_CLASSES } from '../../navigation-class-defaults';

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
    public readonly socialLinks: InputSignal<NavigationItem[] | undefined> = input();
    public readonly classes: InputSignal<NavigationClassesConfig | undefined> = input<NavigationClassesConfig>();
    public readonly desktopContainerClass: InputSignal<string | undefined> = input<string>();
    public readonly logoAnchorClass: InputSignal<string | undefined> = input<string>();
    public readonly languageSelectorWrapperDesktopClass: InputSignal<string | undefined> = input<string>();
    public readonly navLinkBaseClass: InputSignal<string | undefined> = input<string>();
    public readonly navLinkActiveClass: InputSignal<string | undefined> = input<string>();
    public readonly socialLinkItemClass: InputSignal<string | undefined> = input<string>();
    public readonly cn = cn;
    protected readonly desktopContainerMerged = computed(() => cn(
      DEFAULT_NAVIGATION_CLASSES.desktopContainer,
      this.classes()?.desktopContainer,
      this.desktopContainerClass(),
    ));
    protected readonly logoAnchorMerged = computed(() => cn(
      DEFAULT_NAVIGATION_CLASSES.logoAnchor,
      this.classes()?.logoAnchor,
      this.logoAnchorClass(),
    ));
    protected readonly languageSelectorWrapperDesktopMerged = computed(() => cn(
      DEFAULT_NAVIGATION_CLASSES.languageSelectorWrapperDesktop,
      this.classes()?.languageSelectorWrapperDesktop,
      this.languageSelectorWrapperDesktopClass(),
    ));
    protected readonly navLinkBaseMerged = computed(() => cn(
      DEFAULT_NAVIGATION_CLASSES.navLinkBase,
      this.classes()?.navLinkBase,
      this.navLinkBaseClass(),
    ));
    protected readonly navLinkActiveMerged = computed(() => cn(
      DEFAULT_NAVIGATION_CLASSES.navLinkActive,
      this.classes()?.navLinkActive,
      this.navLinkActiveClass(),
    ));
    protected readonly socialLinkItemMerged = computed(() => cn(
      DEFAULT_NAVIGATION_CLASSES.socialLinkItem,
      this.classes()?.socialLinkItem,
      this.socialLinkItemClass(),
    ));
    private readonly langNavigator: LangNavigatorService = inject(LangNavigatorService);
    protected readonly currentRoute: Signal<string> = this.langNavigator.currentRoute;

    public navigateTo(link: string): void {
        void this.langNavigator.navigateTo(link);
    }
}
