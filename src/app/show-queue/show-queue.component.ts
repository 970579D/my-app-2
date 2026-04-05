import { Component, OnInit } from '@angular/core';
import { IQueue, Service1Service } from '../service-1.service';

@Component({
  selector: 'app-show-queue',
  templateUrl: './show-queue.component.html',
})
export class ShowQueueComponent implements OnInit {
 data!: IQueue | null;
  constructor(private service: Service1Service) {}

  ngOnInit() {
    this.service.generateQueue().subscribe((res) => (this.data = res.data));
  }
}
