# OBS Remote Control Panel

A web-based remote control panel for OBS (Open Broadcaster Software) built with TypeScript, React, and OBS WebSocket protocol.

## Features

- Connect/disconnect to OBS remotely
- Start/stop video recording
- List available input sources
- Real-time control interface
- Environment variable configuration support

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd obs-control
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file in the project root:
```env
VITE_OBS_WEBSOCKET_URL=ws://your-obs-ip:4455
VITE_OBS_WEBSOCKET_PASSWORD=your-password
```

4. Start the development server:
```bash
npm run dev
```

## Configuration

### OBS WebSocket Setup

1. Open OBS Studio
2. Go to Tools > WebSocket Server Settings
3. Enable WebSocket server
4. Set your port (default: 4455)
5. Set a password
6. Update the `.env` file with these settings
