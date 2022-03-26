# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \

echo