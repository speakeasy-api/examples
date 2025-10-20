# Configure the PokeAPI provider
terraform {
  required_providers {
    pokeapi = {
      source = "example.com/me/pokeapi"
    }
  }
}

provider "pokeapi" {
  endpoint = "https://pokeapi.co"
}

resource "pokeapi_pokemon" "pikachu" {
  id = 25 # Pikachu's ID
}

resource "pokeapi_pokemon" "charizard" {
  id = 6 # Charizard's ID
}

output "pikachu_name" {
  description = "The name of Pikachu"
  value       = pokeapi_pokemon.pikachu.name
}

output "pikachu_height" {
  description = "Pikachu's height in decimetres"
  value       = pokeapi_pokemon.pikachu.height
}

output "pikachu_weight" {
  description = "Pikachu's weight in hectograms"
  value       = pokeapi_pokemon.pikachu.weight
}

output "pikachu_base_experience" {
  description = "Base experience gained from defeating Pikachu"
  value       = pokeapi_pokemon.pikachu.base_experience
}

output "pikachu_stats" {
  description = "Pikachu's base stats - this is a complex nested list"
  value       = pokeapi_pokemon.pikachu.stats
}

output "pikachu_types" {
  description = "Pikachu's types - this is a nested list with slot and type information"
  value       = pokeapi_pokemon.pikachu.types
}

output "charizard_name" {
  description = "Charizard's name"
  value       = pokeapi_pokemon.charizard.name
}
