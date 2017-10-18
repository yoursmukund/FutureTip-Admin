import { Component, OnInit } from '@angular/core';
import { Reading } from '../reading.model';
import { ReadingService } from '../reading.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css'],

})
export class ReadingListComponent implements OnInit {
	keys = [];
	readings: Reading[] = [];
	constructor(private readingService:ReadingService) { 
	}

	ngOnInit() {
		this.readingService.getReadings().subscribe(
			(readings) => {
				for(let reading in readings){
					this.readings.push(readings[reading]);
					this.keys.push(reading);
				}
			}
		);
	}




}
