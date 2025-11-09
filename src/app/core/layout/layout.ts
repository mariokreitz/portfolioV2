import { Component, inject, type Signal } from '@angular/core';
import { Footer } from '../components/footer/footer';
import { Navigation } from '../components/navigation/navigation';
import { UnderConstructionHint } from '../components/under-construction-hint/under-construction-hint';
import { EnvironmentService } from '../services/environment-service';

@Component({
    selector: 'app-layout',
    imports: [
        Navigation,
        UnderConstructionHint,
        Footer,
    ],
    templateUrl: './layout.html',
    styleUrl: './layout.css',
})
export class Layout {
    private readonly environmentService: EnvironmentService = inject(EnvironmentService);

    public readonly isUnderConstruction: Signal<boolean> = this.environmentService.isUnderConstruction;
}
