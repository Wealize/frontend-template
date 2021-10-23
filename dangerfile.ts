import jiraIssue from "danger-plugin-jira-issue";
import { danger, warn } from "danger";
import { istanbulCoverage } from "danger-plugin-istanbul-coverage";

jiraIssue({
  key: "CQIO",
  url: "https://wealize.atlassian.net/browse",
  emoji: ":paperclip:",
  location: "title",
});

istanbulCoverage({
  customSuccessMessage: "Congrats, coverage is good",
  customFailureMessage: "Coverage is a little low, take a look",
  entrySortMethod: "least-coverage",
  numberOfEntries: 20,
  coveragePath: {
    path: "./coverage/coverage-summary.json",
    type: "json-summary",
  },
  reportFileSet: "all",
  reportMode: "warn",

  // Minimum coverage threshold percentages. Compared against the cumulative coverage of the reportFileSet.
  threshold: {
    statements: 100,
    branches: 100,
    functions: 100,
    lines: 100,
  },
});

if (danger.github.pr.body.length < 10) {
  warn("Please include a description of your PR changes.");
}

const hasChangelog = danger.git.modified_files.some(
  (f) => f === "CHANGELOG.md"
);
const description = danger.github.pr.body + danger.github.pr.title;
const isTrivial = description.includes("#trivial");

if (!hasChangelog && !isTrivial) {
  warn("Please add a changelog entry for your changes.");
}
