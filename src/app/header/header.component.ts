import { Component, OnInit } from '@angular/core';
import { AuthService } from '../signin/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	isAuthenticated:boolean;	
	constructor(private authService:AuthService) { }

	ngOnInit() {
		this.isAuthenticated = this.authService.isAuthenticated();
	}

}
