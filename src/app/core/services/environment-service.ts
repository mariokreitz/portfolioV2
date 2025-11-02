import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class EnvironmentService {
    public readonly isProduction: boolean = environment.production;
    public readonly isUnderConstruction: boolean = environment.underConstruction;
}
