import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CommonClass implements OnInit {
    ngOnInit() {
    }
    getLocalStorage() {
        let local_id = localStorage.getItem('access_token');
        if (local_id) {
            // console.log(local_id)
            return JSON.parse(local_id);
        }
    }
    inputMobile(event: any) {
        if (event.keyCode != 8) {
            if (!/^[0-9]$/.test(event.key)) {
                event.preventDefault();
            }
        }
    }
}