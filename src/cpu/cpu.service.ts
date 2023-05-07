import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService:PowerService){}

    compute(a: number, b: number){
        console.log('Drawing 10 watts of powers from the power service');
        this.powerService.supplePower(10)
        return a + b;
    }
}
