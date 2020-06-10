import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-addedit-transaction',
  templateUrl: './addedit-transaction.component.html',
  styleUrls: ['./addedit-transaction.component.css']
})
export class AddeditTransactionComponent implements OnInit {
  public addTransactionForm: FormGroup;
  addForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
      this.addForm = this.formBuilder.group({
          type: ['', Validators.required],
          amount: ['', Validators.required],
          description: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.addForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.addForm.invalid) {
          return;
      }
      this.appService.transactionSave(this.addForm.value).subscribe(res=>{
        this.transRedirection();
       });  
  }

  transRedirection() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }

  onReset() {
      this.submitted = false;
      this.addForm.reset();
  }

}