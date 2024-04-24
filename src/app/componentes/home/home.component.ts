import { Component } from '@angular/core';
import { QuienSoyComponent } from '../quien-soy/quien-soy.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuienSoyComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'saladejuegos2024 Gauto Facundo';
  visibleQuiensoy: boolean = false;
  visibleLogin: boolean = false;

  constructor() {}

  mostrarQuiensoy() {
    this.visibleQuiensoy = !this.visibleQuiensoy
    console.log(this.visibleQuiensoy)
  }

  mostrarLogin() {
    this.visibleLogin = !this.visibleLogin
    console.log(this.visibleLogin)
  }

}
