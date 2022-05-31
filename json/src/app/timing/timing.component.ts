import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training} from '../book.model';
import { SlotService } from '../slot.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.css']
})
export class TimingComponent implements OnInit {

  formValue !: FormGroup;
  Training : Training = new Training(); 
  //Trainings:Array<Training>=[];
 // obj:Training=new Training('','','')
  


  constructor(private service:SlotService, private route:Router, private formbuilder: FormBuilder) { 
    //this.service.GetSlot().subscribe(
      //(result)=>{this.Trainings = result;},
      //(error)=>{alert(JSON.stringify(error))}
    //);
  }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Name : [''],
      Slots : [''],
      Time : ['']
    })
  }
AddSlot(){
  this.Training.Name = this.formValue.value.Name;
  this.Training.Slots = this.formValue.value.Slots;
  this.Training.Time = this.formValue.value.Time;
  this.service.slotadd(this.Training).subscribe(
    res =>
    {
      console.log(res);
    },
    err =>
    {
      console.log("something wrong")
    }
  )
    //(res=>
      //{
    //console.log(res);
    //alert("Slots Added Successfully");
    //this.formValue.reset();
 // },
  //err=>{
    //alert("something wrong");
  //})
  //);
}

  //Book(){
    //this.service.Book().subscribe((obj) => {
      //console.log('success',obj);
   // })
  }

//}



/*
columnDefs = [
    {headerName: 'Day', field: 'Day'},
    {headerName: 'slot1', field: 'slot1'},
    {headerName: 'slot2', field: 'slot2'}
];

rowData = [
    {Day: 'monday', slot1: '9-11AM', slot2: '3-4PM'},
    {Day: 'Tuesday', slot1: '9-11AM', slot2: '3-4PM'},
    {Day: 'Wednesday', slot1: '9-11AM', slot2: '3-4PM'},
    {Day: 'Thursday', slot1: '9-11AM', slot2: '3-4PM'},
    {Day: 'Friday', slot1: '9-11AM', slot2: '3-4PM'},
    
    

];

*/