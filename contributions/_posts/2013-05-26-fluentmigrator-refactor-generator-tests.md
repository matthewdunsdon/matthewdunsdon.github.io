---
layout: bare
title: Refactored Unit Tests in Fluent Migrator
description: Improved test coverage and maintainability for subset of unit tests.
project: fluentmigrator
github: { pullrequest: "https://github.com/schambers/fluentmigrator/pull/416", caption: "Pull Request 416: Refactor generator tests" }
languages: [C#, SQL Server]
tags: [Feature, Unit Tests]
---

## Motivation

In the project a there is common set of interfaces for generating SQL across each supported database, yet the test coverage not consistent.


## Background

The code to generate SQL is database specific and each database only supports certain features of SQL (schemas, generators, foreign keys).  Whilst there were tests for each of the features in each database, the test coverage of each feature was low and not consistent across databases.

For this work, I decided it was acceptable to use current behaviour of the system to help me write the new (missing) tests. I had chosen this approach as it should prevent regressions in behaviour taking place.


## Implementation

The approach I took was:

* Cleaned up existing tests, so that they were categorised by database (folder) and "feature" (file).
* Created an "abstract" class per feature, which included the test cases that were not specific to one database.
* Added the missing tests for each feature test class.
* Ensured the each test class was extended from the correct "abstract" test class.


## Evaluation

There were a few side effects of this work:

1. It increased difficulty for others in the community to merge or rebase over the code changes, if they wanted to, as functions had been moved between files. I had tried to make this as painless as possible by separating my changes into several commits to make my changes are clear as possible.
1. A new folder was introduced to cover the use of the alternative Oracle quoter mechanism. I did this as I wanted make sure the tests to contain as few assertions as possible, since that makes it is easier to understand a test when it fails.
1. Duplicated functions exist for databases that do not support for custom schemas.  This is because I chose to aim for a simpler set of "abstract" classes, instead of reducing the total lines of code in the all the test classes.
