# Contributing

If you're reading this, you're awesome!

Here's how you can help:

## Development workflow

```sh
git clone git@github.com:nordnet/ui.git
cd ui
yarn install
yarn dev # This will start a local instance of the storybook
```

optionally you can pass the source directory of the component you are currently working on like so
```shell script
yarn dev Molecules/FlexTable # this will only load stories from the src/Molecules/FlexTable directory
```

## Contract-driven development

Todo

## Atomic design principles

Todo

## Storybook

We use [Storybook](https://github.com/storybooks/storybook) as a main development environment

## Commit messages

We use [semantic-release](https://github.com/semantic-release/semantic-release) with [conventional-changelog](https://github.com/conventional-changelog-archived-repos/conventional-changelog-angular/blob/master/convention.md).

**NOTE**: Use `yarn commit` to get help with writing commit messages that follow this convention.

## Code style

We enforce code style with [prettier](https://github.com/prettier/prettier). See package.json for details.
