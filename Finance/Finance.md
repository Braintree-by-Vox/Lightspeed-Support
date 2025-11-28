# Finance Module Configuration

## Overview
The Finance Module Configuration sets up Business Central for processing of basic financial information, including General Ledger entries and cash entries.

- [Create Fiscal Years](#accounting-periods)
- [General Ledger Accounts](#general-ledger-accounts)
- [Dimensions](#dimensions)
- [Bank accounts](#bank-accounts)
- [Currencies and Exchange Rates](#currencies-and-exchange-rates)
- [Posting Groups and Setups](#posting-groups-and-setups)

Click on the 'Finance' button on the home page.

![alt text](image-1.png)

- Double check that the correct financial year end period has been selected. 
- Check and update the number of financial years you want to create.
  >Select at least 3 years.
- Check that the standard VAT rate is set correctly (this should have been configured from previous steps).
- Verify the number of bank accounts that you would like to create.

![alt text](image.png)

## Accounting Periods and Fiscal Years
Accounting periods, also known as reporting periods, are periods of time for which a company or organization reports financial performance by generating, for example, their income statement or balance sheet. Financial periods are grouped into Fiscal years, corresponding to the financial reporting year of the business.

Click on '▶️Run Setup' next to the step 'Setup GL and Accounting Periods'. This step will set up the basic general ledger parameters, and generate accounting periods for the number of financial years you requested. The system will create  the prior financial year, the current financial year, and one or more future years.

After the step has been completed, click on '✅REVIEW' for the steps 'Review GL Setup' and 'Review Accounting Periods' to verify the setups. The 'Complete' tick mark for all three steps should be ticked off.

>[How to work with financial periods](https://learn.microsoft.com/en-us/dynamics365/business-central/finance-accounting-periods-and-fiscal-years)

## General Ledger Accounts
General ledger acocunts are created to manage the business's financial administration. A standard chart of accounts is available to get started, or you can load your own chart of accounts.

### Option 1: Load the standard chart of accounts
Click on '▶️Run Setup' for the General Ledger Accounts step. From the dialog, click on 'Import JSON Example', then click on OK.

![alt text](image-2.png)

The sample chart of accounts will be loaded.

### Option 2: Load from Excel
A customer chart of accounts can be created from Excel. This is a multistep process:
- Export template to Excel
- Populate template in Excel
- Import populated Excel template.

#### Export template
Click on '▶️Run Setup' for the General Ledger Accounts step. From the dialog, click on 'Export Excel Template' then click on OK:

![alt text](image-3.png)

Open the downloaded template:

![alt text](image-4.png)

Complete the template as follows:

| Column            | Value                                     |
|No.                |Enter the general ledger account number    |
|Name               |Enter the description of the account       |
|Account Type       |Enter Begin-total, Posting, or End-Total   |
|Account Category   |                                           |
|Income / Balance   |Enter 'Income Statement' or 'Balance Sheet  |
|Account usage      |Accounts associated with subledgers (eg Debtors Control) should be categorised with one of the values in the sheet 'Lightspeed Key Acct Usage' |

## Dimensions

## Bank Accounts

## Currencies and Exchange Rates

## Posting Groups and Setups
