/*  
SPDX-FileCopyrightText: 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0 
*/

var AWS = require('aws-sdk');
var comprehend = new AWS.Comprehend({apiVersion: '2017-11-27'});        

exports.handler = async(event, context) => {

    const subject = event;
    var params =    {  LanguageCode: 'en', /* required */
                        Text: event.message /* required */
    }
    try {
        var data = await comprehend.detectSentiment(params).promise();
    }
    catch (err) {
        console.log(err);
        return err;
    }
    console.log(data)
    return data;
};