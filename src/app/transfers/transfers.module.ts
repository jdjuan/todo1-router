import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransfersComponent } from './transfers/transfers.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TransfersComponent, HistoryComponent]
})
export class TransfersModule { }
