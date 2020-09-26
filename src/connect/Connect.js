import React, { useState } from 'react';

const Connect = () => {
  const [ipAddress, setIpAddress] = useState('')

  const connectNano = () => {
    fetch(`http://${ipAddress}:16021/api/v1/new`, {
      method: 'POST',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(console.log())

  }

  return (
    <>
      <div>
        <p>
          Input IP Address of Nanoleaf:
        </p>
        <input type='text' id='ip' name='ipAddress' value={ipAddress} onChange={(e) => setIpAddress(e.target.value)}>
        </input>
        <p>
          On the Nanoleaf controller, hold the on-off button for 5-7 seconds until the LED starts flashing in a pattern. Once that is done press the button
        </p>
        <button onClick={() => connectNano()}>
          Connect to Nanoleaf
        </button>
      </div>
    </>
  );
}

export default Connect;
