import { AuthGuard } from './auth.guard';
import {AuthService} from './auth.service';

 // Creating mock router with navigate method
class MockRouter {
  navigate(path) {}
}

describe('AuthGuard', () => {
  describe('canActivate', () => {
    let authGuard: AuthGuard;
    let authService: AuthService;
    let router;

    it('should return true for a logged in user', () => {
      authService = { isLoggedIn: () => true };
      router = new MockRouter();
      authGuard = new AuthGuard(authService, router);

      expect(authGuard.canActivate()).toEqual(true);
    });

    it('should navigate to login page for a logged out user', () => {
      authService = { isLoggedIn: () => false };
      router = new MockRouter();
      authGuard = new AuthGuard(authService, router);
      spyOn(router, 'navigate');

      expect(authGuard.canActivate()).toEqual(false);
      expect(router.navigate).toHaveBeenCalledWith(['/login']);
    });
  });
});
