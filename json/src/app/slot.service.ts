import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth, Training } from './book.model';
import { map } from 'rxjs';
import { TimingComponent } from './timing/timing.component';

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  constructor(private client: HttpClient) {}

  slotadd(data : any){
    return this.client.post<any>("http://localhost:3000/training", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
   
    
    GetSlot():Observable<Array<Training>>{
      return this.client.get<Array<Training>>("http://localhost:3000/training"); 
    }

   // AuthUser():Observable<Array<Auth>>{
     // return this.client.get<Array<Auth>>("http://localhost:3000/Auth");
    //}
      

  
  
}
