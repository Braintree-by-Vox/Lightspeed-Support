# Lightspeed Questionnaire User Guide

## Overview

The Lightspeed Questionnaire is your starting point for configuring Business Central. This comprehensive setup wizard helps you define your business requirements and automatically configures the system based on your responses.

## Questionnaire Sections

### 🧮 Financial Setup

This section configures your core financial settings:

#### Financial Year End
- **Question:** "What month does your financial year end?"
- **Purpose:** Defines when your financial year closes
- **Options:** Select from January through December
- **Impact:** Sets up accounting periods and year-end processes
- **Required:** Yes - you cannot proceed without selecting this

#### Number of Financial Years
- **Question:** "How many financial years would you like to create?"
- **Default:** 3 years
- **Purpose:** Creates accounting periods automatically
- **Details:** 
  - System creates 1 past year + current year automatically
  - Enter 3 to add 1 future year
  - Enter 4 to add 2 future years, etc.
- **Recommendation:** Start with 3 years (standard business practice)

#### Number of Bank Accounts
- **Question:** "How many bank accounts do you operate?"
- **Default:** 1 bank account
- **Purpose:** Sets up banking subledger
- **Impact:** 
  - Creates bank account records
  - Links to GL control accounts
  - Configures bank reconciliation processes
- **Range:** Typically 1-5 for most businesses

### 📦 Inventory and Warehousing Setup

This section determines your inventory management approach:

#### Inventory Module
- **Question:** "Do you buy and sell inventory?"
- **Options:** Yes/No
- **Impact:** 
  - Enables/disables inventory functionality
  - Affects purchasing and sales processes
  - Controls item master data requirements

#### Number of Locations
- **Question:** "How many inventory warehouses do you operate?"
- **Default:** 1 location
- **Purpose:** Defines physical storage locations
- **Important Notes:**
  - Not compulsory to use locations
  - If using 1+ locations, must specify on every inventory transaction
  - Affects inventory reporting and tracking
- **Recommendation:** Use locations only if you have multiple physical warehouses

#### Advanced Warehousing
- **Question:** "Do you want to use Advanced Warehousing?"
- **Purpose:** Enables sophisticated warehouse operations
- **Features Enabled:**
  - Pick processes
  - Put-away processes
  - Bin management
  - Directed put-away and pick
- **Consideration:** Only enable if you need complex warehouse workflows

#### Over-receiving Threshold
- **Question:** "What percentage of over-delivery will you allow?"
- **Purpose:** Controls purchase order receiving tolerance
- **Example:** 5% allows receiving 105 units on a 100-unit order
- **Typical Range:** 0-10%

### 🏭 Advanced Modules

Optional modules based on your business type:

#### Manufacturing
- **Question:** "Do you manufacture or assemble products?"
- **Impact:** Enables manufacturing functionality including:
  - Production orders
  - Bills of materials (BOMs)
  - Work centers and machine centers
  - Routing processes
  - Production planning

#### Projects (Jobs)
- **Question:** "Do you run Projects?"
- **Impact:** Enables project management including:
  - Job costing
  - Time and material tracking
  - Project budgeting
  - Resource allocation
  - Project invoicing

### ⚙️ Settings

#### Button Colour
- **Purpose:** Customizes the visual appearance of Lightspeed interface elements
- **Options:** Various color themes available

#### Validation Templates
- **Purpose:** Access data validation configuration
- **Action:** Click to open Data Validation Template List
- **Use:** Configure business rules and data quality checks

## How the Questionnaire Works

### Behind the Scenes
When you complete the questionnaire, the system:

1. **Saves Financial Settings** to Finance Setup Area (Code: 02000)
2. **Configures Inventory** in Inventory Setup Area (Code: 05000)
3. **Sets Warehousing** in Warehousing Setup Area (Code: 07000)
4. **Applies Purchase Settings** to Purchase Setup Area (Code: 04000)
5. **Enables Manufacturing** in Manufacturing Setup Area (Code: 08000)
6. **Activates Projects** in Jobs Setup Area (Code: 09000)

### Automatic Defaults
The system provides sensible defaults:
- 3 financial years
- 1 bank account
- 15% VAT rate
- 1 location
- 1 shift (for manufacturing)

## Best Practices

### Before Starting
- ✅ Review your business requirements
- ✅ Consult with your accounting team
- ✅ Understand your warehouse operations
- ✅ Know your financial year-end date

### During Setup
- ✅ Answer all questions accurately
- ✅ Consider future growth when setting quantities
- ✅ Don't enable advanced features unless needed
- ✅ Use conservative estimates initially

### After Completion
- ✅ Review the setup areas that were configured
- ✅ Test key processes with sample data
- ✅ Adjust settings as needed through individual setup pages
- ✅ Train users on enabled modules

## Validation and Error Prevention

### Required Fields
- **Financial Year End:** Must be selected before closing
- The system will prevent you from proceeding without this critical information

### Data Quality
- Access the Data Quality Summary through the "Data Quality" action
- Review any validation issues before going live

## Support and Next Steps

### After Questionnaire Completion
1. **Review Setup Areas:** Check individual module configurations
2. **Run Setup Validation:** Use the data quality tools
3. **Test Key Processes:** Try sample transactions
4. **User Training:** Ensure team understands enabled features

### Getting Help
- Use the built-in tooltips for detailed field explanations
- Access the Technical Documentation for advanced configuration
- Contact your Business Central partner for complex requirements

## Troubleshooting

### Common Issues
- **Can't close questionnaire:** Ensure Financial Year End is selected
- **Too many locations:** Remember locations are required on all inventory transactions
- **Advanced features overwhelming:** Start simple, add complexity later

### Making Changes
- You can modify most settings later through individual setup pages
- Some changes may require reconfiguration of related areas
- Test changes in a development environment first

---

*This guide helps you configure Lightspeed for Business Central efficiently. Take your time with each section to ensure accurate setup that matches your business needs.*