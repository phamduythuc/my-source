import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {YoutubePlayerService, } from "ngx-youtube-player";
@Component({
    selector: 'app-learn-course',
    templateUrl: './learn-course.component.html',
    styleUrls: ['./learn-course.component.scss']
})
export class LearnCourseComponent {
    // id = 'DDU3gHk0Yys'
    player: YT.Player | any;
     id: string = "DDU3gHk0Yys";
     listVideo = [
         {id: "DDU3gHk0Yys", label:'giới thiệu về nodejs'},
         {id: 'z2f7RHgvddc', label: 'thực hành nodejs'}
     ]
    constructor(private youtubePlayerService : YoutubePlayerService) {
    }

    savePlayer(player: any) {
        // this.player = player;
       this.player = player
    }
    onStateChange(event: any) {
        console.log("player state", event.data);
    }
    play(videoId:string) {
        this.player.loadVideoById(videoId)
    }
}
