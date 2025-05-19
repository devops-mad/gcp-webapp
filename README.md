# gcp-webapp

Start MongoDB

Start the backend: node server.js

Open frontend/index.html in a browser


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
    └── nginx.conf  # Nginx config file
