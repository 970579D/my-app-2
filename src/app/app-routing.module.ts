import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiveQueueComponent } from './receive-queue/receive-queue.component';
import { ShowQueueComponent } from './show-queue/show-queue.component';
import { ClearQueueComponent } from './clear-queue/clear-queue.component';

const routes: Routes = [  {
    path: '',
    component: ReceiveQueueComponent,
  },
  {
    path: 'show-queue',
    component: ShowQueueComponent,
  },
  {
    path: 'clear-queue',
    component: ClearQueueComponent,
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
