import { TestBed, async, inject } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController
  } from '@angular/common/http/testing';


import { AuthService } from './auth.service';

const mockLoginResponse = {
    username: "osuulola",
    token: "af",
    expiryInMs: 30324,
}


describe('AuthService', () => {
    let httpMock: HttpTestingController;
    let service:  AuthService

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule ],
        providers: [
            AuthService
        ]
    });
  });

  beforeEach(
      inject([AuthService, HttpTestingController], (_service, _httpMock) => {
          service = _service;
          httpMock = _httpMock;
      })
  )

  it('should be created',() => {
    expect(service).toBeTruthy();
    service.loginUsingHttpClient({username: 'osuulola', password: "12345"})
    
    
  });
});