import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Country } from '../model/country.model';
import { Observable } from 'rxjs';
import { States } from '../model/states.mode';


const headerOption = {
  headers: new HttpHeaders({'Content-type': 'application/json '})
};
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = 'http://localhost:3000/Country';

country: Country = {
   id:null,
   country: '',
   states:''
}


  constructor(private http: HttpClient) { };

  getAllCountry():Observable<Country[]> {
    return this.http.get<Country[]>(this.url,headerOption);
  }
  getStates(id: number):Observable<States[]> {
    return this.http.get<States[]>(this.url + '/' + id,headerOption);;
  }

}
