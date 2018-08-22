import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../data-access.service';
import { Note,ICheckList,ILabel } from './note';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-note-component',
  templateUrl: './note-component.component.html',
  styleUrls: ['./note-component.component.css']
})
export class NoteComponentComponent implements OnInit {

  constructor(private service:DataAccessService,private breakpointObserver: BreakpointObserver) { }
  notes : Note[];
  ngOnInit():void{
  this.refresh();
  }

  refresh(){
    this.service.getNotes().subscribe(x => this.notes = x.json());
  }

  delete(Id:number){
    this.service.delete(Id).subscribe(success=> this.refresh());
  }


  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

}
