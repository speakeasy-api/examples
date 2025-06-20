<!-- Start SDK Example Usage [usage] -->
```python
# Synchronous Example
from openapi import SDK


with SDK(
    api_key="<YOUR_API_KEY_HERE>",
) as sdk:

    res = sdk.burger.list_burgers()

    # Handle response
    print(res)
```

</br>

The same SDK client can also be used to make asychronous requests by importing asyncio.
```python
# Asynchronous Example
import asyncio
from openapi import SDK

async def main():

    async with SDK(
        api_key="<YOUR_API_KEY_HERE>",
    ) as sdk:

        res = await sdk.burger.list_burgers_async()

        # Handle response
        print(res)

asyncio.run(main())
```
<!-- End SDK Example Usage [usage] -->