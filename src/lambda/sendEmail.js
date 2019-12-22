// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export function handler(event, context, callback) {
  let data = JSON.parse(event.body)
  callback(null, {
    statusCode: 200,
    // That's the status code that will be return when the function is executed to indicates that everything is OK
    body: JSON.stringify({
      msg: "Hello, World! ",
      event: event,
      context: context,
      data: data,
    }),
  })
}
