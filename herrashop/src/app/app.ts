import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ButtonDemo } from './button/button';
import { Login } from './login/login';
import { Signup } from './signup/signup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonDemo, Login, Signup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'herrashop';
  
}
