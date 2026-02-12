# API (FastAPI)

Backend for the MFE demo. Exposes `GET /square?n=<number>` (returns `{ "number": n, "square": n² }`).

## Setup

Requires Python 3.8+ with `pip` (and optionally `venv`).

**If `python3 -m venv` fails** (e.g. on Debian/Ubuntu), install:

```bash
sudo apt install python3-venv python3-pip
```

Then:

```bash
cd apps/api
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Run

From `apps/api` with the venv activated:

```bash
pnpm dev
```

Or:

```bash
python -m uvicorn main:app --reload --port 3002
```

Server listens on **http://localhost:3002**. The remote-a app (and shell) call this URL by default; override with `NEXT_PUBLIC_API_URL` in remote-a if needed.
