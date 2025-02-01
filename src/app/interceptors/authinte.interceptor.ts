import { HttpInterceptorFn } from '@angular/common/http';

export const authinteInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  debugger;
  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(clonedRequest);
  }
  return next(req);
};
