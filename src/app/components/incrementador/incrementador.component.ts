import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  
  @Input('nombre') leyenda="";
  @Input() pct=50;
  @Output('actvalor') updValor: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  accion(variable){
    if(this.pct<=100 || this.pct>0){
      this.pct = this.pct + variable;
      
      this.updValor.emit(this.pct);
      console.log(this.updValor);
    
    }
   
  
  }

}
