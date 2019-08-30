import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextComponent} from './input-text/input-text.component';
import {InputTextAreaComponent} from './input-text-area/input-text-area.component';
import {InputSelectComponent} from './input-select/input-select.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutContainerModule} from '../layout-container/layout-container.module';


@NgModule({
  declarations: [
    InputTextComponent,
    InputTextAreaComponent,
    InputSelectComponent
  ],
  exports: [
    InputTextComponent,
    InputTextAreaComponent,
    InputSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    LayoutContainerModule,
    FlexLayoutModule
  ]
})
export class CustomInputsModule {
}
