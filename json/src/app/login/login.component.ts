import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlotService } from '../slot.service';
import { Auth } from '../book.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Authentication:Array<Auth>=[];
 // obj:Auth=new Auth(0,'','')
  constructor(private route:Router, private service:SlotService) { }
 // subject(){
   // this.route.navigate(['/subject'])
  //}

  ngOnInit(): void {
  }
 AuthUser(){
    //this.service.Auth().subscribe((obj) => {
     // console.log('success',obj);
      this.route.navigate(['/subject'])
  //  })

}
}
