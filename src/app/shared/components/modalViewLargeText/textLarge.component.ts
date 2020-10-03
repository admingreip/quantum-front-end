import { Component, OnInit, OnDestroy, ViewEncapsulation, Input, Output, EventEmitter, Inject, OnChanges, forwardRef } from '@angular/core'
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
import { TranslateService } from '@ngx-translate/core';



@Component({
    selector: 'modalViewLargeText',
    providers: [ConfirmationService],
    templateUrl: 'viewLargeText.component.html',
    encapsulation: ViewEncapsulation.None
})
export class GeViewTextLargeComponent implements OnInit {
    @Input()
    textLarge: string;

    @Input()
    displayDialog: boolean;

    @Output()
    respuesta = new EventEmitter();

    titulo: string;

    constructor(router: Router, 
        private confirmationService: ConfirmationService,
        @Inject(forwardRef(() => TranslateService)) public translate: TranslateService ) {
    }

    public ngOnInit() {
        this.titulo = this.translate.instant('geTextoLargoTitulo ');
    }

    onShow(event) {

    }

    onHide(event) {

        this.displayDialog = false;
        this.respuesta.emit(null);
    }

    public close() {
        this.onHide(null);
    }

}