import { Component, OnInit, inject } from '@angular/core';
import { Gasto } from '../../interfaces/gastoInterface';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-gasto-detail',
  standalone: true,
  imports: [],
  templateUrl: './gasto-detail.component.html',
  styleUrl: './gasto-detail.component.css'
})
export class GastoDetailComponent implements OnInit {

  loading:boolean = true;
  public  gasto? :  Gasto;

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this._apiService.getGasto(params['id']).subscribe((data:Gasto)=>{
        this.gasto = data;
        console.log(data)
        this.loading = false;
      });
    })
  }
}
