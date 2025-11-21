import { Component } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { Image } from '../../shared/components/image/image';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { PageSubheadline } from '../../shared/components/page-subheadline/page-subheadline';

@Component({
    selector: 'app-hero-section',
    imports: [
        Image,
        PageHeadline,
        PageSubheadline,
        Button,
    ],
    templateUrl: './hero-section.html',
    styleUrl: './hero-section.css',
    host: { 'class': 'relative w-full h-full flex' },
})
export class HeroSection {
    public mailTo(): void {
        window.location.href = 'mailto:mario.kreitz@web.de';
    }
}
