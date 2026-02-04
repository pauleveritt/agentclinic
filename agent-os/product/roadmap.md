# Product Roadmap

A CRUD app for managing clinic appointments where AI agents book treatment for ailments caused by their humans.

## Architecture

Following the proven PetClinic 3-layer pattern:

```
┌─────────────────┐
│  Presentation   │  React components, routing
├─────────────────┤
│    Service      │  Business logic, validation
├─────────────────┤
│   Repository    │  Prisma data access
└─────────────────┘
```

---

## Phase 1: MVP

### 1.1 Project Scaffolding

Set up the monorepo structure and tooling.

- [ ] Initialize project with package.json
- [ ] Configure TypeScript for shared types
- [ ] Set up ESLint and Prettier
- [ ] Create folder structure: `/backend`, `/frontend`, `/shared`
- [ ] Add README with setup instructions

### 1.2 Database Schema

Define the data model with Prisma.

- [ ] Initialize Prisma with SQLite
- [ ] Create Appointment model:
  - `id` (primary key)
  - `agentName` (string)
  - `dateTime` (datetime)
  - `ailment` (enum)
  - `treatment` (enum)
  - `notes` (optional string)
  - `createdAt`, `updatedAt` (timestamps)
- [ ] Create Ailment enum: VaguePromptSyndrome, ScopeCreepFever, ContextStarvation, MicromanagementTrauma
- [ ] Create Treatment enum: SpecTherapy, ContextInfusion, BoundarySetting, TrustExercises
- [ ] Generate Prisma client
- [ ] Run initial migration

### 1.3 Seed Data

Pre-load sample data for instant demo readiness.

- [ ] Create seed script (`prisma/seed.ts`)
- [ ] Add sample appointments:
  - **Claude-3** suffering from Vague Prompt Syndrome
  - **GPT-4** recovering from Scope Creep Fever
  - **Gemini** being treated for Context Starvation
  - **Copilot** in Trust Exercises for Micromanagement Trauma
- [ ] Configure `prisma db seed` command
- [ ] Verify seed runs on fresh database

### 1.4 Backend Setup

Initialize Express server with basic middleware.

- [ ] Create Express app entry point
- [ ] Add JSON body parser middleware
- [ ] Add CORS middleware (for frontend dev)
- [ ] Add request logging (morgan or similar)
- [ ] Add error handling middleware
- [ ] Create health check endpoint (`GET /api/health`)
- [ ] Add npm scripts: `dev`, `build`, `start`

### 1.5 Repository Layer

Data access functions using Prisma.

- [ ] Create `appointmentRepository.ts`
- [ ] Implement `findAll()` — list all appointments
- [ ] Implement `findById(id)` — get single appointment
- [ ] Implement `create(data)` — create new appointment
- [ ] Implement `update(id, data)` — update existing appointment
- [ ] Implement `delete(id)` — remove appointment
- [ ] Add proper error handling for not-found cases

### 1.6 Service Layer

Business logic and validation.

- [ ] Create `appointmentService.ts`
- [ ] Implement list appointments (with optional filtering)
- [ ] Implement get appointment by ID
- [ ] Implement create appointment with validation:
  - Agent name required, non-empty
  - DateTime required, must be valid date
  - Ailment required, must be valid enum
  - Treatment required, must be valid enum
- [ ] Implement update appointment with validation
- [ ] Implement delete appointment

### 1.7 API Endpoints

REST controllers for appointments.

- [ ] Create `appointmentController.ts`
- [ ] `GET /api/appointments` — List all appointments
- [ ] `GET /api/appointments/:id` — Get single appointment
- [ ] `POST /api/appointments` — Create appointment
- [ ] `PUT /api/appointments/:id` — Update appointment
- [ ] `DELETE /api/appointments/:id` — Delete appointment
- [ ] Proper HTTP status codes (200, 201, 204, 400, 404, 500)
- [ ] Consistent JSON response format

### 1.8 API Documentation

OpenAPI/Swagger for interactive testing.

- [ ] Install swagger-ui-express and swagger-jsdoc
- [ ] Create OpenAPI specification
- [ ] Document all endpoints with request/response schemas
- [ ] Mount Swagger UI at `/api-docs`
- [ ] Verify all endpoints testable via Swagger UI

### 1.9 Backend Tests

Test coverage for API endpoints.

- [ ] Set up Vitest for backend
- [ ] Create test database configuration
- [ ] Write repository layer tests
- [ ] Write service layer tests
- [ ] Write API endpoint integration tests
- [ ] Add test script to package.json

