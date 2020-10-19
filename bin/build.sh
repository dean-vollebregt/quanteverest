#!/bin/bash
set -euxo pipefail

function build_administrator() {
    cd lambda/administrator
    npm install --production
    zip -r ../administrator-"$STAGE".zip *
    npm install
    cd ..
    aws s3 sync . s3://quanteverest/lambda --acl private --exclude "*" --include "administrator-$STAGE.zip"
    rm -rf administrator-"$STAGE".zip
}

function build_afterMarketReports() {
    cd afterMarketReports
    npm install --production
    zip -r ../afterMarketReports-"$STAGE".zip  *
    npm install
    cd ..
    aws s3 sync . s3://quanteverest/lambda --acl private --exclude "*" --include "afterMarketReports-$STAGE.zip"
    rm -rf afterMarketReports-"$STAGE".zip
}

function build_afterMarketReportsData() {
    cd afterMarketReportsData
    npm install --production
    zip -r ../afterMarketReportsData-"$STAGE".zip  *
    npm install
    cd ..
    aws s3 sync . s3://quanteverest/lambda --acl private --exclude "*" --include "afterMarketReportsData-$STAGE.zip"
    rm -rf afterMarketReportsData-"$STAGE".zip
}

function build_alerts() {
    cd alerts
    npm install --production
    zip -r ../alerts-"$STAGE".zip  *
    npm install
    cd ..
    aws s3 sync . s3://quanteverest/lambda --acl private --exclude "*" --include "alerts-$STAGE.zip"
    rm -rf alerts-"$STAGE".zip
}

function build_asxData() {
    cd asxData
    npm install --production
    zip -r ../asxData-"$STAGE".zip *
    npm install
    cd ..
    aws s3 sync . s3://quanteverest/lambda --acl private --exclude "*" --include "asxData-$STAGE.zip"
    rm -rf asxData-"$STAGE".zip
}

function build_dynamo() {
    cd dynamo
    npm install --production
    zip -r ../dynamo-"$STAGE".zip  *
    npm install
    cd ..
    aws s3 sync . s3://quanteverest/lambda --acl private --exclude "*" --include "dynamo-$STAGE.zip"
    rm -rf dynamo-"$STAGE".zip
}

function build_manageS3Objects() {
    cd manageS3Objects
    npm install --production
    zip -r ../manageS3Objects-"$STAGE".zip  *
    npm install
    cd ..
    aws s3 sync . s3://quanteverest/lambda --acl private --exclude "*" --include "manageS3Objects-$STAGE.zip"
    rm -rf manageS3Objects-"$STAGE".zip
}

function build_optionsData() {
    cd optionsData
    npm install --production
    zip -r ../optionsData-"$STAGE".zip  *
    npm install
    cd ..
    aws s3 sync . s3://quanteverest/lambda --acl private --exclude "*" --include "optionsData-$STAGE.zip"
    rm -rf optionsData-"$STAGE".zip
}

function build_sendEmails(){
    cd sendEmails
    npm install --production
    zip -r ../sendEmails-"$STAGE".zip  *
    npm install
    cd ..
    aws s3 sync . s3://quanteverest/lambda --acl private --exclude "*" --include "sendEmails-$STAGE.zip"
    rm -rf sendEmails-"$STAGE".zip
}

function build_weeklyReports(){
    cd weeklyReports
    npm install --production
    zip -r ../weeklyReports-"$STAGE".zip  *
    npm install
    cd ..
    aws s3 sync . s3://quanteverest/lambda --acl private --exclude "*" --include "weeklyReports-$STAGE.zip"
    rm -rf weeklyReports-"$STAGE".zip
}

function build_weeklyReportsData(){
    cd weeklyReportsData
    npm install --production
    zip -r ../weeklyReportsData-"$STAGE".zip  *
    npm install
    cd ..
    aws s3 sync . s3://quanteverest/lambda --acl private --exclude "*" --include "weeklyReportsData-$STAGE.zip"
    rm -rf weeklyReportsData-"$STAGE".zip
}

function main(){
    build_administrator
    build_afterMarketReports
    build_afterMarketReportsData
    build_alerts
    build_asxData
    build_dynamo
    build_manageS3Objects
    build_optionsData
    build_sendEmails
    build_weeklyReports
    build_weeklyReportsData
}

main