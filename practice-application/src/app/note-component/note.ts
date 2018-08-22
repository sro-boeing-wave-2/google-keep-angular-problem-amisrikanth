export class Note {
 id:number;
  private _title: string;
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  private _message: string;
  public get message(): string {
    return this._message;
  }
  public set message(value: string) {
    this._message = value;
  }
  checkList : ICheckList[];
  label : ILabel[];
  private _pinned: boolean;
  public get pinned(): boolean {
    return this._pinned;
  }
  public set pinned(value: boolean) {
    this._pinned = value;
  }
}

export interface ICheckList{
id : number;
checklist : string;
isChecked : boolean;
}

export interface ILabel{
  id : number;
  label : string;
}

