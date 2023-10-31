import { Component } from '@angular/core';
import { faInstagram, faTwitter, faLinkedin, faFacebook, fab } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo, faHome } from '@fortawesome/free-solid-svg-icons';
import { faComment, faBell } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  instagram = faInstagram;
  twitter = faTwitter;
  linkedin = faLinkedin;
  facebook = faFacebook;

  info = faCircleInfo;
  chat = faComment;
  notification = faBell;
  home = faHome;

}
