
import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

//import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
@Injectable()
export class ProveedoresData {
    constructor(private http: Http) {
    }

    getProveedores() {
        let repos = this.http.get('data/locales.json');
        return repos;
    }
}
