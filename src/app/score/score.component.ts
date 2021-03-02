import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "score-component",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.css"]
})
export class ScoreComponent {
  @Input() score: Observable<number>;
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() reset = new EventEmitter();
}
