# Contributing to the TAMS Lab Website

Submit updates to [ucla-tams-lab/lab-website](https://github.com/ucla-tams-lab/lab-website). Chen reviews changes before publication.

## Submit an update

1. Fork this repository to your GitHub account and create a branch for your changes. For a small text edit, you can also open the file on GitHub and use the pencil icon to propose a change.
2. Edit the relevant files listed in the [README](README.md). Follow the format of nearby entries and include any images needed by your update.
3. Open a pull request with **base repository `ucla-tams-lab/lab-website`** and **base branch `main`**. GitHub may select the original website repository by default, so check the destination.
4. Briefly explain what changed. Include a screenshot for visual changes and mention any links or pages you checked. Chen will review the pull request and coordinate publication.

Keep each pull request focused on one update. Publication metadata is shared with Chen's personal site; take care to preserve existing entries. Upload only material intended for the public website.

## Preview locally

With Docker running, run this command from the repository directory:

```sh
docker compose up -d
```

Open <http://localhost:8080/lab/> and check the affected pages. To stop the preview, run `docker compose down`.

## Publishing reviewed changes

After Chen reviews and merges a pull request into this repository's `main` branch, the original website repository checks for updates approximately every 10 minutes, merges them, and starts its deployment workflow. GitHub may delay scheduled runs. The live URL remains <https://chentangmark.github.io/lab/>.

No second pull request is needed. Chen can also run [Sync reviewed lab website updates](https://github.com/ChenTangMark/ChenTangMark.github.io/actions/workflows/sync-lab-website.yml) manually. If changes conflict with edits made in the original repository, synchronization stops without overwriting either side; Chen resolves the conflict and reruns it. Check the sync and deployment results before treating an update as published.

Keep this fork up to date with the original repository before starting new work. Inherited GitHub Actions are disabled in this collaboration repository; use the local preview to check changes.
