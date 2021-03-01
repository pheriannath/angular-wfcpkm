import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.css"]
})
export class Score {
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() reset = new EventEmitter();
}
