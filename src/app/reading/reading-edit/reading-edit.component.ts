import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReadingService } from '../reading.service';
import { Reading } from '../reading.model';

@Component({
  selector: 'app-reading-edit',
  templateUrl: './reading-edit.component.html',
  styleUrls: ['./reading-edit.component.css']
})
export class ReadingEditComponent implements OnInit {

	id:number;
	reading:Reading;
	constructor(private route:ActivatedRoute, private readingService:ReadingService) { }

	ngOnInit() {
		this.route.params.subscribe(
				(params:Params) => {this.id = +params['id']}
			);
		this.reading = this.readingService.getReading(this.id);
	}

	onSubmit(form:NgForm){
		console.log(form);
	}

}
