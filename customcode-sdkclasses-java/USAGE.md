<!-- Start SDK Example Usage [usage] -->
```java
package hello.world;

import com.example.sdk.Gtd;
import com.example.sdk.models.components.TodoForm;
import com.example.sdk.models.operations.CreateResponse;
import java.lang.Exception;

public class Application {

    public static void main(String[] args) throws Exception {

        Gtd sdk = Gtd.builder()
            .build();

        TodoForm req = TodoForm.builder()
                .title("Buy cat food")
                .build();

        CreateResponse res = sdk.todos().create()
                .request(req)
                .call();

        if (res.todo().isPresent()) {
            // handle response
        }
    }
}
```
<!-- End SDK Example Usage [usage] -->