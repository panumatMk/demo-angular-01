import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, switchMap} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    constructor(private http: HttpClient) {
    }

    getData(url: string): Observable<string> {
        return this.http.get(url, {responseType: "blob"}).pipe(
            switchMap(resp => this.readFile(resp))
        )
    }

    readFile(blob: Blob): Observable<any> {
        return new Observable(subscriber => {
            const reader = new FileReader();

            reader.readAsDataURL(blob);

            reader.onerror = err => subscriber.error(err);
            reader.onabort = err => subscriber.error(err);
            reader.onload = () => subscriber.next(reader.result);
            reader.onloadend = () => subscriber.complete();
        });
    }
}
