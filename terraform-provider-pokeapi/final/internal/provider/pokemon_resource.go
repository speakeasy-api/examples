// internal/provider/pokemon_resource.go

package provider

import (
	"context"
	"fmt"

	"github.com/hashicorp/terraform-plugin-framework/attr"
	"github.com/hashicorp/terraform-plugin-framework/path"
	"github.com/hashicorp/terraform-plugin-framework/resource"
	"github.com/hashicorp/terraform-plugin-framework/resource/schema"
	"github.com/hashicorp/terraform-plugin-framework/types"

	pokeapisdk "github.com/pokeapi/sdk"
	"github.com/pokeapi/sdk/models/operations"
)

var _ resource.Resource = &PokemonResource{}
var _ resource.ResourceWithImportState = &PokemonResource{}

func NewPokemonResource() resource.Resource {
	return &PokemonResource{}
}

type PokemonResource struct {
	client *pokeapisdk.PokeApisdk
}

type PokemonResourceModel struct {
	ID             types.Int64  `tfsdk:"id"`
	Name           types.String `tfsdk:"name"`
	Height         types.Int64  `tfsdk:"height"`
	Weight         types.Int64  `tfsdk:"weight"`
	BaseExperience types.Int64  `tfsdk:"base_experience"`
	Stats          types.List   `tfsdk:"stats"`
	Types          types.List   `tfsdk:"types"`
	Abilities      types.List   `tfsdk:"abilities"`
	Sprites        types.Object `tfsdk:"sprites"`
}

func (r *PokemonResource) Metadata(ctx context.Context, req resource.MetadataRequest, resp *resource.MetadataResponse) {
	resp.TypeName = req.ProviderTypeName + "_pokemon"
}

func (r *PokemonResource) Schema(ctx context.Context, req resource.SchemaRequest, resp *resource.SchemaResponse) {
	resp.Schema = schema.Schema{
		MarkdownDescription: "Pokemon resource",
		Attributes: map[string]schema.Attribute{
			"id": schema.Int64Attribute{
				MarkdownDescription: "Pokemon ID",
				Required:            true,
			},
			"name": schema.StringAttribute{
				MarkdownDescription: "Pokemon name",
				Computed:            true,
			},
			"height": schema.Int64Attribute{
				MarkdownDescription: "Height in decimetres",
				Computed:            true,
			},
			"weight": schema.Int64Attribute{
				MarkdownDescription: "Weight in hectograms",
				Computed:            true,
			},
			"base_experience": schema.Int64Attribute{
				MarkdownDescription: "Base experience",
				Computed:            true,
			},
			"stats": schema.ListNestedAttribute{
				MarkdownDescription: "Base stats",
				Computed:            true,
				NestedObject: schema.NestedAttributeObject{
					Attributes: map[string]schema.Attribute{
						"base_stat": schema.Int64Attribute{
							Computed: true,
						},
						"effort": schema.Int64Attribute{
							Computed: true,
						},
						"stat": schema.SingleNestedAttribute{
							Computed: true,
							Attributes: map[string]schema.Attribute{
								"name": schema.StringAttribute{Computed: true},
								"url":  schema.StringAttribute{Computed: true},
							},
						},
					},
				},
			},
			"types": schema.ListNestedAttribute{
				MarkdownDescription: "Pokemon types",
				Computed:            true,
				NestedObject: schema.NestedAttributeObject{
					Attributes: map[string]schema.Attribute{
						"slot": schema.Int64Attribute{Computed: true},
						"type": schema.SingleNestedAttribute{
							Computed: true,
							Attributes: map[string]schema.Attribute{
								"name": schema.StringAttribute{Computed: true},
								"url":  schema.StringAttribute{Computed: true},
							},
						},
					},
				},
			},
			"abilities": schema.ListAttribute{
				MarkdownDescription: "Abilities",
				Computed:            true,
				ElementType: types.ObjectType{
					AttrTypes: map[string]attr.Type{
						"is_hidden": types.BoolType,
						"slot":      types.Int64Type,
						"ability": types.ObjectType{
							AttrTypes: map[string]attr.Type{
								"name": types.StringType,
								"url":  types.StringType,
							},
						},
					},
				},
			},
			"sprites": schema.SingleNestedAttribute{
				MarkdownDescription: "Sprite images",
				Computed:            true,
				Attributes: map[string]schema.Attribute{
					"front_default": schema.StringAttribute{Computed: true},
					"back_default":  schema.StringAttribute{Computed: true},
				},
			},
		},
	}
}

