import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasto } from '../interfaces/gastoInterface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private _http  = inject(HttpClient);
  private urlBase: string = 'http://127.0.0.1:8000/cuenta'; 

  getGastos():Observable<Gasto[]>{

    // return this._http.get<Gasto[]>('http://127.0.0.1:8000/cuenta/list/');
    return this._http.get<Gasto[]>(`${this.urlBase}/list/`);
  }

  getGasto(id:number): Observable<Gasto>{

    return this._http.get<Gasto>(`${this.urlBase}/${id}`);
  }
}
