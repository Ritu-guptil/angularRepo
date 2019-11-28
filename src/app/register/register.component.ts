import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  stu={
    "no":"",
    "name":"",
    "address":""
  }

  constructor(private service:DataService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
  }

  Insert()
  {
    console.log(this.stu);
    let observableResult=this.service.insert(this.stu);
    observableResult.subscribe((result)=>{
      console.log(result);
      this.router.navigate(['home']);
    });
  }

}
