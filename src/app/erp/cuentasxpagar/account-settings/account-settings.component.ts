import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { REFERENCE_PREFIX } from '@angular/compiler/src/render3/view/util';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocalrCheck();
  }
  
  cambiaColor(color: string, link: any){
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(color);
    
  }
  aplicarCheck(link: any){
    let selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores){
      ref.classList.remove('working');
     
      
    }
    link.classList.add('working');

  }
  colocalrCheck(){
    let selectores: any = document.getElementsByClassName('selector');
    let tema=this._ajustes.ajustes.tema;
    for (let ref of selectores){
      ref.classList.remove('working');
       if(ref.getAttribute('data-theme')===tema){
          ref.classList.add('working');
       }
      
    }

  }
}
