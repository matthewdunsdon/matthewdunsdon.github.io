---
layout: bare
title: Added Feature to Fluent Migrator
description: Migration scripts for Sql Server support creating constraints with 'non-clustered' / 'non-clustered' support.
project: fluentmigrator
github: { pullrequest: "https://github.com/schambers/fluentmigrator/pull/301", caption: "Pull Request 301: Adds Constraint Clustering Support For SqlServer" }
languages: [C#, SQL Server]
tags: [Feature, Unit Tests]
---

## Motivation

When investigating whether Fluent Migrator was a suitable tool for performing migrations, I identified that it did not support creating constraints that were explicitly clustered on non-clustered.

## Background

When a constraint is created on a table in Microsoft SQL Server an index is created on the data. Whether this index is clustered or non-clustered is determined from the rules below (taken from [Microsoft TechNet documentation](http://technet.microsoft.com/en-us/library/ms189280%28v=sql.105%29.aspx)):

* _When you create a PRIMARY KEY constraint, a unique clustered index on the column or columns is automatically created if a clustered index on the table does not already exist and you do not specify a unique nonclustered index. The primary key column cannot allow NULL values._

* _When you create a UNIQUE constraint, a unique nonclustered index is created to enforce a UNIQUE constraint by default. You can specify a unique clustered index if a clustered index on the table does not already exist. For more information, see PRIMARY KEY Constraints and UNIQUE Constraints._

This presented a problem for me, as I was dealing with a database where there were tables with non-clustered primary keys and clustered unique constraints. What I wanted to write was:

{% highlight csharp %}
Create.PrimaryKey("PK")
    .OnTable("TestTable")
    .Column("Id").NonClustered();

Create.UniqueConstraint("UQ")
    .OnTable("TestTable")
    .Column("Name").Clustered();
{% endhighlight %}

## Implementation

To implement this, I followed the existing pattern in the code base for addngi SQL Server specific extensions. This involved:

* Adding empty interface and get the existing `Column` functions (shown in the example above) to return this interface.
* Implementing extension methods for the new interface, that were written within the `SqlServerExtensions` class.
* Updating the SQL generator code to include the `clustered` and `nonclustered` keywords in the output strings that it creates.
* Creating an `AddAdditionalFeature` function to the constraint definition class to store whether `Clustered` and `NonClustered` had been called in a migration script.

To verify my implementation, tests were added:

* Tests covering the existing behaviour for creating primary key / unique constraints over one or more columns.
* Tests covering the `Clustered` and `NonClustered` functions, to check that data stored in the constraint definition class is correctly updated.
* Tests covering the SQL strings generated for clustered and non-clustered constraints (primary keys and unique constraints).

## Evaluation

Pull request went through without any significant issues.  I expect this was due to the inclusion of tests and that the code changes made appeared to follow existing architectural patterns in the project.

