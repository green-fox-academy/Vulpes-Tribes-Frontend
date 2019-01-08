// import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
//
// import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
// import {TestBed} from '@angular/core/testing';
// import {environment} from '../../environments/environment';
// import {LogoutService} from './logout.service';
// import {ChildrenOutletContexts, Router, ROUTER_CONFIGURATION, ROUTES, UrlHandlingStrategy, UrlSerializer} from '@angular/router';
// import {setupTestingRouter} from '@angular/router/testing';
// import {Compiler, Injector, NgModuleFactoryLoader} from '@angular/core';
//
//
// describe('LogoutService', () => {
//
//   let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;
//   let logoutService: LogoutService;
//   let router: Router;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [
//         LogoutService,
//         {provide: Router,
//           useFactory: setupTestingRouter,
//         },
//       ]
//     });
//
//     httpClient = TestBed.get(HttpClient);
//     httpTestingController = TestBed.get(HttpTestingController);
//     logoutService = TestBed.get(LogoutService);
//     router = TestBed.get(Router);
//
//     let store = {};
//     const mockLocalStorage = {
//       getItem: (key: string): string => {
//         return key in store ? store[key] : null;
//       },
//       setItem: (key: string, value: string) => {
//         store[key] = `${value}`;
//       },
//       removeItem: (key: string) => {
//         delete store[key];
//       },
//       clear: () => {
//         store = {};
//       }
//     };
//     spyOn(localStorage, 'getItem')
//       .and.callFake(mockLocalStorage.getItem);
//     spyOn(localStorage, 'setItem')
//       .and.callFake(mockLocalStorage.setItem);
//     spyOn(localStorage, 'removeItem')
//       .and.callFake(mockLocalStorage.removeItem);
//     spyOn(localStorage, 'clear')
//       .and.callFake(mockLocalStorage.clear);
//
//   });
//
//   afterEach(() => {
//     httpTestingController.verify();
//   });
//
//   describe('logout', () => {
//
//     it('should send DELETE request to mock backend', () => {
//       logoutService.logout();
//       const req = httpTestingController.expectOne(environment.logout);
//       expect(req.request.method).toEqual('DELETE');
//     });
//   });
// });
