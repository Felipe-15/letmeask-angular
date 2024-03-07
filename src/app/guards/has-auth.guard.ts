import { inject, OnChanges } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const hasAuthGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  authService.hasUser();
  const userLogged = !!sessionStorage.getItem('token');

  return userLogged || router.navigate(['']);
};
