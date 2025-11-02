import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Layout } from '../../core/layout/layout';

@Component({
    selector: 'app-home',
    imports: [
        TranslatePipe,
        Layout,
    ],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class Home {

}
