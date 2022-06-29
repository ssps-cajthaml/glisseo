# Glisseo
Glisseo is a TypeScript service used for testing code and running code in a seperate environment. It supports various test types with custom input and output. Glisseo can be used for many things, varying from testing your students' code to building robust Unit tests.

## Usage
```js
const endpoint = process.env.GLISSEO_ENDPOINT || "customUrl";
const password = process.env.GLISSEO_PASSWORD || "customPassword";

const gs: GlisseoService = new GlisseoService(endpoint, password);

gs.addAssignment(
    new Assignment("assignment1").setConfig({
        language: "csharp",
    }).addTest(
        new Test("basic 1", "1\n2", "3\n",
            { timeLimit: 1500 }
        )
    ).addTest(
        new Test("basic 2","10001\n2", "10003\n",
            { timeLimit: 1500 }
        )
    ).addTest(
        new Test("overflow", "30120391203910239019\n2", "?\n",
            { timeLimit: 1500 }
        )
    )
);

gs.evaluate("assignment1", `
using System;
using System.Collections.Generic;

namespace Program
{
    class Program
    {
        static void Main()
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());

            Console.WriteLine(a + b);
        }
    }
}`).then(result => {
    console.log(result);
});
```
The output for this code snippet would then look like this:
```
 Result {
  tests: [
    TestResult { status: 'TIME_LIMIT', test: [Test], timeTaken: 7137 },
    TestResult { status: 'SKIPPED', test: [Test], timeTaken: -1 },
    TestResult { status: 'SKIPPED', test: [Test], timeTaken: -1 }
  ]
}
```

## Development

Set up the environment with two consoles:

```
npm run watch-compile
```

and:

```
$env:NODE_ENV="dev"
npm run start
```