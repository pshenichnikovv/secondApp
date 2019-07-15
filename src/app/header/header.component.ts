import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  students: Student[] = [
    { sid: 991503658, sname: 'Daniel leo',
  scampus: 'Trafalgar', slogin: 'leod'},
  { sid: 9915035532, sname: 'Justin leo',
  scampus: 'Trafalgar', slogin: 'leoj'}
  ];

  appTitle= 'Welcome';
  appStatus = true;
  author = 'Daniel Leo';
  me = 'Best Student';

  appList: any[] = [ {country: 'UK', rank:'One'},
  {country: 'USA', rank: 'Two'}];

  constructor() { }

  ngOnInit() {
  }
  
  get moreMe(){
    return 'Now Studying at Sheridan';
  }

}
