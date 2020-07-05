import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule
  ]
})

export class MaterialModule {

}
