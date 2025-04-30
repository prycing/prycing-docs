---
sidebar_position: 1
---

# Channable Data Import

This guide will walk you through the process of importing your Prycing data into Channable.

## Prerequisites

- A Prycing account with access to the Data Communication page
- A Channable account with access to the Setup section

## Import Steps

### 1. Get Your Prycing XML Feed URL

1. Log in to Prycing at [https://retail.prycing.app/login](https://retail.prycing.app/login)
2. Navigate to "Data communication"
3. Copy the XML link under "Prycing data (For external programs)" ![](/img/Channable_step2.svg)

### 2. Configure Channable Import

1. Log in to your Channable account
2. Go to "Setup" and click "Add feed" ![](/img/Channable_step3.svg)
3. Select "XML" in the import setup ![](/img/Channable_step4.svg)
4. Enter a descriptive name for your import ![](/img/Channable_step5.svg)
5. Paste your Prycing XML URL in the "XML file url" field
   - Leave authentication set to "No authentication" ![](/img/Channable_step6.svg)
6. Set encoding to "Automatically detect" and click "Save" ![](/img/Channable_step7.svg)

### 3. Configure Import Settings

1. Review the field mapping (usually pre-configured correctly) ![](/img/Channable_step8.svg)
2. Select "Combine on field" and choose your unique product identifier
   - This prevents duplicate product imports ![](/img/Channable_step9.svg)
3. Click "Save & Import" to complete the setup ![](/img/Channable_step10.svg)

Your Prycing data will now be imported into Channable. The import process may take some time depending on your product catalog size.

