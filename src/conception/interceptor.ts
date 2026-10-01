import { Injectable } from '@nestjs/common';

@Injectable()
export class loggerInterceptor {
  intercept(context: any, next: any) {
    console.log('Before...');
    const now = Date.now();
    return next.handle().pipe((data: any) => {
      console.log(`After... ${Date.now() - now}ms`);
      return data;
    });
  }
}
