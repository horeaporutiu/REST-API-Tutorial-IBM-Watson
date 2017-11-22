# REST API Tutorial - IBM Watson

This repo contains the code to use Watson Language Translation API and Watson Tone Analyzer API. Please refer to <a href="https://www.youtube.com/watch?v=BkVy1hDCcpo&list=PLVztKpIRxvQXdcUdfC1G9YDXGgyTTpSyZ">youtube tutorials</a> for full explanation of the code to use Watson APIs.

## Simple to use 
Before you get started, you'll need a couple things. 
1) <a href="https://ibm.biz/BdjLxy">Free IBM Cloud Account</a>, to create Watson Service Credentials (Username and Passwords used to authenticate your API call)

2) <a href="https://www.npmjs.com/get-npm">NPM</a> (Node package Manager) 

3) Login to IBM Cloud Dashboard

## Instant Access to Watson
1) Create your credentials for the service you want to use (Language Translator and Tone Analyzer for this tutorial).

![1H1HXM](https://i.makeagif.com/media/11-22-2017/1H1HXM.gif)

2) Add your credentials by modifiying the 'Username and Password' variables at the top of either translate.js or tones.js
based on which API you want to use.

## Get the output
To see the output for the language translator API, add the credentials and run:
``
node translate.js
``

To see the output for the language translator API, add the credentials and run:
``
node tones.js
``

## Debugging
If you get an error such as 'Error: Cannot find module 'request' simply run: 
``
npm install request
``
<br>
If you get an error such as 'Error: Cannot find module 'http' simply run: 
``
npm install http
``
