---
course: COMSM0111
description: An Automated Task Recognition System.
layout: bare
languages: [Java]
title: "Final Year Project: RelevantEase"
---

## Introduction

RelevantEase was a system that allowed the applications that are used by the user to be automatically grouped together and suggested those applications that it considered are relevant to the user’s current actions. 


## Motivation

This project looked at how document clustering algorithms could be used alongside sensor data to provide an automated task recognition system, to improve the accuracy for inferring the activities of users.  

Sensor based data could be numerical, which was not compatible with many document clustering algorithms.  As a result of this, this project aimed to discover a inference algorithm that could accomplish this.

## Background

There were issues with the existing information interfaces:

<dl>

  <dt>Document and Windows Managers</dt>
  <dd>Were needed as computer screens were often too small to allow the user to have every window visible at the same time.</dd>
  <dd class="issues">The main limitation was that they did not provide a suitable abstraction to users - who work on "activities" and "tasks".</dd>

  <dt>Document Management Systems</dt>
  <dd>Provide mechanisms to allow document attributes to automate the categorisation of tasks.</dd>
  <dd class="issues">Those systems require their users to transform their needs into attribute queries and those query struggled to match real-world behaviour patterns.
</dd>

  <dt>Automated Task Recognition</dt>
  <dd>Use an inference engine to identify the task of the user and suggest suitable applications or files.</dd>
  <dd class="issues">They could produce inappropriate results, as they tended to depend on a single source of data (i.e. proximity or time of day).</dd>

  <dt>Task Management Systems</dt>
  <dd>Provide the framework where the user can define and manage their own tasks and group them into activities.</dd>
  <dd class="issues">The negative effects of these systems were that they required an additional cognitive load on the user - for organising activities.</dd>

</dl>


## Implementation

My system was written in Java and was capable of reading the running applications as well a providing a window that recommended applications for the user.  This system supported the Microsoft Windows and Android platforms.

To perform the analysis of the data collected, each time slice was to describe the applications open in a 5 second slice.  Each slice had the TF IDF (Term Frequency Inverse Document Frequency) weighting method applied to it.

By treating each time slice as a document, the NMF (Non-negative Matrix Factorisation) document clustering algorithm was used to group together similar time-slices.

To handle the numerical data from sensors, a normal distribution was calculated for each group.  By evaluating the current open applications and sensor data, it was able to find the most appropriate group


## Main Contributions and Achievements

The main contributions and achievements to this project were:

1. The research and implementation the Windows and Android data collection mechanism, where 90 hours was spent on the research and development of C++ code for Windows and learning the Java Native Framework.
1. Implemented a Matlab version of the whole data clustering component. This Matlab code was used to provide easy testing of the data clustering functionality.
1. Created new set of post-processing techniques that could be used after non-negative matrix factorisation. This included algorithms to handle the NMF when the number of groups is unknown and the use normal distributions to handle signal based attributes.
