import { Injectable, signal, type Signal } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class EnvironmentService {
    public readonly isProduction: Signal<boolean> = signal(environment.production);
    public readonly isUnderConstruction: Signal<boolean> = signal(environment.underConstruction);

}
