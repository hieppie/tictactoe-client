# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

#!/bin/bash

curl "https://library-express-api.herokuapp.com/sign-in" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo