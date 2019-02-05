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
   filesToUpload: any;

   constructor(private filesService: FilesService) { }

ngOnInit() {
 this.myForm=new FormGroup({
        'myfile':new FormControl(null,[Validators.required]),        
      });
}
handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
  this.filesToUpload= files;
  console.log(this.fileToUpload);
}
onSubmit()
{
  //console.log(this.myForm);
  for (let index = 0; index < this.filesToUpload.length; index++) {
    this.filesService.uploadfile(this.filesToUpload[index]).subscribe((result: any)=>{
      console.log(result);
    });
  }
  
  //this.filesService.uploadfile3(this.filesToUpload).subscribe();
}
  
}
