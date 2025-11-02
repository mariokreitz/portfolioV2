import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Layout } from '../../core/layout/layout';

@Component({
    selector: 'app-projects',
    imports: [
        Layout,
        TranslatePipe,
    ],
    templateUrl: './projects.html',
    styleUrl: './projects.css',
})
export class Projects {

}
