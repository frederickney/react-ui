import {ConfigurationParameters, createConfiguration} from "@/app/client/configuration"
import {DefaultApi, ServerConfiguration} from "./client/index";
import {PromiseDefaultApi} from "@/app/client/types/PromiseAPI";

class APIDef implements ConfigurationParameters {
    baseServer: ServerConfiguration<{  }>;
    public constructor(url: string) {
        this.baseServer = new ServerConfiguration<{  }>(url, {  })
    }
}

const APISetup:APIDef = new APIDef('https://neyconsulting.ch:4200');

const APIConf = createConfiguration(APISetup)

export const API :PromiseDefaultApi = new DefaultApi(APIConf);
