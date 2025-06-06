// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type DeleteCollectionRecordsPayload struct {
	Where         any      `json:"where,omitempty"`
	WhereDocument any      `json:"where_document,omitempty"`
	Ids           []string `json:"ids,omitempty"`
}

func (o *DeleteCollectionRecordsPayload) GetWhere() any {
	if o == nil {
		return nil
	}
	return o.Where
}

func (o *DeleteCollectionRecordsPayload) GetWhereDocument() any {
	if o == nil {
		return nil
	}
	return o.WhereDocument
}

func (o *DeleteCollectionRecordsPayload) GetIds() []string {
	if o == nil {
		return nil
	}
	return o.Ids
}