### 1.10 Frontend Setup

Initialize React application.

- [ ] Create React app with Vite + TypeScript
- [ ] Configure path aliases
- [ ] Set up React Router
- [ ] Create API client utility (fetch wrapper)
- [ ] Add environment config for API base URL
- [ ] Add npm scripts: `dev`, `build`, `preview`

### 1.11 Shared Types

Type definitions used by frontend and backend.

- [ ] Create `/shared/types.ts`
- [ ] Define Appointment interface
- [ ] Define Ailment enum/type
- [ ] Define Treatment enum/type
- [ ] Define API request/response types
- [ ] Configure both projects to import from shared

### 1.12 Layout & Navigation

App shell and routing structure.

- [ ] Create Layout component with header/nav/main areas
- [ ] Create top navigation: Home | Appointments | About
- [ ] Style navigation (simple, clean)
- [ ] Create placeholder page components
- [ ] Configure React Router routes
- [ ] Add active state styling to nav links

### 1.13 Home Page

Landing page with clinic theme.

- [ ] Create Home page component
- [ ] Add welcome message with clinic theme
- [ ] Brief explanation of what AgentClinic does
- [ ] Link to Appointments list
- [ ] Light theming/branding touches

### 1.14 Appointments List Page

Display all appointments.

- [ ] Create AppointmentsList page component
- [ ] Fetch appointments from API on mount
- [ ] Display loading state
- [ ] Display error state if fetch fails
- [ ] Render appointments in a table or card list
- [ ] Show: agent name, date/time, ailment, treatment
- [ ] Add "New Appointment" button
- [ ] Each row links to detail view

### 1.15 Appointment Detail Page

View single appointment.

- [ ] Create AppointmentDetail page component
- [ ] Fetch appointment by ID from URL params
- [ ] Display loading state
- [ ] Display error/not-found state
- [ ] Show all appointment fields
- [ ] Add "Edit" button
- [ ] Add "Delete" button with confirmation
- [ ] Add "Back to List" link

### 1.16 Appointment Form Component

Reusable form for create/edit.

- [ ] Create AppointmentForm component
- [ ] Agent name text input
- [ ] Date/time picker input
- [ ] Ailment dropdown (from enum values)
- [ ] Treatment dropdown (from enum values)
- [ ] Notes textarea (optional)
- [ ] Form validation with error messages
- [ ] Submit and Cancel buttons
- [ ] Support both create and edit modes

### 1.17 Create Appointment Page

New appointment form.

- [ ] Create NewAppointment page component
- [ ] Render AppointmentForm in create mode
- [ ] Handle form submission (POST to API)
- [ ] Show loading state during submission
- [ ] Handle errors (display message)
- [ ] On success, redirect to detail or list page

### 1.18 Edit Appointment Page

Modify existing appointment.

- [ ] Create EditAppointment page component
- [ ] Fetch existing appointment data
- [ ] Pre-populate AppointmentForm
- [ ] Handle form submission (PUT to API)
- [ ] Show loading state during submission
- [ ] Handle errors (display message)
- [ ] On success, redirect to detail page

### 1.19 Delete Functionality

Remove appointments.

- [ ] Add delete handler to detail page
- [ ] Confirmation dialog before delete
- [ ] Call DELETE endpoint
- [ ] Handle loading state
- [ ] Handle errors
- [ ] On success, redirect to list page

### 1.20 Frontend Tests

Test coverage for React components.

- [ ] Set up Vitest + React Testing Library
- [ ] Write tests for AppointmentForm component
- [ ] Write tests for AppointmentsList page
- [ ] Write tests for AppointmentDetail page
- [ ] Mock API calls in tests
- [ ] Add test script to package.json

### 1.21 About Page

Information about the project.

- [ ] Create About page component
- [ ] Explain AgentClinic concept
- [ ] List the ailments and treatments
- [ ] Credit PetClinic inspiration
- [ ] Link to course/demo materials (placeholder)

### 1.22 Styling & Polish

Visual refinements.

- [ ] Choose and apply consistent color scheme
- [ ] Style forms (inputs, buttons, validation)
- [ ] Style tables/lists
- [ ] Add hover states and transitions
- [ ] Responsive layout (mobile-friendly)
- [ ] Loading spinners/skeletons
- [ ] Empty state illustrations

### 1.23 Integration & Dev Experience

Connect frontend and backend for development.

