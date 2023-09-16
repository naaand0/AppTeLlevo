import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('moveRight', [
      transition('* => *', [
        style({ transform: 'translateX(0)' }),
        animate('1s ease-in-out', style({ transform: 'translateX(100px)' })) // Ajusta la duración y distancia de movimiento
      ])
    ])
  ]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

