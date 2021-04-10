
import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Portfolio } from './portfolio';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    redirectUrl: string;
    PHP_API_SERVER = "http://localhost/ang-php-mysql/api";
    baseUrl:string = "http://localhost";
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    constructor(private httpClient : HttpClient) { }

    public userlogin(username, password) {
        alert(username)
        return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
        .pipe(map(Users => {
            this.setToken(Users[0].name);
            this.getLoggedInName.emit(true);
            return Users;
        }));
    }

    public userregistration(name,email,password, username, firstname) {
        return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, email, password, username, firstname })
        .pipe(map(Users => {
            return Users;
        }));
    }

    //token
    setToken(token: string) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.removeItem('token');
    }
    isLoggedIn() {
        const usertoken = this.getToken();
            if (usertoken != null) {
            return true
        }
        return false;
    }

    readPortfolio(): Observable<Portfolio[]>{
		return this.httpClient.get<Portfolio[]>(this.baseUrl + '/index.php');
	}
	createPortfolio(portfolio: Portfolio): Observable<Portfolio>{
		return this.httpClient.post<Portfolio>(this.baseUrl + '/create_portfolio.php', portfolio);
	}
    updatePortfolio(portfolio: Portfolio){
		return this.httpClient.put<Portfolio>(this.baseUrl + '/update_portfolio.php', portfolio);
	}
}