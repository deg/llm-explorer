from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


# Create the FastAPI app instance
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Allow the frontend's origin
    allow_credentials=True,  # Allow cookies and other credentials
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all HTTP headers
)


# Define a root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the toy REST server!"}


# Define a simple GET endpoint
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "query": q}


# Define a POST endpoint
@app.post("/items/")
def create_item(item: dict):
    return {"message": "Item created successfully!", "item": item}
