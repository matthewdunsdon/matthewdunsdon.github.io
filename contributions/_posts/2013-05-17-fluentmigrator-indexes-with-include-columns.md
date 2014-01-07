---
layout: bare
title: Added Feature to Fluent Migrator
description: Migration scripts for Sql Server support creating indexes with "include" columns.
project: fluentmigrator
github: { pullrequest: "https://github.com/schambers/fluentmigrator/pull/409", caption: "Pull Request 409: Adds Support For Indexes With Include Columns using SqlServerExtensions" }
languages: [C#, SQL Server]
tags: [Feature, Unit Tests]
---

## Motivation

When using Fluent Migrator to write migration scripts, I wanted to be able to create indexes in SQL Server with include columns.


## Background

When indexes are created for SQL Server that require include columns, there was no method for doing this without writing raw SQL in the migration script. The intended outcome of this work was to allow indexes with include columns to be created in C# using the following syntax:

{% highlight csharp %}
Create.Index("IX").OnTable("TestTable")
    .OnColumn("Id").Ascending()
    .WithOptions().Include("Name");
{% endhighlight %}

This code should also support indexes with multiple include columns:

{% highlight csharp %}
Create.Index("IX").OnTable("TestTable")
    .OnColumn("Id").Ascending()
    .WithOptions()
    .Include("Name").Include("DOB");
{% endhighlight %}


## Implementation

To implement this, I did the following:

* Added extension function in SQL Server Specific Extensions file.
* Added tests covering the `Include` function, to check that 
index definition class was correctly recording the include columns information.
* Added tests to check the SQL strings generated when an index is added with include columns.


## Evaluation

After this was completed, I had an increased my level of confidence for writing unit tests using the NUnit test framework.
