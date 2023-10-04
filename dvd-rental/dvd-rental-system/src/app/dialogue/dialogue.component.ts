import { Component, Input, } from '@angular/core';
import { OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent {

    // Input property to receive actors data
    @Input() actors: string[] = [];
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<DialogueComponent>
    ) {}
  
    closeDialog(): void {
      this.dialogRef.close();
    }
}