// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type GetCollectionGlobals struct {
	TenantID     *string `pathParam:"style=simple,explode=false,name=tenant_id"`
	DatabaseName *string `pathParam:"style=simple,explode=false,name=database_name"`
}

func (o *GetCollectionGlobals) GetTenantID() *string {
	if o == nil {
		return nil
	}
	return o.TenantID
}

func (o *GetCollectionGlobals) GetDatabaseName() *string {
	if o == nil {
		return nil
	}
	return o.DatabaseName
}

type GetCollectionRequest struct {
	// Tenant ID
	TenantID *string `pathParam:"style=simple,explode=false,name=tenant_id"`
	// Database name
	DatabaseName *string `pathParam:"style=simple,explode=false,name=database_name"`
	// UUID of the collection
	CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
}

func (o *GetCollectionRequest) GetTenantID() *string {
	if o == nil {
		return nil
	}
	return o.TenantID
}

func (o *GetCollectionRequest) GetDatabaseName() *string {
	if o == nil {
		return nil
	}
	return o.DatabaseName
}

func (o *GetCollectionRequest) GetCollectionID() string {
	if o == nil {
		return ""
	}
	return o.CollectionID
}

type GetCollectionResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Collection found
	Collection *components.Collection
}

func (o *GetCollectionResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetCollectionResponse) GetCollection() *components.Collection {
	if o == nil {
		return nil
	}
	return o.Collection
}
