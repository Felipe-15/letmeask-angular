import { Routes } from '@angular/router';
import { EnterRoomComponent } from './components/enter-room/enter-room.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { LayoutComponent } from './templates/home/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/select-room',
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: 'select-room',
        component: EnterRoomComponent,
      },
      {
        path: 'create-room',
        component: CreateRoomComponent,
      },
    ],
  },
];
