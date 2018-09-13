Welcome to the devtools codebase. We are so excited to have you. With your help, we can build together and better serve our community.

## What is devtools?

`devtools` is a platform where software developers write articles, take part in discussions, and build their professional profiles. We value supportive and constructive dialogue in the pursuit of great code and career growth for all members. The ecosystem spans from beginner to advanced developers, and all are welcome to find their place within our community. ❤️

## Table of Contents

* [Contributing](#contributing)
  * [Where to contribute](#where-to-contribute)
  * [How to contribute](#how-to-contribute)
  * [Contribution guideline](#contribution-guideline)
    * [Clean code with tests](#clean-code-with-tests)
    * [Create a pull request](#create-a-pull-request)
    * [Create an issue](#create-an-issue)
  * [How to get help](#how-to-get-help)
  * [The bottom line](#the-bottom-line)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Starting the application](#starting-the-application)
  * [Suggested Workflow](#suggested-workflow)
* [Additional docs](#additional-docs)
* [Product Roadmap](#product-roadmap)
* [Core Team Members](#core-team)
* [License](#license)

## Contributing

We expect contributors to abide by our underlying [code of conduct](https://dev.to/code-of-conduct). All conversations and discussions on GitHub (issues, pull requests) and across dev.to must be respectful and harassment-free.

### Where to contribute

When in doubt, ask a [core team member](#core-team)! You can mention us in any issues or ask on the [DEV Contributor thread](https://dev.to/devteam/devto-open-source-helpdiscussion-thread-v0-1l45). Any issue with `good first issue` tag is typically a good place to start.

**Refactoring** code, e.g. improving the code without modifying the behavior is an area that can probably be done based on intuition and may not require much communication to be merged.

**Fixing bugs** may also not require a lot of communication, but the more the better. Please surround bug fixes with ample tests. Bugs are magnets for other bugs. Write tests near bugs!

**Building features** is the area which will require the most communication and/or negotiation. Every feature is subjective and open for debate. The [product roadmap](https://github.com/thepracticaldev/dev.to/projects) should be a good guide to follow. As always, when in doubt, ask!

### How to contribute

1.  Fork the project & clone locally. Follow the initial setup [here](#getting-started).
2.  Create a branch, naming it either a feature or bug: `git checkout -b feature/that-new-feature` or `bug/fixing-that-bug`
3.  Code and commit your changes. Bonus points if you write a [good commit message](https://chris.beams.io/posts/git-commit/): `git commit -m 'Add some feature'`
4.  Push to the branch: `git push origin feature/that-new-feature`
5.  [Create a pull request](#create-a-pull-request) for your branch 🎉

## Contribution guideline

### Create an issue

Nobody's perfect. Something doesn't work? or could be done better? Let us know by creating an issue.

PS: a clear and detailed issue gets lots of love, all you have to do is follow the issue template!

#### Clean code with tests

Some existing code may be poorly written or untested, so we must have more scrutiny going forward. We test with [rspec](http://rspec.info/), let us know if you have any questions about this!

#### Create a pull request

* Try to keep the pull requests small; a pull request should try its very best to address only a single concern.
* Make sure all tests pass and add additional tests for the code you submit. [More info here](https://docs.dev.to/testing/)
* Document your reasoning behind the changes. Explain why you wrote the code in the way you did; the code should explain what it does.
* If there's an existing issue related to the pull request, reference to it by adding something like `References/Closes/Fixes/Resolves #305`, where 305 is the issue number. [More info here](https://github.com/blog/1506-closing-issues-via-pull-requests)
* If you follow the pull request template, you can't go wrong.

_Please note: all commits in a pull request will be squashed when merged, but when your PR is approved and passes our CI, it will be live on production!_

### How to get help

Whether you are stuck with feature implementation, first-time setup, or you just want to tell us something could be done better, check out our [OSS thread](https://dev.to/devteam/devto-open-source-helpdiscussion-thread-v0-1l45) or create an issue. You can also mention any [core team member](#core-team) in an issue and we'll respond as soon as possible.

### 👉 [OSS Help/Discussion Thread](https://dev.to/devteam/devto-open-source-helpdiscussion-thread-v0-1l45) 👈

### The bottom line

We are all humans trying to work together to improve the community. Always be kind and appreciate the need for tradeoffs. ❤️

## Getting Started

This section provides a high-level requirement & quick start guide. For detailed installations, please check out our [docs](http://docs.dev.to/installation).

### Prerequisites


### Installation


## Additional docs

[Check out our dedicated docs page for more technical documentation.](https://docs.dev.to)

## Product Roadmap

Our new product roadmap can be found [here](https://github.com/thepracticaldev/dev.to/projects/1). Many notes need to be converted to issues but this should provide an overview of features we plan to work on, as well as features we are considering.

Core team members will move issues along the project board as they progress.

* Ideas & Requests: features up for discussion.
* Needs Owners: features in need of an owner.
* Committed: features we're committed to building -- free for contributors to work on, but please communicate with the owner beforehand.
* In Progress (early stage): work has begun on feature.
* In Progress (late stage): feature is near completion.

## Core team


## License

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. Please see the [LICENSE](./LICENSE.md) file in our repository for the full text.

Like many open source projects, we require that contributors provide us with a Contributor License Agreement (CLA). By submitting code to the DEV project, you are granting us a right to use that code under the terms of the CLA.

Our version of the CLA was adapted from the Microsoft Contributor License Agreement, which they generously made available to the public domain under Creative Commons CC0 1.0 Universal.

Any questions, please refer to our [license FAQ](http://docs.dev.to/license-faq/) doc or email yo@dev.to

<br/>

<p align="center">
  <strong>Happy Coding</strong> ❤️
</p>