import { Injectable } from '@angular/core';
import { Reading } from './reading.model';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { AuthService } from '../signin/auth.service';

@Injectable()
export class ReadingService{
	constructor(private httpService: Http, private authService: AuthService){

	}
    token:string;
    readings;
	getReadings() {
        this.token = this.authService.getToken();
        if(this.token!=null){
            return this.httpService.get('https://futuretip-df006.firebaseio.com/reading.json?auth='+this.token).map(
                (response:Response) => {
                    this.readings = response.json();
                    return this.readings;

                }
            )
        }
    }

    saveReading(reading:Reading, key:string){
        this.token = this.authService.getToken();
        return this.httpService.patch('https://futuretip-df006.firebaseio.com/reading/'+key+'.json?auth='+this.token, reading);
    }

    getReading(key:string){
        if(this.readings.length===0){
            this.getReadings();
        }
        return this.readings[key];
    }

    readingsDataChanged(){
        
    }

    deleteReading(key:string){

    }
}

