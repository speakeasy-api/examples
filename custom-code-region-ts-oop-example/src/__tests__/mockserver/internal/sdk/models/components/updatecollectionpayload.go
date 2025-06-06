// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type UpdateCollectionPayload struct {
	NewMetadata map[string]HashMap `json:"new_metadata,omitempty"`
	NewName     *string            `json:"new_name,omitempty"`
}

func (o *UpdateCollectionPayload) GetNewMetadata() map[string]HashMap {
	if o == nil {
		return nil
	}
	return o.NewMetadata
}

func (o *UpdateCollectionPayload) GetNewName() *string {
	if o == nil {
		return nil
	}
	return o.NewName
}
