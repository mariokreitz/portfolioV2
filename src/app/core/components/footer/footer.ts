import { Component } from '@angular/core';
import { FontAwesomeModule, type IconDefinition } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    imports: [ FontAwesomeModule ],
    templateUrl: './footer.html',
    styleUrl: './footer.css',
})
export class Footer {
    protected readonly faGithub: IconDefinition = faGithub;
}
