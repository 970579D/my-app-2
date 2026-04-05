import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IQueue, IResponse, Service1Service } from '../service-1.service';

@Component({
  selector: 'app-clear-queue',
  templateUrl: './clear-queue.component.html',
})
export class ClearQueueComponent implements OnInit {
  
  data!: IQueue | null;
  
  constructor(private router: Router, private service: Service1Service) {}

  ngOnInit() {
    this.service.findLastQueue().subscribe((res) => (this.data = res.data));
  }

  onClear = () => {
    this.service.clearQueue().subscribe((res: IResponse)=>{
      if(res.data) this.router.navigateByUrl("/");
    })
  };
}
