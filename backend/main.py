from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import FileResponse
from core import message


app = FastAPI()

origins = ["http://localhost:3000", "http://127.0.0.1:3000"]

app.include_router(message.server)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def get_startpage():
    return FileResponse("index.html")
