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

	id:string;
	reading:Reading;
	showSuccess = false;
	showError = false;
	success: string;
	error:string;
	constructor(private router: Router, private route:ActivatedRoute, private readingService:ReadingService) { }

	ngOnInit() {
		this.route.params.subscribe(
				(params:Params) => {this.id = params['id']}
			);
		this.reading = this.readingService.getReading(this.id);
	}

	onSubmit(form:NgForm){
		this.reading.solution = form.value.solution;
		this.readingService.saveReading(this.reading, this.id).subscribe(
				(response) => {
					this.success = "Solution saved successfully";
					this.showSuccess = true;
					this.showError = false;
				},
				(error:Error) => {
					this.error = "Error! Solution not saved!"
					this.showError = true;
					this.showSuccess = false;
				}
			);
	}

	onCancel(){
		this.router.navigate(['/readings']);
	}


}