func (r *PokemonResource) Configure(ctx context.Context, req resource.ConfigureRequest, resp *resource.ConfigureResponse) {
	if req.ProviderData == nil {
		return
	}

	client, ok := req.ProviderData.(*pokeapisdk.PokeApisdk)
	if !ok {
		resp.Diagnostics.AddError(
			"Unexpected Resource Configure Type",
			fmt.Sprintf("Expected *pokeapisdk.PokeAPISDK, got: %T", req.ProviderData),
		)
		return
	}

	r.client = client
}

func (r *PokemonResource) Create(ctx context.Context, req resource.CreateRequest, resp *resource.CreateResponse) {
	var data PokemonResourceModel
	resp.Diagnostics.Append(req.Plan.Get(ctx, &data)...)
	if resp.Diagnostics.HasError() {
		return
	}

	pokemonID := data.ID.ValueInt64()
	pokemon, err := r.client.Pokemon.PokemonRead(ctx, pokemonID)
	if err != nil {
		resp.Diagnostics.AddError("Client Error", fmt.Sprintf("Unable to read Pokemon: %s", err))
		return
	}

	if err := r.mapPokemonToState(ctx, pokemon, &data); err != nil {
		resp.Diagnostics.AddError("Mapping Error", fmt.Sprintf("Unable to map Pokemon: %s", err))
		return
	}

	resp.Diagnostics.Append(resp.State.Set(ctx, &data)...)
}

func (r *PokemonResource) Read(ctx context.Context, req resource.ReadRequest, resp *resource.ReadResponse) {
	var data PokemonResourceModel
	resp.Diagnostics.Append(req.State.Get(ctx, &data)...)
	if resp.Diagnostics.HasError() {
		return
	}

	pokemonID := data.ID.ValueInt64()
	pokemon, err := r.client.Pokemon.PokemonRead(ctx, pokemonID)
	if err != nil {
		resp.Diagnostics.AddError("Client Error", fmt.Sprintf("Unable to read Pokemon: %s", err))
		return
	}

	if err := r.mapPokemonToState(ctx, pokemon, &data); err != nil {
		resp.Diagnostics.AddError("Mapping Error", fmt.Sprintf("Unable to map Pokemon: %s", err))
		return
	}

	resp.Diagnostics.Append(resp.State.Set(ctx, &data)...)
}

func (r *PokemonResource) Update(ctx context.Context, req resource.UpdateRequest, resp *resource.UpdateResponse) {
	var data PokemonResourceModel
	resp.Diagnostics.Append(req.Plan.Get(ctx, &data)...)
	if resp.Diagnostics.HasError() {
		return
	}

	pokemonID := data.ID.ValueInt64()
	pokemon, err := r.client.Pokemon.PokemonRead(ctx, pokemonID)
	if err != nil {
		resp.Diagnostics.AddError("Client Error", fmt.Sprintf("Unable to read Pokemon: %s", err))
		return
	}

	if err := r.mapPokemonToState(ctx, pokemon, &data); err != nil {
		resp.Diagnostics.AddError("Mapping Error", fmt.Sprintf("Unable to map Pokemon: %s", err))
		return
	}

	resp.Diagnostics.Append(resp.State.Set(ctx, &data)...)
}

func (r *PokemonResource) Delete(ctx context.Context, req resource.DeleteRequest, resp *resource.DeleteResponse) {
	// Pokemon can't be deleted from the API, just remove from state
}

func (r *PokemonResource) ImportState(ctx context.Context, req resource.ImportStateRequest, resp *resource.ImportStateResponse) {
	resource.ImportStatePassthroughID(ctx, path.Root("id"), req, resp)
}

