import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private route:Router) { }
  timing(){
    this.route.navigate(['/timing'])
  }

  ngOnInit(): void {
  }

}
