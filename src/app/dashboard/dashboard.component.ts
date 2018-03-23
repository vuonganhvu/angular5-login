import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../model/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor(private  _route: ActivatedRoute) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    // this.user = localStorage.getItem(id);
  }

}
