import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuardGuard implements CanActivate {

  constructor (private service: AuthService, private alertBox: ToastrService) {

  }
  canActivate() {
      if(this.service.higherAccess()){
        return true
      } else{
       this.alertBox.warning("Access Denied Contact Administrator")
        return false
      }
  }
   
  
  
}
