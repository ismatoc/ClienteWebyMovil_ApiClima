import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  apiKey = '2fdf9393f1999ef93037da58ae454505';
  URI: string = '';

  constructor(private http: HttpClient) { 
    this.URI = `http://api.weatherstack.com/current?access_key=${this.apiKey}&unit=m&query=`
  }

  getClima(country: string) {
    return this.http.get(`${this.URI}${country}`)
  }
}
