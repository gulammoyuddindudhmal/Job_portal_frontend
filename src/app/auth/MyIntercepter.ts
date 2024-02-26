import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
/*Below code is not Working*/
export class JwtINterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const token = localStorage.getItem('access_token');
       if(token){
        req=req.clone({
            setHeaders:{
                Authorization:`Bearer ${token}`
            }
        });
       }
       return next.handle(req);
    }
}