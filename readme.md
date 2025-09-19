# npm-workspace
- A repo to experiment with npm workspaces, TypeScript builds, and module systems.

## What This Repo Covers
- Setting up multiple packages in a single repo.
- Using commonjs and esm modules and seeing how they work together.
- Configuring tsconfig.json with composite, references, and different module targets.
- Playing with dual builds (CJS + ESM).
- Understanding how Node resolves imports/exports in real projects.

## Structure
```perl
npm-workspace-setup/
├─ package-a/   # Example package 1
└─ package-c/   # Example package 2 
 ```
 
## Usage
```bash
# install deps for all packages
npm install

# build all packages
npm run build

# run package-a
npm run start --workspace=package-a
```

to run a specific package:
```bash
cd package-a
tsc -p tsconfig.json -w
```
### tip: wathc the chagnes in build files on changing the tsconfig.json
### it explains which attributes are effecting which part of the build

# References
[ChatGPT Discussion (Deep Dive into Setup)](https://chatgpt.com/share/68ccae85-ae28-800b-a9ec-085102a680e5)