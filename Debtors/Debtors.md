---
layout: default
title: Braintree Landed Cost 
description: Support and documentation for Braintree's Implementation acceleration for Microsoft Dynamics 365 Business Central
---

# Debtors / Sales and Receivables Module
Use this section to configure the Sales and Receivables module of Business Central.
Start by clicking on Debtors from the Home page:

![alt text](image.png) 

![alt text](image-2.png)

## Create setup and posting groups
This is a priority task, which must be done before other tasks are attempted.

![alt text](image-3.png)

Click on '▶️Run Setup' for the task 'Create Setup and posting groups'.
This will update the Sales and Receivables setup table with commonly used settings, and assign the document numbers.

It will also create Customer Posting Groups, which are used to connect the debtors subledger to the general ledger debtors control accounts.  
A posting group will be created for each general ledger account designated with the key account usage 'DEBTORS'.

To review the Sales and Receivables setup, click on '✅REVIEW' on the task 'Review Sales & Receivables Setup'. 

To review the posting groups, click on '✅REVIEW' on the task 'Review posting groups.

After running the setups, the first customer posting group will be inserted in the page header, in the 'Default Posting Group' field. This will be used to set the customer posting group when importing accounts from Excel. You can amend this if required.

## Salespeople
If your business keeps track of revenue for salespeople, you can import salespeople from an Excel sheet, or capture the salespeople directly into the system.

![alt text](image-4.png)

**Import from Excel**
- Click on '▶️Run Setup' for the task 'Create Salespeople'. 
- Click on 'Export Template' to create an empty Excel Sheet.
- Populate the sheet with the salespeople details, and save the file.
- Click on '▶️Run Setup' again, and this time, select 'Import Data'.

**Review and Edit Salespeople**  
Click on '✅REVIEW' for the task 'Import Salespeople'.
If you have imported Salespeople from Excel, the imported details will be displayed, and can be updated if required.

![alt text](image-1.png)

## Customer Master
Customer master data is loaded via an Excel template. Along with the customer details, a default delivery address and primary contact are created.

Before importing customers, select a default payment terms code and payment method code, and check that the default posting group is correct:

![alt text](image-6.png)

**Import from Excel**

![alt text](image-5.png)

- Click on '▶️Run Setup' for the task 'Import Customer master records'. 
- Click on 'Export Template' to create an empty Excel Sheet.
- Populate the sheet with the customer information and delivery details, and save the file.
- Click on '▶️Run Setup' again, and this time, select 'Import Data'.

The standard data template includes the following fields (click for details):

        - Customer number
        - Name
        - Address
        - Phone number
        - Email address
        - Credit limit
        - Co. Registration and VAT registration numbers,
        - Payment terms
        - Delivery address

When the import is complete, a dialog will be displayed:

![alt text](image-7.png)

>[How to review data errors](../General/ErrorCorrections.md)

**Review Customer Details**
To review and edit customer details, click on '✅REVIEW'. The Customer list will open. You can edit details on this page if required, or you can open the Customer Card by clicking on the Edit action in the menu bar.

![alt text](image-8.png)

**Review Delivery Addresses**
To review deilivery addresses, click on '✅REVIEW' on the 'Customer Shipping Addresses' task. You can now edit or add delivery addresses.

## Contacts
When you import customers, a primary contact will be created for each new customer. You can review them by clicking on '✅REVIEW' on the customer contacts task.  You can also load additional contacts, by following a similar process to the import for customers:

- Click  '▶️Run Setup'
- Export template
- Populate template
- Click '▶️Run Setup'
- Import from template

## Customer Price Groups
Use this step to set up customer-specific price groups (optional).

## Report Selections
If you want to change the default document layout selection for customer quotes, order confirmations, invoices, credit notes and statements, click on '✅REVIEW' on the 'Report Selections - Sales task'.

[**⬆️ Back to Top**](#debtors--sales-and-receivables-module) &nbsp;&nbsp;&nbsp;&nbsp; [**🏠 Home**](/FastTrack-Support)