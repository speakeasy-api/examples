// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type Security struct {
	APIKey string `security:"scheme,type=apiKey,subtype=header,name=x-API-token"`
}

func (o *Security) GetAPIKey() string {
	if o == nil {
		return ""
	}
	return o.APIKey
}
