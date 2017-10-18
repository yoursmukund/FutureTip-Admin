import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	ngOnInit() {
	    firebase.initializeApp({
	      apiKey: "AIzaSyB5r-u25nFjaSvs121VF0uH1TrIPqCoSFs",
	      authDomain: "futuretip-df006.firebaseapp.com"
	    });
	  }

}
