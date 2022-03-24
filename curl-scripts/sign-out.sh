# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

#!/bin/bash

curl "https://tic-tac-toe-api-production.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo