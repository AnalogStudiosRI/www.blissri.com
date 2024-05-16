# Contributing

## Local Development

To develop for the project, please follow the steps in the _README.md_ for getting your system setup for running the various commands available.

## Documentation

Please run the project's Storybook (`npm run story:dev`) and review the various **Overview** sections, in particular the _Styleguide_ and _Tech Stack_.

## Pull Requests

> [!IMPORTANT]  
> _As of now, GitHub has no way [to set the default repo when opening PRs against a forked repo](https://github.com/orgs/community/discussions/11729), so make sure you pick the **www.blissri.com** repo, and not the **www.blissfestri.com** repo / upstream._

Pull requests are the best!  To best help facilitate contributions to the project, here are some guidelines we would like to follow:

- We generally prefer an issue be opened first to help promote discussion outside of the code review process to help align on, or ask questions about, any expectations.
- However, for typos in docs and minor "chore" like tasks a PR is usually sufficient.  When in doubt, open an issue.
- Keep PRs limited to one issue / bug.  It is OK to have more, but smaller PRs.
- For (new) components, please make sure to take advantage of Storybook for isolated development first.
- For bugs, please include screenshots and steps to reproduce.
- For branching, we generally follow the convention `<issue-label>/issue-<number>-<issue-title>`, e.g. _bug/issue-12-fixed-bug-with-xxx_