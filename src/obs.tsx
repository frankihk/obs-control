import React from 'react';
import { connectOBS, startRecording, stopRecording,disconnectOBS,listInputs } from './obsController';

const OBSControls: React.FC = () => (
  <div>
    <button onClick={connectOBS}>Connect to OBS</button>
    <button onClick={startRecording}>Start Recording</button>
    <button onClick={stopRecording}>Stop Recording</button>
    <button onClick={disconnectOBS}>Disconnect from OBS</button>
    <button onClick={listInputs}>listInputs</button>
  </div>
);
export default OBSControls;
