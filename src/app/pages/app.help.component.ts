import { Component } from '@angular/core';
import {BreadcrumbService} from '../main/breadcrumb.service';

@Component({
    selector: 'app-help',
    templateUrl: './app.help.component.html',
})
export class AppHelpComponent {
    text: any;

    filteredText: any[];

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Pages' },
            { label: 'Help', routerLink: ['/pages/help'] }
        ]);
    }

    filterText(event) {
        const query = event.query;
        this.filteredText = [];

        for (let i = 0; i < 10; i++) {
            this.filteredText.push(query + i);
        }
    }

}
