# recorddb-app

This is my record db running in JavaScript and JSON.

## Processing

When I buy new CD's, DVD's or Blu-ray's and add them to my SQL Server RecordDB database I need to generate a new JSON file.

I have a program named **RecordDBToJSON** that generates a JSON file named ``artists-records.json`` from the updated RecordDB database.

This JSON file needs some manual work to be able to use it with the **recorddb-app**.

### artists-records.json header

```json
    [
     {
      "artistid": 528,
      "firstname": "Mick",
      "lastname": "Abrahams",
            ...
```

Needs to be changed to:

```JSON
'use strict';

const artistList = [
 {
    "artistid": 528,
    "firstname": "Mick",
    "lastname": "Abrahams",
    "name": "Mick Abrahams",
    ...
```

### artists-records.json footer

```bash
        ...
        "review": ""
       }
      ]
     }
    ]
```

Change to.

```bash
                    ...
        "review": ""
       }
      ]
     }
    ];
```

In this case just add the semi-colon.

Now, rename ``artists-records.json`` to ``record-data.js`` and drop the edited file in the root of the **record-db-app-netlify** JavaScript application.

Once you have completed the changes you can commit and push the changes to Github. Netlify will be alerted that the record-db-app project has been updated and will deploy the updated application.
