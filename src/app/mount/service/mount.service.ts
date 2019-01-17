import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Skiresort } from "../model/skiresort.model";

const baseUrl: string = "http://localhost:3000/api/skiresorts";

@Injectable({
  providedIn: "root"
})
export class MountService {
  constructor(private http: HttpClient) {}

  getSkiresorts(): Observable<Skiresort[]> {
    return this.http.get<Skiresort[]>(baseUrl).pipe(
      map(data => {
        let retVal = Array<Skiresort>();
        data.forEach(item => retVal.push(new Skiresort(item)));
        return retVal;
      })
    );
  }
}
