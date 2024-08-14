import { NestMiddleware } from '@nestjs/common';
import { Response } from 'express';
export declare class AuthMiddleware implements NestMiddleware {
    private defaultApp;
    constructor();
    use(req: any, res: Response, next: () => void): void;
    private accessDenied;
}
