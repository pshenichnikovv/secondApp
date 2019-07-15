import { Component, OnInit } from '@angular/core';
import { Student } from '../student'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  currStudent: Student = { sid: 991503658, sname: 'Daniel leo',
  scampus: 'Trafalgar', slogin: 'leod'};

  city = 'Oakville';
  city2 = 'Brampton';

  constructor() { }

  ngOnInit() {
  }

  reSet(){
    this.city = "";
    this.city2 = "Unknown";
    alert('Hahaha');
  }
  mouse(){
    this.city = "Scarborough";
    this.city2 = "Hamilton";
  }
  mouse2(){
    this.city = "oakville";
    this.city2 = "Toronto";
  }
}
