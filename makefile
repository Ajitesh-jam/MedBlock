# Makefile to set up and run the project

# Variables for directories
BACKEND_DIR=backend
FRONTEND_DIR=frontend
SERVER_DIR=$(BACKEND_DIR)/server

# Target to initialize the application
initializeApp:
	@echo "Setting up the backend..."
	cd $(BACKEND_DIR) && npm install
	@echo "Starting the backend server..."
	cd $(SERVER_DIR) && node server.js &
	@echo "Setting up the frontend..."
	cd $(FRONTEND_DIR) && npm install
	@echo "Frontend setup completed."

# Target to run the project
run:
	@echo "Running the frontend..."
	cd $(FRONTEND_DIR) && npm run dev

# Target to run all (backend and frontend)
all: 
	@echo "Starting the backend server..."
	cd $(SERVER_DIR) && node server.js &
	@echo "Starting the frontend..."
	cd $(FRONTEND_DIR) && npm run dev

.PHONY: initializeApp run all
