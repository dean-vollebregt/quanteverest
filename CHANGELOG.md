## [0.0.84] - Unreleased

### Added
-

## [0.0.83] - 19-10-2020

### Added
- Return options data in correct format

## [0.0.82] - 19-10-2020

### Added
- Source lambda optionsData from new site

## [0.0.81] - 14/10/2020

### Added
- Source lambda alerts price data from new site

## [0.0.80] - 13/10/2020

### Added
- Source afterMarketReports optionsData from new site

## [0.0.79] - 7/10/2020

### Added
- Move oilForecast to separate project

## [0.0.78] - 1/10/2020

### Added
- Start of oilForecast lambda function

## [0.0.77] - 29-09-2020

### Added
- Improve welcome message again

## [0.0.76] - 28-09-2020

### Added
- Use live SES tests on dev builds only

## [0.0.75] - 28-09-2020

### Added
- Update welcome message for new users

## [0.0.74] - 27-09-2020

### Added
- Make option code column wider in evening report

## [0.0.73] - 15-09-2020

### Added
- Combine all dynamo functions into one services file

## [0.0.72] - 15-09-2020

### Added
- Rename create web user test

## [0.0.71] - 13-09-2020

### Added
- Write unit tests for lambda administrator
- Combine all administrator dynamo functions into one services file

## [0.0.70] - 11-09-2020

### Added
- Write unit tests for Lambda dynamo

## [0.0.69] - 10-09-2020

### Added
- Write unit test for Lambda sendEmails

## [0.0.68] - 09-09-2020

### Removed
- Unused integration tests;

## [0.0.67] - 09-09-2020

### Added
- Write Unit tests for lambda optionsData

## [0.0.66] - 08-09-2020

### Added
- Write Unit tests for lambda weeklyReports

## [0.0.65] - 06-09-2020

### Added
- Write Unit tests for lambda weeklyReportsData

## [0.0.64] - 05-09-2020

### Added
- Write Unit tests for lambda alerts

## [0.0.63] - 05-09-2020

### Added
- Unit tests for lambda asxData

## [0.0.62] - 04-09-2020

### Added
- Write Unit tests for lambda manageS3Objects

## [0.0.61] - 04-09-2020

### Added
- Unit tests for lambda afterMarketReportsData

## [0.0.60] - 03-09-2020

### Added
- Group related tests in folders
- Write Unit Tests for After Market Reports

## [0.0.59] - 31-08-2020

### Added
- Align weekly report email text to right

## [0.0.58] - 28-08-2020

### Added
- Add logo to weekly report
- improve scaling on Seek data chart

## [0.0.57] - 26-08-2020

### Added
- Add logo to after market report
- change background picture in after market report email

## [0.0.56] - 26-08-2020

### Added
- Add environment variables to lambda through cloudformation

## [0.0.55] - 10-08-2020

### Added
- Retrieve and render afterMarketReports data

## [0.0.54] - 06-07-2020

### Added
- Save afterMarketReports data in S3

## [0.0.53] - 04-07-2020

### Added
- Separate function for XJO series

## [0.0.52] - 02-07-2020

### Added
- afterMarketsReportsData Lambda function

### Removed
- Unused node dev module
- Redundant AsxData cron job

## [0.0.51] - 01-07-2020

### Added
- Refactor optionsData for speed

## [0.0.50] - 29-06-2020

### Added
- Enable new cognito user through admin console

## [0.0.49] - 29-06-2020

### Added
- Use Cognito accessToken to identify admin user

### Removed
- Use of SSM to verify admin token

## [0.0.48] - 26-06-2020

### Added
- Rename daily report to after market report

## [0.0.47] - 24-06-2020

### Added
- Release weekly report at 9AM Mondays

## [0.0.46] - 24-06-2020

### Added
- Alerts to return up moves then down moves

## [0.0.45] - 21-06-2020

### Added
- Disable Cognito tokens prior to admin approval
- Grant Lambda disable/enable Cognito user permissions

## [0.0.44] - 18-06-2020

### Added
- Make alerts request data directly from ASX website

## [0.0.43] - 16-06-2020

### Added
- Use website for historical XJO data

## [0.0.42] - 14-06-2020

### Added
- WeeklyReport data as separate function
- Retrieve seek job count from db
- Use Sharp package for image processing

## [0.0.41] - 04-06-2019

### Added
- Store weekly job count from seek website
- PNG generation capability

## [0.0.40] - 26-05-2020

### Added
- Calculate option break even in price and percent

## [0.0.39] - 25-05-2020

### Added
- Ability to specify prod or dev database

## [0.0.38] - 24-05-2020

### Added
- WeeklyReport lambda function

## [0.0.37] - 22-05-2020

### Added
- Rename current_role to approved_role

## [0.0.36] - 21-05-2020

### Added
- Send daily report to all subscribed users
- Rename reports lambda function to dailyReport

## [0.0.35] - 18-05-2020

### Added
- Send sms alerts to subscribed users  
- Rename notifications lambda function to alerts

## [0.0.34] - 03-05-2020

### Added
- Admin token check on lambda administrator methods

## [0.0.33] - 27-04-2020

### Added
- Add DB entries for notifications on sign up
- Turn off notifications for dev branch

## [0.0.32] - 25-04-2020

### Added
- Render price changes low to high on daily report

## [0.0.31] - 24-04-2020

### Added
- Enable sorting by spread, volume, last

## [0.0.30] - 23-04-2020

### Added
- Enable sorting by spread, volume, last

## [0.0.29] - 15-03-2020

### Added
- Send confirmation emails upon user sign up 
- Move update user status functionality from client to server

## [0.0.28] - 10-03-2020

### Added
- Send confirmation emails upon user sign up 
- Move update user status functionality from client to server

## [0.0.27] - 29-02-2020

### Added
- Separate client side code into quanteverest-web

## [0.0.26] - 25-02-2020

## Added
- Store username in session storage

## [0.0.25] - 20-01-2020

### Removed
- Non Admin access to database

## [0.0.24] - 16-01-2020

### Added 
- Integration test for authentication functions

## [0.0.23] - 15-01-2020

### Added 
- Standardise aws-sdk as a dev dependency only across lambda functions

## [0.0.22] - 10-01-2020

### Added
- Make jest run unit or integration tests only
- S3 integration test for uploading and deleting

### Added
- Introduce JEST Javascript testing framework by React

## [0.0.21] - 01-10-2019

### Added
- Semaphore CI integration added to Bitbucket

### [0.0.20] - 19-09-2019

### Added
- Separate build test & deploy into separate executable bin scripts

## [0.0.19] - 17-09-2019

### Added
- Make cloudformation scripts produce both prod and dev stacks
- Use nodejs 10.16.3

## [0.0.18] - 11-09-2019

### Added
- Add promise handling to SSM service instead of callback

## [0.0.17]

### Added
- Send SMS for high signal movements

## [0.0.16] - 07-09-2019

### Added
- Tidy up daily report email use picture for background

## [0.0.15] - 01-09-2019

### Added
- Generate PDF report for daily movements

## [0.0.14] - 27-08-2019

### Added
- Register email test@quanteverest.com and use in SES

## [0.0.13] - 19-08-2019

### Added
-  Save daily share price on all 72 companies that trade options

## [0.0.12] - 15-08-2019

### Added
- Write deploy.sh DevOps script

## [0.0.11] - 11-08-2019

### Added
- Start of CHANGELOG