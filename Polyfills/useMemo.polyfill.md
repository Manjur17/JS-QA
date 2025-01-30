
const useMemoCustom = (fn, dependencies) => {
  const inputRef = useRef({ value: null, dependencies: dependencies });
  // Check if dependencies have changed
  if (
    !inputRef.current.value ||
    inputRef.current.dependencies.some(
      (dependent, index) => dependent != inputRef.current.dependencies[index]
    )
  ) {
    inputRef.current.value = fn();
    inputRef.current.dependencies = dependencies;
  }

  return inputRef.current.value;
};