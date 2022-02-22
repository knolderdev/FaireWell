import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AppConstants} from "../../app-constants";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-guess-who-pop-up',
  templateUrl: './guess-who-pop-up.component.html',
  styleUrls: ['./guess-who-pop-up.component.scss']
})
export class GuessWhoPopUpComponent implements OnInit {
  dropDownOptions = AppConstants.names;
  won = false;
  loose = false;
  guessWhoForm: FormGroup = this.formBuilder.group({
    names: ['', [Validators.required]],
  });
  showResult = false;
  value!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<GuessWhoPopUpComponent>,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    console.log('Data received is ', this.data);
  }

  closeMe() {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close({
      result: this.won,
      person: this.value
    });
  }

  onSubmit() {
    this.showResult = true
    this.value = this.guessWhoForm.get('names')?.value;
    if(this.value === this.data){
      this.won = true;
      this.loose = false;
    }
    else{
      this.won = false;
      this.loose = true
    }
  }
}
