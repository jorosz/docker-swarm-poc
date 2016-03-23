#!/bin/bash

NODES=2

if [ $HTTP_PROXY ]; then
	MAGIC_PROXY="--engine-env HTTP_PROXY=$HTTP_PROXY --engine-env HTTPS_PROXY=$HTTPS_PROXY --engine-env NO_PROXY=$NO_PROXY"
else
	unset MAGIC_PROXY
fi


docker-machine create -d virtualbox $MAGIC_PROXY swarm-consul
CONSUL_IP=$(docker-machine ip swarm-consul | sed -e 's/[[:space:]]*$//')
export NO_PROXY=$CONSUL_IP,$NO_PROXY
if [ "$MAGIC_PROXY" ]; then 
	# Also update magic proxy
	MAGIC_PROXY="--engine-env HTTP_PROXY=$HTTP_PROXY --engine-env HTTPS_PROXY=$HTTPS_PROXY --engine-env NO_PROXY=$NO_PROXY"
fi

eval $(docker-machine env swarm-consul)
docker run -d -p 8500:8500 --name "consul" --restart always progrium/consul -server -bootstrap
    	
# Script to create a local Swarm cluster with a master and a number of slaves
docker-machine create -d virtualbox\
	--swarm \
	--swarm-master \
	--swarm-discovery "consul://$CONSUL_IP:8500" \
	--engine-opt="cluster-store=consul://$CONSUL_IP:8500" \
	--engine-opt="cluster-advertise=eth1:2376" \
	$MAGIC_PROXY \
	swarm-master

for i in $(seq 1 $NODES); do
	docker-machine create -d virtualbox \
		--swarm	\
		--swarm-discovery "consul://$CONSUL_IP:8500" \
		--engine-opt="cluster-store=consul://$CONSUL_IP:8500" \
		--engine-opt="cluster-advertise=eth1:2376" \
		$MAGIC_PROXY \
		swarm-node-$i	
done
