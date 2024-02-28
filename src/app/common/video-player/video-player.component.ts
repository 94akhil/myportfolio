import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrl: "./video-player.component.scss",
})
export class VideoPlayerComponent implements OnInit {
  visible: boolean = false;
  @Input() videoId=''
  @Input() title=''

  ngOnInit() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  showDialog() {
    this.visible = true;
  }
}
