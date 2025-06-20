package com.bookstore;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(
        info = @Info(
                title = "Bookstore API",
                version = "1.0.0",
                description = "This API provides endpoints to manage a bookstore's inventory of books and magazines, " +
                        "as well as customer orders. You can use it to browse publications, create orders, and track " +
                        "order status.",
                contact = @Contact(
                        name = "Bookstore API Support",
                        email = "api@bookstore.example.com",
                        url = "https://bookstore.example.com/support"
                ),
                license = @License(
                        name = "Apache 2.0",
                        url = "https://www.apache.org/licenses/LICENSE-2.0.html"
                )
        ),
        servers = {
                @Server(url = "https://api.bookstore.example.com", description = "Production server (uses live data)"),
                @Server(url = "http://localhost:8080", description = "Development server (uses test data)")
        }
)
public class BookstoreApplication {
    public static void main(String[] args) {
        SpringApplication.run(BookstoreApplication.class, args);
    }
}