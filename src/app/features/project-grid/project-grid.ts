import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, type InputSignal, type Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import type { ProjectItem } from '../../shared/models/project-item';

@Component({
    selector: 'app-project-grid',
    imports: [
        RouterLink,
        NgOptimizedImage,
        TranslatePipe,
    ],
    templateUrl: './project-grid.html',
    styleUrl: './project-grid.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'app-project-grid',
    },
})
export class ProjectGrid {
    public readonly projects: InputSignal<ProjectItem[]> = input.required<ProjectItem[]>();
    public readonly count: Signal<number> = computed(() => this.projects()?.length ?? 0);
    public readonly fallbackImage: string = 'assets/images/project-fallback.png';

    public onCardKeydown(event: KeyboardEvent, url?: string | undefined): void {
        if (!url) return;
        const key: string = event.key;
        if (key === 'Enter' || key === ' ') {
            const anchor = (event.target as HTMLElement).closest('a') as HTMLAnchorElement | null;
            if (anchor) {
                anchor.click();
            } else {
                window.open(String(url), '_self');
            }
            event.preventDefault();
        }
    }
}
