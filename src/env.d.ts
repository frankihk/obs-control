/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OBS_WEBSOCKET_URL: string;
  readonly VITE_OBS_WEBSOCKET_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export {};
