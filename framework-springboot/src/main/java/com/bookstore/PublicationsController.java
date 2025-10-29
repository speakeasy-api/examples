package com.bookstore;

import com.bookstore.Models.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.extensions.Extension;
import io.swagger.v3.oas.annotations.extensions.ExtensionProperty;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/publications")
@Tag(name = "Publications", description = "Publications management APIs")
public class PublicationsController {
    @Operation(summary = "List all publications", description = "Get a list of all publications in the store", extensions = {
        @Extension(name = "x-speakeasy-retries", properties = {
            @ExtensionProperty(name = "strategy", value = "backoff"),
            @ExtensionProperty(name = "backoff", parseValue = true, value = "{\"initialInterval\":500,\"maxInterval\":60000,\"maxElapsedTime\":3600000,\"exponent\":1.5}"),
            @ExtensionProperty(name = "statusCodes", parseValue = true, value = "[\"5XX\"]"),
            @ExtensionProperty(name = "retryConnectionErrors", parseValue = true, value = "true")
        })
    })
    @GetMapping
    public ResponseEntity<List<Publication>> listPublications() {
        // This is a mock implementation. In a real application, you would fetch this from a database.
        List<Publication> publications = new ArrayList<>();
        publications.add(new Book(UUID.randomUUID().toString(), "Spring Boot in Action", "2015-10-01", 39.99f, "Craig Walls", "978-1617292545"));
        publications.add(new Magazine(UUID.randomUUID().toString(), "National Geographic", "2023-06-01", 9.99f, 6, "National Geographic Society"));
        return ResponseEntity.ok(publications);
    }

    @Operation(summary = "Get a publication by ID", description = "Retrieves a publication's details by its unique identifier")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successful operation",
                     content = @Content(mediaType = "application/json", schema = @Schema(type="object", oneOf = {Book.class, Magazine.class}))),
        @ApiResponse(responseCode = "404", description = "Publication not found",
                     content = @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorResponse.class)))
    })
    @GetMapping("/{id}")
    public ResponseEntity<?> getPublication(
            @Parameter(description = "ID of the publication to retrieve") @PathVariable String id) {
        // This is a mock implementation. In a real application, you would fetch this from a database.
        if ("123".equals(id)) {
            return ResponseEntity.ok(new Book("123", "Spring Boot in Action", "2015-10-01", 39.99f, "Craig Walls", "978-1617292545"));
        } else {
            return ResponseEntity.status(404).body(new ErrorResponse(404, "Publication not found"));
        }
    }

    @Operation(summary = "Create a new publication", description = "Add a new publication to the store", requestBody = 
    @io.swagger.v3.oas.annotations.parameters.RequestBody(content = @Content(schema = @Schema(oneOf = {Book.class, Magazine.class}))))
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successful operation",
                     content = @Content(mediaType = "application/json", schema = @Schema(type="object", oneOf = {Book.class, Magazine.class}))),
        @ApiResponse(responseCode = "400", description = "Invalid input",
                     content = @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorResponse.class)))
    })
    @PostMapping
    public ResponseEntity<?> createPublication(
            @Parameter(description = "Publication to add to the store", required = true)
            @RequestBody Publication publication) {
        // This is a mock implementation. In a real application, you would save this to a database.
        if (publication instanceof Book) {
            Book book = (Book) publication;
            book.setId(UUID.randomUUID().toString());
            return ResponseEntity.ok(book);
        } else if (publication instanceof Magazine) {
            Magazine magazine = (Magazine) publication;
            magazine.setId(UUID.randomUUID().toString());
            return ResponseEntity.ok(magazine);
        } else {
            return ResponseEntity.badRequest().body(new ErrorResponse(400, "Invalid publication type"));
        }
    }
}