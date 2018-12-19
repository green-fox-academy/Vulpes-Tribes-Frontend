import {HttpClient} from '@angular/common/http';

import {LoginService} from './login.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {environment} from '../../environments/environment';


describe('LoginService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    loginService = TestBed.get(LoginService);


    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('login', () => {
    const user = {
      username: 'Honza',
      password: '123'
    };

    it('should send POST request to mock backend', () => {
      loginService.login(user);
      const req = httpTestingController.expectOne(environment.login);
      expect(req.request.method).toEqual('POST');
    });
  });

  describe('saveToken', () => {
    it('should store the token in localStorage',
      () => {
        loginService.saveToken(123456);
        expect(localStorage.getItem(environment.tribes_token)).toEqual('123456');
      });
  });
});
