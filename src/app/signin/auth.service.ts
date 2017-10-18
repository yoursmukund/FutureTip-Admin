import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
	constructor(private router:Router){}

	token:string;
	signIn(email, password){
		let signInPromise = new Promise((resolve, reject)=>{
			if(email==='futuretiphelp@gmail.com'){
				firebase.auth().signInWithEmailAndPassword(email, password).then(
					(response)=>{
						firebase.auth().currentUser.getToken().then(
								(token:string)=>{
									this.token = token;
								}
							);
						this.router.navigate(['/readings']);
					}
				).catch(
					(error)=>{reject("User could not sign in");} 
				);
			} else{
				reject("User is not authorized to sign in");
			}
		});
		return signInPromise;
	}

	isAuthenticated(){
		return this.token!=null;
	}

	getToken(){
		firebase.auth().currentUser.getToken().then(
				(token:string)=>{
					this.token = token;
				}
			)
		return this.token;
	}

	signOut(){
		firebase.auth().signOut();
		this.token = null;
	}
}