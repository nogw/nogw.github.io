---
title: 'How To Improve API Development with apiWithLog'
date: '2023-04-25'
tags: ['functional-programming', 'type-theory']
--- 

Developing APIs can be a challenging task, especially when it comes to debugging and monitoring them. In many cases, developers need to manually log various information related to API calls, such as elapsed time, response size, and request parameters, to diagnose and fix issues.

To simplify this process, we've developed an npm library called `apiWithLog` that automates logging for API calls. This library can significantly reduce the time and effort required for debugging and monitoring APIs, and we believe it can be a valuable addition to any developer's toolkit.

In this article, we'll explain how apiWithLog works, your functionalities and how you can use it to improve your API development process.

## What is apiWithLog?

apiWithLog is a powerful and lightweight npm library that automates logging for API calls, this library is designed to work with any fetch client, such as Node-fetch or built-in Fetch API, and it logs various information related to the API call, such as:

* Response headers
* Response body size
* Elapsed time for the API call
* Request and response status codes

By default, the library logs only basic information, such as response headers and status codes. However, you can customize the logging behavior by providing options to the library.

## How to Use ApiWithLog

First, you need to install it as a dependency in your project:

```shell
npm install apiWithLog --save
```

After installing the apiWithLog library, you can import it in your code and use it to make API calls. Here's an example:

```javascript
import { apiWithLog } from "apiWithLog"

const main = async () => {
  const url = 'https://cat-fact.herokuapp.com/facts';
  await apiWithLog(url);
}

main()
  .then(() => {
    console.log('API call completed successfully');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error:', err);
    process.exit(1);
  });
```

When you want to log the request and response details, you can set the DEBUG environment variable to true. This will enable apiWithLog to log additional information about the API call. For example, you can use the following command to enable debug mode:

```shell 
DEBUG=true node your_file.ts 
```

By default, apiWithLog logs only basic information, such as request and response headers and status codes. However, you can customize the logging behavior by setting environment variables. Here are the available options:

* DEBUG: When the `DEBUG` environment variable is set to "true", apiWithLog logs all available information for API calls, including request and response bodies, headers, elapsed time, and more.
* WRITE_MOCK: : If you set the `WRITE_MOCK` environment variable to "true", apiWithLog will save the request data to a file that can be used for mocking. This feature can be useful when you want to test your code without making actual API calls. You can then use the saved data to simulate responses to future requests.
* USE_MOCK: When the `USE_MOCK` environment variable is set to "true", apiWithLog will reply to requests with the saved mock data instead of making a real API call. This can be useful when you want to test your code without depending on external APIs.

## Conclusion 

apiWithLog is a flexible NPM library that provides a simple way to log API calls and customize the logging behavior based on your project's needs. Additionally, it offers features such as mocking of API calls and error handling. By using "api-with-log", you can better monitor and track the API calls made by your application, leading to more efficient and effective development.

