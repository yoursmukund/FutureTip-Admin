import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	constructor(private authService:AuthService) { }
	failureMessage:string;
	showFailureMessage: boolean = false;
	ngOnInit() {
	}

	onSubmit(form:NgForm){
		this.authService.signIn(form.value.email, form.value.password).catch((message:string)=>{
			this.failureMessage = message; 
			this.showFailureMessage = true;
		});
	}

}
