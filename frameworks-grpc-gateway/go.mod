module github.com/speakeasy-api/speakeasy-grpc-gateway-example

go 1.26.0

require (
	github.com/grpc-ecosystem/grpc-gateway/v2 v2.29.0
	google.golang.org/genproto/googleapis/api v0.0.0-20260615183401-62b3387ff324
	google.golang.org/grpc v1.81.1
	google.golang.org/grpc/cmd/protoc-gen-go-grpc v1.6.2
	google.golang.org/protobuf v1.36.11
)

require (
	go.yaml.in/yaml/v3 v3.0.4 // indirect
	golang.org/x/net v0.56.0 // indirect
	golang.org/x/sys v0.46.0 // indirect
	golang.org/x/text v0.38.0 // indirect
	google.golang.org/genproto/googleapis/rpc v0.0.0-20260615183401-62b3387ff324 // indirect
)

tool (
	github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway
	google.golang.org/grpc/cmd/protoc-gen-go-grpc
	google.golang.org/protobuf/cmd/protoc-gen-go
)
