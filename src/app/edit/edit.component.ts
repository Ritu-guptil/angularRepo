import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  stu={
    "no":"",
    "name":"",
    "address":""
  };

  constructor(private service:DataService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((result)=>{
      let no=result.get("no");
      console.log(no);

      let observableResult=this.service.selectByNo(no);
      observableResult.subscribe((records)=>{
        console.log(records[0]);
        this.stu=records[0];
      });
    });
  }

  Update()
  {
    console.log(this.stu);
    let observableResult=this.service.update(this.stu);
    observableResult.subscribe((result)=>{
      console.log(result);
      this.router.navigate(['home']);
    });
  }
}
