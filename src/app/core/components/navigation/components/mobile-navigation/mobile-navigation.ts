import { ChangeDetectionStrategy, Component, computed, inject, input, type InputSignal, type Signal, signal } from '@angular/core';
import { FaIconComponent, type IconDefinition } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { TranslatePipe } from '@ngx-translate/core';
import { Icon } from '../../../../../shared/components/icon/icon';
import { cn } from '../../../../../shared/utils';
import type { NavigationItem } from '../../../../models/navigation-item';
import { LangNavigatorService } from '../../../../services/lang-navigator';
import { LanguageSelector } from '../../../language-selector/language-selector';
import type { NavigationClassesConfig } from '../../navigation-class-config';
import { DEFAULT_NAVIGATION_CLASSES } from '../../navigation-class-defaults';

@Component({
    selector: 'app-mobile-navigation',
    imports: [
        Icon,
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
    public readonly classes: InputSignal<NavigationClassesConfig | undefined> = input<NavigationClassesConfig>();
    public readonly mobileTopBarClass: InputSignal<string | undefined> = input<string>();
    public readonly mobileMenuPanelClass: InputSignal<string | undefined> = input<string>();
    public readonly logoAnchorClass: InputSignal<string | undefined> = input<string>();
    public readonly navLinkBaseClass: InputSignal<string | undefined> = input<string>();
    public readonly navLinkActiveClass: InputSignal<string | undefined> = input<string>();
    public readonly languageSelectorWrapperMobileClass: InputSignal<string | undefined> = input<string>();
    public readonly mobileToggleButtonClass: InputSignal<string | undefined> = input<string>();
    public readonly cn = cn;
    protected readonly faBars: IconDefinition = faBars;
    protected readonly faXmark: IconDefinition = faXmark;
    protected readonly menuOpen = signal(false);
    protected readonly ariaExpanded = computed(() => this.menuOpen());
    protected readonly mobileTopBarMerged = computed(() => cn(
      DEFAULT_NAVIGATION_CLASSES.mobileTopBar,
      this.classes()?.mobileTopBar,
      this.mobileTopBarClass(),
    ));
    protected readonly logoAnchorMerged = computed(() => cn(
      DEFAULT_NAVIGATION_CLASSES.logoAnchor,
      this.classes()?.logoAnchor,
      this.logoAnchorClass(),
    ));
    protected readonly mobileToggleButtonMerged = computed(() => cn(
      DEFAULT_NAVIGATION_CLASSES.mobileToggleButton,
      this.classes()?.mobileToggleButton,
      this.mobileToggleButtonClass(),
    ));
    protected readonly mobileMenuPanelMerged = computed(() => cn(
      DEFAULT_NAVIGATION_CLASSES.mobileMenuPanel,
      this.classes()?.mobileMenuPanel,
      this.mobileMenuPanelClass(),
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
    protected readonly languageSelectorWrapperMobileMerged = computed(() => cn(
      DEFAULT_NAVIGATION_CLASSES.languageSelectorWrapperMobile,
      this.classes()?.languageSelectorWrapperMobile,
      this.languageSelectorWrapperMobileClass(),
    ));
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
