import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { AssociatedContentResponse } from '../models/AssociatedContentResponse';
import { ContentResponse } from '../models/ContentResponse';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { InvalidRequestError } from '../models/InvalidRequestError';
import { NotFound } from '../models/NotFound';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiApiContentApiContentGetRequest {
}

export interface DefaultApiApiContentGetApiContentGetGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiapiContentGetApiContentGetGet
     */
    url?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiapiContentGetApiContentGetGet
     */
    id?: number
}

export interface DefaultApiApiContentLinkedApiContentLinkedGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiapiContentLinkedApiContentLinkedGet
     */
    id: number
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Api.Content
     * @param param the request object
     */
    public apiContentApiContentGetWithHttpInfo(param: DefaultApiApiContentApiContentGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<ContentResponse>>> {
        return this.api.apiContentApiContentGetWithHttpInfo( options).toPromise();
    }

    /**
     * Api.Content
     * @param param the request object
     */
    public apiContentApiContentGet(param: DefaultApiApiContentApiContentGetRequest = {}, options?: ConfigurationOptions): Promise<Array<ContentResponse>> {
        return this.api.apiContentApiContentGet( options).toPromise();
    }

    /**
     * Api.Content.Get
     * @param param the request object
     */
    public apiContentGetApiContentGetGetWithHttpInfo(param: DefaultApiApiContentGetApiContentGetGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ContentResponse>> {
        return this.api.apiContentGetApiContentGetGetWithHttpInfo(param.url, param.id,  options).toPromise();
    }

    /**
     * Api.Content.Get
     * @param param the request object
     */
    public apiContentGetApiContentGetGet(param: DefaultApiApiContentGetApiContentGetGetRequest = {}, options?: ConfigurationOptions): Promise<ContentResponse> {
        return this.api.apiContentGetApiContentGetGet(param.url, param.id,  options).toPromise();
    }

    /**
     * Api.Content.Linked
     * @param param the request object
     */
    public apiContentLinkedApiContentLinkedGetWithHttpInfo(param: DefaultApiApiContentLinkedApiContentLinkedGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<AssociatedContentResponse>> {
        return this.api.apiContentLinkedApiContentLinkedGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Api.Content.Linked
     * @param param the request object
     */
    public apiContentLinkedApiContentLinkedGet(param: DefaultApiApiContentLinkedApiContentLinkedGetRequest, options?: ConfigurationOptions): Promise<AssociatedContentResponse> {
        return this.api.apiContentLinkedApiContentLinkedGet(param.id,  options).toPromise();
    }

}
