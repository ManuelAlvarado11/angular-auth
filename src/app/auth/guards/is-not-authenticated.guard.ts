import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (
    authService.authStatus() === AuthStatus.notAuthenticated ||
    authService.authStatus() === AuthStatus.checking
  ) {
    return true;
  }

  const url = state.url;
  localStorage.setItem('url', url);
  router.navigateByUrl('/dashboard');
  return false;
};