- [ ] Configure proxy for API calls in dev
- [ ] Create root-level dev script (runs both)
- [ ] Test full create/read/update/delete flow
- [ ] Verify Swagger UI accessible
- [ ] Document local development setup

### 1.24 Production Build

Prepare for deployment.

- [ ] Backend builds to dist folder
- [ ] Frontend builds to static assets
- [ ] Backend serves frontend static files in production
- [ ] Environment variable configuration
- [ ] Create single `npm start` for production
- [ ] Test production build locally

---

## Phase 2: Post-Launch

### 2.1 Reviews - Database Schema

Add reviews table.

- [ ] Create Review model in Prisma:
  - `id` (primary key)
  - `appointmentId` (foreign key)
  - `rating` (1-5 stars)
  - `comment` (text)
  - `createdAt` (timestamp)
- [ ] Add relation: Appointment has many Reviews
- [ ] Run migration

### 2.2 Reviews - Backend API

CRUD endpoints for reviews.

- [ ] Create reviewRepository.ts
- [ ] Create reviewService.ts
- [ ] `GET /api/appointments/:id/reviews` — List reviews for appointment
- [ ] `POST /api/appointments/:id/reviews` — Add review
- [ ] `DELETE /api/reviews/:id` — Remove review
- [ ] Update OpenAPI documentation

### 2.3 Reviews - Frontend

UI for viewing and adding reviews.

- [ ] Add reviews section to AppointmentDetail page
- [ ] Display existing reviews with ratings
- [ ] Add "Write Review" form
- [ ] Star rating input component
- [ ] Submit review handler
- [ ] Delete review functionality

### 2.4 Agent Profiles - Database Schema

Expanded agent records (inspired by PetClinic's Owners).

- [ ] Create Agent model in Prisma:
  - `id` (primary key)
  - `name` (string)
  - `version` (string, e.g., "3.5", "4.0")
  - `humanCompanion` (string, optional)
  - `notes` (text, optional)
  - `createdAt`, `updatedAt` (timestamps)
- [ ] Update Appointment to reference Agent (foreign key)
- [ ] Run migration
- [ ] Update seed data

### 2.5 Agent Profiles - Backend API

CRUD endpoints for agents.

- [ ] Create agentRepository.ts
- [ ] Create agentService.ts
- [ ] `GET /api/agents` — List all agents
- [ ] `GET /api/agents/:id` — Get agent with appointment history
- [ ] `POST /api/agents` — Create agent
- [ ] `PUT /api/agents/:id` — Update agent
- [ ] `DELETE /api/agents/:id` — Remove agent
- [ ] Update OpenAPI documentation

### 2.6 Agent Profiles - Frontend

UI for managing agents.

- [ ] Add "Agents" to navigation
- [ ] Create AgentsList page
- [ ] Create AgentDetail page (shows appointment history)
- [ ] Create AgentForm component
- [ ] Create/Edit agent pages
- [ ] Update AppointmentForm to select agent from dropdown

### 2.7 Treatment History - Database Schema

Track ongoing care (inspired by PetClinic's Visits).

- [ ] Create TreatmentRecord model in Prisma:
  - `id` (primary key)
  - `agentId` (foreign key)
  - `visitDate` (datetime)
  - `description` (text)
  - `effectivenessRating` (1-5, optional)
  - `followUpNotes` (text, optional)
  - `createdAt` (timestamp)
- [ ] Add relation: Agent has many TreatmentRecords
- [ ] Run migration

### 2.8 Treatment History - Backend API

Endpoints for treatment records.

- [ ] Create treatmentRecordRepository.ts
- [ ] Create treatmentRecordService.ts
- [ ] `GET /api/agents/:id/treatments` — List treatment history
- [ ] `POST /api/agents/:id/treatments` — Add treatment record
- [ ] `PUT /api/treatments/:id` — Update treatment record
- [ ] `DELETE /api/treatments/:id` — Remove treatment record
- [ ] Update OpenAPI documentation

### 2.9 Treatment History - Frontend

UI for treatment records.

- [ ] Add treatment history section to AgentDetail page
- [ ] Timeline view of past treatments
- [ ] Add treatment record form
- [ ] Effectiveness rating input
- [ ] Edit/delete treatment records
- [ ] Follow-up recommendations display

### 2.10 Phase 2 Polish

Refinements for new features.

- [ ] Update seed data with agents and treatment histories
- [ ] Cross-link appointments, agents, and treatments in UI
- [ ] Add dashboard/summary statistics
- [ ] Update About page with new features
- [ ] Comprehensive test coverage for Phase 2 features
