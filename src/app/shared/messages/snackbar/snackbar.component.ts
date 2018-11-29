import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, transition, state } from '@angular/animations';
import { NotificationService } from '../notification.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'


@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations:[
    trigger('snack-visibility',[
      state('hidden', style({
        //configuração para elemento ficar escondido
        opacity: 0, 
        bottom: '0px'
      })),
      state('visible', style({
        //configuração para elemento ficar visivel
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')), //transicão de entrada 
      transition('visible => hidden', animate('500ms 0s ease-out')) //transição de saidas
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Oiiii' //mensagem que será lançada na snackbar

  snackVisibility: string = 'hidden'

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {

    // switchMap troca o Observable e os eventos que seriam emitidos
    // Antes notifier recebia eventos de strings, agora com os operadores tap e switchMap,
    // a ação feita no subscribe passa a ser feita no tap, depois o switchMap troca o Observable
    // por um timer e o subscribe é executado quanto o timer atingir o tempo informado.
    // com switchMap, o timer anterior é desinscrito antes de definir um novo timer.

    this.notificationService.notifier.do(message => {
         this.message = message
         this.snackVisibility = 'visible'
        }).switchMap(message => Observable.timer(2000))
          .subscribe(timer => this.snackVisibility = 'hidden')
  }

  

}
