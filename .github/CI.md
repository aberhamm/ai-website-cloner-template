# CI

The `CI` workflow runs dependency installation, ESLint, TypeScript and the production build on pushes to `master` and pull requests targeting `master`.

A manual run is also available in Actions → CI → Run workflow, or with:

```sh
gh workflow run ci.yml --ref master
```

## Fork activation

GitHub Actions must be enabled for the fork as well as for the workflow. If pushes produce no runs, check both levels rather than changing a valid branch filter:

```sh
gh api repos/{owner}/{repo}/actions/permissions
gh workflow list --all
gh run list --branch master
```

An administrator can explicitly activate the workflow and repository Actions:

```sh
gh workflow enable ci.yml
gh api repos/{owner}/{repo}/actions/permissions --method PUT -F enabled=true
```

Then verify a fresh push creates a run whose event is `push`. A successful manual run proves the job can execute, but does not verify the automatic push trigger.

On October 28, 2026, the repository reported Actions enabled and CI active despite having no run history. Explicit activation and a manual run were used to re-establish execution; a subsequent documentation push verifies automatic delivery. No clone code or build commands were changed.
