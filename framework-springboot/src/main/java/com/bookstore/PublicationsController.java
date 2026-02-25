package com.bookstore;

import com.bookstore.Models.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.extensions.Extension;
import io.swagger.v3.oas.annotations.extensions.ExtensionProperty;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/publications")
@Tag(name = "Publications", description = "Publications management APIs")
public class PublicationsController {
  @Operation(summary = "List all publications", description = "Get a list of all publications in the store with optional filtering", extensions = {
      @Extension(name = "x-speakeasy-retries", properties = {
          @ExtensionProperty(name = "strategy", value = "backoff"),
          @ExtensionProperty(name = "backoff", parseValue = true, value = "{\"initialInterval\":500,\"maxInterval\":60000,\"maxElapsedTime\":3600000,\"exponent\":1.5}"),
          @ExtensionProperty(name = "statusCodes", parseValue = true, value = "[\"5XX\"]"),
          @ExtensionProperty(name = "retryConnectionErrors", parseValue = true, value = "true")
      })
  })
  @ApiResponses(value = {
      @ApiResponse(
          responseCode = "200",
          description = "Successfully retrieved publications",
          content = @Content(
              mediaType = "application/json",
              array = @ArraySchema(schema = @Schema(type = "object", oneOf = {Book.class, Magazine.class}))
          )
      )
  })
  @GetMapping
  public ResponseEntity<List<Publication>> listPublications(
      @Parameter(
          description = "Filter by publication type",
          example = "Book",
          schema = @Schema(type = "string", allowableValues = {"Book", "Magazine"})
      )
      @RequestParam(required = false) String type,
      
      @Parameter(
          description = "Search query to filter publications by title",
          example = "Spring Boot"
      )
      @RequestParam(required = false) String search
  ) {
    // This is a mock implementation. In a real application, you would fetch this
    // from a database.
    List<Publication> publications = new ArrayList<>();
    publications.add(new Book(UUID.randomUUID().toString(), "Spring Boot in Action", "2015-10-01", 39.99f,
        "Craig Walls", "978-1617292545"));
    publications.add(new Magazine(UUID.randomUUID().toString(), "National Geographic", "2023-06-01", 9.99f, 6,
        "National Geographic Society"));
    return ResponseEntity.ok(publications);
  }

