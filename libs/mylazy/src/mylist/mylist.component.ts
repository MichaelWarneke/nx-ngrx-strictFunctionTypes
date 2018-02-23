import { Component, Input } from "@angular/core";
import { Post } from "../+state/mylazy.interfaces";

@Component({
  selector: "lazy-mylist",
  templateUrl: "./mylist.component.html",
  styleUrls: ["./mylist.component.css"]
})
export class MylistComponent {
  @Input() posts: Post[] = [];
}
