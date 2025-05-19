# gcp-webapp

Start MongoDB

Start the backend: node server.js

Open frontend/index.html in a browser


# Initialization (One-time Setup)

Run these commands in your Google Cloud environment:

    export PROJECT_ID=your-project-id
    gcloud config set project $PROJECT_ID

    # Enable necessary APIs
    gcloud services enable compute.googleapis.com cloudbuild.googleapis.com containerregistry.googleapis.com

    # (Optional) Create a service account and assign necessary roles
    # gcloud iam service-accounts create cloudbuild-vm
    # gcloud projects add-iam-policy-binding $PROJECT_ID \
    #   --member="serviceAccount:cloudbuild-vm@$PROJECT_ID.iam.gserviceaccount.com" \
    #   --role="roles/compute.admin"

    # Create a Compute Engine VM manually or via Terraform with external IP
    # Example VM configuration: e2-medium, Ubuntu/Debian, allow HTTP/HTTPS

    # Enable IAP SSH (optional, if secure access needed)

# Steps (Manual Testing)

SSH into the Compute Engine VM and run the following steps:

    # Update the system
    sudo apt-get update

    # Install Docker
    sudo apt-get install -y docker.io
    sudo systemctl enable docker
    sudo systemctl start docker

    # Install Docker Compose
    sudo apt-get install -y docker-compose

    # Install Git
    sudo apt-get install -y git

    # Clone the GitHub Repository
    git clone https://github.com/<your-username>/<your-repo>.git
    cd gcp-webapp

    # Build and Run the Containers
    docker compose up --build -d

    # Verify running containers
    docker ps

    # Access the app using external IP in your browser

# CI/CD (Cloud Build Integration)

Coming soon: This section will describe how to configure a Cloud Build trigger that:

- SSHes into the VM using an injected private key
- Clones the repository
- Executes docker compose up --build -d

# Folder Structure

    gcp-webapp/
├── docker-compose.yml
├── .env
├── cloudbuild.yaml
├── backend/
│   ├── Dockerfile
│   ├── server.js           
│   ├── package.json
│   └── .env                # (optional, backend-specific variables)
└──  frontend/
    ├── Dockerfile
    ├── index.html
    └── nginx.conf          # acts as the reverse proxy

# Useful Commands

    # Stop all containers
    docker compose down

    # Rebuild and restart
    docker compose up --build -d

    # View logs
    docker compose logs -f



