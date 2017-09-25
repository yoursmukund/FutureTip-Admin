import {Injectable} from '@angular/core';
import {Reading} from './reading.model';
import 'rxjs/Rx';
import {Http, Response} from '@angular/http';

@Injectable()
export class ReadingService{
	constructor(private httpService: Http){

	}
    readings: Reading[] = [];
	getReadings() {
	    return this.httpService.get('https://futuretip-df006.firebaseio.com/reading.json').map(
            (response:Response) => {
                const readings = response.json();
                this.readings = [];
                for(let reading in readings){
                    this.readings.push(readings[reading]);

                }
                return this.readings;

            }
        )

    }

    getReading(id:number){
        if(this.readings.length===0){
            this.getReadings();
        }
        return this.readings[id];
    }

    readingsDataChanged(){

    }

    deleteReading(id:number){

    }
}

