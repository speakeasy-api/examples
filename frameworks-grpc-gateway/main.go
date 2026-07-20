package main

import (
	"io"
	"net"
	"os"

	"github.com/speakeasy-api/speakeasy-grpc-gateway-example/insecure"
	"github.com/speakeasy-api/speakeasy-grpc-gateway-example/server"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/grpclog"

	speakeasyv1 "github.com/speakeasy-api/speakeasy-grpc-gateway-example/proto/speakeasy/v1"
)

func main() {
	// Adds gRPC internal logs. This is quite verbose, so adjust as desired!
	log := grpclog.NewLoggerV2(os.Stdout, io.Discard, io.Discard)
	grpclog.SetLoggerV2(log)

	addr := "127.0.0.1:8080"
	lis, err := net.Listen("tcp", addr)
	if err != nil {
		log.Fatalln("Failed to listen:", err)
	}

	s := grpc.NewServer(
		// TODO: Replace with your own certificate!
		grpc.Creds(credentials.NewServerTLSFromCert(&insecure.Cert)),
	)
	speakeasyv1.RegisterTrainTravelServiceServer(s, server.New())

	// Serve gRPC Server
	log.Info("Serving gRPC on https://", addr)
	log.Fatal(s.Serve(lis))
}