# Backend - FastAPI Application

This is the Python backend for the LLM Explore workspace, built with FastAPI.

## Setup Instructions

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies using Poetry:

   ```bash
   poetry env use python
   poetry install
   ```

3. Activate the virtual environment:

   ```bash
   eval $(poetry env activate)
   ```

4. Run the development server:

   ```bash
   uvicorn app.main:app --reload
   ```

5. Access the API documentation:

   - Swagger UI: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
   - ReDoc: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

## Project Structure

```plaintext
backend/
├── app/               # Application code
│   ├── __init__.py
│   ├── main.py        # FastAPI entry point
├── tests/             # Test cases
├── pyproject.toml     # Poetry configuration
└── README.md          # Backend-specific README
```

## Notes

- Use `pytest` to run tests:

  ```bash
  poetry run pytest
  ```

- Update dependencies as needed:

  ```bash
  poetry add <package-name>
  ```
