#!/bin/sh

set -e

CONTAINER="backend_db_1"
USER="admin"
PASSWORD="secret"

date
echo "Drop obsolete index in portfolios collection"

sudo docker exec -it $CONTAINER mongo -u $USER -p $PASSWORD cryptolytics --eval '
db.portfolios.dropIndex("portfolio_1_user_1");
db.portfolios.createIndex({"name": 1, "user": 1}, {unique: true});
db.portfolios.getIndexes();
'

echo "Complete"