  @Operation(
      summary = "Get a publication by ID",
      description = "Retrieves a publication's details by its unique identifier"
  )
  @ApiResponses(value = {
      @ApiResponse(
          responseCode = "200",
          description = "Successfully retrieved publication",
          content = @Content(
              mediaType = "application/json",
              schema = @Schema(type = "object", oneOf = {Book.class, Magazine.class}),
              examples = {
                  @ExampleObject(
                      name = "Book response",
                      summary = "Example book response",
                      value = """
                      {
                          "id": "123",
                          "title": "Spring Boot in Action",
                          "publishDate": "2015-10-01",
                          "price": 39.99,
                          "type": "Book",
                          "author": "Craig Walls",
                          "isbn": "978-1617292545"
                      }
                      """
                  )
              }
          )
      ),
      @ApiResponse(
          responseCode = "404",
          description = "Publication not found",
          content = @Content(
              mediaType = "application/problem+json",
              schema = @Schema(implementation = ProblemDetail.class)
          )
      )
  })
  @GetMapping("/{id}")
  public ResponseEntity<?> getPublication(
      @Parameter(
          description = "Unique identifier of the publication",
          required = true,
          example = "123e4567-e89b-12d3-a456-426614174000",
          in = ParameterIn.PATH
      )
      @PathVariable String id) {
    // This is a mock implementation. In a real application, you would fetch this
    // from a database.
    if ("123".equals(id)) {
      return ResponseEntity
          .ok(new Book("123", "Spring Boot in Action", "2015-10-01", 39.99f, "Craig Walls", "978-1617292545"));
    } else {
      ProblemDetail problem = ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, "Publication not found");
      problem.setType(URI.create("https://api.bookstore.example.com/problems/publication-not-found"));
      problem.setTitle("Publication Not Found");
      problem.setInstance(URI.create("/publications/" + id));
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(problem);
    }
  }

  @Operation(summary = "Create a new publication", description = "Add a new publication to the store", requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
      content = @Content(
          schema = @Schema(oneOf = {Book.class, Magazine.class}),
          examples = {
              @ExampleObject(
                  name = "Book example",
                  summary = "Example of creating a book",
                  value = """
                  {
                      "title": "Effective Java",
                      "publishDate": "2018-01-06",
                      "price": 45.99,
                      "type": "Book",
                      "author": "Joshua Bloch",
                      "isbn": "978-0134685991"
                  }
                  """
              ),
              @ExampleObject(
                  name = "Magazine example",
                  summary = "Example of creating a magazine",
                  value = """
                  {
                      "title": "Wired",
                      "publishDate": "2024-03-01",
                      "price": 12.99,
                      "type": "Magazine",
                      "issueNumber": 32,
                      "publisher": "Condé Nast"
                  }
                  """
              )
          }
      )
  ))
  @ApiResponses(value = {
      @ApiResponse(
          responseCode = "201",
          description = "Publication created successfully",
          content = @Content(
              mediaType = "application/json",
              schema = @Schema(type = "object", oneOf = {Book.class, Magazine.class})
          )
      ),
      @ApiResponse(
          responseCode = "400",
          description = "Invalid input",
          content = @Content(
              mediaType = "application/problem+json",
              schema = @Schema(implementation = ProblemDetail.class)
          )
      )
  })
  @PostMapping
  public ResponseEntity<?> createPublication(
      @Parameter(description = "Publication to add to the store", required = true) 
      @RequestBody Publication publication) {
    // This is a mock implementation. In a real application, you would save this to
    // a database.
    if (publication instanceof Book) {
      Book book = (Book) publication;
      book.setId(UUID.randomUUID().toString());
      return ResponseEntity.status(HttpStatus.CREATED).body(book);
    } else if (publication instanceof Magazine) {
      Magazine magazine = (Magazine) publication;
      magazine.setId(UUID.randomUUID().toString());
      return ResponseEntity.status(HttpStatus.CREATED).body(magazine);
    } else {
      ProblemDetail problem = ProblemDetail.forStatusAndDetail(HttpStatus.BAD_REQUEST, "Invalid publication type");
      problem.setType(URI.create("https://api.bookstore.example.com/problems/invalid-publication-type"));
      problem.setTitle("Invalid Input");
      return ResponseEntity.badRequest().body(problem);
    }
  }

  @Operation(
      summary = "Update a publication",
      description = "Update an existing publication's information. All fields except ID can be modified."
  )
  @ApiResponses(value = {
      @ApiResponse(
          responseCode = "200",
          description = "Publication updated successfully",
          content = @Content(
              mediaType = "application/json",
              schema = @Schema(type = "object", oneOf = {Book.class, Magazine.class})
          )
      ),
      @ApiResponse(
          responseCode = "404",
          description = "Publication not found",
          content = @Content(
              mediaType = "application/problem+json",
              schema = @Schema(implementation = ProblemDetail.class)
          )
      ),
      @ApiResponse(
          responseCode = "400",
          description = "Invalid input data",
          content = @Content(
              mediaType = "application/problem+json",
              schema = @Schema(implementation = ProblemDetail.class)
          )
      )
  })
  @PutMapping("/{id}")
  public ResponseEntity<?> updatePublication(
      @Parameter(
          description = "ID of the publication to update",
          required = true,
          example = "123e4567-e89b-12d3-a456-426614174000"
      )
      @PathVariable String id,
      
      @Parameter(description = "Updated publication data", required = true)
      @RequestBody Publication publication
  ) {
    // Mock implementation
    if ("123".equals(id)) {
      if (publication instanceof Book) {
        Book book = (Book) publication;
        book.setId(id);
        return ResponseEntity.ok(book);
      } else if (publication instanceof Magazine) {
        Magazine magazine = (Magazine) publication;
        magazine.setId(id);
        return ResponseEntity.ok(magazine);
      }
    }
    
    ProblemDetail problem = ProblemDetail.forStatusAndDetail(
        HttpStatus.NOT_FOUND,
        "Publication with ID '" + id + "' was not found"
    );
    problem.setType(URI.create("https://api.bookstore.example.com/problems/publication-not-found"));
    problem.setTitle("Publication Not Found");
    problem.setInstance(URI.create("/publications/" + id));
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(problem);
  }

  @Operation(
      summary = "Delete a publication",
      description = "Remove a publication from the store inventory. This action cannot be undone."
  )
  @ApiResponses(value = {
      @ApiResponse(
          responseCode = "204",
          description = "Publication deleted successfully"
      ),
      @ApiResponse(
          responseCode = "404",
          description = "Publication not found",
          content = @Content(
              mediaType = "application/problem+json",
              schema = @Schema(implementation = ProblemDetail.class)
          )
      ),
      @ApiResponse(
          responseCode = "409",
          description = "Publication cannot be deleted (e.g., active orders exist)",
          content = @Content(
              mediaType = "application/problem+json",
              schema = @Schema(implementation = ProblemDetail.class)
          )
      )
  })
  @DeleteMapping("/{id}")
  public ResponseEntity<?> deletePublication(
      @Parameter(
          description = "ID of the publication to delete",
          required = true,
          example = "123e4567-e89b-12d3-a456-426614174000"
      )
      @PathVariable String id
  ) {
    // Mock implementation
    if ("123".equals(id)) {
      return ResponseEntity.noContent().build();
    } else {
      ProblemDetail problem = ProblemDetail.forStatusAndDetail(
          HttpStatus.NOT_FOUND,
          "Publication with ID '" + id + "' was not found"
      );
      problem.setType(URI.create("https://api.bookstore.example.com/problems/publication-not-found"));
      problem.setTitle("Publication Not Found");
      problem.setInstance(URI.create("/publications/" + id));
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(problem);
    }
  }
}
