import { Component, OnInit, Input ,Inject, PLATFORM_ID} from "@angular/core";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrl: "./video-player.component.scss",
})
export class VideoPlayerComponent implements OnInit {
  visible: boolean = false;
  @Input() videoId=''
  @Input() title=''

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    }
  }
    

  showDialog(){
    this.visible = true;
  }
}
