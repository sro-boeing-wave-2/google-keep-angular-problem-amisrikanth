import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataAccessService } from '../data-access.service';
import { FormBuilder, FormArray } from '@angular/forms';
import { Note } from '../note-component/note';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  TempNote: Note;
  input:Note;
  notes: Note[];
  constructor(
    private noteservice: DataAccessService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private fb: FormBuilder

  ) { };
  EditForm = this.fb.group({
    Id : [''],
    Title: [''],
    Message: [''],
    Pinned: [''],
    CheckList: this.fb.array([]),
    Label: this.fb.array([])
  });
  get Label() {
    return this.EditForm.get('Label') as FormArray;
  }
  addLabel() {
    this.Label.push(this.fb.group({
      label: ['']
    }));
  }
  get CheckList() {
    return this.EditForm.get('CheckList') as FormArray;
  }
  addCheckList() {
    this.CheckList.push(this.fb.group({
      Checklist: [''],
      IsChecked: ['']
    }));
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    this.getNote();
  }
  getNote(): void {
    const Id = +this.route.snapshot.paramMap.get("id");
    this.noteservice.getNoteById(Id).subscribe(notes => {
      this.notes = notes.json();
      console.log(notes.json());
      notes.json()[0].checkList.forEach(element => {
       this.addCheckList();
      });
      notes.json()[0].label.forEach(element => {
        this.addLabel();
       });
    });
  }

  saveDetails( Id: number) {
    this.input=this.EditForm.value as Note;
    this.noteservice.put(this.input, Id).subscribe(result => console.log(result.status));
    this.router.navigate(['']);
  }

}
