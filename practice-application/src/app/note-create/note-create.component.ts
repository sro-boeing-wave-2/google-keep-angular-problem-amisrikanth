import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataAccessService } from '../data-access.service';
import {FormGroup, FormControl, FormBuilder, FormArray} from '@angular/forms';
import {Router} from '@angular/router';
import { Note } from '../note-component/note';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  constructor(
    private noteservice : DataAccessService,
     private formbuilder : FormBuilder,
    private router : Router
    ) { };
@Output() sendData : EventEmitter<Note>=new EventEmitter<Note>();
  CreateNote = this.formbuilder.group({
    Title : [''],
    Message : [''],
    Pinned:[''],
    Label : this.formbuilder.array([
      this.formbuilder.group({
        label : ['']
      })
    ]),
    CheckList : this.formbuilder.array([
      this.formbuilder.group({
        Checklist : [''],
        IsChecked : ['']
      })
    ])
  });
  get Label(){
    return this.CreateNote.get('Label') as FormArray;
  }
  addLabel(){
    this.Label.push(this.formbuilder.group({
      label : ['']
    }));
  }
  get CheckList(){
    return this.CreateNote.get('CheckList') as FormArray;
  }
  addCheckList(){
    this.CheckList.push(this.formbuilder.group({
    Checklist : [''],
    IsChecked : ['']}));
  }
  onSubmit():void{
    this.GenerateNote();
    this.router.navigate(['']);
  }
  GenerateNote():void{

    this.noteservice.post(this.CreateNote.value as Note).subscribe(result => console.log(result.statusText));
  }

  ngOnInit() {
  }

}
