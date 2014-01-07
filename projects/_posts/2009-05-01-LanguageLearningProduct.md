---
course: COMS20805
description: Produced system to enable language teachers to provide their students with educational games.
layout: bare
languages: [Java, PHP]
teammembers: [ "Matthew Dunsdon", "Jonathan Fung", "Stuart Knightley", "Stephen Beckett", "Tian Cui" ]
title: Language Teaching Product
---

## Objectives

* Be involved in the design, implementation and validation parts of the software development process.
* Implement a project to solve a problem where a framework or API needs to be introduced. 
* Develop software engineer skills as part of a team - including participation in meetings and project management processes.


## Approach Taken

To meet the objectives, firstly needed to decide on what product we wanted to develop.  Though existing connections, we established contact with a language teacher and found that they would like a solution that:
* Provide an initial set of language learning games.
* Allow students to be log-in to an application so that their progress in the games can be tracked.
* Allow teachers to log-in to see the how their students are performing.

We added an additional requirement for use to provide an API to enable developers to be able to write their own games.

The user account administration system was developed in PHP, using a REST interface.  By using Java for the student end of the system, we were able to use the existing support for XML and dynamic class loading to allow games to be added in dynamically.

## Learning Outcomes

From this work, I primarily developed my team working skills and came out with a better understanding of how having regular team meetings and setting milestones help in the development process.
