import MockAdapter from "axios-mock-adapter";
import Requests from './requests/'

class MockModule {

    constructor(config = {}) {
        if (!config.axios) {
            throw TypeError('Invalid argument to constructor')
        } else {
            this.mount(config)
        }
    }

    mount({ axios, delayResponse = 2000 }) {
        this.axios = axios;
        this.mock = new MockAdapter(axios,{ delayResponse });
        this.assignHandlers();
    }

    assignHandlers() {
        const allRequests = Object.values(Requests).flat();
        allRequests.forEach(req => {
            const { method, url, data, handler } = req;
            const res = handler.call()
            console.log({req: req.url})
            this.mock[method].call(this.mock, url, data).reply(res[0], res[1])
        })
        this.mock.onAny().passThrough()
    }
}



export default MockModule