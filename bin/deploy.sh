#!/bin/bash
set -euxo pipefail

function deploy_administrator() {
    aws lambda update-function-code --function-name administrator_"$STAGE" --s3-bucket quanteverest --s3-key lambda/administrator-"$STAGE".zip
}

function deploy_afterMarketReports() {
    aws lambda update-function-code --function-name afterMarketReports_"$STAGE" --s3-bucket quanteverest --s3-key lambda/afterMarketReports-"$STAGE".zip
}

function deploy_afterMarketReportsData() {
    aws lambda update-function-code --function-name afterMarketReportsData_"$STAGE" --s3-bucket quanteverest --s3-key lambda/afterMarketReportsData-"$STAGE".zip
}

function deploy_asxData() {
    aws lambda update-function-code --function-name asxData_"$STAGE" --s3-bucket quanteverest --s3-key lambda/asxData-"$STAGE".zip
}

function deploy_dynamo() {
    aws lambda update-function-code --function-name dynamo_"$STAGE" --s3-bucket quanteverest --s3-key lambda/dynamo-"$STAGE".zip
}

function deploy_manageS3Objects() {
    aws lambda update-function-code --function-name manageS3Objects_"$STAGE" --s3-bucket quanteverest --s3-key lambda/manageS3Objects-"$STAGE".zip
}

function deploy_alerts() {
    aws lambda update-function-code --function-name alerts_"$STAGE" --s3-bucket quanteverest --s3-key lambda/alerts-"$STAGE".zip
}

function deploy_optionsData() {
    aws lambda update-function-code --function-name optionsData_"$STAGE" --s3-bucket quanteverest --s3-key lambda/optionsData-"$STAGE".zip
}

function deploy_sendEmails(){
    aws lambda update-function-code --function-name sendEmails_"$STAGE" --s3-bucket quanteverest --s3-key lambda/sendEmails-"$STAGE".zip
}

function deploy_weeklyReports() {
    aws lambda update-function-code --function-name weeklyReports_"$STAGE" --s3-bucket quanteverest --s3-key lambda/weeklyReports-"$STAGE".zip
}

function deploy_weeklyReportsData() {
    aws lambda update-function-code --function-name weeklyReportsData_"$STAGE" --s3-bucket quanteverest --s3-key lambda/weeklyReportsData-"$STAGE".zip
}

function updateCloudformationStack() {
    cd cloudformation
    aws s3 sync . s3://quanteverest/cloudformation
    aws cloudformation update-stack --stack-name quanteverest-"$STAGE" \
    --template-url 'https://quanteverest.s3-ap-southeast-2.amazonaws.com/cloudformation/main.yml' --parameters ParameterKey=STAGE,ParameterValue="$STAGE"
}

function main() {
    deploy_administrator
    deploy_asxData
    deploy_afterMarketReports
    deploy_afterMarketReportsData
    deploy_dynamo
    deploy_manageS3Objects
    deploy_alerts
    deploy_optionsData
    deploy_sendEmails
    deploy_weeklyReports
    deploy_weeklyReportsData
    updateCloudformationStack
}

main