import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  pct = 50;
  constructor() { }

  ngOnInit() {
  }

  accion(variable){
    if(this.pct<=100 || this.pct>0){
      this.pct = this.pct + variable;
    }
    else {
      console.log('no se puede');
    }
  }

}
