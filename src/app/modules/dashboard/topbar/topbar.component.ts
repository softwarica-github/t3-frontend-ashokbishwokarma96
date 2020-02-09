import { Component, OnInit } from '@angular/core';
import { AuthService } from '@dashboard/shared/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logoutUser();
  }

}
