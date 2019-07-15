import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { REFERENCE_PREFIX } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject (DOCUMENT) private _document) { }

  ngOnInit() {
  }
  
  cambiaColor(color: string, link: any){
    console.log(link);
    this.aplicarCheck(link);
    let url = `assets/css/colors/${color}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
  }
  aplicarCheck(link: any){
    let selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores){
      ref.classList.remove('working');
      console.log(ref);
      
    }
    link.classList.add('working');

  }
}
