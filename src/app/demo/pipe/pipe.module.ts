import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared/shared.module';

import { PipeRoutingModule } from './pipe.routing.module';
import { PipeComponent } from './pipe.component';

@NgModule({
  imports: [CommonModule, PipeRoutingModule, SharedModule],
  declarations: [PipeComponent]
})
export class PipeModule {}
