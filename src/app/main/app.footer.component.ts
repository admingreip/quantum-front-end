import {Component} from '@angular/core';
import { AppConfig } from '../app.config';

@Component({
    selector: 'app-footer',
    template: `
        <div class="footer">
            <div class="card clearfix">
                <span class="footer-text-left">{{footer}}</span>
                <span class="footer-text-right">
                    <span class="material-icons ui-icon-copyright"></span>
                    <span>All Rights Reserved</span>
                </span>
            </div>
        </div>
    `
})
export class AppFooterComponent {
    footer:string = AppConfig.WEB_CLIENT_EMPRESA


}
