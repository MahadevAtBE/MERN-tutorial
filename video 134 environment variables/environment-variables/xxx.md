# invironment variables
nvironment variables are the credentiols like api key that we cant public or push ot github. so we make a variable of it to parse from other component like

## .env

it holda the invironment variables on production base. companis keys.
1. ID=companis_id
    * privet inv
2. NEXT_PUBLIC_PASS=companis_password(public)
    * public inv

## .env.local
it holda the invironment variables on building base. my own keys.
* .env.local have the higher priority then .env

companis keys.
1. ID=my_id
    * privet inv
2. NEXT_PUBLIC_PASS=my_password(public)
    * public inv