// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type GetTenantRequest struct {
	// Tenant name or ID to retrieve
	TenantName string `pathParam:"style=simple,explode=false,name=tenant_name"`
}

func (o *GetTenantRequest) GetTenantName() string {
	if o == nil {
		return ""
	}
	return o.TenantName
}

type GetTenantResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Tenant found
	GetTenantResponse *components.GetTenantResponse
}

func (o *GetTenantResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetTenantResponse) GetGetTenantResponse() *components.GetTenantResponse {
	if o == nil {
		return nil
	}
	return o.GetTenantResponse
}
