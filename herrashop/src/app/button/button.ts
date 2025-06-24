import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
    selector: 'button-demo',
    templateUrl: './button.html',
    standalone: true,
    imports: [ButtonModule,Toast],
    providers: [MessageService],
})
export class ButtonDemo {
  constructor(private messageService: MessageService) {}

  show() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    }
}
