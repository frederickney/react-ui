# .DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiContentApiContentGet**](DefaultApi.md#apiContentApiContentGet) | **GET** /api/content/ | Api.Content
[**apiContentGetApiContentGetGet**](DefaultApi.md#apiContentGetApiContentGetGet) | **GET** /api/content/get/ | Api.Content.Get
[**apiContentLinkedApiContentLinkedGet**](DefaultApi.md#apiContentLinkedApiContentLinkedGet) | **GET** /api/content/linked/ | Api.Content.Linked


# **apiContentApiContentGet**
> Array<ContentResponse> apiContentApiContentGet()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.apiContentApiContentGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ContentResponse>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiContentGetApiContentGetGet**
> ContentResponse apiContentGetApiContentGetGet()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiApiContentGetApiContentGetGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiApiContentGetApiContentGetGetRequest = {
  
  url: "url_example",
  
  id: 1,
};

const data = await apiInstance.apiContentGetApiContentGetGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | [**string**] |  | (optional) defaults to undefined
 **id** | [**number**] |  | (optional) defaults to undefined


### Return type

**ContentResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Not Found |  -  |
**400** | Bad Request |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiContentLinkedApiContentLinkedGet**
> AssociatedContentResponse apiContentLinkedApiContentLinkedGet()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiApiContentLinkedApiContentLinkedGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiApiContentLinkedApiContentLinkedGetRequest = {
  
  id: 1,
};

const data = await apiInstance.apiContentLinkedApiContentLinkedGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**AssociatedContentResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Not Found |  -  |
**400** | Bad Request |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


