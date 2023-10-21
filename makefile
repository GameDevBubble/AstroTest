# Makefile for compiling code with yarn build and deploying it to a remote server

# Server configuration
SERVER_ADDRESS = root@88.214.56.31
REMOTE_PATH = /var/www/project-collaboration.de

# Yarn build command
YARN_BUILD = yarn build

# SSH command for deploying to the remote server
SSH_DEPLOY = scp -o "StrictHostKeyChecking no" -i "./zap-hosting.pri" -r dist/* $(SERVER_ADDRESS):$(REMOTE_PATH)

# Define the default target
all: build_and_deploy

# Target for building your code
build:
	$(YARN_BUILD)

# Target for deploying the code to the remote server
deploy:
	$(SSH_DEPLOY)

# Target for running both build and deploy sequentially
build_and_deploy: build deploy

.PHONY: build deploy build_and_deploy