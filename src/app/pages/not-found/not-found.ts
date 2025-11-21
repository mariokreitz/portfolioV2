import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Layout } from '../../core/layout/layout';
import { LangNavigatorService } from '../../core/services/lang-navigator';
import { Button } from '../../shared/components/button/button';
import { Image } from '../../shared/components/image/image';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { PageSubheadline } from '../../shared/components/page-subheadline/page-subheadline';

@Component({
    selector: 'app-not-found',
    imports: [
        Layout,
        PageHeadline,
        PageSubheadline,
        Image,
        Button,
    ],
    templateUrl: './not-found.html',
    styleUrl: './not-found.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {
    private readonly langNavigator: LangNavigatorService = inject(LangNavigatorService);

    public async goHome(): Promise<void> {
        await this.langNavigator.navigateTo('/');
    }
}

