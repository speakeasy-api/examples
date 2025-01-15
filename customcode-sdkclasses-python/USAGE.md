<!-- Start SDK Example Usage [usage] -->
```python
# Synchronous Example
from speakeasy_gtd import Gtd

with Gtd() as gtd:

    res = gtd.todos.create(request={
        "title": "Buy cat food",
        "description": "Finn is running low on tuna and chicken cans.",
        "completed": False,
    })

    # Handle response
    print(res)
```

</br>

The same SDK client can also be used to make asychronous requests by importing asyncio.
```python
# Asynchronous Example
import asyncio
from speakeasy_gtd import Gtd

async def main():
    async with Gtd() as gtd:

        res = await gtd.todos.create_async(request={
            "title": "Buy cat food",
            "description": "Finn is running low on tuna and chicken cans.",
            "completed": False,
        })

        # Handle response
        print(res)

asyncio.run(main())
```
<!-- End SDK Example Usage [usage] -->