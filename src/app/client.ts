import {PromiseDefaultApi} from "@/app/client/types/PromiseAPI";
import {DefaultApi, ServerConfiguration} from "@/app/client/index";
import {ConfigurationParameters, createConfiguration} from "@/app/client/configuration"

class APIDef implements ConfigurationParameters {
    baseServer: ServerConfiguration<{}>;

    public constructor(url: string) {
        this.baseServer = new ServerConfiguration<{}>(url, {})
    }
}

const APISetup: APIDef = new APIDef('https://neyconsulting.ch:4200');

const APIConf = createConfiguration(APISetup)

export const API: PromiseDefaultApi = new DefaultApi(APIConf);
