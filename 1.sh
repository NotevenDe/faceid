OWNER=$(dfx identity get-principal)
dfx deploy backend
dfx deploy frontend

dfx deploy icrc1  --argument "record { initArgs = record { totalSupply=10000000000000; decimals=8; fee=1000; name=opt \"faceid\"; symbol=opt \"faceid\"; metadata=null; owner=principal \"$OWNER\";}; upgradeArgs=null}"