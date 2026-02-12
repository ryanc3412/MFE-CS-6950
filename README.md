# MFE (Module Federation)

Micro-frontend demo: a **shell** app that loads a remote **remote-a** component, which calls a **FastAPI** backend.

## Prerequisites

- **Node.js** 18+ and **pnpm**
- **Python** 3.8+ with `pip` (and `venv` for the API)

On Debian/Ubuntu, if `python3 -m venv` fails:

```bash
sudo apt install python3-venv python3-pip
```

## Get up and running

### 1. Install dependencies

From the repo root:

```bash
pnpm install
```

### 2. Start the API (backend)

In a terminal:

```bash
cd apps/api
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
pnpm dev
```

Leave this running (API will be at **http://localhost:3002**).

### 3. Start the frontend (shell + remote-a)

In a **second** terminal, from the repo root:

```bash
pnpm dev
```

This starts:

- **Shell** (host app) → http://localhost:3000  
- **Remote-a** (remote app) → http://localhost:3001  

### 4. Open the app

In your browser, go to **http://localhost:3000**. You should see the shell loading the remote-a page with a number input; enter a number, click **Square it**, and the result comes from the API.

---

**Summary:** Three things run — API (3002), remote-a (3001), shell (3000). You open the shell in the browser; it loads the remote-a UI and that UI calls the API.
