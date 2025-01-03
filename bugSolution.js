useEffect(() => {
  // Correct logic to update state
  setState(prevState => ({ ...prevState, count: prevState.count + 1 }));
}, []);