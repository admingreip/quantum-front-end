import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BreadcrumbService } from '../../main/breadcrumb.service';

@Component({
    templateUrl: './filedemo.component.html',
    providers: [MessageService]
})
export class FileDemoComponent {

    uploadedFiles: any[] = [];

    constructor(private breadcrumbService: BreadcrumbService, private messageService: MessageService) {
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'File', routerLink: ['/components/file'] }
        ]);
    }

    onUpload(event) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Upload Completed' });
    }
}
