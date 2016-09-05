/**
 * Created by David on 2/11/16.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h2>{{title}}</h2>
        <nav>
            <a routerLink="/preview">Preview</a>
            <a routerLink="/patients">Patients</a>
        </nav>
        <router-outlet></router-outlet>
        `,
    styleUrls: ['src/styles/app.component.css']
})

export class AppComponent {
    title = 'Billing';
}
