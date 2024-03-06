import { Component } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-enter-room',
  standalone: true,
  imports: [IconsModule, RouterLink],
  templateUrl: './enter-room.component.html',
  styleUrl: './enter-room.component.css',
})
export class EnterRoomComponent {}
