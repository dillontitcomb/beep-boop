# _Dillon's Beep Boop Machine_

#### JavaScript & JQuery Exercise for Epicodus, 01.19.2018

#### By _**Dillon Titcomb**_

## Description

_This web page takes a number input from a user and displays an array of all of the integers counting to that number from zero with some modifications. For instance, numbers with ones and zeroes in them will show as "Boop!" and "Beep!" respectively, whereas numbers divisible by three will return "I'm sorry Dave. I'm afraid I can't do that.". The webpage also takes name and favorite number inputs that affect values in the array._

## Specifications

* _Program replaces any numbers containing zeroes with "Beep!"_
	* _Example input: 0_
	* _Example output: "Beep!"_
* _Program replaces any numbers containing ones with "Boop!"_
	* _Example input: 1_
	* _Example output: "Boop!"_
* _Program replaces any numbers divisible by three with "I'm sorry (name). I'm afraid I can't do that."_
	* _Example input: 6_
	* _Example output: "I'm sorry (name). I'm afraid I can't do that."_
* _Program displays user's name when returning divisible by three text._
	* _Example input: John_
	* _Example output: "I'm sorry John. I'm afraid I can't do that."_
* _Program displays user's favorite number when it appears in the array._
	* _Example input: 4_
	* _Example output: "Beep!, Boop!, I'm sorry (name), I'm afraid I can't do that., 4 is (name)'s favorite number!"_
* _Program provides a help error if the number input is blank, 0, or negative._
	* _Example input: (blank)_
	* _Example output: (alert: Please input a positive integer.)_
	* _Example input: 0_
	* _Example output: (alert: Please input a positive integer.)_
	* _Example input: -15_
	* _Example output: (alert: Please input a positive integer.)_
* _Program does not return "I'm sorry Dave..." for the input 0, despite it being divisible by three._
	* _Example input: 0 % 3_
	* _Example output: 0_
	* _Solution: output array is created with a '0' value and counts from one._
* _Program reverses the array when a button in the results section is clicked._
	* _Example input: Reverse_
	* _Example output: "Boop!, Beep!" --> "Beep! Boop!"_

## Setup/Installation Requirements

* _Clone this repository_
* _On a Mac, run the following command:_
* _open index.html_
* _input a number to count to_

## Known Bugs

_No known bugs._

## Support and contact details

_Please contact me at dillontitcomb@gmail.com with inquiries._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap CSS stylesheet_
* _JavaScript_
* _JQuery 3.2.1_

## Link to page

https://github.com/dillontitcomb/beep-boop

### License

*The software is licensed under the MIT license.*

Copyright (c) 2018 **_Dillon Titcomb_**
