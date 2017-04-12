import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class EmployeeService {

    private _url: string = "apidata/employeedata.json";
    private _createurl: string = "http://godigitell.in/cmmsoutsourse/al-users.php";



    constructor(private _http: Http) {
    }
    getEmployees() {
        return this._http.get(this._url)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    errorHandler(error: Response) {
        console.error(error);
        return Observable.throw(error || "Server Error");
    }
    createFood(food) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(food);

        return this._http.post(this._createurl, body,options).map((response: Response) => {
            return {
/*
                status: "Ready",
                id: response.json().id,*/
            };
        });
    }

/*

    createRoom(params: CreateRoomParams): Observable<RoomData> {
        return this.http.post("/api/backend_room_create.php", params, this.requestOptions()).map((response:Response) => {
            return {
                name: params.name,
                capacity: params.capacity,
                status: "Ready",
                id: response.json().id,
            };
        });
    }*/
}