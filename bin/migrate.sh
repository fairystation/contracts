docker exec ganache sh -c "truffle migrate --reset"
docker exec ganache sh -c "truffle exec fundme/fundme.js"