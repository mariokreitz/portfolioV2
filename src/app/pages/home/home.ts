import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Layout } from '../../core/layout/layout';
import { HeroSection } from '../../features/hero-section/hero-section';
import { SideMarker } from '../../features/side-marker/side-marker';
import { Image } from '../../shared/components/image/image';

@Component({
    selector: 'app-home',
    imports: [
        Layout,
        HeroSection,
        SideMarker,
        Image,
    ],
    templateUrl: './home.html',
    styleUrl: './home.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {

}
