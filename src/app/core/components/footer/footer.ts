import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { Image } from '../../../shared/components/image/image';
import { socialLinks } from '../../constants/navigation-links';
import type { NavigationItem } from '../../models/navigation-item';

@Component({
    selector: 'app-footer',
    imports: [
        Image,
        FaIconComponent,
    ],
    templateUrl: './footer.html',
    styleUrl: './footer.css',
})
export class Footer {

    protected readonly socialLinks: NavigationItem[] = socialLinks;
}
