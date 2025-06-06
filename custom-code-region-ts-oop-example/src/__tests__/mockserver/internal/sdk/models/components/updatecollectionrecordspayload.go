// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type UpdateCollectionRecordsPayload struct {
	Documents  []*string            `json:"documents,omitempty"`
	Embeddings [][]float32          `json:"embeddings,omitempty"`
	Ids        []string             `json:"ids"`
	Metadatas  []map[string]HashMap `json:"metadatas,omitempty"`
	Uris       []*string            `json:"uris,omitempty"`
}

func (o *UpdateCollectionRecordsPayload) GetDocuments() []*string {
	if o == nil {
		return nil
	}
	return o.Documents
}

func (o *UpdateCollectionRecordsPayload) GetEmbeddings() [][]float32 {
	if o == nil {
		return nil
	}
	return o.Embeddings
}

func (o *UpdateCollectionRecordsPayload) GetIds() []string {
	if o == nil {
		return []string{}
	}
	return o.Ids
}

func (o *UpdateCollectionRecordsPayload) GetMetadatas() []map[string]HashMap {
	if o == nil {
		return nil
	}
	return o.Metadatas
}

func (o *UpdateCollectionRecordsPayload) GetUris() []*string {
	if o == nil {
		return nil
	}
	return o.Uris
}
