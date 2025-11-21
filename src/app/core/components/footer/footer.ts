import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from '@ngx-translate/core';
import { Image } from '../../../shared/components/image/image';
import { footerLinks, socialLinks } from '../../constants/navigation-links';
import type { NavigationItem } from '../../models/navigation-item';

@Component({
    selector: 'app-footer',
    imports: [
        Image,
        FaIconComponent,
        TranslatePipe,
    ],
    templateUrl: './footer.html',
    styleUrl: './footer.css',
})
export class Footer {
    protected readonly socialLinks: NavigationItem[] = socialLinks;
    protected readonly footerLinks: NavigationItem[] = footerLinks;

    public getSocialMediaAriaLabel(label: string): string {
        const key = label.toLowerCase();
        return `accessibility.socialMedia.${key}`;
    }
}
