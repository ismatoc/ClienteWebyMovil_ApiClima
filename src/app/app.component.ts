import { Component, OnInit } from '@angular/core';
import { ClimaService } from './services/clima.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  clima;

  constructor(private climaService: ClimaService) {

  }
  
  ///ngOnInit a iniciar el servicio
  ngOnInit(){
    
  }

  getClima(pais: string){
    this.climaService.getClima(pais)
      .subscribe(
        res => {
          console.log(res);
          this.clima = res
        },
        err => console.log(err)
      )
  }

  submitLocation(pais: HTMLInputElement){
    if (pais.value) {
      this.getClima(pais.value);
      pais.value = '';
    } else {
      alert('Ingrese Pais..!!');
    }
    
    pais.focus();
    return false;
  }

}
