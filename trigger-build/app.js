const axios = require("axios");
const url =
  "https://webhooks.amplify.us-west-2.amazonaws.com/prod/webhooks?id=caa1db03-428e-44df-bb89-5d45523d91a1&token=IfBcE1WfuVEuggbQlIPRlmDesSLAk2VSpHp74ARur8&operation=startbuild";
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.lambdaHandler = async (event, context) => {
  try {
    const headers = {
      "Content-Type": "application/json"
    };

    const data = await axios.post(url, {}, {headers: headers});
    console.log(data);
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "successfully triggerd build"
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
