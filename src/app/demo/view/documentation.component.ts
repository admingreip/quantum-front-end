import {Component} from '@angular/core';
import {BreadcrumbService} from '../../main/breadcrumb.service';

@Component({
    templateUrl: './documentation.component.html',
    styles: [`
        .docs h1 {
            margin-top: 30px;
        }

        .docs pre.doc-command {
            font-family: monospace;
            background-color: #0C2238;
            color: #dddddd;
            padding: 1em;
            font-size: 14px;
            border-radius: 3px;
            overflow: auto;
        }

		.docs i {
			background: #f1daad;
			font-family: monaco,Consolas,Lucida Console,monospace;
			font-weight: 700;
			padding: 2px 4px;
			letter-spacing: .5px;
			font-style: normal;
			color: #424242;
			border-radius: 4px;
		}

        .inline-code {
            background-color: #0C2238;
            color: #dddddd;
            font-style: normal;
            font-size: 13px;
            padding: 0 .5em;
        }`
    ]
})
export class DocumentationComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Documentation', routerLink: ['/documentation'] }
        ]);
    }

}
