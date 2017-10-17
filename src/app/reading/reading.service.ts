import {Injectable} from '@angular/core';
import {Reading} from './reading.model';
import 'rxjs/Rx';
import {Http, Response} from '@angular/http';

@Injectable()
export class ReadingService{
	constructor(private httpService: Http){

	}
    readings;
	getReadings() {
	    return this.httpService.get('https://futuretip-df006.firebaseio.com/reading.json').map(
            (response:Response) => {
                this.readings = response.json();
                return this.readings;

            }
        )

    }

    saveReading(reading:Reading, key:string){
        return this.httpService.patch('https://futuretip-df006.firebaseio.com/reading/'+key+'.json', reading);
    }

    getReading(key:string){
        if(this.readings.length===0){
            this.getReadings();
        }
        return this.readings[key];
    }

    readingsDataChanged(){

    }

    deleteReading(id:string){

    }
}

