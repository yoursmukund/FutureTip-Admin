import { Component, OnInit, Input } from '@angular/core';
import { Reading } from '../../reading.model';

@Component({
  selector: 'app-reading-item',
  templateUrl: './reading-item.component.html',
  styleUrls: ['./reading-item.component.css']
})
export class ReadingItemComponent implements OnInit {

	@Input() reading: Reading;
	@Input() index: number;
	constructor() { }

	ngOnInit() {
	}

}
