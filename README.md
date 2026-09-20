# Doc-Portal

## Monorepo Architecture

The workspace is organized into four independent applications inside the `apps/` directory.

 
main_Proj/
├── package.json              # Master script runner & port coordinator
├── package-lock.json
├── README.md                 # Platform documentation
└── apps/
    ├── hub/                  # Main Public Atlas
    │                         # Vite + React Router + Tailwind
    ├── doctor-portal/        # Clinician Dashboard
    │                         # Vite + TanStack Router
    ├── patient-portal/       # Patient Care Portal
    │                         # Vite + TanStack Router
    └── admin-portal/         # Platform Administration
                              # Vite + TanStack Router
 

## Application Matrix

### Main Knowledge Hub

* **App Directory:** `apps/hub`
* **Port:** `5173`
* **Purpose:** Public educational atlas, pathology comparisons, research registry, and specialist directory.

### Doctor Portal

* **App Directory:** `apps/doctor-portal`
* **Port:** `8080`
* **Purpose:** Clinician workspace for monitoring patient trends, lab results, and appointments.

### Patient Portal

* **App Directory:** `apps/patient-portal`
* **Port:** `8081`
* **Purpose:** Personal health portal for tracking symptoms, appointments, and care plans.

### Admin Panel

* **App Directory:** `apps/admin-portal`
* **Port:** `8082`
* **Purpose:** Content management, portal analytics, and platform governance interface.

## Getting Started Locally

### Prerequisites

Make sure the following are installed:

* **Node.js:** `v18.0.0` or higher
* **npm:** `v9.0.0` or higher

Verify your installations:

  
node --version
npm --version
 

### 1. Clone the Repository

Navigate to the project directory:

cd main_Proj
 

### 2. Install Dependencies

Install the root-level orchestration dependencies:

npm install
 

### 3. Launch All Applications

Start all four applications concurrently:

  
npm run dev:all
 

### 4. Access the Applications

Once the development servers are running, open the corresponding URLs:

* **Public Knowledge Hub:** http://localhost:5173
* **Doctor Portal:** http://localhost:8080
* **Patient Portal:** http://localhost:8081
* **Admin Panel:** http://localhost:8082

## Available Monorepo Commands

All commands should be executed from the root `main_Proj/` directory.

* `npm run dev:all` — Launches all four portals simultaneously using `concurrently`.
* `npm run dev:hub` — Starts the Main Knowledge Hub on port `5173`.
* `npm run dev:doctor` — Starts the Doctor Portal on port `8080`.
* `npm run dev:patient` — Starts the Patient Portal on port `8081`.
* `npm run dev:admin` — Starts the Admin Panel on port `8082`.

### Individual Portal Development

If you only need to work on one application, launch it independently:

  
npm run dev:hub
 

  
npm run dev:doctor
 

  
npm run dev:patient
 

  
npm run dev:admin
 

## Project Structure

 
main_Proj/
├── package.json
├── package-lock.json
├── README.md
└── apps/
    ├── hub/
    │   ├── src/
    │   ├── public/
    │   ├── package.json
    │   └── ...
    │
    ├── doctor-portal/
    │   ├── src/
    │   ├── public/
    │   ├── package.json
    │   └── ...
    │
    ├── patient-portal/
    │   ├── src/
    │   ├── public/
    │   ├── package.json
    │   └── ...
    │
    └── admin-portal/
        ├── src/
        ├── public/
        ├── package.json
        └── ...


## Quick Start

For the fastest setup:


cd main_Proj
npm install
npm run dev:all

Then access:


Knowledge Hub   → http://localhost:5173
Doctor Portal   → http://localhost:8080
Patient Portal  → http://localhost:8081
Admin Panel     → http://localhost:8082


## License

This project is currently intended for development and demonstration purposes.
