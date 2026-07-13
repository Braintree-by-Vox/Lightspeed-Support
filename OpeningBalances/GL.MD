---
layout: default
title: Braintree Landed Cost 
description: Support and documentation for Braintree's Implementation acceleration for Microsoft Dynamics 365 Business Central
---

# General Opening Balances
General ledger balances should be taken on as at the chosen opening balance date. A balance must be provided for each unique combination of general ledger account number and dimension values.

From the Opening Balances Configuration page, click on '▶️Run Setup' for the task 'Take on GL opening balances:

![alt text](image-3.png)

The TAKEON batch will open. A default batch has been created during installation. You may choose to create more batches if required.

![alt text](image-5.png)

The process is as follows:
- Create Take-on Excel Sheet, to create a template
- Populate the template
- Import the batch
- Review errors
- Edit journal and post.

**Create Take-on sheet**
Click on 'Create Take-on Excel Sheet'. From the dialog, select 'General Ledger':

![alt text](image-4.png)

When the sheet has downloaded, open it and load your data as follows:

| Column                | Content |
| Account No.           | The General Ledger account number |
| Posting Date          | The take-on date |
| Document Type         | Can be left blank for GL |
| Document No.          | Use a generic document number, such as 'TAKE-ON' |
| Description           | Use a generic description |
| Amount                | The opening balance for the account |
| Currency Code         | not applicable|
| Amount (LCY)          | not applicable |
| External Document No.  | not applicable |
| Document Date  | not applicable |
| Due Date  | not applicable |

If you are using dimensions, a column for each dimension will appear at the end of the template.

Things to keep in mind:

**The batch must balance**: the total must equal zero

**If you are using dimensions** : there should be one line per combination of GL account number, and the various dimension values.

**Import Data Sheet**
After you have finished preparing the spreadsheet, save and close the sheet.
On the batch list page, click 'Import Batch'. From the dialog, click on 'Import Data', then click OK:

![alt text](image-6.png)

Navigate to the folder where your take-on sheet was saved, and select it. When the import has completed, you will see the dialog :

![alt text](image-7.png)

Click OK to complete the process.

If errors occurred during the import, they will be recorded in the error log. This will typically include records with invalid account numbers or dimension codes.  Click on 'Review Errors' to display the errors:

![alt text](image-8.png)

Click on 'Edit Journal' to open the transactions. You can check or edit the entries. 

If you are happy with the batch (and it balances to zero), you can post the batch.


[**⬆️ Back to Top**](#general-opening-balances) &nbsp;&nbsp;&nbsp;&nbsp; [**🏠 Home**](/FastTrack-Support)