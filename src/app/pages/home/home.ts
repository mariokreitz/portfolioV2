import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Layout } from '../../core/layout/layout';

@Component({
    selector: 'app-home',
    imports: [
        Layout,
        NgOptimizedImage,
        TranslatePipe,
    ],
    templateUrl: './home.html',
    styleUrl: './home.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {

}
