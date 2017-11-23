import { RouteParamtypes } from '@nestjs/common/enums/route-paramtypes.enum';
import { IRouteParamsFactory } from './interfaces/route-params-factory.interface';
export declare class RouteParamsFactory implements IRouteParamsFactory {
    exchangeKeyForValue(key: RouteParamtypes, data: any, {req, res, next}: {
        req: any;
        res: any;
        next: any;
    }): any;
}
