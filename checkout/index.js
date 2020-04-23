module.exports = async function (context, req) {

    if (req.body && req.body.payment_method_nonce && req.body.amount) {
        var nonceFromTheClient = req.body.payment_method_nonce;
        var amount = req.body.amount;
        
        var braintree = require("braintree");

        var gateway = braintree.connect({
            environment: braintree.Environment.Sandbox,
            merchantId: process.env["BT.MERCHANT_ID"],
            publicKey: process.env["BT.PUBLIC_KEY"],
            privateKey: process.env["BT.PRIVATE_KEY"]
            });

        const util = require('util');
        const sale = util.promisify(gateway.transaction.sale);

        result = await gateway.transaction.sale({
            amount: amount,
            paymentMethodNonce: nonceFromTheClient,
            options: {
                submitForSettlement: true
                }
            });

        if(result)
            context.res = {
                body: result
            };
        else
            res.status(500).send("Unexpected error: no response from Braintree API");
 
    }
    else {
        context.res = {
            status: 400,
            body: "No nonce or amount in the request"
        };
    }

};