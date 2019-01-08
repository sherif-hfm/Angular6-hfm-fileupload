import { Component ,OnInit} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {FilesService} from './files.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
   myForm: FormGroup;
   fileToUpload: any;

   constructor(private filesService: FilesService) { }

ngOnInit() {
 this.myForm=new FormGroup({
        'myfile':new FormControl(null,[Validators.required]),        
      });
}
handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
  console.log(this.fileToUpload);
}
onSubmit()
{
  //console.log(this.myForm);
  this.filesService.uploadfile(this.fileToUpload).subscribe();
}
  
}
