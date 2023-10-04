import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Output event to trigger the side dialogue
  @Output() openSideDialogue = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  // Function to open the side dialogue
  openSideDialog() {
    this.openSideDialogue.emit();
  }
}
