---
course: COMS30121
description: Program to split images into segments
layout: bare
languages: [C++]
title: Image Segmentation
---

## Objectives

1. Read in a set of images / photos.
1. Interpret training data provided with each image.
1. Produce images with segmented labels.


## Approach Taken

* When implementing this segmentation system the method chosen to best extract meaning from a subsection, was to calculate a single Gaussian function that best represented the luminance levels.
* The classification of segments over the images was based both on Gaussian properties of each segment and the pixel location within the photo.
* The two classification techniques, previously mentioned, were be combined using Bayesian inference, so the likelihood of a segment label can be determined.


## Learning Outcomes

From this project, I had got a general overview of how image processing can be carried out.

