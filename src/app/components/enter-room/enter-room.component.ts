import { Component } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-enter-room',
  standalone: true,
  imports: [IconsModule, RouterLink],
  templateUrl: './enter-room.component.html',
  styleUrl: './enter-room.component.css',
})
export class EnterRoomComponent {
  constructor(private auth: AuthService, private router: Router) {}

  async signin() {
    try {
      const user = await this.auth.login();
      this.router.navigate(['home', 'create-room']);
    } catch {
      console.error('Login failed');
    }
  }
}
