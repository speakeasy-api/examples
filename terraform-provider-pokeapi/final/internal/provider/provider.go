package provider

import (
	"context"

	"github.com/hashicorp/terraform-plugin-framework/datasource"
	"github.com/hashicorp/terraform-plugin-framework/function"
	"github.com/hashicorp/terraform-plugin-framework/path"
	"github.com/hashicorp/terraform-plugin-framework/provider"
	"github.com/hashicorp/terraform-plugin-framework/provider/schema"
	"github.com/hashicorp/terraform-plugin-framework/resource"
	"github.com/hashicorp/terraform-plugin-framework/types"
	pokeapisdk "github.com/pokeapi/sdk"
)

var _ provider.Provider = &PokeAPIProvider{}
var _ provider.ProviderWithFunctions = &PokeAPIProvider{}

type PokeAPIProvider struct {
	version string
}

type PokeAPIProviderModel struct {
	Endpoint types.String `tfsdk:"endpoint"`
}

func (p *PokeAPIProvider) Metadata(ctx context.Context, req provider.MetadataRequest, resp *provider.MetadataResponse) {
	resp.TypeName = "pokeapi"
	resp.Version = p.version
}

func (p *PokeAPIProvider) Schema(ctx context.Context, req provider.SchemaRequest, resp *provider.SchemaResponse) {
	resp.Schema = schema.Schema{
		MarkdownDescription: `The PokeAPI provider allows you to manage Pokemon data using the Pokemon API.`,
		Attributes: map[string]schema.Attribute{
			"endpoint": schema.StringAttribute{
				MarkdownDescription: "PokeAPI endpoint URL. Defaults to https://pokeapi.co",
				Optional:            true,
			},
		},
	}
}

func (p *PokeAPIProvider) Configure(ctx context.Context, req provider.ConfigureRequest, resp *provider.ConfigureResponse) {
	var data PokeAPIProviderModel

	resp.Diagnostics.Append(req.Config.Get(ctx, &data)...)

	if resp.Diagnostics.HasError() {
		return
	}

	endpoint := "https://pokeapi.co"
	if !data.Endpoint.IsNull() {
		endpoint = data.Endpoint.ValueString()
	}

	if endpoint == "" {
		resp.Diagnostics.AddAttributeError(
			path.Root("endpoint"),
			"Missing PokeAPI Endpoint",
			"The provider cannot create the PokeAPI client as there is a missing or empty value for the PokeAPI endpoint.",
		)
	}

	if resp.Diagnostics.HasError() {
		return
	}

	client := pokeapisdk.New(
		pokeapisdk.WithServerURL(endpoint),
	)

	resp.DataSourceData = client
	resp.ResourceData = client
}

func (p *PokeAPIProvider) Resources(ctx context.Context) []func() resource.Resource {
	return []func() resource.Resource{
		NewPokemonResource,
	}
}

func (p *PokeAPIProvider) DataSources(ctx context.Context) []func() datasource.DataSource {
	return []func() datasource.DataSource{}
}

func (p *PokeAPIProvider) Functions(ctx context.Context) []func() function.Function {
	return []func() function.Function{}
}

func New(version string) func() provider.Provider {
	return func() provider.Provider {
		return &PokeAPIProvider{
			version: version,
		}
	}
}
