import { Component, OnInit, DoCheck } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { CommonService } from '../shared/services/common.service';
import { MenuItem } from 'primeng';

@Component({
    selector: 'app-menu',
    template: `
		<ul class="ultima-menu ultima-main-menu clearfix">
			<li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
		</ul>
    `
})
export class AppMenuComponent implements OnInit {   
    model: any[];

    constructor(public app: AppMainComponent, public _commonService:CommonService) { }



    ngOnInit() {
        
        this.model = [
            {label: 'Dashboard', icon: 'dashboard', routerLink: ['/']},
            {
                label: 'Configuration', icon: 'list', badgeStyleClass: 'teal-badge', routerLink: ['/configuration'],
                items: [
                    {label: 'Parameter Group', icon: 'assignment', routerLink: ['/configuration/ge/grupo']}
                ]
            },
            {label: 'Utils', icon: 'build', routerLink: ['/utils']},
            {label: 'Documentation', icon: 'find_in_page', routerLink: ['/documentation']}
        ];
        
       // this.model = this._commonService.getMenuSession();

        

        //console.log('Any[]',this.model);
        //this._commonService.getMenuSession();
    }
}
