import { HttpHeaders } from '@angular/common/http';

export class LoggedData{
    private static data : LoggedData;

    //get logged user headers
    loading: boolean;
    headers: HttpHeaders;

    public static getLoggedData(){
        if(! this.data){
            this.data = new LoggedData();
        }
        return this.data;
    }
}