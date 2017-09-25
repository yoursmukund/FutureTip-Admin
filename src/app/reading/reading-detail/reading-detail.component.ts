import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReadingService } from '../reading.service';
import { Reading } from '../reading.model';

@Component({
  selector: 'app-reading-detail',
  templateUrl: './reading-detail.component.html',
  styleUrls: ['./reading-detail.component.css']
})
export class ReadingDetailComponent implements OnInit {

	id:number;
	reading:Reading;
	constructor(private route:ActivatedRoute, private readingService:ReadingService, private router:Router) { }

	ngOnInit() {
		this.route.params.subscribe(
			(params:Params) => {
				this.id = +params['id'];
				this.reading = this.readingService.getReading(this.id);
			}
		);
	}

	onEditReading(){
		this.router.navigate(['edit'], {relativeTo: this.route})
	}

	onDeleteReading(){
		this.readingService.deleteReading(this.id);
		this.router.navigate(['/readings'])
	}



}
