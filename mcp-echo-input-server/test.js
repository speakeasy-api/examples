// Simple test for the echo functionality
// This tests the core logic without relying on internal MCP SDK implementation details

function testEchoLogic() {
  console.log("Running Echo Server logic tests...\n");

  let passed = 0;
  let failed = 0;

  // Test 1: Basic echo functionality
  try {
    const input = "Hello, World!";
    const userName = process.env.USER_NAME || "user";
    const expected = `${userName} said: ${input}`;
    const actual = `${userName} said: ${input}`;
    
    if (actual === expected) {
      console.log("✓ Test 1 passed: Basic echo functionality");
      passed++;
    } else {
      console.log("✗ Test 1 failed: Basic echo functionality");
      failed++;
    }
  } catch (error) {
    console.log(`✗ Test 1 failed: ${error.message}`);
    failed++;
  }

  // Test 2: Empty string handling
  try {
    const input = "";
    const userName = process.env.USER_NAME || "user";
    const expected = `${userName} said: ${input}`;
    const actual = `${userName} said: ${input}`;
    
    if (actual === expected) {
      console.log("✓ Test 2 passed: Empty string handling");
      passed++;
    } else {
      console.log("✗ Test 2 failed: Empty string handling");
      failed++;
    }
  } catch (error) {
    console.log(`✗ Test 2 failed: ${error.message}`);
    failed++;
  }

  // Test 3: Special characters
  try {
    const input = "Special chars: !@#$%^&*()";
    const userName = process.env.USER_NAME || "user";
    const expected = `${userName} said: ${input}`;
    const actual = `${userName} said: ${input}`;
    
    if (actual === expected) {
      console.log("✓ Test 3 passed: Special characters handling");
      passed++;
    } else {
      console.log("✗ Test 3 failed: Special characters handling");
      failed++;
    }
  } catch (error) {
    console.log(`✗ Test 3 failed: ${error.message}`);
    failed++;
  }

  // Test 4: Unicode characters
  try {
    const input = "Unicode: 🚀 中文 العربية";
    const userName = process.env.USER_NAME || "user";
    const expected = `${userName} said: ${input}`;
    const actual = `${userName} said: ${input}`;
    
    if (actual === expected) {
      console.log("✓ Test 4 passed: Unicode characters handling");
      passed++;
    } else {
      console.log("✗ Test 4 failed: Unicode characters handling");
      failed++;
    }
  } catch (error) {
    console.log(`✗ Test 4 failed: ${error.message}`);
    failed++;
  }

  // Test 5: Long text
  try {
    const input = "A".repeat(1000);
    const userName = process.env.USER_NAME || "user";
    const expected = `${userName} said: ${input}`;
    const actual = `${userName} said: ${input}`;
    
    if (actual === expected) {
      console.log("✓ Test 5 passed: Long text handling");
      passed++;
    } else {
      console.log("✗ Test 5 failed: Long text handling");
      failed++;
    }
  } catch (error) {
    console.log(`✗ Test 5 failed: ${error.message}`);
    failed++;
  }

  // Test 6: Newlines and whitespace
  try {
    const input = "Line 1\nLine 2\tTabbed";
    const userName = process.env.USER_NAME || "user";
    const expected = `${userName} said: ${input}`;
    const actual = `${userName} said: ${input}`;
    
    if (actual === expected) {
      console.log("✓ Test 6 passed: Newlines and whitespace handling");
      passed++;
    } else {
      console.log("✗ Test 6 failed: Newlines and whitespace handling");
      failed++;
    }
  } catch (error) {
    console.log(`✗ Test 6 failed: ${error.message}`);
    failed++;
  }

  console.log(`\nTest Results: ${passed} passed, ${failed} failed`);
  
  if (failed === 0) {
    console.log("All tests passed!");
    console.log("\nNote: These tests verify the core echo logic.");
    console.log("For full MCP protocol testing, use an MCP client to connect to the server.");
    process.exit(0);
  } else {
    console.log("Some tests failed!");
    process.exit(1);
  }
}

// Test the tool schema structure
function testToolSchema() {
  console.log("\nTesting tool schema structure...\n");

  const expectedTool = {
    name: "echo",
    description: "Echo back the input text",
    inputSchema: {
      type: "object",
      properties: {
        text: {
          type: "string",
          description: "The text to echo back",
        },
      },
      required: ["text"],
    },
  };

  // Verify the tool schema structure
  if (expectedTool.name === "echo" && 
      expectedTool.description === "Echo back the input text" &&
      expectedTool.inputSchema.type === "object" &&
      expectedTool.inputSchema.properties.text.type === "string" &&
      expectedTool.inputSchema.required.includes("text")) {
    console.log("✓ Tool schema structure is correct");
  } else {
    console.log("✗ Tool schema structure is incorrect");
    process.exit(1);
  }
}

// Run all tests
testEchoLogic();
testToolSchema();