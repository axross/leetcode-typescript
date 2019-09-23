# LeetCode Solutions in TypeScript

- 🏃‍♀️ Enough small time and space complexity (not "minimum" because of no micro optimization)
- 💯 100% TypeScript
- ✅ Fully tested
- 🗣 With helpful comments

# Debugging on VSCode

Install [📦ts-node](https://github.com/TypeStrong/ts-node) with `--no-save` and create `launch.json` like the following:

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Run the current TypeScript file",
      "type": "node",
      "request": "launch",
      "protocol": "inspector",
      "cwd": "${workspaceRoot}",
      "args": ["${relativeFile}"],
      "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
      "sourceMaps": true
    }
  ]
}
```

Then run debug "Run the current TypeScript file".
