# DevOps Portfolio

![CI Pipeline](https://github.com/DiPti0704/DEVOPS-PORTFOLIO/actions/workflows/ci.yml/badge.svg)
![CD Pipeline](https://github.com/DiPti0704/DEVOPS-PORTFOLIO/actions/workflows/cd.yml/badge.svg)

A modern, high-performance **DevOps Portfolio** website built with **React**, **Vite**, and **Tailwind CSS**, designed to showcase DevOps projects, skills, and certifications.

This project is not just a static site; it is a **living demonstration of DevSecOps principles**, featuring a production-grade **CI/CD pipeline** that automates testing, security scanning, containerization, and deployment to Kubernetes.

---

## 🚀 Tech Stack

### Frontend & Application
- **React (Vite)**: Fast, modern frontend framework.
- **Tailwind CSS**: Utility-first styling for a responsive, premium design.
- **Nginx (Alpine)**: Lightweight, high-performance production web server.

### DevOps & Infrastructure
- **GitHub Actions**: Automated CI/CD workflows.
- **Docker**: Containerization for consistent environments.
- **Kubernetes (Kind/EC2)**: Orchestration for deployment and scaling.
- **Trivy / CodeQL**: Security scanning (SCA, SAST, Container Security).
- **ESLint**: Code quality and standardization.

---

## 🔄 CI/CD Pipeline Architecture

The pipeline follows a **Shift-Left Security** approach, ensuring every commit is verified before deployment.

### 1. Continuous Integration (CI)
Triggered on `push` to `main` or manual dispatch.

1.  **Checkout & Setup**: Fetches code and sets up Node.js.
2.  **Linting**: Runs `npm run lint` to enforce code quality.
3.  **SAST (CodeQL)**: Scans JavaScript code for security vulnerabilities.
4.  **SCA (Trivy FS)**: Scans filesystem and dependencies for known CVEs.
5.  **Docker Build**: Builds a multi-stage Docker image (Node build -> Nginx runtime).
6.  **Container Scan (Trivy)**: Scans the final Docker image for OS-level vulnerabilities.
7.  **Push**: Pushes the secure image to **DockerHub** if all checks pass.

### 2. Continuous Deployment (CD)
Triggered automatically after a successful CI run.

1.  **Verification**: Checks if the triggering CI workflow succeeded.
2.  **SSH Access**: Connects securely to the Deployment Server (EC2) using GitHub Secrets.
3.  **Deployment**:
    - **Docker Mode**: Pulls the latest image and restarts the Nginx container.
    - **Kubernetes Mode**: Applies K8s manifests (`deployment.yaml`, `service.yaml`) to the Kind cluster.

---

## 🛠️ Getting Started Locally

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Docker (optional, for container testing)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/DiPti0704/DEVOPS-PORTFOLIO.git
    cd DEVOPS-PORTFOLIO/devops-portfolio-new
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    Access the app at `http://localhost:5173`.

### Docker Build (Local)

To test the production build locally:

```bash
# Build the image
docker build -t devops-portfolio:local .

# Run the container
docker run -p 8080:80 devops-portfolio:local
```
Access the app at `http://localhost:8080`.

---

## 📂 Project Structure

```
DEVOPS-PORTFOLIO/
├── .github/workflows/    # CI/CD Workflows (ci.yml, cd.yml, cd-k8s.yml)
├── devops-portfolio-new/ # React Source Code
│   ├── public/           # Static assets
│   ├── src/              # Components, Pages, Styles
│   ├── Dockerfile        # Multi-stage Docker build
│   └── ...config files  
├── k8s/                  # Kubernetes Manifests (Deployment, Service)
├── proposal.md           # Project Proposal & Architecture Documentation
└── README.md             # Project Documentation
```

---

## 🛡️ Security

This project implements **DevSecOps** best practices:
- **No Root Containers**: Nginx runs as a non-root user (where applicable).
- **Minimal Images**: Uses `alpine` based images to reduce attack surface.
- **Automated Scanning**: Every build is scanned for vulnerabilities (High/Critical severity breaks the build).
- **Secret Management**: All sensitive credentials are managed via **GitHub Secrets**.

---

## 👤 Author

**Neel Dholiya**  
DevOps Engineer | React Developer  
[LinkedIn](#) | [Portfolio](#)
