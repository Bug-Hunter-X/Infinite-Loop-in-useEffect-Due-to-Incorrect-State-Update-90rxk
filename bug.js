useEffect(() => {
  // Incorrect logic to update state
  setState(prevState => prevState + 1);
}, []);