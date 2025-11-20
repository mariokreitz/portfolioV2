import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Layout } from '../../core/layout/layout';
import { HeroSection } from '../../features/hero-section/hero-section';

@Component({
    selector: 'app-home',
    imports: [
        Layout,
        HeroSection,
    ],
    templateUrl: './home.html',
    styleUrl: './home.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {

}
