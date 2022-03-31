 
#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{}'

echo






# curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
#   --include \
#   --request POST \
#   --header "Authorization: Bearer ${TOKEN}" \
#   --data '{}'

# echo