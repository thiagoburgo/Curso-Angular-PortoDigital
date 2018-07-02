import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userId?: number = null;

  constructor(private activedRoute: ActivatedRoute) {
      this.userId = activedRoute.snapshot.params['id'];
      activedRoute.paramMap.subscribe((routeParams) => {
        this.userId = +routeParams.get('id');
      });

      // this.userId = +activedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
