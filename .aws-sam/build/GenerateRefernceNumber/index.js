/*  
SPDX-FileCopyrightText: 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0 
*/

var AWS = require('aws-sdk');

exports.handler = async(event, context) => {
    let r = Math.random().toString(36).substring(7);
    return r;
};