# LLM Explore Workspace

This is a toy project, whose primary purpose is for me to compare dev workflows in VS Code + Cursor, relative to Emacs.

To do so, we'll build a small backend and frontend to compare the quality of different LLM interactions.

This workspace contains the following components:

- **Frontend**: A JavaScript-based front-end application.
- **Backend**: A FastAPI-based Python back-end application.

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd llm-explore
   ```

2. Follow the setup instructions for each component:

   - [Frontend README](./frontend/README.md)
   - [Backend README](./backend/README.md)

## Directory Structure

```plaintext
llm-explore/
├── frontend/   # Frontend application
├── backend/    # Backend application
├── .vscode/    # VS Code workspace settings
├── README.md   # Root workspace README
└── llm-explore.code-workspace
```

## Notes

- Ensure you have the necessary tools installed:
  - [Node.js](https://nodejs.org/) for the frontend.
  - [Poetry](https://python-poetry.org/) for the backend.
- This workspace is configured for use with VS Code.
