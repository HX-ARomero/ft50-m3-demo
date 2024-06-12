import React, { useState } from 'react'

function useToogle(initialState = false) {
  const [value, setValue] = useState(initialState);
  const toogle = () => setValue(!value);

  return [value, toogle];
}

export default useToogle;