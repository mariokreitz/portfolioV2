import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-under-construction-hint',
    imports: [
        TranslatePipe,
    ],
    templateUrl: './under-construction-hint.html',
    styleUrl: './under-construction-hint.css',
})
export class UnderConstructionHint {
}
