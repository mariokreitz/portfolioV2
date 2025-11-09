import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Layout } from '../../core/layout/layout';

@Component({
    selector: 'app-imprint',
    imports: [
        Layout,
        TranslatePipe,

    ],
    templateUrl: './imprint.html',
    styleUrl: './imprint.css',
})
export class Imprint {

}
