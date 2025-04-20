import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NavComponent } from '../nav/nav.component';
import { MatAutocompleteModule, MatOption } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    NavComponent,
    MatAutocompleteModule,
    MatOption,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  value = '';

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => option.toLowerCase().includes(filterValue));
  }
}
