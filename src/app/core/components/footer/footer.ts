import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { TranslatePipe } from '@ngx-translate/core';
import { LangNavigatorService } from '../../services/lang-navigator';

@Component({
    selector: 'app-footer',
    imports: [
        FontAwesomeModule,
        TranslatePipe,
    ],
    templateUrl: './footer.html',
    styleUrl: './footer.css',
})
export class Footer {
    protected readonly faGithub = faGithub;

    private readonly langNavigator = inject(LangNavigatorService);

    async navigateTo(link: string): Promise<void> {
        await this.langNavigator.navigateTo(link);
    }
}
