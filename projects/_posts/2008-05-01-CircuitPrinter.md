---
course: COMS11401
description: Program to convert circuit description file into PostScript file.
layout: bare
languages: [C]
title: Circuit Printer
---

## Objectives

* Read string logic statements (i.e. "a OR NOT b") and output a PostScript file (boolean gates and wires).
* Allow a rules file to be processed and to apply substitutions to inputted logic statements  (i.e. converting "a OR 0" to "a" with rule file "x OR 0 = x" ) .

## Approach Taken

1. Read string logic statements into a data structure.
1. Used logic rules (read from a file) to apply transformations to the data structure.
1. Traversed the data structure and outputted to PostScript file.


## Learning Outcomes

1. Understood how to write and compile code in the C language - including the use of header files ("*.h").
1. Learnt how to use a 'makefile' to simplify compiling code in C.
1. Gained experience in writing basic data structures in C. 
1. Identified some of the benefits of separating out code into separate files.
