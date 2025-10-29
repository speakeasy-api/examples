#!/bin/bash

echo "Testing F1 Laps API - Laravel"
echo "================================"
echo ""

BASE_URL="http://localhost:8000/api/v1"

# Test health check
echo "1. Health Check:"
curl -s "$BASE_URL/health" | jq .
echo ""

# Create a driver
echo "2. Create Driver (Lewis Hamilton):"
DRIVER_RESPONSE=$(curl -s -X POST "$BASE_URL/drivers" \
  -H "Content-Type: application/json" \
  -d '{"name":"Lewis Hamilton","code":"HAM"}')
echo "$DRIVER_RESPONSE" | jq .
DRIVER_ID=$(echo "$DRIVER_RESPONSE" | jq -r '.id')
echo ""

# Create another driver
echo "3. Create Driver (Max Verstappen):"
DRIVER2_RESPONSE=$(curl -s -X POST "$BASE_URL/drivers" \
  -H "Content-Type: application/json" \
  -d '{"name":"Max Verstappen","code":"VER"}')
echo "$DRIVER2_RESPONSE" | jq .
DRIVER2_ID=$(echo "$DRIVER2_RESPONSE" | jq -r '.id')
echo ""

# List all drivers
echo "4. List All Drivers:"
curl -s "$BASE_URL/drivers" | jq .
echo ""

# Create a circuit
echo "5. Create Circuit (Monaco):"
CIRCUIT_RESPONSE=$(curl -s -X POST "$BASE_URL/circuits" \
  -H "Content-Type: application/json" \
  -d '{"name":"Monaco Grand Prix","location":"Monte Carlo, Monaco"}')
echo "$CIRCUIT_RESPONSE" | jq .
CIRCUIT_ID=$(echo "$CIRCUIT_RESPONSE" | jq -r '.id')
echo ""

# Create another circuit
echo "6. Create Circuit (Silverstone):"
CIRCUIT2_RESPONSE=$(curl -s -X POST "$BASE_URL/circuits" \
  -H "Content-Type: application/json" \
  -d '{"name":"British Grand Prix","location":"Silverstone, UK"}')
echo "$CIRCUIT2_RESPONSE" | jq .
CIRCUIT2_ID=$(echo "$CIRCUIT2_RESPONSE" | jq -r '.id')
echo ""

# List all circuits
echo "7. List All Circuits:"
curl -s "$BASE_URL/circuits" | jq .
echo ""

# Create lap times
echo "8. Create Lap Time (HAM at Monaco, Lap 1):"
curl -s -X POST "$BASE_URL/lap_times" \
  -H "Content-Type: application/json" \
  -d "{\"driver_id\":$DRIVER_ID,\"circuit_id\":$CIRCUIT_ID,\"lap_number\":1,\"time_ms\":82345}" | jq .
echo ""

echo "9. Create Lap Time (HAM at Monaco, Lap 2):"
curl -s -X POST "$BASE_URL/lap_times" \
  -H "Content-Type: application/json" \
  -d "{\"driver_id\":$DRIVER_ID,\"circuit_id\":$CIRCUIT_ID,\"lap_number\":2,\"time_ms\":81234}" | jq .
echo ""

echo "10. Create Lap Time (VER at Monaco, Lap 1):"
curl -s -X POST "$BASE_URL/lap_times" \
  -H "Content-Type: application/json" \
  -d "{\"driver_id\":$DRIVER2_ID,\"circuit_id\":$CIRCUIT_ID,\"lap_number\":1,\"time_ms\":82567}" | jq .
echo ""

echo "11. Create Lap Time (VER at Silverstone, Lap 1):"
curl -s -X POST "$BASE_URL/lap_times" \
  -H "Content-Type: application/json" \
  -d "{\"driver_id\":$DRIVER2_ID,\"circuit_id\":$CIRCUIT2_ID,\"lap_number\":1,\"time_ms\":93456}" | jq .
echo ""

# List all lap times
echo "12. List All Lap Times:"
curl -s "$BASE_URL/lap_times" | jq .
echo ""

# Filter lap times by driver
echo "13. Get Lap Times for Driver $DRIVER_ID (Hamilton):"
curl -s "$BASE_URL/drivers/$DRIVER_ID/lap_times" | jq .
echo ""

# Filter lap times by circuit
echo "14. Get Lap Times for Circuit $CIRCUIT_ID (Monaco):"
curl -s "$BASE_URL/circuits/$CIRCUIT_ID/lap_times" | jq .
echo ""

# Filter with query parameters
echo "15. Get Lap Times with filters (driver_id=$DRIVER_ID, lap_min=2):"
curl -s "$BASE_URL/lap_times?driver_id=$DRIVER_ID&lap_min=2" | jq .
echo ""

echo "================================"
echo "All tests completed!"
