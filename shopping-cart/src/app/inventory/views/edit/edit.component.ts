import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm?: FormGroup;

  constructor(private readonly fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.editForm = this.fb.group({
      productName: ['', Validators.required],
      productDescription: [''],
      productPrice: ['', Validators.required],
      provider: this.fb.group({
        name: ['']
      })
    });
    this.editForm.get("productName")?.valueChanges.subscribe(args => {
      console.log(args);
    });
  }

  save(): void {
    console.log(`${this.editForm?.get("productName")?.value} ${this.editForm?.get("productDescription")?.value}`);
  }
}
