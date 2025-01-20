from fastapi import FastAPI

# Create the FastAPI app instance
app = FastAPI()

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
