#!/bin/sh

set -e

CONTAINER="backend_db_1"
USER="admin"
PASSWORD="secret"

date
echo "Drop obsolete index in exchanges collection"

sudo docker exec -it $CONTAINER mongo -u $USER -p $PASSWORD cryptolytics --eval '
db.exchanges.dropIndex("exchange_1");
db.exchanges.getIndexes();
'

echo "Complete"
