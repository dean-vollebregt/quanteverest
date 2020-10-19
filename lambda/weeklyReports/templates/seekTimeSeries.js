const dynamoService = require('../services/dynamoService.js');

let seekTimeSeriesTemplate =
{
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "A basic line chart example.",
    "width": 500,
    "height": 150,
    "padding": 0,

    "signals": [
      {
        "name": "interpolate",
        "value": "linear",
        "bind": {
            "input": "select",
            "options": [
                "basis",
                "cardinal",
                "catmull-rom",
                "linear",
                "monotone",
                "natural",
                "step",
                "step-after",
                "step-before"
            ]
        }
      }
    ],

    "data": [
      {
        "name": "table",
        "values": []
      }
    ],

    "scales": [
      {
        "name": "x",
        "type": "point",
        "range": "width",
        "domain": {"data": "table", "field": "x"}
      },
      {
        "name": "y",
        "type": "linear",
        "range": "height",
        "nice": true,
        "zero": true,
        "domain": {"data": "table", "field": "y"}
      },
      {
        "name": "color",
        "type": "ordinal",
        "range": "category",
        "domain": {"data": "table", "field": "c"}
      }
    ],

    "axes": [
        { "scale": "x", "title": "Week"  , "orient": "bottom"},
        { "scale": "y", "title": "Jobs", "orient": "left"}
    ],

    "marks": [
      {
        "type": "group",
        "from": {
            "facet": {
                "name": "series",
                "data": "table",
                "groupby": "c"
            }
        },
        "marks": [
            {
                "type": "line",
                "from": {"data": "series"},
                "encode": {
                    "enter": {
                        "x": {"scale": "x", "field": "x"},
                        "y": {"scale": "y", "field": "y"},
                        "stroke": {"scale": "color", "field": "c"},
                        "strokeWidth": {"value": 1}
                    },
                    "update": {
                        "interpolate": {"signal": "interpolate"},
                        "strokeOpacity": {"value": 1}
                    },
                    "hover": {
                        "strokeOpacity": {"value": 0.5}
                    }
                }
            }
        ]
      }
    ]
}

async function prepareSeekTemplate() {

    let seekData = await dynamoService.getSeekData();

    let weeklyJobsCount = seekData.Item.weeklyJobsCount.L.slice(-12);

    let array = [];

    weeklyJobsCount.forEach(function(item){

        let date = item.M.date.S;
        date = date.substring(0, date.lastIndexOf("/")).replace(/0/g, '');

        array.push({
            "x": date,
            "y": item.M.jobs.N
        })

    })

    seekTimeSeriesTemplate.data[0].values = array;

    return seekTimeSeriesTemplate
}

module.exports = {
    prepareSeekTemplate
};