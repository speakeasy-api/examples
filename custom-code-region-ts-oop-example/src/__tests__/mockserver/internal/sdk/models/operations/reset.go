// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type ResetResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Reset successful
	Res *string
}

func (o *ResetResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *ResetResponse) GetRes() *string {
	if o == nil {
		return nil
	}
	return o.Res
}
