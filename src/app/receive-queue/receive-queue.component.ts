import { Component, OnInit } from '@angular/core';
import { IResponse, Service1Service } from '../service-1.service';

@Component({
  selector: 'app-receive-queue',
  templateUrl: './receive-queue.component.html',
})
export class ReceiveQueueComponent implements OnInit {
  clearFlag: boolean = false;
  constructor(private service: Service1Service) { }

  ngOnInit() {
    this.service.checkClearQueue().subscribe((res: IResponse) => {
      this.clearFlag = res.data
    });
  }

}
