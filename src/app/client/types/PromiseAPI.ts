import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { AssociatedContentResponse } from '../models/AssociatedContentResponse';
import { ContentResponse } from '../models/ContentResponse';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { InvalidRequestError } from '../models/InvalidRequestError';
import { NotFound } from '../models/NotFound';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Api.Content
     */
    public apiContentApiContentGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<ContentResponse>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiContentApiContentGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Api.Content
     */
    public apiContentApiContentGet(_options?: PromiseConfigurationOptions): Promise<Array<ContentResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiContentApiContentGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Api.Content.Get
     * @param [url]
     * @param [id]
     */
    public apiContentGetApiContentGetGetWithHttpInfo(url?: string, id?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContentResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiContentGetApiContentGetGetWithHttpInfo(url, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Api.Content.Get
     * @param [url]
     * @param [id]
     */
    public apiContentGetApiContentGetGet(url?: string, id?: number, _options?: PromiseConfigurationOptions): Promise<ContentResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiContentGetApiContentGetGet(url, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Api.Content.Linked
     * @param id
     */
    public apiContentLinkedApiContentLinkedGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AssociatedContentResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiContentLinkedApiContentLinkedGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * Api.Content.Linked
     * @param id
     */
    public apiContentLinkedApiContentLinkedGet(id: number, _options?: PromiseConfigurationOptions): Promise<AssociatedContentResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiContentLinkedApiContentLinkedGet(id, observableOptions);
        return result.toPromise();
    }


}



