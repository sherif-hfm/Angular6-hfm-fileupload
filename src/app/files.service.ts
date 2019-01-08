import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

constructor(private http: HttpClient) { }

uploadfile(file: File): Observable<any>
{
  let headers= new HttpHeaders().set('fileName',file.name);
 return this.http.post('http://localhost:9001/api/upload2',file,{headers: headers,observe:"events",reportProgress:true}).pipe(map((event: HttpEvent<object>)=>{
      const result=event; 
      console.log(result);
      return result;
    }));
  }
}
