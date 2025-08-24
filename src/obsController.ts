// src/obsController.ts
import OBSWebSocket from 'obs-websocket-js';

const obs = new OBSWebSocket();

export const connectOBS = async () => {
  try {
    await obs.connect(
      import.meta.env.VITE_OBS_WEBSOCKET_URL,
      import.meta.env.VITE_OBS_WEBSOCKET_PASSWORD
    );
    console.log('Connected to OBS');
  } catch (error) {
    console.error('Failed to connect:', error);
  }
};
export const disconnectOBS = async () => {
  try {
    await obs.disconnect();
    console.log('Disconnected from OBS');
  } catch (error) {
    console.error('Failed to disconnect:', error);
  }
};

export const startRecording = () => {

  obs.call('StartRecord');
};

export const stopRecording = () => {
  obs.call('StopRecord');
};


export const listInputs = async () => {
  try {
    const { inputs } = await obs.call('GetInputList');
    console.log('OBS Inputs:');
    inputs.forEach((input: any) => {
      console.log(`Name: ${input.inputName}, Type: ${input.inputKind}`);
    });
  } catch (error) {
    console.error('Error fetching inputs:', error);
  }
};