import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor( private router: Router ){}

    // tslint:disable-next-line: typedef
    buscarHeroe(termino: string){
        console.log(termino);
        this.router.navigate(['/buscar/', termino]);
    }

}
