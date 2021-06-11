
/*  
SPDX-FileCopyrightText: 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0 
*/

var AWS = require('aws-sdk');
const SES = new AWS.SES()

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': "Content-Type",
  "Access-Control-Allow-Methods": "OPTIONS,POST"
}

exports.handler = async(event, context) => {
    const formData = JSON.stringify(event.message,null,2)
        // Build params for SES
        const emailParams = {
          Source: process.env.ValidatedEmail, // SES SENDING EMAIL
          ReplyToAddresses: [process.env.ValidatedEmail],
          Destination: {
            ToAddresses: [process.env.ValidatedEmail], // SES RECEIVING EMAIL
          },
          Message: {
            Body: {
              Text: {
                Charset: 'UTF-8',
                Data: formData
              },
            },
            Subject: {
              Charset: 'UTF-8',
              Data: 'New Form submission'
            },
          },
        }
    try {
        var data = await SES.sendEmail(emailParams).promise()
    }
    catch (err) {
        console.log(err)
        return err
    }
    console.log(data)
    return {
          statusCode: 200,
          body: 'OK!',
          headers        
      }
}