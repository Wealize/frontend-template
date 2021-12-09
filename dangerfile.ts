import jiraIssue from "danger-plugin-jira-issue";
import { danger, warn } from "danger";

jiraIssue({
  key: "SSG21036",
  url: "https://wealize.atlassian.net/browse",
  emoji: ":paperclip:",
  location: "title",
});

if (danger.github.pr.body.length < 40) {
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
