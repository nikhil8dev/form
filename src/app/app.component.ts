import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fileName: string;
  file: File;
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }
  ngOnInit(){
  }
  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: ['', [Validators.required,Validators.minLength(5)]],
      phone: ['',[Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      message: ['', [Validators.required,Validators.maxLength(100)]],
    });
  }


  onSubmit() {
    console.log('Your form data : ', this.contactForm.value );
    window.alert('Your form is submitted');
}

trigger() {
  let element = document.getElementById('upload_file') as HTMLInputElement;
  element.click();

}

onChange(file) {
  this.file = file.files[0];
  this.fileName = file.files[0].name;
}

sendFile() {
  console.log(this.file)
  window.alert('our hr team will contact you');
}
}



