import {Component, Inject, forwardRef} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( @Inject(forwardRef(() => TranslateService)) private translate: TranslateService, private router: Router) {
    translate.addLangs(['es', 'en']);
    
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');

  }

}
