import { BaseService } from '../common/base.service'

class HealthService implements BaseService {
    async execute(): Promise<{ healthCheck: boolean}>{
        return {
            healthCheck: true
        }
    }
}

export default new HealthService();