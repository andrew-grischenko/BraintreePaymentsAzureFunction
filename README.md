# Braintree Payments Azure Function

This is the server component for the [Braintree PCF control](https://github.com/andrew-grischenko/BraintreePaymentsPCF) implemented as an Azure Function code in Node.js.

1. If you don;t have an Azure account, create [a free one](https://azure.microsoft.com/en-au/free/)

2. Follow [this guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-function-vs-code?pivots=programming-language-javascript) to set up the fucntion and deploy this repository as the function defintion 

3. Set up the environment properties:
* **BT.MERCHANT_ID** - your Braintree merchant account ID
* **BT.PUBLIC_KEY** - your Braintree Public key
* **BT.PRIVATE_KEY** - your Braintree Private key

4. To test that the funtcion works correctlky you need to supply JSON body with **amount** and **payment_method_nonce** parameters. The latter one can be generated through the https://github.com/andrew-grischenko/BraintreePaymentsPCF component. You can test an error scenario with any random value for the **payment_method_nonce** parameter.   

