import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient ) { }

  select()
  {
    return this.http.get("http://localhost:9004/student");
  }

  selectByNo(no)
  {
    return this.http.get("http://localhost:9004/student/"+no);
  }

  delete(no)
  {
    return this.http.delete("http://localhost:9004/student/"+no);
  }

  insert(stuObj)
  {
    return this.http.post("http://localhost:9004/student",stuObj);
  }

  update(stuObj)
  {
    return this.http.put("http://localhost:9004/student/"+stuObj.no,stuObj);
  }
}

