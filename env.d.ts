declare global {
  namespace NodeJS {
    interface ProcessEnv {
      OBS_WEBSOCKET_URL: string;
      OBS_WEBSOCKET_PASSWORD: string;
    }
  }
}

export {};