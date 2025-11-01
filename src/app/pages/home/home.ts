import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSelector } from '../../core/components/language-selector/language-selector';

@Component({
    selector: 'app-home',
    imports: [
        TranslatePipe,
        LanguageSelector,
    ],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class Home {

}
