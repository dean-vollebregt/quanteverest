'use strict';

const seekWeeklyJobCount = require('./functions/seekData.js').seekWeeklyJobCount;
const dynamoService = require('./services/dynamoService.js');

exports.handler = async function() {
    try {
        const jobCount = await seekWeeklyJobCount();
        const updateJobCount = await dynamoService.updateWeeklyJobCount(jobCount);
    } catch(err){
        console.log(err);
    }
}