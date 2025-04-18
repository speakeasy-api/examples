// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type QueryRequestPayload struct {
	Where           any         `json:"where,omitempty"`
	WhereDocument   any         `json:"where_document,omitempty"`
	Ids             []string    `json:"ids,omitempty"`
	Include         []Include   `json:"include,omitempty"`
	NResults        *int        `json:"n_results,omitempty"`
	QueryEmbeddings [][]float32 `json:"query_embeddings"`
}

func (o *QueryRequestPayload) GetWhere() any {
	if o == nil {
		return nil
	}
	return o.Where
}

func (o *QueryRequestPayload) GetWhereDocument() any {
	if o == nil {
		return nil
	}
	return o.WhereDocument
}

func (o *QueryRequestPayload) GetIds() []string {
	if o == nil {
		return nil
	}
	return o.Ids
}

func (o *QueryRequestPayload) GetInclude() []Include {
	if o == nil {
		return nil
	}
	return o.Include
}

func (o *QueryRequestPayload) GetNResults() *int {
	if o == nil {
		return nil
	}
	return o.NResults
}

func (o *QueryRequestPayload) GetQueryEmbeddings() [][]float32 {
	if o == nil {
		return [][]float32{}
	}
	return o.QueryEmbeddings
}
