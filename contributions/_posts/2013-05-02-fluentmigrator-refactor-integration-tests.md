---
layout: bare
title: Refactored Intergration Tests in Fluent Migrator
description: Improved test coverage and maintainablity for subset of integration tests.
project: fluentmigrator
github: { pullrequest: "https://github.com/schambers/fluentmigrator/pull/406", caption: "Pull Request 406: Refactor Processor Integration Tests" }
languages: [C#, SQL Server]
tags: [Firebird, Integration Tests, Oracle, Postgres, SQL Server]
---

## Motivation

A subset of the existing integration tests in the project shared a common set of test cases, though not every supported database had the same test coverage.  My hope was to cleanup and refactor the code in order to help the community add new tests and keep a high level test coverage as new SQL databases or functionality is supported.


## Background

As I looked into the test coverage of the project, I came across a subset of the tests which had "patchy" test coverage across the different database implementations.  These tests seemed to be a good candidate for the introduction of test "abstract" classes.  For this work I had chosen to limit the scope to cover the following databases:

* Firebird
* Oracle
* Postgres
* SqlServer
* SqlServerCe

The reason Jet, MySql and SQLite tests were not included in the scope was that they had so few integration tests associated with them that it was not worth the effort.


## Implementation

The approach I took was:

1. Create test "abstract" classes to cover the most common share tests across databases.
1. Move processor tests into individual folders.
1. Refactor existing test code.
1. Add extra tests where necessary.

## Evaluation

* As part of this work, I was able to fix a bug in the Oracle SQL generation mechanism.
* In the work, I ended up carrying out a large number of rebases that split and squash commits. Whilst I expect that the behaviour increased the time I spend doing the work, I believe that this enabled me to provide a clearer set of code changes.