func (r *PokemonResource) mapPokemonToState(ctx context.Context, pokemonResp *operations.PokemonReadResponse, data *PokemonResourceModel) error {
	if pokemonResp == nil || pokemonResp.Object == nil {
		return fmt.Errorf("received nil response from API")
	}

	pokemon := *pokemonResp.Object

	if pokemon.ID != nil {
		data.ID = types.Int64Value(int64(*pokemon.ID))
	}
	if pokemon.Name != nil {
		data.Name = types.StringValue(*pokemon.Name)
	}
	if pokemon.Height != nil {
		data.Height = types.Int64Value(int64(*pokemon.Height))
	}
	if pokemon.Weight != nil {
		data.Weight = types.Int64Value(int64(*pokemon.Weight))
	}
	if pokemon.BaseExperience != nil {
		data.BaseExperience = types.Int64Value(int64(*pokemon.BaseExperience))
	}

	// Map stats
	statsElements := []attr.Value{}
	if pokemon.Stats != nil {
		for _, stat := range pokemon.Stats {
			if stat.BaseStat == nil || stat.Effort == nil || stat.Stat.Name == nil || stat.Stat.URL == nil {
				continue
			}
			statObj, _ := types.ObjectValue(
				map[string]attr.Type{
					"base_stat": types.Int64Type,
					"effort":    types.Int64Type,
					"stat": types.ObjectType{
						AttrTypes: map[string]attr.Type{
							"name": types.StringType,
							"url":  types.StringType,
						},
					},
				},
				map[string]attr.Value{
					"base_stat": types.Int64Value(*stat.BaseStat),
					"effort":    types.Int64Value(*stat.Effort),
					"stat": types.ObjectValueMust(
						map[string]attr.Type{
							"name": types.StringType,
							"url":  types.StringType,
						},
						map[string]attr.Value{
							"name": types.StringValue(*stat.Stat.Name),
							"url":  types.StringValue(*stat.Stat.URL),
						},
					),
				},
			)
			statsElements = append(statsElements, statObj)
		}
	}

	statsList, _ := types.ListValue(
		types.ObjectType{
			AttrTypes: map[string]attr.Type{
				"base_stat": types.Int64Type,
				"effort":    types.Int64Type,
				"stat": types.ObjectType{
					AttrTypes: map[string]attr.Type{
						"name": types.StringType,
						"url":  types.StringType,
					},
				},
			},
		},
		statsElements,
	)
	data.Stats = statsList

	// Map types
	typesElements := []attr.Value{}
	if pokemon.Types != nil {
		for _, typeInfo := range pokemon.Types {
			if typeInfo.Slot == nil || typeInfo.Type.Name == nil || typeInfo.Type.URL == nil {
				continue
			}
			typeObj, _ := types.ObjectValue(
				map[string]attr.Type{
					"slot": types.Int64Type,
					"type": types.ObjectType{
						AttrTypes: map[string]attr.Type{
							"name": types.StringType,
							"url":  types.StringType,
						},
					},
				},
				map[string]attr.Value{
					"slot": types.Int64Value(*typeInfo.Slot),
					"type": types.ObjectValueMust(
						map[string]attr.Type{
							"name": types.StringType,
							"url":  types.StringType,
						},
						map[string]attr.Value{
							"name": types.StringValue(*typeInfo.Type.Name),
							"url":  types.StringValue(*typeInfo.Type.URL),
						},
					),
				},
			)
			typesElements = append(typesElements, typeObj)
		}
	}

	typesList, _ := types.ListValue(
		types.ObjectType{
			AttrTypes: map[string]attr.Type{
				"slot": types.Int64Type,
				"type": types.ObjectType{
					AttrTypes: map[string]attr.Type{
						"name": types.StringType,
						"url":  types.StringType,
					},
				},
			},
		},
		typesElements,
	)
	data.Types = typesList

	// Create empty collections for other fields
	abilitiesEmpty, _ := types.ListValue(
		types.ObjectType{
			AttrTypes: map[string]attr.Type{
				"is_hidden": types.BoolType,
				"slot":      types.Int64Type,
				"ability": types.ObjectType{
					AttrTypes: map[string]attr.Type{
						"name": types.StringType,
						"url":  types.StringType,
					},
				},
			},
		},
		[]attr.Value{},
	)
	data.Abilities = abilitiesEmpty

	spritesEmpty, _ := types.ObjectValue(
		map[string]attr.Type{
			"front_default": types.StringType,
			"back_default":  types.StringType,
		},
		map[string]attr.Value{
			"front_default": types.StringNull(),
			"back_default":  types.StringNull(),
		},
	)
	data.Sprites = spritesEmpty

	return nil
}
