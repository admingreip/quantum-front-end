import { Component, OnDestroy } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { BreadcrumbService } from './breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem, ConfirmationService} from 'primeng';
import { CommonService } from "./../shared/services/common.service";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './app.breadcrumb.component.html'
})
export class AppBreadcrumbComponent implements OnDestroy {

    subscription: Subscription;

    items: MenuItem[];

    constructor(public breadcrumbService: BreadcrumbService,
            private _router: Router,
            private _confirmationService: ConfirmationService,
            public translate: TranslateService) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    logout() {
        console.log('Entra a confirmacion')
        //CommonService.clearStorageSession();
        //this._router.navigate(['/login']);

        
        this._confirmationService.confirm({
            message: this.translate.instant('msgGeConfirmLogout'),
            header: this.translate.instant('titGeConfirm'),
            accept: () => {
                CommonService.clearStorageSession();
                this._router.navigate(['/login']);
            },
            reject: () => { }
        });
        console.log('Sale a confirmacion')
        

       
    }
}
