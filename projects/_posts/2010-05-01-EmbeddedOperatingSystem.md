---
course: COMS30201
description: Build a basic operating system to run on an ARM (ARM920T, ARM940T) processor.
layout: bare
languages: [ARM Assembly]
title: Embedded Operating System
---

## Objectives

* Implement a basic operating system (OS) with a simplistic OS kernel
* Develop handle mechanism for software interrupts to allow context switching between the user and system modes of the processor


## Approach Taken

As part of the course, this takes was already broken down into small steps.  The main implementation details to note are:

* The process control blocks were implemented using Round-Robin scheduling.  
* ARM's memory protection and virtual memory table features were made use of in my code for the OS.

## Learning Outcomes

* Understood some of the motivations for designing an operating system for a processor - i.e using hardware based memory security.
