// import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
// import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

// @Injectable()
// export class LoggingInterceptor implements NestInterceptor {
// 	private readonly logger: Logger = new Logger();

// 	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
// 		const recordTime = Date.now();
// 		const requestType = context.getType<GqlContextType>();

// 		if (requestType === 'http') {
// 			/* Develop if needed!  */
// 		} else if (requestType === 'graphql') {
// 			/* (1) Print Request */
// 			const gqlContext = GqlExecutionContext.create(context);
// 			this.logger.log(`${this.stringify(gqlContext.getContext().req.body)}`, 'REQUEST');

// 			/* (2) Error handling via GraphQL */

// 			/* (3) No Errors, giving Response below */
// 			return next.handle().pipe(
// 				tap((context) => {
// 					const responseTime = Date.now() - recordTime;
// 					this.logger.log(`${this.stringify(context)} - ${responseTime}ms \n\n`, 'RESPONSE');
// 				}),
// 			);
// 		}
// 	}

// 	private stringify(context: ExecutionContext): string {
// 		return JSON.stringify(context).slice(0, 75);
// 	}
// }



import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    private readonly logger: Logger = new Logger();

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const recordTime = Date.now();
        const requestType = context.getType<GqlContextType>();

        // 1. WEBSOCKET UCHUN: Shunchaki o'tkazib yuboramiz
        if (requestType === ( 'ws' as string)) {
            return next.handle();
        }

        if (requestType === 'http') {
            return next.handle(); // HTTP uchun hozircha shunchaki o'tkazib yuboramiz
        } else if (requestType === 'graphql') {
            /* (1) Print Request */
            const gqlContext = GqlExecutionContext.create(context);
            this.logger.log(`${this.stringify(gqlContext.getContext().req.body)}`, 'REQUEST');

            /* (3) No Errors, giving Response below */
            return next.handle().pipe(
                tap((data) => {
                    const responseTime = Date.now() - recordTime;
                    this.logger.log(`${this.stringify(data)} - ${responseTime}ms \n\n`, 'RESPONSE');
                }),
            );
        }

        // Agar boshqa turdagi so'rov bo'lsa ham handle() qaytarishi shart!
        return next.handle();
    }

    private stringify(context: any): string {
        return JSON.stringify(context).slice(0, 75);
    }
}