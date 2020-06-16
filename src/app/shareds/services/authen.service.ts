import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class AuthenService{
    private AccessKey = 'accessToken';

    setAuthenticated(accessToken:string):void{
        localStorage.setItem(this.AccessKey,accessToken);
    }

    getAuthenticated():string{
        return localStorage.getItem(this.AccessKey)
    }

    clearAuthenticated():void{
        localStorage.removeItem(this.AccessKey);
    }
}