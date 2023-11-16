import { Component, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child-button',
  templateUrl: './child-button.component.html',
  styleUrl: './child-button.component.css'
})
export class ChildButtonComponent {
  @Output() CustomEvent=new EventEmitter<string>();
  emitEvent()
  {
    this.CustomEvent.emit("Event Emitted from Child!");
  }
}
