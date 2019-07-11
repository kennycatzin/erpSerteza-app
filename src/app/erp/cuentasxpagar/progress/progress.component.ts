import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  pct1 = 30;
  pct2=20;
  constructor() { 
    
  }

  ngOnInit() {

  }
  actual( event:number ){
    console.log('Evento:', event);
  }
 
}
