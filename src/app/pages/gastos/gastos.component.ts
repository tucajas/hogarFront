import { Component,OnInit,inject } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { Gasto } from '../../interfaces/gastoInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent implements OnInit{

  gastosList : Gasto[]=[];


  private _apiService = inject(ApiService);
  private _router     = inject(Router);

  ngOnInit():void{
    this._apiService.getGastos().subscribe((data:Gasto[])=>{
      console.log(data)
      this.gastosList = data;
    });
  }
  
  navegate(id:number):void{
  
    this._router.navigate(['/gastos',id])

  }


}
