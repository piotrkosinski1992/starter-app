import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, FlexModule, FlexLayoutModule, MatInputModule, MatListModule, MatIconModule, MatSelectModule,
    MatProgressSpinnerModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatGridListModule, MatDialogModule,
    MatAutocompleteModule, MatTableModule, MatSortModule, MatCheckboxModule],
  exports: [MatToolbarModule, FlexModule, FlexLayoutModule, MatProgressSpinnerModule, MatIconModule, MatDialogModule,
    MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule, MatGridListModule, MatListModule, MatSelectModule,
    MatAutocompleteModule, MatTableModule, MatSortModule, MatCheckboxModule]
})
export class MaterialModule {
}
